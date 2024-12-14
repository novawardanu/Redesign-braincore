import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#38517E] text-white py-4 px-6 z-50">
      <ul className="flex justify-end space-x-6">
        <li>
          <a
            href="#home"
            className={`hover:text-blue-300 ${activeLink === 'home' ? 'text-blue-300' : ''}`}
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`hover:text-blue-300 ${activeLink === 'about' ? 'text-blue-300' : ''}`}
          >
            Tentang
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={`hover:text-blue-300 ${activeLink === 'services' ? 'text-blue-300' : ''}`}
          >
            Layanan
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={`hover:text-blue-300 ${activeLink === 'portfolio' ? 'text-blue-300' : ''}`}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#consultation"
            className={`hover:text-blue-300 ${activeLink === 'consultation' ? 'text-blue-300' : ''}`}
          >
            Konsultasi
          </a>
        </li>
        <li>
          <a
            href="#team"
            className={`hover:text-blue-300 ${activeLink === 'team' ? 'text-blue-300' : ''}`}
          >
            Tim
          </a>
        </li>
        <li>
          <a
            href="#achievements"
            className={`hover:text-blue-300 ${activeLink === 'achievements' ? 'text-blue-300' : ''}`}
          >
            Pencapaian
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`hover:text-blue-300 ${activeLink === 'contact' ? 'text-blue-300' : ''}`}
          >
            Kontak
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className={`hover:text-blue-300 ${activeLink === 'blog' ? 'text-blue-300' : ''}`}
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
