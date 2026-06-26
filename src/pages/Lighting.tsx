import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import CTAButton from '@/components/CTAButton';
import { useLanguage } from '@/context/LanguageContext';

const Lighting: React.FC = () => {
  const { t } = useLanguage();

  // Defensive guard against undefined translations
  if (!t || !t.lighting) {
    return null;
  }

  return (
    <div className="pt-24 pb-0 bg-white overflow-x-hidden">
      <SEO 
        title={t.seo.lighting?.title || "Iluminação | JF"} 
        description={t.seo.lighting?.description || "Soluções de Iluminação Festiva, Pública e Arquitetural."} 
        url="/iluminacao"
      />

      {/* 1. HEADER / HERO (Standardized with Background Image) */}
      <div className="relative h-[40vh] min-h-[300px] md:h-[60vh] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://drive.google.com/thumbnail?id=1Q7Ak5kMhDW4Xxk9VWPrOu5mThEKDGo0x&sz=w1000" 
            alt={t.lighting.heroTitle} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-corporate/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-12 relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-wider">
              {t.lighting.heroTitle}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* 2. INTRO */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >

               <p className="text-lg text-gray-600 leading-relaxed font-body">
                 {t.lighting.introDesc}
               </p>

             </motion.div>
          </div>
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-brand-light/20 rounded-lg blur-xl transform -rotate-2"></div>
             <img 
               src="https://drive.google.com/thumbnail?id=1Q7Ak5kMhDW4Xxk9VWPrOu5mThEKDGo0x&sz=w1000" 
               alt="Festive Lighting" 
               className="relative rounded-lg shadow-2xl z-10 w-full h-[400px] object-cover object-center"
             />
          </div>
        </div>
      </section>

      {/* 3. LIGHTING TYPES SECTIONS (Alternating) */}
      <section className="bg-white">
        {t.lighting.types?.map((type: any, index: number) => (
          <div 
            key={index} 
            className={`py-20 md:py-28 overflow-hidden ${index % 2 === 0 ? 'bg-detail' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4 md:px-12">
              <div className={`flex flex-col gap-12 lg:gap-24 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group">
                    <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-full h-full border-2 border-accent rounded-lg z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                    <img 
                      src={type.image} 
                      alt={type.title} 
                      className="relative z-10 w-full h-[300px] md:h-[450px] object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <h3 className="text-3xl md:text-4xl font-bold uppercase text-corporate mb-6 font-heading">
                    {type.title}
                  </h3>

                  
                  {type.applications && (
                    <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm mb-8">
                      <h4 className="font-bold text-corporate mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                        {type.applicationsTitle || "Onde aplicamos"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {type.applications?.map((app: string, i: number) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle size={18} className="text-accent shrink-0" />
                            <span className="text-sm text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex mb-8">
                    <CTAButton 
                      to="/contacto?subject=orcamento&interest=lighting" 
                      text={t.common.requestService}
                      variant="primary"
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 5. CTA */}
      <div className="w-full py-12 md:py-16 bg-[linear-gradient(105deg,#3B455B_60%,#252B3B_60.1%)] text-center relative z-10 border-t-4 border-brand-light">
         {/* Abstract Decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>
         
         <div className="container mx-auto px-4 md:px-12 relative z-10">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
           >
             <h2 className="text-2xl md:text-3xl font-bold uppercase text-white mb-2 font-heading tracking-wide">
               {t.lighting.ctaTitle}
             </h2>
             <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto">{t.lighting.ctaDesc}</p>
             <CTAButton 
               to="/contacto?subject=orcamento&interest=lighting" 
               text={t.lighting.ctaButton}
               variant="white"
             />
           </motion.div>
         </div>
      </div>

    </div>
  );
};

export default Lighting;
