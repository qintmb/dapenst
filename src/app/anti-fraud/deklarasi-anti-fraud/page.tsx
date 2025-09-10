'use client';

import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function DeklarasiAntiFraud() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Deklarasi Anti Fraud</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">
            Komitmen kami untuk menjunjung tinggi integritas dan mencegah segala bentuk kecurangan
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 shadow-md mb-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-primary">Deklarasi Anti Fraud Dana Pensiun Semen Tonasa</h2>
          <p className="text-gray-700 mb-4">
            Sebagai wujud komitmen Dana Pensiun Semen Tonasa dalam mencegah dan memberantas segala bentuk kecurangan, 
            kami dengan ini menyatakan dan berkomitmen untuk:
          </p>
          
          <div className="border-l-4 border-primary pl-4 my-6">
            <p className="italic text-gray-700 mb-2">
              "Kami, seluruh jajaran Pengurus, Dewan Pengawas, dan Karyawan Dana Pensiun Semen Tonasa, 
              berkomitmen untuk menerapkan nilai-nilai integritas, transparansi, dan akuntabilitas dalam 
              setiap aspek kegiatan operasional kami. Kami berjanji untuk mencegah, mendeteksi, dan melaporkan 
              segala bentuk kecurangan yang dapat merugikan Dana Pensiun Semen Tonasa dan para pemangku kepentingan."
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md mb-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-6 text-primary">Prinsip-Prinsip Anti Fraud</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Integritas</h3>
                <p className="text-gray-700 mb-4">
                  Kami berkomitmen untuk bertindak dengan kejujuran dan integritas dalam setiap aspek operasional kami. 
                  Kami tidak akan mentolerir segala bentuk kecurangan, korupsi, atau perilaku tidak etis lainnya.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Transparansi</h3>
                <p className="text-gray-700 mb-4">
                  Kami berkomitmen untuk menjalankan bisnis dengan transparansi penuh. Kami akan mengungkapkan 
                  informasi yang relevan dan akurat kepada pemangku kepentingan sesuai dengan peraturan yang berlaku.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Akuntabilitas</h3>
                <p className="text-gray-700 mb-4">
                  Kami bertanggung jawab atas tindakan kami dan akan memastikan bahwa setiap keputusan 
                  dan tindakan yang diambil dapat dipertanggungjawabkan kepada pemangku kepentingan.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Kepatuhan</h3>
                <p className="text-gray-700 mb-4">
                  Kami berkomitmen untuk mematuhi semua peraturan dan perundang-undangan yang berlaku, 
                  serta kebijakan dan prosedur internal yang telah ditetapkan.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">5</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Pelaporan</h3>
                <p className="text-gray-700 mb-4">
                  Kami mendorong pelaporan segala bentuk dugaan kecurangan dan akan melindungi pelapor 
                  dari segala bentuk pembalasan.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold">6</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Penegakan</h3>
                <p className="text-gray-700 mb-4">
                  Kami akan menindak tegas setiap bentuk kecurangan yang terbukti dengan sanksi yang sesuai, 
                  tanpa memandang jabatan atau posisi pelaku.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md mb-8 animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-6 text-primary">Komitmen Manajemen</h2>
          
          <p className="text-gray-700 mb-4">
            Manajemen Dana Pensiun Semen Tonasa berkomitmen untuk:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Menetapkan kebijakan dan prosedur anti fraud yang komprehensif</li>
            <li>Memastikan implementasi program anti fraud yang efektif</li>
            <li>Menyediakan sumber daya yang memadai untuk program anti fraud</li>
            <li>Melakukan evaluasi dan perbaikan berkelanjutan terhadap program anti fraud</li>
            <li>Memastikan adanya saluran pelaporan yang aman dan terjamin kerahasiaannya</li>
            <li>Melindungi pelapor dari segala bentuk pembalasan</li>
            <li>Menindaklanjuti setiap laporan dugaan kecurangan secara profesional</li>
          </ul>
        </div>

        <div className="bg-primary bg-opacity-5 rounded-lg p-8 text-center animate-on-scroll opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-primary">Penandatanganan Deklarasi</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Deklarasi Anti Fraud ini telah ditandatangani oleh seluruh jajaran Pengurus dan Dewan Pengawas 
            Dana Pensiun Semen Tonasa pada tanggal 10 Januari 2023 dan berlaku untuk seluruh karyawan dan mitra bisnis.
          </p>
          <div className="flex justify-center">
            <div className="relative w-64 h-32 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/favicon/favicon.svg" 
                  alt="Tanda Tangan Deklarasi" 
                  width={100} 
                  height={100} 
                  className="opacity-70" 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}