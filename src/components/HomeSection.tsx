import React, { forwardRef } from 'react';

//const HomeSection: React.FC = () => {
const HomeSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center [background:linear-gradient(180deg,_#ededed,_#efcfa2_0.01%,_#fff_77.88%)] h-[452px]"
      /*className="min-h-screen flex items-center justify-center bg-blue-100"*/
      /*className="min-h-screen w-full flex items-center justify-center bg-[conic-gradient(from_-78.19deg_at_70%_110%,_#7b3eff_-18.57deg,_#ffc400_126.35deg,_#fff_335.07deg,_#fff_338.56deg,_#7b3eff_341.43deg,_#ffc400_486.35deg)]"*/
    >
      <div className="flex justify-between items-center px-20 py-20 space-x-50">
        {/* Primer bloque de texto */}
        <div className="w-7/2">
          <h1 className="text-4xl font-bold">
            We are scientists<br />
            doing technology
          </h1>
          <p className="mt-4 text-lg">
            We design advanced AI architectures, <br />
            driven by science and made for the real world.
          </p>
        </div>

        {/* Segundo bloque de texto */}
        {/*<div className="w-5/2 text-left">
          <h2 className="text-4xl font-bold">
            Powered by cognition,<br />
            built for industry
          </h2>
          <p className="mt-4 text-lg">
            Our systems go beyond chat —<br />
            they reason, perceive, and act with purpose.
          </p>
        </div>*/}

        {/* Tercer bloque de texto */}
        <div className="w-44/7 text-center">
          
          <img src="/ai_carousel1.png"  className='rounded-[10px]' />
          {/*<h2 className="text-4xl font-bold">
            Powered by cognition,<br />
            built for industry
          </h2>*/}
          {/*<p className="mt-4 text-lg">
            Our systems go beyond chat —<br />
            they reason, perceive, and act with purpose.
          </p>*/}
        </div>
      </div>
      
      
    </section>
  );
});

HomeSection.displayName = 'HomeSection';

export default HomeSection;