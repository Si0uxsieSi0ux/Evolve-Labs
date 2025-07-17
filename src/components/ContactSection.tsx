import React, { forwardRef } from 'react';

//const ContactSection: React.FC = () => {
const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-yellow-100"
    >
      <h1 className="text-4xl font-bold">Sección Contacto</h1>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;