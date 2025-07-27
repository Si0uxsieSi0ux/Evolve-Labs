import React, { forwardRef, useEffect, useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

const slides = [
  {
    id: 0,
    title: "AI Voice Assistant",
    description: "Desarrollamos asistentes de voz capaces de entender, interactuar y adaptarse a conversaciones humanas en tiempo real.",
    image: "/Rectangle 12.png",
  },
  {
    id: 1,
    title: "AI Analytics Platform",
    description: "Plataforma avanzada para análisis de datos en tiempo real, optimizando decisiones empresariales con inteligencia artificial.",
    image: "/Rectangle 90.png",
  },
  {
    id: 2,
    title: "Chatbot Inteligente",
    description: "Soluciones de chatbots personalizados que mejoran la interacción con clientes y automatizan procesos.",
    image: "/Rectangle 91.png",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const ProductsSection = forwardRef<HTMLElement>((props, ref) => {
    const [[page, direction], setPage] = useState([0, 0]);
  const index = wrap(0, slides.length, page);
  const [isSectionVisible, setIsSectionVisible] = useState(false);


    const handleWheel = (event: WheelEvent) => {
    if (!isSectionVisible) return; // Solo manejar el scroll si la sección está visible
    event.preventDefault(); // Evita el scroll global
    if (event.deltaY > 0) {
      // Scroll hacia abajo
      if (index < slides.length - 1) {
        setPage([page + 1, 1]);
      } else {
        // Última slide: permitir scroll a la siguiente sección
        const section = (ref as React.RefObject<HTMLElement>).current;
        if (section) {
          const nextSection = section.nextElementSibling as HTMLElement;
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    } else if (event.deltaY < 0) {
      // Scroll hacia arriba
      if (index > 0) {
        setPage([page - 1, -1]);
      } else {
        // Primera slide: permitir scroll hacia arriba
        const section = (ref as React.RefObject<HTMLElement>).current;
        if (section) {
          const prevSection = section.previousElementSibling as HTMLElement;
          if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  useEffect(() => {
    const section = (ref as React.RefObject<HTMLElement>).current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Activa cuando el 50% de la sección está visible
    );

    observer.observe(section);

    const handleWheelWrapper = (e: WheelEvent) => handleWheel(e);

    if (isSectionVisible) {
      section.addEventListener("wheel", handleWheelWrapper, { passive: false });
    }

    return () => {
      observer.unobserve(section);
      section.removeEventListener("wheel", handleWheelWrapper);
    };
  }, [isSectionVisible, index]);


  /*const handleWheel = (event: WheelEvent) => {
    event.preventDefault(); // Evita el scroll global
    if (event.deltaY > 0) {
      // Scroll down
      if (index < slides.length - 1) {
        setPage([page + 1, 1]);
      } else {
        // On last slide, allow scrolling to next section
        const section = (ref as React.RefObject<HTMLElement>).current;
        if (section) {
          const nextSection = section.nextElementSibling as HTMLElement;
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    } else if (event.deltaY < 0) {
      // Scroll up
      /*if (index > 0) {
        setPage([page - 1, -1]);
      }
     if (index > 0) {
        setPage([page - 1, -1]);
      } else {
        // Primera slide: permitir scroll hacia arriba
        const section = (ref as React.RefObject<HTMLElement>).current;
        if (section) {
          const prevSection = section.previousElementSibling as HTMLElement;
          if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };*/

  /*useEffect(() => {
    const section = (ref as React.RefObject<HTMLElement>).current;
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false });
      return () => section.removeEventListener('wheel', handleWheel);
    }
  }, [index]);*/
  /*useEffect(() => {
  const section = (ref as React.RefObject<HTMLElement>).current;
  if (!section) return;

  const handleWheelWrapper = (e: WheelEvent) => handleWheel(e);

  section.addEventListener("wheel", handleWheelWrapper, { passive: false });

  // Disable body scroll
  document.body.style.overflow = "hidden";

  return () => {
    section.removeEventListener("wheel", handleWheelWrapper);
    document.body.style.overflow = "auto";
  };
}, [index]);*/


    /*return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center [background:linear-gradient(180deg,_#efcfa2,_#fff)]"
    >
        <div 
            className="w-full relative h-[656px] text-center text-[40px] text-black font-inter"
        >
            <b className="absolute h-[11.43%] w-[21.45%] top-[8.08%] left-[39.23%] flex items-center justify-center">Productos</b>
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(180deg,_#efcfa2,_#fff)]" />
                    <Image className="absolute h-[47.71%] w-[41.61%] top-[26.07%] right-[50.05%] bottom-[26.22%] left-[8.34%] rounded-[10px] max-w-full overflow-hidden max-h-full object-cover" width={419} height={313} sizes="100vw" alt="" src="/Rectangle 12.png" />
                    <b className="absolute h-[9.6%] w-[35.95%] top-[26.07%] left-[55.51%] flex text-right items-center">AI Voice Assistant</b>
                    <div className="absolute h-[21.65%] w-[36.54%] top-[37.8%] left-[54.92%] text-2xl font-light text-right flex items-center">
                        Desarrollamos asistentes de voz capaces de entender, interactuar y adaptarse a conversaciones humanas en tiempo real.
                    </div>
            
        </div>
    </section>
  );*/
  return (
    <section
      ref={ref}
      //className="min-h-screen flex items-center justify-center [background:linear-gradient(180deg,_#efcfa2,_#fff)]"
      className="min-h-screen flex items-center justify-center bg-transparent"
    >
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 px-6">
            <div className="w-full lg:w-1/2 h-[400px] relative">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="absolute w-full h-full rounded-[10px] overflow-hidden"
                    >
                        <Image
                            src={slides[index].image}
                            alt={slides[index].title}
                            width={419}
                            height={313}
                            className="w-full h-full object-cover"
                            sizes="100vw"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-right">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center lg:items-end"
                    >
                    <b className="text-[40px] mb-4">{slides[index].title}</b>
                    <div className="text-2xl font-light leading-relaxed">
                        {slides[index].description}
                    </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    </section>
  );
});

ProductsSection.displayName = 'AboutSection';

export default ProductsSection;