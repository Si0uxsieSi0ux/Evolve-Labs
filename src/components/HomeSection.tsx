import React, { forwardRef, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
//const HomeSection: React.FC = () => {
const HomeSection = forwardRef<HTMLElement>((props, ref) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: '/ai_carousel1.png', alt: 'Imagen 1', dur: 2 },
    { src: '/ai_carousel2.png', alt: 'Imagen 2', dur: 3 },
    { src: '/ai_carousel3.png', alt: 'Imagen 3', dur: 4 }
  ];
  const title = "We are scientists doing technology";

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCarousel = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // cambia cada 3 segundos
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <>
      <section
        ref={ref}
        //className="min-h-[600px] flex items-center relative [background:linear-gradient(180deg,_#ededed,_#efcfa2_0.01%,_#fff_77.88%)]"
        className="min-h-[600px] flex items-center relative bg-transparent"
        //className="relative w-full min-h-screen px-6 md:px-20 pt-20 pb-10"
      >
        <div 
          //className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 sm:px-12 lg:px-20 py-10 gap-8 w-full">
          //className="flex flex-col lg:flex-row justify-between items-start px-6 sm:px-12 lg:px-20 py-6 gap-6 w-full max-w-[1400px] mx-auto"
          className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-20 py-6 gap-6 flex flex-col lg:flex-row justify-between items-start"
          //className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Texto */}
          {/*<div className="w-full lg:w-1/2 text-center lg:text-left">*/}
            {<motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h1 
                //className="text-8xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-tight"
              >
                We are scientists<br />
                doing technology
              </h1>
            
           
            <p 
              //className="mt-4 text-lg sm:text-xl lg:text-2xl"
              className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed"
            >
              We design advanced AI architectures, <br />
              driven by science and made for the real world.
            </p>
          </motion.div>}
          {/*</div>*/}

          <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-center relative"
            //className="w-full lg:w-1/2 flex justify-center lg:justify-end relative -mt-10"
            whileHover={{ scale: 1.11 }}
            //onHoverStart={() => setCurrentImage((prev) => (prev + 1) % images.length)}
            onMouseEnter={startCarousel}
            onMouseLeave={stopCarousel}
          >
            <AnimatePresence>
            <motion.img
              key={currentImage} // esto es esencial para que AnimatePresence detecte cambios
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              //className="rounded-[10px] w-3/4 sm:w-2/3 lg:w-full max-w-[600px] absolute top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0"
              //className="rounded-[10px] w-[90%] sm:w-[70%] md:w-[60%] lg:w-full max-w-[500px] absolute top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0"
              className="rounded-[10px] w-[90%] sm:w-[80%] md:w-[60%] lg:w-full max-w-[400px]  relative lg:absolute top-0 left-1/2 lg:left-auto -translate-x-1/2 lg:-translate-x-0"

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} // aquí está la suavidad
            />
          </AnimatePresence>
            {/*images.map((item, index, array) => (
              <motion.img
                key={index}
                src={item.src}
                className="rounded-[10px] w-3/4 sm:w-2/3 lg:w-full max-w-[600px] absolute top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0"
                //className="rounded-[40px] w-full sm:w-full lg:w-full max-w-[600px] absolute top-0 left-auto -translate-x-0"
                alt={item.alt}
                //initial={{ opacity: index === 0 ? 1 : 0 }}
                initial={{opacity: 0}}
                animate={{ opacity: currentImage === 0 ? 1 : 0 }}
                
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            ))*/}
          </motion.div>
        </div>
      </section>
    </>
  );
});

HomeSection.displayName = 'HomeSection';

export default HomeSection;