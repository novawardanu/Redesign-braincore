import { useEffect, useState } from "react";
import "../style/Carousel.css";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  const team = [
    {
      image: "/images/brazil.jpg",
      name: "Bravo",
      role: "Research Analyst",
      area: "Artificial Intelligence, Blockchain, Cyber Security",
      socials: [
        { icon: "facebook", link: "https://facebook.com/bravo" },
        { icon: "twitter", link: "https://twitter.com/bravo" },
        { icon: "linkedin", link: "https://linkedin.com/in/bravo" },
      ],
    },
    {
      image: "/images/china.jpg",
      name: "Erik Julianto",
      role: "Research Analyst",
      area: "Artificial Intelligence, Blockchain, Cyber Security",
      socials: [
        { icon: "facebook", link: "https://facebook.com/erik" },
        { icon: "twitter", link: "https://twitter.com/erik" },
        { icon: "linkedin", link: "https://linkedin.com/in/erik" },
      ],
    },
    // Tambahkan data anggota lainnya...
  ];
  

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
    return () => clearTimeout(timeOut); // Clear timeout to prevent memory leaks
  }, [current, autoPlay]);

  const slideRight = () => {
    setCurrent(current === team.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? team.length - 1 : current - 1);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {team.map((country, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carousel_card carousel_card-active"
                : "carousel_card"
            }
          >
            <div className="card_circle">
              <img className="card_image" src={country.image} alt={country.name} />
            </div>
            <div className="card_overlay">
              <h2 className="card_name ">{country.name}</h2>
              <h4 className="card_role ">{country.role}</h4>
              <div className="card_separator"></div>
              <h4 className="card_label">Area of Interest:</h4>
              <p className="card_interests">{country.area}</p>

              <div className="card_socials">
                {country.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social_icon social_icon-${social.icon}`}
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {team.map((_, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "pagination_dot pagination_dot-active"
                  : "pagination_dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
