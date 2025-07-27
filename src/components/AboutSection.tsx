import React, { forwardRef } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  /*return (
    <section
      ref={ref}
      className="min-h-[600px] flex items-center justify-center bg-white-100"
    >
      <div className="w-full relative h-[683px] text-left text-5xl text-black font-inter">
          <div className="absolute h-[16.84%] w-[42.7%] top-[7.76%] left-[4.57%] text-[36px] font-light flex items-center">
            <b>
              Usamos conocimiento cientifico, metodologia cientifica para asegurar calidad y fiabilidad
            </b>
            
          </div>
            <b 
              //className="absolute top-[65.89%] left-1/2 text-[32px]"
              className="absolute top-[65.89%] left-1/2 transform -translate-x-1/2 text-[32px]"
            >
              We Work with Nasdaq Companies
            </b>
            <div className="absolute w-full flex justify-center lg:justify-end relative -mt-10">
                          <Image className="absolute top-[44px] overflow-hidden h-[209px] object-cover" width={529} height={352} sizes="100vw" alt="" src="/standing-hardcover-book-mockup-psd-removebg-preview 1.png" />

            </div>
            <Image className="absolute top-[44px] right-[5.16%] left-[62.86%] max-w-full overflow-hidden h-[209px] object-cover" width={322} height={209} sizes="100vw" alt="" src="/standing-hardcover-book-mockup-psd-removebg-preview 1.png" />
}            <Image className="absolute top-[186px] right-[78.15%] left-[4.57%] max-w-full overflow-hidden h-[116px] object-cover" width={174} height={116} sizes="100vw" alt="" src="/image 74.png" />
            <Image className="absolute top-[569px] right-[71%] left-[6.45%] max-w-full overflow-hidden h-[27px] object-cover" width={227} height={27} sizes="100vw" alt="" src="/image 75.png" />
            <Image className="absolute top-[577px] right-[10.92%] left-[71.6%] max-w-full overflow-hidden h-7 object-cover" width={176} height={28} sizes="100vw" alt="" src="/image 76.png" />
            <Image className="absolute top-[568px] right-[37.44%] left-[37.44%] max-w-full overflow-hidden h-[46px] object-cover" width={253} height={46} sizes="100vw" alt="" src="/image 77.png" />
      </div>
    </section>
  );*/
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

      {/* Logos/Imágenes decorativas inferiores */}
      {/*<div className="mt-12 flex flex-wrap justify-center gap-6">
        <Image src="/cambridgelogo.png" alt="Logo 74" 
        width={227} 
        height={28} 
        width={174}
        height={116}
        className="h-[90px] object-contain" />
        <Image src="/image 75.png" alt="Logo 75" width={227} height={27} className="h-[30px] object-contain" />
        <Image src="/image 77.png" alt="Logo 77" width={253} height={46} className="h-[40px] object-contain" />
        <Image src="/image 76.png" alt="Logo 76" width={176} height={28} className="h-[30px] object-contain" />
      </div>*/}
      <p className="text-[48px] text-gray-800 mt-8 font-semibold">
            We Work with Nasdaq Companies
          </p>
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