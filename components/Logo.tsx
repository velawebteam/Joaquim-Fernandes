import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => {
  return (
    <img 
      src="https://drive.google.com/thumbnail?id=1BTpjyYhqw2fL_Dr_f9f1S_3ylE8dXwi5&sz=w1000" 
      alt="JF" 
      className={`${className} object-contain`}
    />
  );
};

export default Logo;