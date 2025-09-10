'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function AntiFraud() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Anti Fraud</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">
            Komitmen kami untuk integritas, transparansi, dan pencegahan kecurangan dalam setiap aspek operasional
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 shadow-md mb-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-primary">Program Anti Fraud Dana Pensiun Semen Tonasa</h2>
          <p className="text-gray-700 mb-4">
            Dana Pensiun Semen Tonasa berkomitmen untuk menerapkan praktik bisnis yang berintegritas tinggi dan bebas dari segala bentuk kecurangan. 
            Program Anti Fraud kami dirancang untuk mencegah, mendeteksi, dan menangani segala bentuk kecurangan yang dapat merugikan perusahaan, 
            peserta dana pensiun, dan pemangku kepentingan lainnya.
          </p>
          <p className="text-gray-700 mb-4">
            Kami menerapkan kebijakan zero tolerance terhadap segala bentuk kecurangan dan terus berupaya untuk memperkuat sistem pengendalian 
            internal kami untuk memastikan pengelolaan dana pensiun yang transparan dan akuntabel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md animate-on-scroll opacity-0">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Deklarasi Anti Fraud</h3>
            <p className="text-gray-700 mb-4">
              Kami telah menetapkan deklarasi anti fraud yang menjadi landasan bagi seluruh karyawan dan mitra bisnis kami dalam menjalankan aktivitas bisnis.
            </p>
            <Link href="/anti-fraud/deklarasi-anti-fraud" className="inline-block bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
              Selengkapnya
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md animate-on-scroll opacity-0 delay-100">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Whistle Blowing System</h3>
            <p className="text-gray-700 mb-4">
              Kami menyediakan sistem pelaporan pelanggaran yang aman dan terjamin kerahasiaannya bagi siapa saja yang ingin melaporkan dugaan kecurangan.
            </p>
            <Link href="/anti-fraud/whistle-blowing-system" className="inline-block bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
              Selengkapnya
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md mb-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-6 text-primary">Pilar Program Anti Fraud</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
              <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Pencegahan</h3>
              <p className="text-gray-700">
                Implementasi kebijakan, prosedur, dan kontrol untuk mencegah terjadinya kecurangan.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
              <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Deteksi</h3>
              <p className="text-gray-700">
                Sistem dan mekanisme untuk mendeteksi indikasi kecurangan secara dini.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
              <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Investigasi</h3>
              <p className="text-gray-700">
                Proses investigasi yang independen dan profesional terhadap dugaan kecurangan.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
              <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Perbaikan</h3>
              <p className="text-gray-700">
                Tindakan korektif dan perbaikan sistem untuk mencegah terulangnya kecurangan.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary bg-opacity-5 rounded-lg p-8 text-center animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-primary">Laporkan Dugaan Kecurangan</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Jika Anda memiliki informasi mengenai dugaan kecurangan yang terjadi di lingkungan Dana Pensiun Semen Tonasa, 
            segera laporkan melalui Whistle Blowing System kami.
          </p>
          <Link href="/anti-fraud/whistle-blowing-system" className="inline-block bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Laporkan Sekarang
          </Link>
        </div>
      </main>
    </div>
  );
}