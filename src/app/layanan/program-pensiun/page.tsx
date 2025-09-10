'use client';

import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function ProgramPensiun() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Program Pensiun</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">Solusi pensiun terbaik untuk masa depan yang sejahtera</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 shadow-md mb-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-primary">Program Pensiun Dana Pensiun Semen Tonasa</h2>
          <p className="text-gray-700 mb-4">
            Program pensiun kami dirancang untuk memberikan keamanan finansial bagi para pensiunan dengan berbagai pilihan yang dapat disesuaikan dengan kebutuhan individu.
          </p>
          <p className="text-gray-700 mb-4">
            Dengan pengalaman lebih dari 20 tahun, kami menawarkan solusi pensiun yang komprehensif dan terpercaya untuk memastikan masa pensiun yang nyaman dan sejahtera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md animate-on-scroll opacity-0">
            <h3 className="text-xl font-semibold mb-3 text-primary">Program Pensiun Manfaat Pasti</h3>
            <p className="text-gray-700 mb-4">
              Program ini memberikan manfaat pensiun yang sudah ditentukan sejak awal berdasarkan formula tertentu, biasanya terkait dengan masa kerja dan penghasilan terakhir.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Kepastian jumlah manfaat pensiun</li>
              <li>Perhitungan berdasarkan masa kerja</li>
              <li>Jaminan pendapatan tetap setiap bulan</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md animate-on-scroll opacity-0 delay-100">
            <h3 className="text-xl font-semibold mb-3 text-primary">Program Pensiun Iuran Pasti</h3>
            <p className="text-gray-700 mb-4">
              Program ini menentukan besarnya iuran yang dibayarkan oleh pemberi kerja dan/atau peserta, sedangkan manfaat pensiun bergantung pada hasil pengembangan dana.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Fleksibilitas dalam pengembangan dana</li>
              <li>Transparansi pengelolaan investasi</li>
              <li>Potensi pertumbuhan dana yang lebih tinggi</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary bg-opacity-5 rounded-lg p-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">Keunggulan Program Pensiun Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Terpercaya</h3>
              <p className="text-gray-700">Dikelola oleh tim profesional dengan pengalaman lebih dari 20 tahun</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Menguntungkan</h3>
              <p className="text-gray-700">Strategi investasi yang optimal untuk hasil maksimal</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Aman</h3>
              <p className="text-gray-700">Perlindungan dana pensiun dengan jaminan keamanan tinggi</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}