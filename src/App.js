import React from 'react';
import Navbar from './component/Navbar';
import Layanan from './component/Layanan';
import Portofolio from './component/Portofolio';
import Konsultasi from './component/Konsultasi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Teknologi from './component/Teknologi';
import TeamSection from './component/TeamSection';
import Pencapaian from './component/Pencapaian';
import Kontak from './component/Kontak';
import Blog from './component/Blog'
import Footer from './component/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-4 md:px-8"
        style={{ backgroundImage: "url('/images/baru.png')" }}
      >
        {/* Konten utama */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center leading-tight">
          Jasa Konsultasi dan Pengerjaan Proyek AI
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-center max-w-xl lg:max-w-2xl">
          Data Science, Machine Learning, dan Artificial Intelligence untuk pelajar dan pekerja profesional.
        </p>
        <button className="mt-6 bg-[#4CBDDF] hover:bg-[#309BBB] font-bold text-white py-2 px-6 sm:px-8 lg:px-10 rounded-[40px] transition-colors duration-300 ease-in-out">
          Mulai Cari Tahu
        </button>
      </section>


      <section id="about" className="bg-white py-24 px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#38517E]">TENTANG BRAINCORE.ID</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Latar Belakang */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Latar Belakang</h3>
            <p className="text-gray-700 mb-4">
              Braincore.id dibentuk karena kami sadar bahwa implementasi teknologi kecerdasan buatan di Indonesia masih sangat minim meskipun hampir semua orang menggunakan gadget seperti handphone.
            </p>
            <p className="text-gray-700">
              Braincore.id hadir untuk menawarkan solusi berupa jasa konsultasi dan pengerjaan proyek berbasis kecerdasan buatan dalam berbagai bidang khususnya pada bidang edukasi.
            </p>
          </div>

          {/* Visi dan Misi */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Visi dan Misi</h3>
            <p className="text-gray-700 mb-4">
              Visi kami adalah mempersiapkan masyarakat memasuki era revolusi industri digital dan mengenalkan teknologi kecerdasan buatan kepada masyarakat luas. Misi kami adalah:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Membuat produk kecerdasan buatan dengan rasa tanggung jawab yang mampu bersaing di dunia teknologi.</li>
              <li>Mengedukasi masyarakat tentang penggunaan teknologi kecerdasan buatan dalam kehidupan sehari-hari.</li>
            </ul>
          </div>
        </div>
      </section>
         
      <section id="services" className="min-h-screen">
        <Layanan />
      </section>
      
      <section >
        <Portofolio />
      </section>

      <section className=" bg-gray-100 pb-8 flex items-center justify-center">
        <Teknologi />
      </section>
      
      <section id="consultation" className="py-16 bg-[#38517E] flex items-center justify-center">
        <Konsultasi />
      </section>

      <section id="team" className="h-screen bg-[blue-200] flex items-center justify-center">
        <TeamSection/>
      </section>

      <section>
        <Pencapaian/>
      </section>
      
      <section >
        <Kontak/>
      </section>

      <section>
        <Blog />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
