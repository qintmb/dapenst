'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';

export default function Home() {
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
      
      {/* Slideshow Header */}
      <div className="pt-20"> {/* Added padding to account for fixed navbar */}
        <Slideshow />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground animate-on-scroll opacity-0">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-container-grey dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Perencanaan Pensiun</h3>
              <p className="text-secondary">
                Kami membantu Anda merencanakan masa pensiun dengan memberikan solusi terbaik sesuai kebutuhan Anda.
              </p>
            </div>
            
            <div className="bg-container-grey dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0 delay-100">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Investasi Aman</h3>
              <p className="text-secondary">
                Dana pensiun Anda diinvestasikan dengan prinsip keamanan dan keuntungan jangka panjang yang terjamin.
              </p>
            </div>
            
            <div className="bg-container-grey dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0 delay-200">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Konsultasi Gratis</h3>
              <p className="text-secondary">
                Tim ahli kami siap memberikan konsultasi gratis untuk membantu Anda memilih program terbaik.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-soft-grey rounded-lg p-8 md:p-12 animate-on-scroll opacity-0">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Tentang Dana Pensiun Semen Tonasa</h2>
                <p className="text-secondary mb-4">
                  Dana Pensiun Semen Tonasa adalah lembaga pensiun yang berkomitmen memberikan pelayanan terbaik 
                  untuk karyawan PT Semen Tonasa. Kami hadir untuk memastikan masa depan karyawan yang sejahtera.
                </p>
                <p className="text-secondary">
                  Dengan pengalaman lebih dari 20 tahun, kami telah melayani ribuan karyawan dengan program pensiun 
                  yang terpercaya dan terjamin.
                </p>
                <button className="mt-6 bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-all duration-300 transform hover:scale-105">
                  Selengkapnya
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80 transition-all duration-500 transform hover:scale-105" />
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dana Pensiun<br />Semen Tonasa</h3>
              <p className="text-gray-400">
                Memberikan solusi pensiun terbaik untuk karyawan PT Semen Tonasa.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Tautan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Profil</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Layanan</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Berita</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Informasi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Jl. Raya Semen Tonasa, Pangkep</li>
                <li>Telp: (0410) 123456</li>
                <li>Email: info@danapensiunsementonasa.co.id</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dana Pensiun Semen Tonasa. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
