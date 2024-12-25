import React, { useState, useEffect } from 'react';
import '../style/Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navbarHeight = document.querySelector('nav').offsetHeight;

      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveLink(currentSection);
      setIsScrolled(window.scrollY > 0);

      // Transparansi navbar hanya pada posisi scroll 0
      setIsTransparent(window.scrollY === 0);
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
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full py-4 px-6 z-50 transition-colors duration-800 ease-in-out ${
          isTransparent
            ? 'bg-[#38517E] bg-opacity-0'
            : isScrolled
            ? 'bg-[#38517E] bg-opacity-90'
            : 'bg-[#38517E]'
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-white font-bold text-lg">Logo</h1>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-white hover:text-blue-300 ${
                    activeLink === link.id ? 'text-blue-300' : ''
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button for Mobile */}
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#38517E] text-white z-40 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          {/* Close Button */}
          <button
            className="self-end text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`hover:text-blue-300 ${activeLink === link.id ? 'text-blue-300' : ''}`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
