'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import { supabase } from '@/utils/supabase';
import { Berita } from '@/utils/supabase';

export default function BeritaDetail() {
  const params = useParams();
  const router = useRouter();
  const [berita, setBerita] = useState<Berita | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedBerita, setRelatedBerita] = useState<Berita[]>([]);

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
      if (!params.id) return;
      
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('berita')
          .select('*')
          .eq('id', params.id)
          .single();

        if (error) throw error;
        
        setBerita(data);

        // Fetch related berita
        const { data: relatedData, error: relatedError } = await supabase
          .from('berita')
          .select('*')
          .neq('id', params.id)
          .order('tanggal', { ascending: false })
          .limit(3);

        if (relatedError) throw relatedError;
        
        setRelatedBerita(relatedData || []);
      } catch (err) {
        console.error('Error fetching berita:', err);
        setError('Gagal memuat berita');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBerita();
  }, [params.id]);

  // Jika tidak ada data berita, tampilkan dummy berita
  useEffect(() => {
    if (!isLoading && !berita && !error) {
      // Dummy berita untuk tampilan awal
      const dummyBerita: Berita = {
        id: Number(params.id),
        judul: 'Dana Pensiun Semen Tonasa Raih Penghargaan Kinerja Terbaik',
        narasi: 'Dana Pensiun Semen Tonasa berhasil meraih penghargaan sebagai Dana Pensiun dengan Kinerja Terbaik kategori Dana Pensiun Pemberi Kerja (DPPK) pada acara penghargaan industri dana pensiun nasional. Penghargaan ini merupakan bukti komitmen dan dedikasi seluruh jajaran manajemen dan karyawan dalam mengelola dana pensiun dengan profesional dan bertanggung jawab.\n\nDalam sambutannya, Direktur Utama Dana Pensiun Semen Tonasa menyampaikan bahwa penghargaan ini merupakan hasil kerja keras seluruh tim yang telah menunjukkan kinerja luar biasa dalam mengelola investasi dan memberikan layanan terbaik kepada para peserta dana pensiun. "Kami berkomitmen untuk terus meningkatkan kinerja dan layanan kami demi kesejahteraan para pensiunan," ujarnya.\n\nPenghargaan ini diberikan berdasarkan penilaian komprehensif terhadap berbagai aspek, termasuk kinerja investasi, tata kelola, manajemen risiko, dan layanan kepada peserta. Dana Pensiun Semen Tonasa berhasil mengungguli puluhan dana pensiun lainnya dalam kategori yang sama.',
        tanggal: '2023-11-15',
        foto_url: '/images/dummy-berita-1.jpg'
      };
      
      setBerita(dummyBerita);

      // Dummy related berita
      const dummyRelatedBerita: Berita[] = [
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
        }
      ];
      
      setRelatedBerita(dummyRelatedBerita);
    }
  }, [isLoading, berita, error, params.id]);

  // Fungsi untuk memformat tanggal ke format Indonesia
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  // Fungsi untuk memformat narasi dengan paragraf
  const formatNarasi = (narasi: string) => {
    return narasi.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph}</p>
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error || !berita) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 container mx-auto px-4 py-12">
          <div className="text-center py-12 text-red-500">{error || 'Berita tidak ditemukan'}</div>
          <div className="text-center">
            <Link href="/berita" className="inline-block bg-primary text-white font-medium py-2 px-6 rounded-md hover:bg-red-700 transition-colors">
              Kembali ke Daftar Berita
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-primary to-red-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeInUp">{berita.judul}</h1>
              <p className="text-lg animate-fadeInUp delay-100">{formatDate(berita.tanggal)}</p>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl animate-fadeInUp delay-200">
                <Image 
                  src={berita.foto_url} 
                  alt={berita.judul}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-container-grey dark:bg-gray-400 rounded-lg p-6 md:p-8 shadow-lg animate-on-scroll opacity-0">
            <div className="prose prose-lg max-w-none text-black text-secondary">
              {formatNarasi(berita.narasi)}
            </div>
          </article>

          {/* Share Buttons */}
          <div className="mt-8 flex items-center justify-center space-x-4 animate-on-scroll opacity-0">
            <span className="text-gray-600">Bagikan:</span>
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Related News */}
        {relatedBerita.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Berita Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBerita.map((item, index) => (
                <div 
                  key={item.id} 
                  className="bg-container-grey dark:bg-gray-400 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={item.foto_url} 
                      alt={item.judul}
                      fill
                      className="object-cover transition-all duration-500 transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-primary font-semibold">{formatDate(item.tanggal)}</span>
                    <h3 className="text-white text-xl font-semibold my-2 line-clamp-2">{item.judul}</h3>
                    <p className="text-black text-secondary mb-4 line-clamp-3">{item.narasi}</p>
                    <Link 
                      href={`/berita/${item.id}`} 
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
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/berita" className="inline-block bg-primary text-white font-medium py-2 px-6 rounded-md hover:bg-red-700 transition-colors">
            Kembali ke Daftar Berita
          </Link>
        </div>
      </main>
    </div>
  );
}