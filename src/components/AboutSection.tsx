import React, { forwardRef } from 'react';
import Image from "next/image";
const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white-100"
    >
      <div className="w-full relative h-[683px] text-left text-5xl text-black font-inter">
          <div className="absolute h-[16.84%] w-[42.7%] top-[7.76%] left-[4.57%] text-2xl font-light flex items-center">
            Usamos conocimiento cientifico, metodologia cientifica para asegurar calidad y fiabilidad
          </div>
          <div 
            className="absolute h-[13.32%] w-full top-[46.85%] right-[0%] bottom-[39.82%] left-[0%] border-black border-solid border-[1px] box-border" 
            style={{ backgroundColor : "#F7C47E"}}
          />
            <b className="absolute top-[49.93%] left-[2.48%] text-xl">
            <p className="m-0">{`Over 12k companies trust `}</p>
            <p className="m-0">
              Retrov for planning.</p>
            </b>
            <b className="absolute top-[48.46%] left-[45.88%]">$3B+</b>
            <b className="absolute top-[48.46%] left-[62.56%]">50k+</b>
            <b className="absolute top-[48.46%] left-[78.65%]">20+</b>
            <b className="absolute top-[56.66%] left-[45.88%] text-base">processed Sales</b>
            <b className="absolute top-[56.66%] left-[62.56%] text-base">Product sold</b>
            <b className="absolute top-[56.08%] left-[78.85%] text-base">Transaction per day</b>
            <b 
              //className="absolute top-[65.89%] left-1/2 text-[32px]"
              className="absolute top-[65.89%] left-1/2 transform -translate-x-1/2 text-[32px]"
            >
              We Work with Nasdaq Companies
            </b>
            <Image className="absolute top-[44px] right-[5.16%] left-[62.86%] max-w-full overflow-hidden h-[209px] object-cover" width={322} height={209} sizes="100vw" alt="" src="/standing-hardcover-book-mockup-psd-removebg-preview 1.png" />
            <Image className="absolute top-[186px] right-[78.15%] left-[4.57%] max-w-full overflow-hidden h-[116px] object-cover" width={174} height={116} sizes="100vw" alt="" src="/image 74.png" />
            <Image className="absolute top-[569px] right-[71%] left-[6.45%] max-w-full overflow-hidden h-[27px] object-cover" width={227} height={27} sizes="100vw" alt="" src="/image 75.png" />
            <Image className="absolute top-[577px] right-[10.92%] left-[71.6%] max-w-full overflow-hidden h-7 object-cover" width={176} height={28} sizes="100vw" alt="" src="/image 76.png" />
            <Image className="absolute top-[568px] right-[37.44%] left-[37.44%] max-w-full overflow-hidden h-[46px] object-cover" width={253} height={46} sizes="100vw" alt="" src="/image 77.png" />
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;