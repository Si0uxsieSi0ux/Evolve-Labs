'use client';
import { useRef } from 'react';
import { useLenis } from '../components/hooks/useLenis';
import Header from '../components/ui/Header';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import MethodologySection from '../components/MethodologySection';
import ProductsSection from '../components/ProductsSection';
//import Aurora from '../components/Aurora'; 
import IridescenceBackground from '../components/IridescenceBackground';
//import ThreadsBackground from '../components/ThreadsBackground';
export default function Home() {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const methodRef = useRef<HTMLElement | null>(null);
  const productRef = useRef<HTMLElement | null>(null);
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
        productRef={productRef}
      />
      <main>
        {/*<HomeSection ref={homeRef} />
        <AboutSection ref={aboutRef} />
        <MethodologySection ref={methodRef}/>
        <ProductsSection ref={productRef}/>
        <ContactSection ref={contactRef} />*/}
    {/*<AuroraBackground auroraProps={{ colorStops: ["#ffe063", "#46f2ef", "#6DEEC3"], amplitude: 0.3, speed: 1.0, blend: 0.5 }}>*/}
  

{/*<ThreadsBackground 
  threadProps={
    { color: [0.5, 0.6, 0.8], 
      amplitude: 2.9,
      distance: 0,
      enableMouseInteraction: false
    }
  }
>
    <AboutSection ref={aboutRef} />
</ThreadsBackground>*/}
  {<IridescenceBackground iridescenceProps={{ color: [1.0, 1.0, 1.0], speed: 0.9, amplitude: 0.15, mouseReact: true }}>
  <HomeSection ref={homeRef}/>
  <AboutSection ref={aboutRef} />
  <MethodologySection ref={methodRef}/>
        <ProductsSection ref={productRef}/>
        <ContactSection ref={contactRef} />
</IridescenceBackground>}
  
  
  
          {/*</AuroraBackground>*/}

      </main>
    </>
  );
}