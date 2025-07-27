import React, { ReactNode } from 'react';
import Iridescence from './ui/Iridescence';

interface IridescenceBackgroundProps {
  children: ReactNode;
  className?: string;
  iridescenceProps?: {
    color?: [number, number, number]; // Color RGB para el efecto
    speed?: number; 
    amplitude?: number; // Intensidad del movimiento
    mouseReact?: boolean; // Si responde al movimiento del mouse
  };
}

const IridescenceBackground: React.FC<IridescenceBackgroundProps> = ({ children, className, iridescenceProps }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 z-0 opacity-25">
        <Iridescence {...iridescenceProps} />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default IridescenceBackground;