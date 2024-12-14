import React from 'react';

// Data Layanan
const services = [
  {
    icon: '📊', // Ganti dengan icon/image sesuai kebutuhan
    title: 'Classification',
    description: 'Klasifikasi data menggunakan beberapa teknik pembelajaran mesin.',
  },
  {
    icon: '📈',
    title: 'Forecasting',
    description: 'Analisis data deret waktu menggunakan metode ARIMA.',
  },
  {
    icon: '📉',
    title: 'Clustering',
    description: 'Klasterisasi data numerik dan kategorik dengan beberapa metode Clustering.',
  },
  {
    icon: '⛏️',
    title: 'Data Mining',
    description: 'Proses data collection untuk pemodelan machine learning.',
  },
  {
    icon: '📊',
    title: 'Statistika',
    description: 'Pengolahan data untuk berbagai keperluan analisis dengan pendekatan Statistika.',
  },
  {
    icon: '🔎',
    title: 'Text Mining',
    description: 'Pengumpulan data corpus untuk keperluan penelitian di bidang NLP.',
  },
  {
    icon: '👤',
    title: 'Face Recognition',
    description: 'Sistem deteksi wajah untuk berbagai keperluan.',
  },
  {
    icon: '🚗',
    title: 'Objects Counting',
    description: 'Algoritma penghitung jumlah objek.',
  },
  {
    icon: '📄',
    title: 'Optical Character Recognition',
    description: 'Ekstraksi dokumen berupa KTP, Curriculum Vitae, dll.',
  },
];

// Komponen Card
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start bg-white shadow-md rounded-lg p-6 text-left">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Komponen Utama
const Layanan = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1D3C6E] mb-4">LAYANAN</h2>
        <p className="text-gray-600 text-center mb-12">
          Braincore.id menawarkan berbagai layanan yang dapat membantu masyarakat umum dalam manfaat Kecerdasan Buatan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
