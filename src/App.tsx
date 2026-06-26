import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Careers from './pages/Careers';
import Lighting from './pages/Lighting';
import Partners from './pages/Partners';
import ServiceDetail from './pages/ServiceDetail';
import QualityPolicy from './pages/QualityPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import FAQ from './pages/FAQ';
import { LanguageProvider } from './context/LanguageContext';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
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
              <Route path="/termos" element={<TermsConditions />} />
              <Route path="/perguntas-frequentes" element={<FAQ />} />
              <Route path="/:id" element={<ServiceDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
