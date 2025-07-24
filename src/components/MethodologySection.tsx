import React, { forwardRef, useEffect, useRef } from 'react';
import Image from "next/image";
import { gsap } from 'gsap';

const MethodologySection = forwardRef<HTMLElement>((props, ref) => {
  
  return (
    <section
      ref={ref}
      className="w-full relative [background:linear-gradient(180deg,_#fff,_#efcfa2)] h-[507px] "
      //className="w-full relative [background:linear-gradient(180deg,_#fff,_#efcfa2)] h-[607px] overflow-hidden text-left text-2xl text-black font-inter"
    >
      <b className="absolute h-[28.09%] w-[32.67%] top-[26.52%] left-[58.09%] text-[40px] flex items-center">Especialistas en Arquitecturas Agentic AI</b>
            
      <div className="absolute h-[47.94%] w-[28.5%] top-[52.06%] left-[58.49%] font-light flex items-center">
        We make tracking your analytics simple and stress-free. Get clear, real-time insights in one place and make smarter decisions without the complexity.
      </div>
      <div className="absolute h-[64.44%] w-[37.74%] top-[30.01%] right-[57.7%] bottom-[2.55%] left-[4.57%] shadow-[5px_12px_4px_1px_rgba(192,_155,_79,_0.25)] rounded-[10px] bg-white" />
        <b className="absolute h-[6.29%] w-[21.05%] top-[62.28%] left-[7.15%] flex items-center">Reasoning Loops</b>
        <div className="absolute h-[19.06%] w-[26.91%] top-[70.14%] left-[7.15%] text-base font-extralight flex items-center">
          Connect with the people who matter most. Our platform helps you target and engage the right audiences with precision.
        </div>
        <Image className="absolute top-[206px] right-[85%] left-[7.15%] max-w-full overflow-hidden h-[99px] object-cover" width={79} height={99} sizes="100vw" alt="" src="/image 64.png" />
                  
    </section>
  );
});

MethodologySection.displayName = 'MethodologySection';

export default MethodologySection;