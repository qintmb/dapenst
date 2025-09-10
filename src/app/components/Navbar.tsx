'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };
    
    handleRouteChange();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil', href: '/profil' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Berita', href: '/berita' },
    { name: 'Informasi', href: '/informasi' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-2 shadow-sm' 
          : 'bg-primary py-4 shadow-none'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className={`flex items-center transition-all duration-300 ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-bold">D</span>
            </div>
          </div>
          <div>
            <span className="text-xl font-bold block">Dana Pensiun</span>
            <span className="text-sm block">Semen Tonasa</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === link.href
                  ? (isScrolled 
                      ? 'bg-gray-100 text-primary' 
                      : 'bg-white/20 text-white')
                  : (isScrolled 
                      ? 'text-gray-600 hover:text-primary hover:bg-gray-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}></span>
            <span className={`block h-0.5 bg-white transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 bg-white dark:bg-gray-900">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}