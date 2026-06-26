import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  to: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, to, variant = 'primary', className = '' }) => {
  const baseStyles = "py-3 px-8 rounded-sm font-bold uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1 inline-block text-center";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      // Blue Base -> Darker Blue Hover
      variantStyles = "bg-accent text-white hover:bg-[#2A3345] shadow-lg hover:shadow-xl border-b-2 border-transparent hover:border-brand-light";
      break;
    case 'accent':
      // Corporate Blue -> Accent Hover
      variantStyles = "bg-corporate text-white hover:bg-accent shadow-lg hover:shadow-xl border-b-2 border-transparent hover:border-brand-light";
      break;
    case 'secondary':
      variantStyles = "bg-corporate text-white hover:bg-accent shadow-lg border-b-2 border-transparent hover:border-brand-light";
      break;
    case 'outline':
      variantStyles = "border-2 border-white text-white hover:bg-white hover:text-accent";
      break;
  }

  return (
    <Link to={to} className={`${baseStyles} ${variantStyles} ${className}`}>
      {text}
    </Link>
  );
};

export default CTAButton;