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
    <header 
      className="fixed top-0 left-0 w-full shadow-md z-20 flex items-center justify-between px-6 py-4 bg-navajowhite h-[101px]" 
      style={{ backgroundColor: '#EFCFA2' }}
    >
    {/*<header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 flex items-center justify-between px-6 py-4">*/}
      
      <nav className="flex items-center space-x-1">
        <button
          onClick={() => scrollToSection(homeRef)}
          /*className="text-gray-600 hover:text-blue-500 transition-colors"*/
        >
          <b className="w-[105.6px] relative text-[15px] flex font-inter text-black hover:text-blue-500 text-center items-center justify-center h-[37px] transition-colors">Productos</b>
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          /*className="text-gray-600 hover:text-blue-500 transition-colors"*/
          
        >
       <b className="w-[105.6px] relative text-[15px] flex font-inter text-black hover:text-blue-500 text-center items-center justify-center h-[37px] transition-colors">Productos</b>
        </button>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          <b className="w-[105.6px] relative text-[15px] flex font-inter text-black hover:text-blue-500 text-center items-center justify-center h-[37px] transition-colors">Contacto</b>
        </button>
      </nav>
      <div className="flex items-center space-x-2">
        {/* Logo placeholder, cámbialo por tu imagen */}
        <img src="/logo_evolve.png"  className="h-10 w-10" />
        {/*<span className={`${inter.className} text-2xl text-gray-800`}>Evolve Labs</span>*/}
        {/*<span className={`${inter.className} text-xl text-gray-800`}>Evolve Labs</span>*/}
        <b className=" w-[105.6px] relative text-[20px] flex font-inter">Evolve Labs</b>
      </div>
      <div className="flex items-center space-x-3">
        {/* Logo placeholder, cámbialo por tu imagen */}
        <img src="/instagram_logo.png"  className="h-10 w-10" />
        <img src="/linkedin_logo.png"  className="h-7 w-7" />
        <img src="/x_logo.png"  className="h-7 w-7" />
        {/*<span className={`${inter.className} text-2xl text-gray-800`}>Evolve Labs</span>*/}
        
        
      </div>
    </header>
  );
};

export default Header;