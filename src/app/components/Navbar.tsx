'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isLayananDropdownOpen, setIsLayananDropdownOpen] = useState(false);
  const [isAntiFraudDropdownOpen, setIsAntiFraudDropdownOpen] = useState(false);
  const layananDropdownRef = useRef<HTMLDivElement>(null);
  const antiFraudDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (layananDropdownRef.current && !layananDropdownRef.current.contains(event.target as Node)) {
        setIsLayananDropdownOpen(false);
      }
      if (antiFraudDropdownRef.current && !antiFraudDropdownRef.current.contains(event.target as Node)) {
        setIsAntiFraudDropdownOpen(false);
      }
    };
    
    handleRouteChange();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleRouteChange);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleRouteChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil', href: '/profil' },
    { 
      name: 'Layanan', 
      href: '/layanan',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Program Pensiun', href: '/layanan/program-pensiun' },
        { name: 'Investasi', href: '/layanan/investasi' },
        { name: 'Konsultasi Keuangan', href: '/layanan/konsultasi-keuangan' },
      ] 
    },
    { name: 'Berita', href: '/berita' },
    { name: 'Informasi', href: '/informasi' },
    { 
      name: 'Anti Fraud', 
      href: '/anti-fraud',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Deklarasi Anti Fraud', href: '/anti-fraud/deklarasi' },
        { name: 'Whistle Blowing System', href: '/anti-fraud/whistle-blowing' },
      ] 
    },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/50 backdrop-blur-sm py-2 shadow-sm' 
          : 'bg-white py-4 border-b border-grey-soft'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center transition-all duration-300 text-primary"
        >
          <div className="mr-2">
            <Image 
              src="/favicon/favicon.svg" 
              alt="Dana Pensiun Semen Tonasa Logo" 
              width={55} 
              height={55} 
              className="w-8 h-8" 
            />
          </div>
          <div>
            <span className="text-xl font-bold block">Dana Pensiun</span>
            <span className="text-sm block">Semen Tonasa</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative" ref={link.name === 'Layanan' ? layananDropdownRef : (link.name === 'Anti Fraud' ? antiFraudDropdownRef : undefined)}>
              {link.hasDropdown ? (
                <>
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center ${
                      activeLink.startsWith(link.href)
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      if (link.name === 'Layanan') {
                        setIsLayananDropdownOpen(!isLayananDropdownOpen);
                        setIsAntiFraudDropdownOpen(false);
                      } else if (link.name === 'Anti Fraud') {
                        setIsAntiFraudDropdownOpen(!isAntiFraudDropdownOpen);
                        setIsLayananDropdownOpen(false);
                      }
                    }}
                  >
                    {link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {link.name === 'Layanan' && isLayananDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              setActiveLink(item.href);
                              setIsLayananDropdownOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {link.name === 'Anti Fraud' && isAntiFraudDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              setActiveLink(item.href);
                              setIsAntiFraudDropdownOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    activeLink === link.href
                      ? 'bg-primary/10 text-primary font-bold' 
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`block h-0.5 bg-primary transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}></span>
            <span className={`block h-0.5 bg-primary transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block h-0.5 bg-primary transition-transform duration-300 ${
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
            <div key={link.name}>
              {link.hasDropdown ? (
                <>
                  <div
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeLink.startsWith(link.href)
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                  </div>
                  <div className="pl-6 mt-1 space-y-1">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
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
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </header>
  );
}