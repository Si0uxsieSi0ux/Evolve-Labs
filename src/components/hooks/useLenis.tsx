'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // Duración del scroll
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Suavizado
        });

        lenisRef.current = lenis;

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);
    return lenisRef;
};