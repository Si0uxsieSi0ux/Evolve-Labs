import React, { forwardRef } from 'react';

//const HomeSection: React.FC = () => {
const HomeSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      className="min-h-screen flex [background:linear-gradient(180deg,_#ededed,_#efcfa2_0.01%,_#fff_77.88%)] h-[452px]"
      /*className="min-h-screen flex items-center justify-center bg-blue-100"*/
      /*className="min-h-screen w-full flex items-center justify-center bg-[conic-gradient(from_-78.19deg_at_70%_110%,_#7b3eff_-18.57deg,_#ffc400_126.35deg,_#fff_335.07deg,_#fff_338.56deg,_#7b3eff_341.43deg,_#ffc400_486.35deg)]"*/
    >
      <h1 className="text-4xl font-bold">Sección Inicio</h1>
    </section>
  );
});

HomeSection.displayName = 'HomeSection';

export default HomeSection;