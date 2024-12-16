import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navbarHeight = document.querySelector('nav').offsetHeight; // Tinggi navbar
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight; // Offset dikurangi tinggi navbar
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Beranda' },
    { id: 'about', name: 'Tentang' },
    { id: 'services', name: 'Layanan' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'consultation', name: 'Konsultasi' },
    { id: 'team', name: 'Tim' },
    { id: 'achievements', name: 'Pencapaian' },
    { id: 'contact', name: 'Kontak' },
    { id: 'blog', name: 'Blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#38517E] text-white py-4 px-6 z-50">
      <ul className="flex justify-end space-x-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`hover:text-blue-300 ${activeLink === link.id ? 'text-blue-300' : ''}`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
