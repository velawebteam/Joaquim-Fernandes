import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import { useLanguage } from '../context/LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Defensive guard
  if (!t || !t.faqs) {
    return null;
  }

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Helper function to detect URLs in text and convert them to links
  const renderAnswerWithLinks = (text: string) => {
    // Regex to split by URLs (http/https)
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    // Split the text. The regex capturing group () ensures the URL is included in the result array
    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-accent font-bold hover:underline break-words"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <SEO 
        title={t.seo.faqs.title} 
        description={t.seo.faqs.description} 
        url="/perguntas-frequentes"
      />

      {/* 1. HERO SECTION (Standardized) */}
      <div className="bg-corporate py-16 mb-16 text-center text-white relative">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.faqs.heroTitle}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light text-base md:text-lg">
            {t.faqs.heroDesc}
          </p>
        </div>
        {/* Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-light rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* 2. FAQ CONTENT */}
      <div className="container mx-auto px-4 md:px-12 max-w-5xl">
         
         <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
               <div className="h-0.5 w-12 bg-brand-light"></div>
               <span className="text-2xl font-bold text-corporate font-heading tracking-widest">
                  FAQS
               </span>
               <div className="h-0.5 w-12 bg-brand-light"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-corporate font-heading uppercase">
               {t.faqs.sectionTitle}
            </h2>
         </div>

         <div className="space-y-4">
            {t.faqs.list.map((item: any, index: number) => (
               <div key={index} className="border-b border-gray-100 last:border-0">
                  <button 
                     onClick={() => toggleAccordion(index)}
                     className={`w-full text-left py-5 px-6 flex justify-between items-center transition-colors duration-300 ${
                        activeIndex === index ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                     }`}
                  >
                     <span className="font-bold text-gray-800 text-sm md:text-base pr-4 font-heading uppercase tracking-wide">
                        {item.q}
                     </span>
                     <span className="text-accent shrink-0">
                        {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                     </span>
                  </button>
                  
                  <AnimatePresence>
                     {activeIndex === index && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           className="overflow-hidden"
                        >
                           <div className="p-6 bg-gray-50 text-gray-600 font-body text-sm leading-relaxed whitespace-pre-line">
                              {/* Use the helper function to render content with clickable links */}
                              {item.a ? renderAnswerWithLinks(item.a) : (
                                 <span className="italic text-gray-400">Resposta em atualização... / Answer being updated...</span>
                              )}
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            ))}
         </div>

         {/* 3. STILL HAVE QUESTIONS CTA */}
         <div className="mt-16 text-center bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-corporate font-heading uppercase mb-4">
               Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
               Não encontrou a resposta que procurava? Entre em contacto com a nossa equipa.
            </p>
            <CTAButton 
               to="/contacto" 
               text="Contacte-nos" 
               variant="primary" 
            />
         </div>

      </div>
    </div>
  );
};

export default FAQ;