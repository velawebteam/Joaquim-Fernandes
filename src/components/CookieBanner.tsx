import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border-t border-gray-700">
      <p className="text-sm">
        Utilizamos cookies para melhorar a sua experiência no nosso site. Ao continuar a navegar, concorda com a nossa política de cookies.
      </p>
      <div className="flex gap-4">
        <button
          onClick={acceptCookies}
          className="bg-accent text-white px-6 py-2 rounded-sm font-bold text-sm hover:bg-brand-light transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
