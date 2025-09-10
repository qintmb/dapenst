'use client';

import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function Investasi() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Investasi</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">Solusi investasi terbaik untuk pertumbuhan dana pensiun Anda</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 shadow-md mb-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-primary">Strategi Investasi Dana Pensiun Semen Tonasa</h2>
          <p className="text-gray-700 mb-4">
            Dana Pensiun Semen Tonasa mengelola dana pensiun dengan strategi investasi yang prudent dan menguntungkan untuk memastikan pertumbuhan dana yang optimal bagi para peserta.
          </p>
          <p className="text-gray-700 mb-4">
            Tim investasi kami terdiri dari para profesional berpengalaman yang selalu memantau perkembangan pasar dan menyesuaikan strategi investasi untuk memaksimalkan return dengan tingkat risiko yang terukur.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-primary text-center animate-on-scroll opacity-0">Portofolio Investasi Kami</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md animate-on-scroll opacity-0">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Properti</h3>
            <p className="text-gray-700 mb-4">
              Investasi pada properti komersial dan residensial premium yang memberikan pendapatan sewa yang stabil dan potensi apresiasi nilai jangka panjang.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Gedung perkantoran</li>
              <li>Pusat perbelanjaan</li>
              <li>Properti residensial</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md animate-on-scroll opacity-0 delay-100">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Pasar Modal</h3>
            <p className="text-gray-700 mb-4">
              Investasi pada instrumen pasar modal yang terdiversifikasi untuk mendapatkan pertumbuhan nilai investasi jangka panjang.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Saham blue chip</li>
              <li>Obligasi korporasi</li>
              <li>Reksa dana</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md animate-on-scroll opacity-0 delay-200">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Deposito & Obligasi</h3>
            <p className="text-gray-700 mb-4">
              Investasi pada instrumen pendapatan tetap untuk memberikan stabilitas dan keamanan pada portofolio investasi.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Deposito berjangka</li>
              <li>Obligasi pemerintah</li>
              <li>Surat berharga negara</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary bg-opacity-5 rounded-lg p-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">Keunggulan Investasi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Keamanan</h3>
              <p className="text-gray-700">Prioritas utama pada keamanan dana peserta</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pertumbuhan</h3>
              <p className="text-gray-700">Fokus pada pertumbuhan nilai investasi jangka panjang</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Diversifikasi</h3>
              <p className="text-gray-700">Portofolio yang terdiversifikasi untuk meminimalkan risiko</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparansi</h3>
              <p className="text-gray-700">Pelaporan kinerja investasi yang transparan dan akuntabel</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}