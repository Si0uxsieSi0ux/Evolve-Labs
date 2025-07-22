import React, { forwardRef } from 'react';

const MethodologySection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full relative [background:linear-gradient(180deg,_#fff,_#efcfa2)] h-[507px]"
    >
      <h1 className="text-4xl font-bold">Sección mETHOD</h1>
    </section>
  );
});

MethodologySection.displayName = 'MethodologySection';

export default MethodologySection;