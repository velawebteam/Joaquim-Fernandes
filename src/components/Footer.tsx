import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  // Defensive check: Ensure translations are available
  if (!t || !t.footer || !t.nav) {
    return null;
  }

  return (
    <footer className="bg-corporate text-white pt-16 pb-8 border-t-4 border-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        {/* Adjusted gap for mobile (gap-4) to accommodate wider email text */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10 mb-12">
          
          {/* Company Info - Full width on mobile/tablet, 1 col on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-6 hover:opacity-90 transition-opacity" aria-label="JF - Início">
               <img 
                 src="https://drive.google.com/thumbnail?id=1BTpjyYhqw2fL_Dr_f9f1S_3ylE8dXwi5&sz=w1000" 
                 alt="Joaquim & Fernandes" 
                 className="h-24 w-24 object-contain"
                 referrerPolicy="no-referrer"
               />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-body max-w-md">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/JoaquimFernandes86?locale=pt_PT" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-brand-light transition-colors text-white" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/in/joaquim-e-fernandes-174561368" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-brand-light transition-colors text-white" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/joaquim_fernandes86/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-brand-light transition-colors text-white" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/351937700906" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-[#25D366] transition-colors text-white" aria-label="WhatsApp">
                {/* Official WhatsApp Icon SVG */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold font-heading mb-6 border-b-2 border-brand-light inline-block pb-1">{t.footer.navTitle}</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/iluminacao" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.lighting}</Link></li>
              <li><Link to="/parceiros" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.partners}</Link></li>
              <li><Link to="/recrutamento" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.careers}</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-brand-light transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contacts & Support - Right aligned on mobile/tablet (icon right), Left on desktop (icon left) */}
          <div className="col-span-1 text-right lg:text-left">
            <h4 className="text-lg font-bold font-heading mb-6 border-b-2 border-brand-light inline-block pb-1">{t.footer.contactTitle}</h4>
            <ul className="space-y-4 font-body text-sm mb-8">
              <li className="flex items-start gap-3 flex-row-reverse lg:flex-row">
                <MapPin size={18} className="text-brand-light shrink-0 mt-1" />
                <span className="text-gray-400">{t.common.address}<br />{t.common.city}</span>
              </li>
              <li className="flex items-center gap-3 flex-row-reverse lg:flex-row">
                <Phone size={18} className="text-brand-light shrink-0" />
                <a href="tel:+351289790500" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">+351 289 790 500</a>
              </li>
              <li className="flex items-center gap-3 flex-row-reverse lg:flex-row">
                <Mail size={18} className="text-brand-light shrink-0" />
                <a href="mailto:mail@joaquimfernandes.pt" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap text-sm">mail@joaquimfernandes.pt</a>
              </li>
            </ul>

            {/* FAQs CTA - Desktop Only (Hidden on Mobile/Tablet) */}
             <Link 
               to="/perguntas-frequentes"
               className="hidden lg:inline-flex items-center bg-brand-light hover:bg-white text-corporate font-bold py-3 px-6 rounded-sm text-xs uppercase tracking-widest transition-colors w-full justify-center shadow-lg"
             >
               FAQS
             </Link>
          </div>

          {/* FAQs CTA - Mobile/Tablet Only (Full Width below nav/contacts) */}
          <div className="col-span-2 lg:hidden">
             <Link 
               to="/perguntas-frequentes"
               className="inline-flex items-center bg-brand-light hover:bg-white text-corporate font-bold py-3 px-6 rounded-sm text-xs uppercase tracking-widest transition-colors w-full justify-center shadow-lg"
             >
               FAQS
             </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-body">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-center md:text-left w-full justify-between">
             <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
               <span>&copy; {new Date().getFullYear()} JF. {t.footer.rights}</span>
               <span className="hidden md:inline text-gray-700">|</span>
               <span>
                 {t.footer.designedBy} <a href="https://agencia-vela.com" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-white transition-colors font-medium">Agência Vela</a>
               </span>
             </div>
             <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
               <Link to="/politica-qualidade" className="hover:text-white transition-colors">{t.footer.quality}</Link>
               <Link to="/privacidade" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
               <Link to="/termos" className="hover:text-white transition-colors">{t.footer.terms}</Link>
               <a 
                 href="https://www.livroreclamacoes.pt/Inicio/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-white transition-colors"
               >
                 {t.footer.complaintsBook}
               </a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;