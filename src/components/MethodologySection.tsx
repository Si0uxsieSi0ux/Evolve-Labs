import React, { forwardRef, useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

const slides = [
    {
      id: 0,
      title: "Reasoning Loops",
      description:
        "Connect with the people who matter most. Our platform helps you target and engage the right audiences with precision.",
      image: "/image 64.png",
    },
    {
      id: 1,
      title: "Cognitive Modules",
      description:
        "Connect with the people who matter most. Our platform helps you target and engage the right audiences with precision.",
      image: "/image 61.png",
    },
    {
      id: 2,
      title: "Multi-Agent Systems",
      description:
        "Connect with the people who matter most. Our platform helps you target and engage the right audiences with precision.",
      image: "/image 63.png",
    },
    {
      id: 3,
      title: "Agent-Oriented AI",
      description:
        "Connect with the people who matter most. Our platform helps you target and engage the right audiences with precision.",
      image: "/image 62.png",
    }
    // Agrega más slides si lo necesitas
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


const MethodologySection = forwardRef<HTMLElement>((props, ref) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = wrap(0, slides.length, page); 
  const controls = useAnimation();

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 50) paginate(-1);
    else if (info.offset.x < -50) paginate(1);
  };
  
  return (
    <section
      ref={ref}
      className="w-full relative [background:linear-gradient(180deg,_#fff,_#efcfa2)] h-[600px] overflow-hidden"
    >
      <b className="absolute text-[40px] top-[80px] left-[60%] w-[35%]">
        Especialistas en Arquitecturas Agentic AI
      </b>

      <div className="absolute top-[180px] left-[60%] w-[30%] font-light text-sm">
        We make tracking your analytics simple and stress-free. Get clear, real-time insights in one place and make smarter decisions without the complexity.
      </div>
      <div className="absolute top-[25%] left-[5%] w-[30%] h-[380px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full bg-white rounded-[10px] shadow-xl p-4"
          >
            <Image
              src={slides[index].image}
              alt=""
              width={100}
              height={100}
              //className="mb-4"
              
            />
            <b className="block mb-2 text-[34px]">{slides[index].title}</b>
            <div className="text-[20px] text-sm font-extralight">
              {slides[index].description}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
});

MethodologySection.displayName = 'MethodologySection';

export default MethodologySection;