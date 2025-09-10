'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Informasi() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Informasi</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">Informasi penting dan dokumen terkait program dana pensiun</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Links */}
          <div className="lg:col-span-1">
            <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Tautan Cepat</h2>
              <ul className="space-y-4">
                <li className="animate-on-scroll opacity-0">
                  <a href="#" className="flex items-center p-4 bg-soft-grey rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                    <div>
                      <h3 className="font-semibold text-foreground">Formulir Pendaftaran</h3>
                      <p className="text-sm text-secondary">Unduh formulir pendaftaran program pensiun</p>
                    </div>
                  </a>
                </li>
                <li className="animate-on-scroll opacity-0 delay-100">
                  <a href="#" className="flex items-center p-4 bg-soft-grey rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                    <div>
                      <h3 className="font-semibold text-foreground">Kalkulator Manfaat</h3>
                      <p className="text-sm text-secondary">Hitung estimasi manfaat pensiun Anda</p>
                    </div>
                  </a>
                </li>
                <li className="animate-on-scroll opacity-0 delay-200">
                  <a href="#" className="flex items-center p-4 bg-soft-grey rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                    <div>
                      <h3 className="font-semibold text-foreground">FAQ</h3>
                      <p className="text-sm text-secondary">Pertanyaan yang sering diajukan</p>
                    </div>
                  </a>
                </li>
                <li className="animate-on-scroll opacity-0 delay-300">
                  <a href="#" className="flex items-center p-4 bg-soft-grey rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                    <div>
                      <h3 className="font-semibold text-foreground">Regulasi</h3>
                      <p className="text-sm text-secondary">Dokumen regulasi terkait dana pensiun</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md p-6 animate-on-scroll opacity-0 delay-100">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Kontak Kami</h2>
              <div className="space-y-4">
                <div className="flex items-start animate-on-scroll opacity-0">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telepon</h3>
                    <p className="text-secondary">(0410) 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start animate-on-scroll opacity-0 delay-100">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-secondary">info@danapensiunsementonasa.co.id</p>
                  </div>
                </div>
                
                <div className="flex items-start animate-on-scroll opacity-0 delay-200">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Alamat</h3>
                    <p className="text-secondary">Jl. Raya Semen Tonasa, Pangkep, Sulawesi Selatan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Information Sections */}
          <div className="lg:col-span-2">
            <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Dokumen Penting</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item} 
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all duration-300 animate-on-scroll opacity-0"
                    style={{ animationDelay: `${item * 50}ms` }}
                  >
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                      <div>
                        <h3 className="font-semibold text-foreground">Dokumen Penting {item}</h3>
                        <p className="text-sm text-secondary">Deskripsi singkat dokumen</p>
                      </div>
                    </div>
                    <button className="mt-4 text-primary hover:text-red-700 font-semibold text-sm flex items-center transition-all duration-300 group">
                      Unduh
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md p-6 animate-on-scroll opacity-0 delay-100">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Pengumuman</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div 
                    key={item} 
                    className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0 animate-on-scroll opacity-0"
                    style={{ animationDelay: `${item * 100}ms` }}
                  >
                    <span className="text-sm text-primary font-semibold">12 Sep 2025</span>
                    <h3 className="text-xl font-semibold my-2 text-foreground">Judul Pengumuman {item}</h3>
                    <p className="text-secondary mb-4">
                      Ringkasan pengumuman penting yang perlu diketahui oleh seluruh peserta dana pensiun...
                    </p>
                    <button className="text-primary hover:text-red-700 font-semibold flex items-center transition-all duration-300 group">
                      Baca Selengkapnya
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}