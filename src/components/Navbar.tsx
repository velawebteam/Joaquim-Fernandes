import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo.tsx';
import { useLanguage, Language } from '../context/LanguageContext.tsx';

const LanguageSwitcher = ({ 
  isMobile = false, 
  showSolidNav, 
  isOpen 
}: { 
  isMobile?: boolean; 
  showSolidNav: boolean; 
  isOpen?: boolean;
}) => {
  const { language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const languages: { code: Language; label: string; name: string }[] = [
    { code: 'pt', label: 'PT', name: 'Português' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'es', label: 'ES', name: 'Español' },
    { code: 'fr', label: 'FR', name: 'Français' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isDarkText = showSolidNav || (isMobile && isOpen);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`flex items-center gap-1.5 font-bold text-xs uppercase py-1.5 px-3 border rounded transition-all whitespace-nowrap ${
          isDarkText
            ? 'border-gray-200 text-corporate hover:border-brand-light hover:text-brand-light bg-white/80 backdrop-blur-sm' 
            : 'border-white/50 text-white hover:bg-white hover:text-corporate drop-shadow-md bg-black/20 backdrop-blur-sm'
        }`}
        aria-label="Select Language"
      >
        <span>{currentLang.label}</span>
        <ChevronDown size={12} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`absolute top-full right-0 mt-2 w-36 bg-white rounded shadow-xl border border-gray-100 overflow-hidden z-50 transition-all duration-200 origin-top-right ${
          isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
        }`}
      >
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsDropdownOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors flex items-center justify-between ${
                language === lang.code 
                  ? 'bg-brand-light/10 text-brand-light' 
                  : 'text-corporate hover:bg-gray-50'
              }`}
            >
              <span>{lang.name}</span>
              <span className="text-[10px] opacity-60">{lang.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isHome = location.pathname === '/';
  // Force solid navbar style if scrolled OR if we are NOT on the home page
  const showSolidNav = isScrolled || !isHome;

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Defensive check
  if (!t || !t.nav) {
    return null;
  }

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/sobre' },
    { name: t.nav.services, path: '/servicos' },
    { name: t.nav.partners, path: '/parceiros' },
    { name: t.nav.careers, path: '/recrutamento' },
    { name: t.nav.contact, path: '/contacto' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        showSolidNav ? 'bg-white shadow-md py-3' : 'bg-transparent py-4 md:py-5'
      }`}
    >
      {/* Logo Container - Aligned with Site Content (Container) */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="container mx-auto px-4 md:px-12">
          <Link to="/" className="inline-flex items-center gap-3 md:gap-4 group relative z-50 pointer-events-auto" aria-label="Joaquim & Fernandes">
            <div className="hover:scale-105 transition-transform duration-300">
              {/* Adjusted logo size for mobile vs desktop */}
              <Logo className="h-12 w-12 md:h-20 md:w-20" />
            </div>
            <span className={`font-heading font-bold text-[18px] tracking-wider uppercase transition-colors ${showSolidNav ? 'text-corporate' : 'text-white drop-shadow-lg'}`}>
              Joaquim & Fernandes, Lda
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation Container - Min height ensures navbar size is maintained */}
      <div className="w-full px-4 md:px-8 flex justify-end items-center relative z-50 pointer-events-none min-h-[3rem] md:min-h-[5rem]">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold text-xs xl:text-sm uppercase tracking-wide transition-colors hover:text-brand-light whitespace-nowrap ${
                location.pathname === link.path 
                  ? 'text-brand-light' 
                  : (showSolidNav ? 'text-corporate' : 'text-white drop-shadow-md')
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <LanguageSwitcher showSolidNav={showSolidNav} />

          <Link
            to="/contacto"
            className="bg-accent hover:bg-[#2A3345] text-white font-bold py-2 px-6 rounded-sm transition-colors uppercase text-xs tracking-widest shadow-lg border-b-2 border-transparent hover:border-brand-light whitespace-nowrap"
          >
            {t.nav.quote}
          </Link>
        </div>

        {/* Mobile Menu Button - Z-Index 50 to stay above menu overlay */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3 relative z-50 pointer-events-auto">
          <LanguageSwitcher isMobile showSolidNav={showSolidNav} isOpen={isOpen} />

          <button
            className={`p-2 rounded shadow-sm transition-colors ${
              showSolidNav || isOpen ? 'text-corporate bg-gray-100' : 'text-white bg-black/20 backdrop-blur-sm'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Screen for better UX */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex-grow overflow-y-auto px-6 pb-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-4 text-xl font-semibold uppercase tracking-wide border-b border-gray-100 ${
                   location.pathname === link.path ? 'text-brand-light' : 'text-corporate'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 mt-auto border-t border-gray-200">
          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-accent hover:bg-[#2A3345] text-center text-white font-bold py-4 rounded shadow-md uppercase text-sm tracking-widest transition-colors mb-4"
          >
            {t.nav.quote}
          </Link>
          <p className="text-center text-xs text-gray-400">
            JF &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;