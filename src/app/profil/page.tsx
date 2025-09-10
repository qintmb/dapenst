'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Profil() {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-primary to-red-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Profil Perusahaan</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">Mengenal lebih dekat Dana Pensiun Semen Tonasa dan sejarah perjalanan kami</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-container-grey dark:bg-gray-300 rounded-lg shadow-md p-6 md:p-8 mb-12 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Sejarah Dana Pensiun Semen Tonasa</h2>
          <div className="prose max-w-none text-foreground">
            <p className="mb-4 animate-on-scroll opacity-0">
              Dana Pensiun Semen Tonasa didirikan pada 5 Januari 1989 sebagai bagian dari komitmen PT Semen Tonasa 
              terhadap kesejahteraan karyawan pensiun. Sesuai dengan Surat Nomor:S-016/MK.13/1989 yang menyesuaikan atas Undang-Undang Dana Pensiun dan Peraturan Pelaksananya.
              Sejak awal berdiri, kami telah berfokus pada pengelolaan 
              dana pensiun yang aman, transparan, dan menguntungkan bagi peserta.
            </p>
            <p className="mb-4 animate-on-scroll opacity-0 delay-100">
              Dengan dasar hukum berdasarkan Peraturan Pemerintah Nomor 46 Tahun 2003 tentang Dana Pensiun, 
              Dana Pensiun Semen Tonasa telah terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK) sebagai 
              lembaga dana pensiun yang sah dan terpercaya.
            </p>
            <p className="mb-4 animate-on-scroll opacity-0 delay-200">
              Seiring berjalannya waktu, kami terus berkembang dan meningkatkan kualitas layanan kami untuk 
              memenuhi kebutuhan peserta. Dengan tim profesional yang berpengalaman dan sistem manajemen yang 
              terintegrasi, kami berkomitmen memberikan pelayanan terbaik.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 animate-on-scroll opacity-0">
            <h3 className="text-white text-2xl font-bold mb-4 text-foreground">Visi & Misi</h3>
            <div className="space-y-4">
              <div className="animate-on-scroll opacity-0">
                <h4 className="font-semibold text-primary">Visi</h4>
                <p className="text-secondary">
                  Menjadi lembaga dana pensiun terpercaya yang memberikan kesejahteraan jangka panjang bagi peserta.
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 delay-100">
                <h4 className="font-semibold text-primary">Misi</h4>
                <ul className="list-disc pl-5 space-y-2 text-secondary">
                  <li>Menyelenggarakan program dana pensiun yang aman dan menguntungkan</li>
                  <li>Memberikan pelayanan prima kepada seluruh peserta</li>
                  <li>Meningkatkan kesejahteraan peserta pensiun dan keluarga</li>
                  <li>Mematuhi seluruh ketentuan hukum yang berlaku</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 animate-on-scroll opacity-0 delay-100">
            <h3 className="text-white text-2xl font-bold mb-4 text-foreground">Nilai-Nilai Perusahaan</h3>
            <div className="space-y-4">
              <div className="flex items-start animate-on-scroll opacity-0">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">T</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Transparansi</h4>
                  <p className="text-secondary">Kami menjunjung tinggi prinsip transparansi dalam pengelolaan dana pensiun.</p>
                </div>
              </div>
              <div className="flex items-start animate-on-scroll opacity-0 delay-100">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Amanah</h4>
                  <p className="text-secondary">Kepercayaan peserta adalah amanah yang kami jaga dengan ketat.</p>
                </div>
              </div>
              <div className="flex items-start animate-on-scroll opacity-0 delay-200">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">P</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Profesional</h4>
                  <p className="text-secondary">Tim kami terdiri dari profesional yang berkompeten dan berintegritas tinggi.</p>
                </div>
              </div>
              <div className="flex items-start animate-on-scroll opacity-0 delay-300">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">K</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Komitmen</h4>
                  <p className="text-secondary">Kami berkomitmen tinggi terhadap kesejahteraan peserta pensiun.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 animate-on-scroll opacity-0">
          <h2 className="text-white text-2xl font-bold mb-6 text-foreground">Struktur Organisasi</h2>
          <div className="flex justify-center py-8">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80 flex items-center justify-center transition-all duration-500 transform hover:scale-105">
              <span className="text-gray-500">Diagram Struktur Organisasi</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}