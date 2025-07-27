import React, { forwardRef, useEffect, useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { BlurIn } from './ui/BlurIn';
import { TextFade } from './ui/TextFade';
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

  return (
    <section
      ref={ref}
      //className="min-h-screen flex items-center justify-center [background:linear-gradient(180deg,_#efcfa2,_#fff)]"
      className="min-h-screen flex items-center justify-center bg-transparent"
    >
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 px-6 py-8 shadow-xl rounded-[40px] bg-white/50">
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
                            className="w-full h-full object-cover px-6 py-6"
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
                    <TextFade
                      direction='up'
                    >
                      
                      <b className="text-[40px] mb-4">{slides[index].title}</b>
                      <div className="text-2xl font-light leading-relaxed">
                          {slides[index].description}
                      </div>
                    </TextFade>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    </section>
  );
});

ProductsSection.displayName = 'AboutSection';

export default ProductsSection;