'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { supabase } from '@/utils/supabase';
import { Berita } from '@/utils/supabase';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BeritaTerbaru() {
  const [beritaList, setBeritaList] = useState<Berita[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('berita')
          .select('*')
          .order('tanggal', { ascending: false })
          .limit(6);

        if (error) throw error;
        
        setBeritaList(data || []);
      } catch (err) {
        console.error('Error fetching berita:', err);
        setError('Gagal memuat berita terbaru');
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

  // Membagi berita menjadi grup dengan 3 berita per slide
  const beritaGroups = [];
  for (let i = 0; i < beritaList.length; i += 3) {
    beritaGroups.push(beritaList.slice(i, i + 3));
  }

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Berita Terbaru</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Berita Terbaru</h2>
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Berita Terbaru</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          {beritaGroups.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {group.map((berita) => (
                  <div key={berita.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="relative h-48">
                      <Image 
                        src={berita.foto_url} 
                        alt={berita.judul}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{formatDate(berita.tanggal)}</p>
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{berita.judul}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{berita.narasi}</p>
                      <Link href={`/berita/${berita.id}`} className="text-primary font-medium hover:text-red-700 transition-colors">
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="text-center mt-8">
          <Link href="/berita" className="inline-block bg-primary text-white font-medium py-2 px-6 rounded-md hover:bg-red-700 transition-colors">
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
}