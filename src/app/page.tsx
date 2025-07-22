'use client';
import { useRef } from 'react';
import { useLenis } from '../components/hooks/useLenis';
import Header from '../components/ui/Header';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import MethodologySection from '../components/MethodologySection';

export default function Home() {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const methodRef = useRef<HTMLElement | null>(null);
  const lenisRef = useLenis();

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current && lenisRef.current) {
      //const lenis = new Lenis();
      //lenisRef.scrollTo(ref.current, {
      lenisRef.current.scrollTo(ref.current, {
        offset: -50, // Ajusta para el header fijo
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };
  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        methodRef={methodRef}
      />
      <main>
        <HomeSection ref={homeRef} />
        <AboutSection ref={aboutRef} />
        <MethodologySection ref={methodRef}/>
        <ContactSection ref={contactRef} />
      </main>
    </>
  );
}