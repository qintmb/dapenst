'use client';

import { useState, useEffect } from 'react';

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Sample images - in a real app, you would replace these with actual images
  const slides = [
    {
      id: 1,
      title: 'Selamat Datang di Dana Pensiun Semen Tonasa',
      description: 'Solusi pensiun terbaik untuk karyawan Semen Tonasa',
      image: '/placeholder-1.jpg'
    },
    {
      id: 2,
      title: 'Keamanan dan Kenyamanan Anda Adalah Prioritas Kami',
      description: 'Dana pensiun yang terpercaya dan terjamin',
      image: '/placeholder-2.jpg'
    },
    {
      id: 3,
      title: 'Layanan Terbaik untuk Masa Depan Anda',
      description: 'Konsultasi gratis dan pelayanan profesional',
      image: '/placeholder-3.jpg'
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const goToPrevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            index === currentSlide 
              ? `opacity-100 ${isAnimating ? 'scale-105' : 'scale-100'}` 
              : 'opacity-0 scale-110'
          }`}
        >
          {/* Placeholder for image - in a real app, you would use next/image */}
          <div 
            className="w-full h-full bg-gray-200 flex items-center justify-center"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="text-center text-white px-4 max-w-4xl transition-all duration-1000 ease-out transform translate-y-0 opacity-100">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeInUp">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-8 animate-fadeInUp delay-100">{slide.description}</p>
              <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fadeInUp delay-200">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsAnimating(false);
              }, 300);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}