'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Layanan() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Layanan Kami</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">Program dan layanan dana pensiun yang kami tawarkan untuk kesejahteraan Anda</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">Program Pensiun Pokok</h3>
              <p className="text-secondary mb-4">
                Program pensiun dasar yang memberikan penghasilan tetap setiap bulan setelah masa pensiun tiba.
              </p>
              <button className="text-primary hover:text-red-700 font-semibold flex items-center transition-all duration-300 group">
                Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0 delay-100">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">Program Pensiun Tambahan</h3>
              <p className="text-secondary mb-4">
                Program tambahan untuk meningkatkan penghasilan pensiun melalui kontribusi sukarela.
              </p>
              <button className="text-primary hover:text-red-700 font-semibold flex items-center transition-all duration-300 group">
                Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0 delay-200">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">Program Dana Pensiun Manfaat Awal</h3>
              <p className="text-secondary mb-4">
                Program yang memberikan manfaat pensiun sebelum usia pensiun normal tiba.
              </p>
              <button className="text-primary hover:text-red-700 font-semibold flex items-center transition-all duration-300 group">
                Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-soft-grey rounded-lg p-8 mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">Proses Pendaftaran</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Pengajuan', desc: 'Isi formulir pendaftaran dan lengkapi dokumen yang diperlukan' },
              { step: '02', title: 'Verifikasi', desc: 'Tim kami akan memverifikasi data dan dokumen Anda' },
              { step: '03', title: 'Persetujuan', desc: 'Setelah disetujui, Anda akan menjadi peserta aktif' },
              { step: '04', title: 'Aktif', desc: 'Mulai kontribusi dan nikmati manfaat program pensiun' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold transition-all duration-300 transform hover:scale-110">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-container-grey dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Syarat dan Ketentuan</h2>
          <div className="prose max-w-none text-foreground">
            <ul className="list-disc pl-5 space-y-2 text-secondary">
              <li>Peserta harus merupakan karyawan aktif PT Semen Tonasa</li>
              <li>Usia minimal peserta adalah 18 tahun</li>
              <li>Peserta wajib melakukan kontribusi bulanan sesuai program yang dipilih</li>
              <li>Peserta dapat mengajukan penarikan manfaat sesuai dengan ketentuan program</li>
              <li>Seluruh proses tunduk pada regulasi OJK dan ketentuan program</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}