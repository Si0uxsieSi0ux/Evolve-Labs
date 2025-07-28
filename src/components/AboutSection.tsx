import React, { forwardRef } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { TypingEffect } from './hooks/typingEffect';
const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  
  return (
    <section
      ref={ref}
      //className="min-h-[600px] py-16 px-6 bg-white flex flex-col items-center justify-center text-black"
      className="min-h-[600px] py-16 px-6 bg-transparent flex flex-col items-center justify-center text-black"
    >
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Texto principal */}
        <div className="flex-1 text-center justify-center lg:text-left">
          <h2 className="text-4xl sm:text-4xl font-light mb-6 leading-snug">
            <b>
              Usamos conocimiento científico, metodología científica para asegurar calidad y fiabilidad
            </b>
          </h2>
          
        </div>

        {/* Imagen del libro */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src="/standing-hardcover-book-mockup-psd-removebg-preview 1.png"
            alt="Libro"
            width={529}
            height={352}
            className="w-[529px] h-[352px] max-w-[600px] sm:max-w-[600px] object-contain"
          />
        </div>
      </div>
      <div
        style={{color: "#b025fb"}}
      >
        <TypingEffect text='We Work with Nasdaq Companies'/>
      </div>
      
      {/*<p 
        className="text-[48px] text-gray-800 mt-8 font-bold leading-tight"
        style={{color: "#b025fb"}}
      >
        We Work with Nasdaq Companies
      </p>*/}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-18">
  {[
    { src: '/image 74.png', alt: 'Cambridge' },
    { src: '/image 75.png', alt: 'Logo 75' },
    { src: '/image 77.png', alt: 'Logo 77' },
    { src: '/image 76.png', alt: 'Logo 76' }
  ].map((img, i) => (
    <motion.div 
      key={i} 
      whileHover={{ scale: 1.82 }}
      className="h-[110px] w-[180px] flex items-center justify-center">
      <Image
        src={img.src}
        alt={img.alt}
        width={180}
        height={110}
        className="max-h-full max-w-full object-contain"
      />
    </motion.div>
  ))}
</div>

    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;