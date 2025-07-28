import React, { ReactNode } from 'react';
import Aurora from './ui/Aurora'; 

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  auroraProps?: {
    colorStops?: string[]; // Colores del gradiente
    amplitude?: number; // Intensidad del efecto
    blend?: number; // Suavidad del gradiente
    speed?: number; // Velocidad de la animacion
  };
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({ children, className, auroraProps }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 z-0">
        <Aurora {...auroraProps} />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;