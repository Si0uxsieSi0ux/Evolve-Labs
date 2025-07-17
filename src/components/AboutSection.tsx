import React, { forwardRef } from 'react';

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-green-100"
    >
      <h1 className="text-4xl font-bold">Sección Nosotros</h1>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;