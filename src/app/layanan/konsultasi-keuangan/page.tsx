'use client';

import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function KonsultasiKeuangan() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Konsultasi Keuangan</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">Solusi perencanaan keuangan profesional untuk masa depan yang lebih baik</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 shadow-md mb-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-primary">Layanan Konsultasi Keuangan Dana Pensiun Semen Tonasa</h2>
          <p className="text-gray-700 mb-4">
            Dana Pensiun Semen Tonasa menyediakan layanan konsultasi keuangan komprehensif untuk membantu Anda merencanakan masa depan keuangan dengan lebih baik, terutama untuk persiapan pensiun.
          </p>
          <p className="text-gray-700 mb-4">
            Tim konsultan keuangan kami terdiri dari para profesional bersertifikasi yang akan membantu Anda membuat strategi keuangan yang sesuai dengan kebutuhan dan tujuan finansial Anda.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2 animate-on-scroll opacity-0">
            <h2 className="text-2xl font-bold mb-6 text-primary">Mengapa Memilih Layanan Konsultasi Kami?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Konsultan Berpengalaman</h3>
                  <p className="text-gray-700">Tim konsultan kami memiliki pengalaman lebih dari 15 tahun dalam industri keuangan dan pensiun.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Solusi Personal</h3>
                  <p className="text-gray-700">Kami menyediakan solusi yang disesuaikan dengan kebutuhan dan tujuan finansial pribadi Anda.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Pendekatan Holistik</h3>
                  <p className="text-gray-700">Kami mempertimbangkan semua aspek keuangan Anda untuk membuat rencana yang komprehensif.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Transparansi Biaya</h3>
                  <p className="text-gray-700">Kami menerapkan struktur biaya yang transparan tanpa biaya tersembunyi.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 animate-on-scroll opacity-0 delay-100">
            <div className="bg-gray-100 rounded-lg p-6 h-full flex items-center justify-center">
              <div className="relative w-full h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src="/favicon/favicon.svg" 
                    alt="Konsultasi Keuangan" 
                    width={200} 
                    height={200} 
                    className="opacity-70" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-primary text-center animate-on-scroll opacity-0">Layanan Konsultasi Kami</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md animate-on-scroll opacity-0">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Perencanaan Pensiun</h3>
            <p className="text-gray-700 mb-4">
              Kami membantu Anda merencanakan masa pensiun yang nyaman dengan strategi keuangan yang tepat.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Analisis kebutuhan dana pensiun</li>
              <li>Strategi akumulasi aset</li>
              <li>Perencanaan distribusi dana pensiun</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md animate-on-scroll opacity-0 delay-100">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Manajemen Investasi</h3>
            <p className="text-gray-700 mb-4">
              Kami memberikan saran investasi yang sesuai dengan profil risiko dan tujuan keuangan Anda.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Analisis profil risiko</li>
              <li>Diversifikasi portofolio</li>
              <li>Pemantauan dan evaluasi kinerja</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md animate-on-scroll opacity-0 delay-200">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Perencanaan Keuangan Keluarga</h3>
            <p className="text-gray-700 mb-4">
              Kami membantu Anda merencanakan keuangan keluarga untuk mencapai tujuan jangka pendek dan jangka panjang.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Perencanaan pendidikan anak</li>
              <li>Proteksi asuransi keluarga</li>
              <li>Perencanaan warisan</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary bg-opacity-5 rounded-lg p-8 text-center animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-primary">Mulai Konsultasi Keuangan Anda Sekarang</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Hubungi kami untuk membuat janji konsultasi dengan tim ahli keuangan kami dan mulai merencanakan masa depan keuangan Anda yang lebih baik.
          </p>
          <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Jadwalkan Konsultasi
          </button>
        </div>
      </main>
    </div>
  );
}