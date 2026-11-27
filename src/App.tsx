import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import Careers from '@/pages/Careers';
import Lighting from '@/pages/Lighting';
import Partners from '@/pages/Partners';
import ServiceDetail from '@/pages/ServiceDetail';
import QualityPolicy from '@/pages/QualityPolicy';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import CookiePolicy from '@/pages/CookiePolicy';
import TermsConditions from '@/pages/TermsConditions';
import FAQ from '@/pages/FAQ';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

// Helper to scroll to top on route change (skips remount on language switch)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const { language } = useLanguage();
  const basename = language === 'pt' ? undefined : `/${language}`;

  return (
    <React.Fragment key={language}>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-body text-secondary bg-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/iluminacao" element={<Lighting />} />
              <Route path="/parceiros" element={<Partners />} />
              <Route path="/recrutamento" element={<Careers />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/politica-qualidade" element={<QualityPolicy />} />
              <Route path="/privacidade" element={<PrivacyPolicy />} />
              <Route path="/politica-cookies" element={<CookiePolicy />} />
              <Route path="/termos" element={<TermsConditions />} />
              <Route path="/perguntas-frequentes" element={<FAQ />} />
              <Route path="/:id" element={<ServiceDetail />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
