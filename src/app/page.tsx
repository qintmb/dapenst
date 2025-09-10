'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Link from "next/link";

export default function Home() {
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
      
      {/* Slideshow Header */}
      <div className="pt-20"> {/* Added padding to account for fixed navbar */}
        <Slideshow />
      </div>
      
      {/* Hero Section with Animation */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll opacity-0">
              <h2 className="text-4xl font-bold mb-6 text-primary">Kami Adalah Koneksi Emosi Anda</h2>
              <p className="text-gray-700 text-lg mb-6">
                Menciptakan harmoni antara gedung, perkantoran, dan tenaga kerja yang sempurna untuk Anda.
                Dana Pensiun Semen Tonasa hadir untuk memastikan masa depan karyawan yang sejahtera.
              </p>
              <Link href="/profil">
                <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Pelajari Lebih Lanjut
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center animate-on-scroll opacity-0 delay-100">
              <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src="/favicon/favicon.svg" 
                    alt="Dana Pensiun Semen Tonasa" 
                    width={200} 
                    height={200} 
                    className="transform hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Services Section */}
        <section className="mb-16 py-12 bg-grey-soft bg-opacity-30 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-on-scroll opacity-0">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0 border-t-4 border-primary">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4 flex items-center justify-center">
                <Image src="/pen-to-square.svg" alt="Perencanaan Pensiun Icon" width={40} height={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Perencanaan Pensiun</h3>
              <p className="text-secondary">
                Kami membantu Anda merencanakan masa pensiun dengan memberikan solusi terbaik sesuai kebutuhan Anda.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0 delay-100 border-t-4 border-accent">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4 flex items-center justify-center">
                <Image src="/label-dollar-2.svg" alt="Investasi Aman Icon" width={40} height={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Investasi Aman</h3>
              <p className="text-secondary">
                Dana pensiun Anda diinvestasikan dengan prinsip keamanan dan keuntungan jangka panjang yang terjamin.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0 delay-200 border-t-4 border-pink-light">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4 flex items-center justify-center">
                <Image src="/refresh-user-1.svg" alt="Konsultasi Gratis" width={40} height={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Konsultasi Gratis</h3>
              <p className="text-secondary">
                Tim ahli kami siap memberikan konsultasi gratis untuk membantu Anda memilih program terbaik.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg p-8 md:p-12 animate-on-scroll opacity-0 shadow-lg border border-grey-soft">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4 text-primary">Tentang Dana Pensiun Semen Tonasa</h2>
                <p className="text-gray-700 mb-4">
                  Dana Pensiun Semen Tonasa berkomitmen untuk memberikan kesejahteraan finansial bagi para pensiunan dengan berbagai layanan dan program yang dirancang untuk memastikan masa pensiun yang aman dan nyaman.
                  Dengan pengalaman lebih dari 20 tahun, kami terus berinovasi untuk memenuhi kebutuhan para pensiunan dan memberikan solusi terbaik untuk perencanaan pensiun Anda.
                </p>
                <Link href="/profil">
                <button className="mt-6 bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-all duration-300 transform hover:scale-105">
                  Selengkapnya
                </button>
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/favicon/favicon.svg" 
                      alt="Dana Pensiun Semen Tonasa Logo" 
                      width={150} 
                      height={150} 
                      className="opacity-70" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 py-12 bg-primary bg-opacity-5 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-on-scroll opacity-0">Kepercayaan Terhadap Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-on-scroll opacity-0">
                <div className="text-white text-6xl font-bold mb-2">20+</div>
                <div className="text-white">Tahun Pengalaman</div>
              </div>
              <div className="animate-on-scroll opacity-0 delay-100">
                <div className="text-white text-6xl font-bold mb-2">1000+</div>
                <div className="text-white">Peserta Aktif</div>
              </div>
              <div className="animate-on-scroll opacity-0 delay-200">
                <div className="text-white text-6xl font-bold mb-2">100%</div>
                <div className="text-white">Kepuasan Pelanggan</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* News Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground animate-on-scroll opacity-0">Berita Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-container-grey dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0"
                style={{ animationDelay: `${item * 100}ms` }}
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                <div className="p-6">
                  <span className="text-sm text-primary font-semibold">12 Sep 2025</span>
                  <h3 className="text-xl font-semibold my-2 text-foreground">Judul Berita Terbaru Dana Pensiun</h3>
                  <p className="text-secondary mb-4">
                    Ringkasan singkat berita terbaru mengenai program dana pensiun dan perkembangan terkini...
                  </p>
                  <button className="text-primary hover:text-red-700 font-semibold flex items-center transition-all duration-300 group">
                    Baca Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
