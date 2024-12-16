import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Team.css';

const teamMembers = [
  {
    name: "Erik Julianto",
    role: "Research Analyst",
    interests: "Artificial Intelligence, Blockchain, Internet of Things",
    image: "/placeholder.png", // Ganti dengan gambar nyata
  },
  {
    name: "Jane Doe",
    role: "AI Engineer",
    interests: "Machine Learning, Computer Vision",
    image: "/placeholder.png",
  },
  {
    name: "John Smith",
    role: "Data Scientist",
    interests: "Data Analysis, Deep Learning",
    image: "/placeholder.png",
  },
];

const Team = () => {
  return (
    <section id="team" className="team-container">
      <h2 className="team-title">TEAM</h2>
      <p className="team-description">
        Dalam perkembangan Braincore.id, ada tim hebat yang berisikan orang-orang luar biasa
        yang ahli di bidangnya masing-masing dan saling bekerja sama dalam pengembangan Braincore.id.
      </p>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="team-carousel"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="team-slide">
            <div className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-interests">{member.interests}</p>
              <div className="team-socials">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
