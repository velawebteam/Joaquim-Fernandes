import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const hasConsented = localStorage.getItem('cookie-consent');
      setIsVisible(!hasConsented);
    };
    checkConsent();
    window.addEventListener('cookie-consent-updated', checkConsent);
    return () => window.removeEventListener('cookie-consent-updated', checkConsent);
  }, []);

  const handleChoice = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie-consent', choice);
    setIsVisible(false);
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  if (!isVisible || !t?.cookieBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-4 py-4 md:px-8 z-50 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-2xl border-t border-gray-700">
      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-4xl">
        {t.cookieBanner.message}{' '}
        <Link
          to="/politica-cookies"
          className="text-brand-light underline hover:text-white transition-colors font-semibold"
        >
          {t.cookieBanner.policyLink}
        </Link>
        .
      </p>
      <div className="flex flex-wrap gap-3 shrink-0 w-full lg:w-auto justify-end">
        <button
          type="button"
          onClick={() => handleChoice('rejected')}
          className="border border-gray-500 text-gray-200 hover:bg-gray-800 hover:text-white px-5 py-2 rounded-sm font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
        >
          {t.cookieBanner.reject}
        </button>
        <button
          type="button"
          onClick={() => handleChoice('accepted')}
          className="bg-brand-light text-corporate hover:bg-white px-5 py-2 rounded-sm font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
        >
          {t.cookieBanner.accept}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
