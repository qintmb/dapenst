'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Slide data
  const slides = [
    {
      id: 1,
      title: 'Dana Pensiun Semen Tonasa',
      description: 'Menjamin kesejahteraan di masa pensiun Anda dengan layanan terpercaya',
      bgImage: '/img/Home-01.webp'
    },
    {
      id: 2,
      title: 'Layanan Terbaik',
      description: 'Komitmen kami untuk memberikan layanan terbaik dan profesional',
      bgImage: '/img/Home-02.webp'
    },
    {
      id: 3,
      title: 'Investasi Masa Depan',
      description: 'Kelola dana pensiun Anda dengan aman dan menguntungkan untuk masa depan cerah',
      bgImage: '/img/Home-03.webp'
    }
  ];

  const goToNextSlide = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  }, [slides.length]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  const goToPrevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative h-[500px] md:h-[650px] w-full overflow-hidden">
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
          {/* Using background image */}
          <div 
            className="w-full h-full flex items-center justify-center relative"
          >
            <div className="absolute inset-0 z-0">
              <Image 
                src={slide.bgImage}
                alt="Background"
                fill
                className="object-cover object-right md:object-center"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="flex flex-col items-start text-left max-w-4xl px-6 md:px-10 z-10 w-full">
              <div className="w-full text-left md:w-3/4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 animate-fadeInUp">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/90 mb-4 md:mb-8 animate-fadeInUp delay-100">
                  {slide.description}
                </p>
                <Link href="/layanan">
                <button className="bg-primary text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-medium hover:bg-primary/90 transition-all transform hover:scale-105 active:scale-95 shadow-md animate-fadeInUp delay-200 text-sm md:text-base">
                  Pelajari Lebih Lanjut
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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