'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { inter, poppins, roboto, akaya_telivigala } from '@/lib/fonts';
interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  homeRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
  methodRef: React.RefObject<HTMLElement | null>;
  productRef: React.RefObject<HTMLElement | null>;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, homeRef, aboutRef, contactRef, methodRef, productRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      //className="fixed top-0 left-0 w-full shadow-md z-20 flex flex-col items-center px-6 py-2 bg-[#EFCFA2]"
      className="fixed top-0 left-0 w-full shadow-md z-20 flex flex-col items-center px-6 py-2 bg-white"
    >
      {/* Logo centrado en pantallas pequeñas */}
      <div className="flex items-center justify-between w-full max-w-6xl lg:flex-row">
        <div className="flex items-center lg:hidden">
          {/* Botón hamburguesa para móviles */}
          <button onClick={toggleMenu} className="lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <img src="/logo_evolve.png" className="h-10 w-10" alt="Evolve AI Labs Logo" />
          <b className={`${inter.className} text-[20px] text-black ml-2`}>
            Evolve <br /> AI Labs
          </b>
        </div>
        {/* Navegación */}
        <nav /*className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row items-center justify-center lg:space-x-4 w-full max-w-6xl mt-4 lg:mt-0 transition-all duration-300`}
        */
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row items-center justify-center lg:space-x-4 w-full lg:w-auto mt-4 lg:mt-0 transition-all duration-300`} 
        >
          <button
            onClick={() => {
              scrollToSection(homeRef);
              setIsMenuOpen(false);
            }}
            className="w-full lg:w-[105.6px] text-[15px] font-inter text-black hover:text-blue-500 text-center py-2 transition-colors"
          >
            <b>Home</b>
          </button>
          <button
            onClick={() => {
              scrollToSection(aboutRef);
              setIsMenuOpen(false);
            }}
            className="w-full lg:w-[105.6px] text-[15px] font-inter text-black hover:text-blue-500 text-center py-2 transition-colors"
          >
            <b>About</b>
          </button>
          <button
            onClick={() => {
              scrollToSection(methodRef);
              setIsMenuOpen(false);
            }}
            className="w-full lg:w-[105.6px] text-[15px] font-inter text-black hover:text-blue-500 text-center py-2 transition-colors"
          >
            <b>Methodology</b>
          </button>
          <button
            onClick={() => {
              scrollToSection(productRef);
              setIsMenuOpen(false);
            }}
            className="w-full lg:w-[105.6px] text-[15px] font-inter text-black hover:text-blue-500 text-center py-2 transition-colors"
          >
            <b>Products</b>
          </button>
          <button
            onClick={() => {
              scrollToSection(contactRef);
              setIsMenuOpen(false);
            }}
            className="w-full lg:w-[105.6px] text-[15px] font-inter text-black hover:text-blue-500 text-center py-2 transition-colors"
          >
            <b>Contact</b>
          </button>
          {/* Íconos de redes sociales en móviles */}
          <div className="flex lg:hidden items-center justify-center space-x-3 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram_logo.png" className="h-7 w-7" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin_logo.png" className="h-7 w-7" alt="LinkedIn" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src="/x_logo.png" className="h-7 w-7" alt="X" />
            </a>
          </div>
        </nav>
        <div className="hidden lg:flex items-center space-x-3">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram_logo.png" className="h-7 w-7" alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin_logo.png" className="h-7 w-7" alt="LinkedIn" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src="/x_logo.png" className="h-7 w-7" alt="X" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;