'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { inter, poppins, roboto, akaya_telivigala } from '@/lib/fonts';
interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  homeRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, homeRef, aboutRef, contactRef }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-4">
        {/* Logo placeholder, cámbialo por tu imagen */}
        <img src="/logo.png" alt="Logo" className="h-10 w-10" />
        <span className={`${inter.className} text-2xl text-gray-800`}>Evolve Labs</span>
      </div>
      <nav className="flex space-x-6">
        <button
          onClick={() => scrollToSection(homeRef)}
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          Servicios
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          Productos
        </button>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          Contacto
        </button>
      </nav>
    </header>
  );
};

export default Header;