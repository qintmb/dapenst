'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Berita() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Berita & Artikel</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">Update terbaru dan informasi penting seputar dana pensiun</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item} 
              className="bg-container-grey dark:bg-gray-400 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0"
              style={{ animationDelay: `${item * 50}ms` }}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 transition-all duration-500 transform hover:scale-105" />
              <div className="p-6">
                <span className="text-sm text-primary font-semibold">12 Sep 2025</span>
                <h3 className="text-white text-xl font-semibold my-2">Judul Berita Terbaru Dana Pensiun</h3>
                <p className="text-black text-secondary mb-4">
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

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 animate-on-scroll opacity-0">
          <button className="px-4 py-2 rounded bg-primary text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-105">1</button>
          <button className="px-4 py-2 rounded bg-container-grey dark:bg-gray-700 text-foreground hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">2</button>
          <button className="px-4 py-2 rounded bg-container-grey dark:bg-gray-700 text-foreground hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">3</button>
          <button className="px-4 py-2 rounded bg-container-grey dark:bg-gray-700 text-foreground hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}