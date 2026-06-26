import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Careers from './pages/Careers.tsx';
import Lighting from './pages/Lighting.tsx';
import Partners from './pages/Partners.tsx';
import ServiceDetail from './pages/ServiceDetail.tsx';
import QualityPolicy from './pages/QualityPolicy.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsConditions from './pages/TermsConditions.tsx';
import FAQ from './pages/FAQ.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';

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
