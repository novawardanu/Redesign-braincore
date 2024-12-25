import React from "react";
import Team from './Team';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
        {/* Kolom Kiri: Judul dan Deskripsi */}
        <div className="flex flex-col items-center md:items-start transform md:translate-y-0 -translate-y-8">
          <h1 className="text-[#38517E] text-4xl font-bold mb-4" >TEAM</h1>
          <p className="text-gray-600">
            Dalam perkembangan Braincore.id, ada tim hebat yang berisikan orang-orang luar
            biasa yang ahli di bidangnya masing-masing dan saling bekerja sama dalam
            pengembangan Braincore.id
          </p>
        </div>
        
        {/* Kolom Kanan: Komponen Team */}
        <div className="flex justify-center mt-0 md:-mt-[180px] md:items-start transform md:translate-y-0 -translate-y-20 transform scale-90 md:scale-100">
          <Team />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
