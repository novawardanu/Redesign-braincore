import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Impor Autoplay
import CardPorto from './CardPorto';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const porto = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Classification',
    description: 'Klasifikasi data menggunakan beberapa teknik pembelajaran mesin.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Regression',
    description: 'Prediksi data numerik menggunakan model AI.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Clustering',
    description: 'Mengelompokkan data berdasarkan pola tertentu.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Recommendation',
    description: 'Memberikan rekomendasi berdasarkan data pengguna.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Testing',
    description: 'Memberikan testing berdasarkan data pengguna.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Loading',
    description: 'Memberikan testing berdasarkan data pengguna.',
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio" className="bg-white-100 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#1D3C6E] mb-4">Portofolio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Braincore.id menawarkan berbagai Portofolio yang dapat membantu masyarakat umum dalam manfaat Kecerdasan Buatan.
        </p>
        <Swiper
          modules={[Autoplay]} // Aktifkan modul Autoplay
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Durasi antar slide (ms)
            disableOnInteraction: false, // Tetap autoplay meskipun ada interaksi
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto"
        >
          {porto.map((portos, index) => (
            <SwiperSlide key={index}>
              <CardPorto {...portos} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portofolio;
