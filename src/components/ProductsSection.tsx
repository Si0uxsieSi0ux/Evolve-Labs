import React, { forwardRef } from 'react';
import Image from "next/image";
const ProductsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center [background:linear-gradient(180deg,_#efcfa2,_#fff)]"
    >
      <div className="w-full relative h-[656px] text-center text-[40px] text-black font-inter">
<b className="absolute h-[11.43%] w-[21.45%] top-[8.08%] left-[39.23%] flex items-center justify-center">Productos</b>
<div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(180deg,_#efcfa2,_#fff)]" />
<Image className="absolute h-[47.71%] w-[41.61%] top-[26.07%] right-[50.05%] bottom-[26.22%] left-[8.34%] rounded-[10px] max-w-full overflow-hidden max-h-full object-cover" width={419} height={313} sizes="100vw" alt="" src="/Rectangle 12.png" />
<b className="absolute h-[9.6%] w-[35.95%] top-[26.07%] left-[55.51%] flex text-right items-center">AI Voice Assistant</b>
<div className="absolute h-[21.65%] w-[36.54%] top-[37.8%] left-[54.92%] text-2xl font-light text-right flex items-center">Desarrollamos asistentes de voz capaces de entender, interactuar y adaptarse a conversaciones humanas en tiempo real.</div>
<div className="absolute h-[3.51%] w-[2.28%] top-[89.02%] right-[51.04%] bottom-[7.47%] left-[46.67%] rounded-[50%] bg-dimgray" />
<div className="absolute h-[3.51%] w-[2.28%] top-[89.02%] right-[37.64%] bottom-[7.47%] left-[60.08%] rounded-[50%] bg-gainsboro" />
<div className="absolute h-[3.51%] w-[2.28%] top-[89.02%] right-[42.11%] bottom-[7.47%] left-[55.61%] rounded-[50%] bg-gainsboro" />
<div className="absolute h-[3.51%] w-[2.28%] top-[89.02%] right-[46.57%] bottom-[7.47%] left-[51.14%] rounded-[50%] bg-gainsboro" />
{/*<b className="absolute h-[8.69%] w-[23.34%] top-[5.18%] left-[1.89%] text-5xl flex items-center justify-center">Products</b>*/}
</div>
    </section>
  );
});

ProductsSection.displayName = 'AboutSection';

export default ProductsSection;