import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  to: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  to, 
  text, 
  variant = 'primary', 
  className = '',
  onClick 
}) => {
  const baseStyles = "py-3 px-8 rounded-sm font-bold uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1 inline-block text-center shadow-lg hover:shadow-xl border-b-2 border-transparent";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-[#2A3345] hover:border-brand-light",
    secondary: "bg-corporate text-white hover:bg-accent",
    outline: "border-2 border-corporate text-corporate hover:bg-corporate hover:text-white shadow-none",
    white: "border-2 border-white text-white hover:bg-white hover:text-corporate"
  };

  const selectedVariant = variants[variant] || variants.primary;
  const combinedClassName = `${baseStyles} ${selectedVariant} ${className}`;

  const isExternal = to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:');

  if (isExternal) {
    return (
      <a 
        href={to} 
        className={combinedClassName}
        onClick={onClick}
        target={to.startsWith('http') ? "_blank" : undefined}
        rel={to.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    );
  }

  return (
    <Link 
      to={to} 
      className={combinedClassName}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default CTAButton;
