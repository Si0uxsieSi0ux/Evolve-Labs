import React, { ReactNode } from 'react';
import Threads from './ui/Threads'; 

interface ThreadBackgroundProps {
  children: ReactNode;
  className?: string;
  threadProps?: {
    color?: [number, number, number]; // Colores del gradiente
    amplitude?: number; // Intensidad del efecto
    distance?: number; // Suavidad del gradiente
    enableMouseInteraction?: boolean;
  };
}

const ThreadsBackground: React.FC<ThreadBackgroundProps> = ({ children, className, threadProps }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 z-0">
        <Threads {...threadProps} />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ThreadsBackground;