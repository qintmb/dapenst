'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { supabaseAdmin } from '../../utils/supabase';
import { Berita } from '../../utils/supabase';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [beritaList, setBeritaList] = useState<Berita[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBerita, setCurrentBerita] = useState<Partial<Berita>>({
    judul: '',
    narasi: '',
    tanggal: new Date().toISOString().split('T')[0],
    foto_url: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const router = useRouter();

  useEffect(() => {
    // Periksa status autentikasi
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
      setIsAuthenticated(isLoggedIn);
      setIsLoading(false);
      
      if (!isLoggedIn) {
        router.push('/admin/login');
      } else {
        fetchBerita();
      }
    };
    
    checkAuth();
  }, [router]);

  const fetchBerita = async () => {
    try {
      const { data, error } = await supabaseAdmin
        .from('berita')
        .select('*')
        .order('tanggal', { ascending: false });

      if (error) throw error;
      
      setBeritaList(data || []);
    } catch (error) {
      console.error('Error fetching berita:', error);
      setError('Gagal mengambil data berita');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUsername');
    router.push('/admin/login');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentBerita(prev => ({ ...prev, [name]: value }));
  };

  const openModal = (berita?: Berita) => {
    if (berita) {
      setCurrentBerita(berita);
      setIsEditing(true);
      setImagePreview(berita.foto_url || null);
    } else {
      setCurrentBerita({
        judul: '',
        narasi: '',
        tanggal: new Date().toISOString().split('T')[0],
        foto_url: ''
      });
      setIsEditing(false);
      setImagePreview(null);
    }
    setImageFile(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    try {
      let foto_url = currentBerita.foto_url;

      // Upload gambar jika ada
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `berita/${fileName}`;

        const { error: uploadError } = await supabaseAdmin
          .storage
          .from('images')
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        const { data } = supabaseAdmin
          .storage
          .from('images')
          .getPublicUrl(filePath);

        foto_url = data.publicUrl;
      }

      if (isEditing && currentBerita.id) {
        // Update berita
        const { error } = await supabaseAdmin
          .from('berita')
          .update({
            judul: currentBerita.judul,
            narasi: currentBerita.narasi,
            tanggal: currentBerita.tanggal,
            foto_url
          })
          .eq('id', currentBerita.id);

        if (error) throw error;
        setSuccess('Berita berhasil diperbarui');
      } else {
        // Tambah berita baru
        const { error } = await supabaseAdmin
          .from('berita')
          .insert([
            {
              judul: currentBerita.judul,
              narasi: currentBerita.narasi,
              tanggal: currentBerita.tanggal,
              foto_url
            }
          ]);

        if (error) throw error;
        setSuccess('Berita berhasil ditambahkan');
      }

      // Refresh data berita
      fetchBerita();
      closeModal();
    } catch (error) {
      console.error('Error saving berita:', error);
      setError('Gagal menyimpan berita');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
      try {
        const { error } = await supabaseAdmin
          .from('berita')
          .delete()
          .eq('id', id);

        if (error) throw error;

        setSuccess('Berita berhasil dihapus');
        fetchBerita();
      } catch (error) {
        console.error('Error deleting berita:', error);
        setError('Gagal menghapus berita');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Router akan mengarahkan ke halaman login
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/favicon/favicon.svg" 
              alt="Dana Pensiun Semen Tonasa Logo" 
              width={40} 
              height={40} 
            />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Notification */}
        {error && (
          <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {success && (
          <div className="mb-4 bg-green-50 border-l-4 border-green-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">{success}</p>
              </div>
            </div>
          </div>
        )}

        {/* Berita Management */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Manajemen Berita</h3>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
            >
              Tambah Berita
            </button>
          </div>
          
          {/* Berita List */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Judul
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Foto
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {beritaList.length > 0 ? (
                  beritaList.map((berita) => (
                    <tr key={berita.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(berita.tanggal).toLocaleDateString('id-ID')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {berita.judul}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {berita.foto_url ? (
                          <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                            <Image 
                              src={berita.foto_url} 
                              alt={berita.judul} 
                              width={40} 
                              height={40} 
                              className="h-full w-full object-cover" 
                            />
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm">Tidak ada foto</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => openModal(berita)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(berita.id)}
                          className="text-red-600 hover:text-red-900">
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                      Belum ada berita. Klik "Tambah Berita" untuk membuat berita baru.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {isEditing ? 'Edit Berita' : 'Tambah Berita Baru'}
                      </h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
                            Tanggal
                          </label>
                          <input
                            type="date"
                            name="tanggal"
                            id="tanggal"
                            value={currentBerita.tanggal}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="judul" className="block text-sm font-medium text-gray-700">
                            Judul Berita
                          </label>
                          <input
                            type="text"
                            name="judul"
                            id="judul"
                            value={currentBerita.judul}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="narasi" className="block text-sm font-medium text-gray-700">
                            Narasi Berita
                          </label>
                          <textarea
                            name="narasi"
                            id="narasi"
                            rows={4}
                            value={currentBerita.narasi}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Foto
                          </label>
                          <div className="mt-1 flex items-center">
                            {imagePreview ? (
                              <div className="relative">
                                <img 
                                  src={imagePreview} 
                                  alt="Preview" 
                                  className="h-32 w-32 object-cover rounded-md" 
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setImagePreview(null);
                                    setImageFile(null);
                                    setCurrentBerita(prev => ({ ...prev, foto_url: '' }));
                                  }}
                                  className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1"
                                >
                                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            ) : (
                              <div className="flex justify-center items-center w-full">
                                <label className="flex flex-col items-center px-4 py-6 bg-white text-primary rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-primary hover:text-white">
                                  <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                  </svg>
                                  <span className="mt-2 text-base leading-normal">Pilih Foto</span>
                                  <input 
                                    type='file' 
                                    className="hidden" 
                                    accept="image/*"
                                    onChange={handleImageChange}
                                  />
                                </label>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {isEditing ? 'Simpan Perubahan' : 'Tambah Berita'}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}