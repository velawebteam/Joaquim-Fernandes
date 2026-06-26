import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  showSolidNav?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ showSolidNav = false, className = "" }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 md:gap-4 group relative z-50 pointer-events-auto ${className}`} aria-label="Joaquim & Fernandes">
      <div className="hover:scale-105 transition-transform duration-300">
        <img 
          src="https://drive.google.com/thumbnail?id=1BTpjyYhqw2fL_Dr_f9f1S_3ylE8dXwi5&sz=w1000" 
          alt="Joaquim & Fernandes" 
          className="h-12 w-12 md:h-20 md:w-20 object-contain"
        />
      </div>
      <span className={`font-heading font-bold text-[18px] tracking-wider uppercase transition-colors ${showSolidNav ? 'text-corporate' : 'text-white drop-shadow-lg'}`}>
        Joaquim & Fernandes, Lda
      </span>
    </Link>
  );
};

export default Logo;
