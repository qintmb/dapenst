'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { supabase } from '../../utils/supabase';
import type { Berita } from '../../utils/supabase';

export default function Berita() {
  const [beritaList, setBeritaList] = useState<Berita[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    // Add scroll animation for elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('berita')
          .select('*')
          .order('tanggal', { ascending: false });

        if (error) throw error;
        
        setBeritaList(data || []);
      } catch (err) {
        console.error('Error fetching berita:', err);
        setError('Gagal memuat berita');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBerita();
  }, []);

  // Jika tidak ada data berita, tampilkan dummy berita
  useEffect(() => {
    if (!isLoading && beritaList.length === 0 && !error) {
      // Dummy berita untuk tampilan awal
      const dummyBerita: Berita[] = [
        {
          id: 1,
          judul: 'Dana Pensiun Semen Tonasa Raih Penghargaan Kinerja Terbaik',
          narasi: 'Dana Pensiun Semen Tonasa berhasil meraih penghargaan sebagai Dana Pensiun dengan Kinerja Terbaik kategori Dana Pensiun Pemberi Kerja (DPPK) pada acara penghargaan industri dana pensiun nasional.',
          tanggal: '2023-11-15',
          foto_url: '/images/dummy-berita-1.jpg'
        },
        {
          id: 2,
          judul: 'Program Investasi Baru Diluncurkan untuk Peserta Dana Pensiun',
          narasi: 'Dana Pensiun Semen Tonasa meluncurkan program investasi baru yang menawarkan imbal hasil lebih tinggi dengan risiko terukur untuk meningkatkan kesejahteraan para pensiunan.',
          tanggal: '2023-10-22',
          foto_url: '/images/dummy-berita-2.jpg'
        },
        {
          id: 3,
          judul: 'Seminar Persiapan Pensiun untuk Karyawan Pra-Pensiun',
          narasi: 'Dana Pensiun Semen Tonasa mengadakan seminar persiapan pensiun untuk membantu karyawan yang akan memasuki masa pensiun dalam 1-2 tahun ke depan agar lebih siap menghadapi perubahan gaya hidup.',
          tanggal: '2023-09-18',
          foto_url: '/images/dummy-berita-3.jpg'
        },
        {
          id: 4,
          judul: 'Laporan Kinerja Investasi Semester I Tahun 2023',
          narasi: 'Dana Pensiun Semen Tonasa mencatat pertumbuhan investasi positif sebesar 8,2% pada semester pertama tahun 2023, melampaui target yang ditetapkan di awal tahun.',
          tanggal: '2023-08-05',
          foto_url: '/images/dummy-berita-4.jpg'
        },
        {
          id: 5,
          judul: 'Kerjasama Strategis dengan Lembaga Keuangan Internasional',
          narasi: 'Dana Pensiun Semen Tonasa menjalin kerjasama strategis dengan lembaga keuangan internasional untuk diversifikasi portofolio investasi dan peningkatan layanan kepada peserta.',
          tanggal: '2023-07-12',
          foto_url: '/images/dummy-berita-5.jpg'
        },
        {
          id: 6,
          judul: 'Implementasi Sistem Digital untuk Layanan Peserta',
          narasi: 'Dana Pensiun Semen Tonasa mengimplementasikan sistem digital baru untuk meningkatkan kualitas layanan dan kemudahan akses informasi bagi para peserta dana pensiun.',
          tanggal: '2023-06-28',
          foto_url: '/images/dummy-berita-6.jpg'
        }
      ];
      
      setBeritaList(dummyBerita);
    }
  }, [isLoading, beritaList.length, error]);

  // Fungsi untuk memformat tanggal ke format Indonesia
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = beritaList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(beritaList.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-primary to-red-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Berita & Artikel</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">Update terbaru dan informasi penting seputar dana pensiun</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentItems.map((berita, index) => (
                <div 
                  key={berita.id} 
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={berita.foto_url} 
                      alt={berita.judul}
                      fill
                      className="object-cover transition-all duration-500 transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-primary font-semibold">{formatDate(berita.tanggal)}</span>
                    <h3 className="text-gray-900 dark:text-white text-xl font-semibold my-2 line-clamp-2">{berita.judul}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {berita.narasi}
                    </p>
                    <Link 
                      href={`/berita/${berita.id}`} 
                      className="text-primary hover:text-red-700 font-semibold flex items-center transition-all duration-300 group"
                    >
                      Baca Selengkapnya
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 animate-on-scroll opacity-0">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button 
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 rounded transition-all duration-300 ${currentPage === number ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    {number}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button 
                    onClick={() => paginate(currentPage + 1)}
                    className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}