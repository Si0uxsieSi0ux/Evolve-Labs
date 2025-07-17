'use client';

import { useLenis } from '../components/hooks/useLenis';
import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useLenis(); // Activa el scroll suave con Lenis

  return (
    <html lang="es">
      <body className="antialiased">
        <div className="flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}