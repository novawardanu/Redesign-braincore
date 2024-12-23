import React from "react";

const Konsultasi = () => {
  return (
    <section className="bg-[#38517E] py-12">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Judul Utama */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          KONSULTASI
        </h1>
        {/* Deskripsi Pendek */}
        <p className="text-gray-300 mb-8">
          Konsultasikan proyek AI Anda bersama Braincore
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-24 w-full">
          {/* Gambar Placeholder */}
          <div className="w-full md:w-1/3">
            <img
              src="https://via.placeholder.com/400x300?text=Gambar+Kosong"
              alt="Placeholder Gambar"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Konten */}
          <div className="w-full md:w-2/3 text-white text-center md:text-left">
            {/* Judul Besar */}
            <h2 className="text-xl md:text-4xl font-bold mb-4">
              Konsultasikan proyek AI Anda <br /> bersama Braincore
            </h2>

            {/* Deskripsi Panjang */}
            <p className="text-gray-300 leading-relaxed mb-10">
              Braincore.id membawa solusi AI untuk proyek Anda. Dikelola oleh tim ahli
              yang berpengalaman, kami menyediakan layanan konsultasi yang akan membantu
              meningkatkan efisiensi dan kompetitifitas proyek dan Anda. Konsultasikan
              sekarang dan rasakan manfaat dari kecerdasan buatan untuk bisnis Anda.
            </p>

            {/* Tombol Konsultasi Disini */}
            <div className="flex justify-center md:justify-start w-full mb-6 md:mb-0">
              <button className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4CBDDF] hover:border-[#4CBDDF] transition duration-300">
                <span className="text-xl">🔍</span> Konsultasi disini
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Konsultasi;
