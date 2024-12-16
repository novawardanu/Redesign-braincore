import React from "react";

const Teknologi = () => {
  const technologies = [
    { id: 1, src: "react-logo.png", alt: "React Logo", url: "https://reactjs.org/" },
    { id: 2, src: "react-logo.png", alt: "React Logo", url: "https://angular.io/" },
    { id: 3, src: "react-logo.png", alt: "React Logo", url: "https://vuejs.org/" },
    { id: 4, src: "react-logo.png", alt: "React Logo", url: "https://nodejs.org/" },
    { id: 5, src: "react-logo.png", alt: "React Logo", url: "https://expressjs.com/" },
    { id: 6, src: "react-logo.png", alt: "React Logo", url: "https://tailwindcss.com/" },
    { id: 7, src: "react-logo.png", alt: "React Logo", url: "https://nextjs.org/" },
    { id: 8, src: "react-logo.png", alt: "React Logo", url: "https://www.typescriptlang.org/" },
    { id: 9, src: "react-logo.png", alt: "React Logo", url: "https://www.mongodb.com/" },
    { id: 10, src: "react-logo.png", alt: "React Logo", url: "https://www.docker.com/" },
  ];

  return (
    <section className="py-12 bg-gray-100" id="teknologi">
      <div className="container mx-auto px-4 text-center">
        {/* Judul Teknologi */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#38517E] mb-4">TEKNOLOGI</h2>
        
        {/* Deskripsi Lebih Panjang */}
        <p className="text-gray-600 mb-8 mx-auto lg:max-w-3xl md:max-w-2xl sm:max-w-lg">
          Braincore.id fokus menggunakan teknologi terbaru dalam melakukan rancang bangun sistem cerdas. Berikut adalah teknologi yang kami gunakan untuk memastikan performa terbaik dan inovasi dalam setiap solusi yang kami tawarkan.
        </p>
        
        {/* Grid Teknologi */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
          {technologies.map((tech) => (
            <a key={tech.id} href={tech.url} target="_blank" rel="noopener noreferrer">
              <div className="p-4 bg-black rounded-lg shadow-md">
                <img src={tech.src} alt={tech.alt} className="h-16 w-16 mx-auto" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teknologi;
