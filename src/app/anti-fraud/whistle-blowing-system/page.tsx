'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function WhistleBlowingSystem() {
  const [activeTab, setActiveTab] = useState('tentang');
  
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Whistle Blowing System</h1>
          <p className="text-xl max-w-3xl animate-fadeInUp delay-100">
            Sistem pelaporan pelanggaran yang aman dan terjamin kerahasiaannya
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-4 py-4">
            <button 
              onClick={() => setActiveTab('tentang')} 
              className={`px-4 py-2 font-medium rounded-md whitespace-nowrap transition-all ${activeTab === 'tentang' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Tentang WBS
            </button>
            <button 
              onClick={() => setActiveTab('mekanisme')} 
              className={`px-4 py-2 font-medium rounded-md whitespace-nowrap transition-all ${activeTab === 'mekanisme' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Mekanisme Pelaporan
            </button>
            <button 
              onClick={() => setActiveTab('perlindungan')} 
              className={`px-4 py-2 font-medium rounded-md whitespace-nowrap transition-all ${activeTab === 'perlindungan' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Perlindungan Pelapor
            </button>
            <button 
              onClick={() => setActiveTab('formulir')} 
              className={`px-4 py-2 font-medium rounded-md whitespace-nowrap transition-all ${activeTab === 'formulir' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Formulir Pelaporan
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Tentang WBS */}
        {activeTab === 'tentang' && (
          <div className="animate-fadeInUp">
            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Tentang Whistle Blowing System</h2>
              <p className="text-gray-700 mb-4">
                Whistle Blowing System (WBS) Dana Pensiun Semen Tonasa adalah sistem yang disediakan untuk memfasilitasi 
                pelaporan atas dugaan pelanggaran atau kecurangan yang terjadi di lingkungan Dana Pensiun Semen Tonasa. 
                Sistem ini dirancang untuk menjamin kerahasiaan identitas pelapor dan informasi yang dilaporkan.
              </p>
              <p className="text-gray-700 mb-4">
                WBS merupakan bagian integral dari program anti fraud Dana Pensiun Semen Tonasa dan menjadi salah satu 
                sarana utama dalam upaya pencegahan dan deteksi dini terhadap potensi kecurangan.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Tujuan Whistle Blowing System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Pencegahan Kecurangan</h3>
                  <p className="text-gray-700">
                    Mencegah terjadinya kecurangan dengan meningkatkan kesadaran akan adanya sistem pelaporan yang efektif.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Deteksi Dini</h3>
                  <p className="text-gray-700">
                    Mendeteksi secara dini adanya potensi kecurangan sehingga dapat segera ditindaklanjuti.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Perlindungan Aset</h3>
                  <p className="text-gray-700">
                    Melindungi aset dan reputasi Dana Pensiun Semen Tonasa dari kerugian akibat kecurangan.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Budaya Transparansi</h3>
                  <p className="text-gray-700">
                    Membangun budaya transparansi dan akuntabilitas dalam lingkungan kerja.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Jenis Pelanggaran yang Dapat Dilaporkan</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Korupsi</h3>
                    <p className="text-gray-700">Penyalahgunaan wewenang untuk keuntungan pribadi atau pihak lain.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Kecurangan</h3>
                    <p className="text-gray-700">Tindakan penipuan yang disengaja untuk memperoleh keuntungan secara tidak sah.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Pencurian</h3>
                    <p className="text-gray-700">Pengambilan aset perusahaan secara tidak sah.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Konflik Kepentingan</h3>
                    <p className="text-gray-700">Situasi di mana kepentingan pribadi bertentangan dengan kepentingan perusahaan.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Pelanggaran Etika</h3>
                    <p className="text-gray-700">Tindakan yang melanggar kode etik dan nilai-nilai perusahaan.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Mekanisme Pelaporan */}
        {activeTab === 'mekanisme' && (
          <div className="animate-fadeInUp">
            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Mekanisme Pelaporan</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Penyampaian Laporan</h3>
                    <p className="text-gray-700 mb-4">
                      Pelapor dapat menyampaikan laporan dugaan pelanggaran melalui saluran pelaporan yang tersedia:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Website: Melalui formulir pelaporan di halaman ini</li>
                      <li>Email: whistleblowing@danapensiunst.co.id</li>
                      <li>Surat: Kirim ke PO BOX 1234 Pangkep, Sulawesi Selatan (Dengan kode "WBS-DPST")</li>
                      <li>Telepon: 0800-1234-5678 (Hotline WBS)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Verifikasi Awal</h3>
                    <p className="text-gray-700 mb-4">
                      Tim WBS akan melakukan verifikasi awal terhadap laporan yang diterima untuk memastikan bahwa laporan tersebut:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Relevan dengan lingkup WBS</li>
                      <li>Memiliki informasi yang cukup untuk ditindaklanjuti</li>
                      <li>Disampaikan dengan itikad baik</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Investigasi</h3>
                    <p className="text-gray-700 mb-4">
                      Jika laporan dinyatakan valid pada tahap verifikasi awal, Tim Investigasi akan melakukan investigasi 
                      secara menyeluruh dan independen terhadap dugaan pelanggaran yang dilaporkan.
                    </p>
                    <p className="text-gray-700">
                      Proses investigasi dilakukan dengan prinsip kerahasiaan, objektivitas, dan profesionalisme.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Pelaporan Hasil Investigasi</h3>
                    <p className="text-gray-700 mb-4">
                      Hasil investigasi akan dilaporkan kepada Pengurus Dana Pensiun Semen Tonasa untuk diambil keputusan 
                      dan tindakan yang sesuai.
                    </p>
                    <p className="text-gray-700">
                      Jika dugaan pelanggaran terbukti, sanksi akan diberikan sesuai dengan peraturan yang berlaku.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Umpan Balik</h3>
                    <p className="text-gray-700 mb-4">
                      Pelapor akan diberikan umpan balik mengenai status dan hasil penanganan laporan sesuai dengan 
                      ketentuan yang berlaku dan dengan tetap menjaga kerahasiaan proses investigasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Informasi yang Perlu Disertakan dalam Laporan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Jenis Pelanggaran</h3>
                  <p className="text-gray-700">
                    Jelaskan jenis pelanggaran yang diduga terjadi.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Pihak yang Terlibat</h3>
                  <p className="text-gray-700">
                    Sebutkan nama dan jabatan pihak yang diduga terlibat dalam pelanggaran.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Waktu dan Lokasi</h3>
                  <p className="text-gray-700">
                    Jelaskan kapan dan di mana pelanggaran tersebut terjadi atau diduga terjadi.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Kronologi Kejadian</h3>
                  <p className="text-gray-700">
                    Uraikan secara jelas dan rinci kronologi kejadian pelanggaran.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Bukti Pendukung</h3>
                  <p className="text-gray-700">
                    Lampirkan bukti pendukung jika ada (dokumen, foto, rekaman, dll).
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Informasi Pelapor (Opsional)</h3>
                  <p className="text-gray-700">
                    Anda dapat memberikan identitas atau melaporkan secara anonim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Perlindungan Pelapor */}
        {activeTab === 'perlindungan' && (
          <div className="animate-fadeInUp">
            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Perlindungan Pelapor</h2>
              <p className="text-gray-700 mb-4">
                Dana Pensiun Semen Tonasa berkomitmen untuk memberikan perlindungan kepada pelapor yang menyampaikan 
                laporan dugaan pelanggaran dengan itikad baik. Perlindungan ini diberikan untuk memastikan keamanan 
                dan kenyamanan pelapor dalam menyampaikan laporannya.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Bentuk Perlindungan</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Kerahasiaan Identitas</h3>
                    <p className="text-gray-700">
                      Dana Pensiun Semen Tonasa menjamin kerahasiaan identitas pelapor. Identitas pelapor tidak akan 
                      diungkapkan tanpa persetujuan dari pelapor, kecuali diperlukan dalam proses hukum.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Perlindungan dari Pembalasan</h3>
                    <p className="text-gray-700">
                      Dana Pensiun Semen Tonasa akan melindungi pelapor dari segala bentuk ancaman, intimidasi, atau 
                      tindakan pembalasan yang mungkin timbul akibat pelaporan yang disampaikan.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Konsultasi dan Pendampingan</h3>
                    <p className="text-gray-700">
                      Dana Pensiun Semen Tonasa akan menyediakan konsultasi dan pendampingan bagi pelapor yang membutuhkan 
                      selama proses pelaporan dan investigasi.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Perlindungan Hukum</h3>
                    <p className="text-gray-700">
                      Dana Pensiun Semen Tonasa akan memberikan perlindungan hukum sesuai dengan peraturan perundang-undangan 
                      yang berlaku bagi pelapor yang menghadapi ancaman atau gugatan hukum terkait dengan pelaporan yang disampaikan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Sanksi atas Pembalasan</h2>
              
              <p className="text-gray-700 mb-4">
                Dana Pensiun Semen Tonasa akan memberikan sanksi tegas kepada pihak yang terbukti melakukan tindakan 
                pembalasan terhadap pelapor. Sanksi yang diberikan dapat berupa:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Teguran tertulis</li>
                <li>Penurunan jabatan</li>
                <li>Pemberhentian sementara</li>
                <li>Pemutusan hubungan kerja</li>
                <li>Tindakan hukum sesuai dengan peraturan perundang-undangan yang berlaku</li>
              </ul>
            </div>
          </div>
        )}

        {/* Formulir Pelaporan */}
        {activeTab === 'formulir' && (
          <div className="animate-fadeInUp">
            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Formulir Pelaporan</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama (Opsional)</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="Masukkan nama Anda (opsional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email (Opsional)</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="Masukkan email Anda (opsional)"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="violation_type" className="block text-gray-700 font-medium mb-2">Jenis Pelanggaran</label>
                  <select 
                    id="violation_type" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Pilih jenis pelanggaran</option>
                    <option value="corruption">Korupsi</option>
                    <option value="fraud">Kecurangan</option>
                    <option value="theft">Pencurian</option>
                    <option value="conflict_of_interest">Konflik Kepentingan</option>
                    <option value="ethics_violation">Pelanggaran Etika</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="involved_parties" className="block text-gray-700 font-medium mb-2">Pihak yang Terlibat</label>
                  <input 
                    type="text" 
                    id="involved_parties" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="Nama dan jabatan pihak yang diduga terlibat"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Tanggal Kejadian</label>
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Lokasi Kejadian</label>
                    <input 
                      type="text" 
                      id="location" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="Lokasi terjadinya pelanggaran"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Kronologi Kejadian</label>
                  <textarea 
                    id="description" 
                    rows={6} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="Jelaskan secara detail kronologi kejadian pelanggaran"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="evidence" className="block text-gray-700 font-medium mb-2">Bukti Pendukung</label>
                  <div className="border border-dashed border-gray-300 rounded-md p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">Klik untuk mengunggah atau seret file ke sini</p>
                    <p className="mt-1 text-xs text-gray-500">Maksimal 5 file (PDF, JPG, PNG, DOC, XLS)</p>
                    <input type="file" id="evidence" className="hidden" multiple />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="agreement" 
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="agreement" className="text-gray-700">
                    Saya menyatakan bahwa laporan ini disampaikan dengan itikad baik dan informasi yang saya berikan adalah benar sesuai dengan pengetahuan saya.
                  </label>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                    Kirim Laporan
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-primary bg-opacity-5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-primary">Saluran Pelaporan Lainnya</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Selain melalui formulir online, Anda juga dapat menyampaikan laporan melalui saluran berikut:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Email</h3>
                  <p className="text-gray-700">whistleblowing@danapensiunst.co.id</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Telepon</h3>
                  <p className="text-gray-700">0800-1234-5678</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="bg-primary bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Surat</h3>
                  <p className="text-gray-700">PO BOX 1234 Pangkep, Sulawesi Selatan (Kode: WBS-DPST)</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}