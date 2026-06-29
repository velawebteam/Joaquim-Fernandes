import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import CTAButton from '@/components/CTAButton';
import { useLanguage } from '@/context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  // Defensive check: Ensure translations are loaded
  if (!t || !t.services) {
    return null;
  }

  // Mapping images (could be in translation file or static, keeping static here but mapped by ID)
  const getImage = (id: string) => {
    switch(id) {
        case 'plrs': return "https://drive.google.com/thumbnail?id=1aO8Fz5mHCGNCzvOYG709XORsodUGheQJ&sz=w1000";
        case 'infraestruturas': return "https://drive.google.com/thumbnail?id=1kgeaUZc389LWYR_zGlPRgMmmkA3V2cHV&sz=w1000";
        case 'telecomunicacoes': return "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop";
        case 'postos-transformacao': return "https://drive.google.com/thumbnail?id=1u7DLNgNbHwWHuej4Omw7iR6YJ054n1UA&sz=w1000";
        case 'instalacoes': return "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop";
        case 'projetos': return "https://drive.google.com/thumbnail?id=1XcIH3U-OGPbbRxaJZGRkjg3zOUH02I13&sz=w1000";
        case 'outros': return "https://drive.google.com/thumbnail?id=16EZQLSNq5Mu1vrMN4bX7AzQGVm2Q5Nq5&sz=w1000";
        case 'iluminacao': return "https://drive.google.com/thumbnail?id=1Q7Ak5kMhDW4Xxk9VWPrOu5mThEKDGo0x&sz=w1000";
        default: return "https://picsum.photos/seed/electricity/800/600";
    }
  };

  return (
    <div className="pt-24 pb-0 bg-white overflow-x-hidden">
      <SEO 
        title={t.seo.services.title} 
        description={t.seo.services.description} 
        url="/servicos"
      />
      <div className="bg-corporate py-16 mb-16 text-center text-white">
        <div className="container mx-auto px-4 md:px-12">
          <h1 className="text-3xl md:text-4xl font-bold uppercase font-heading mb-4">{t.services.heroTitle}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light text-base md:text-lg">
            {t.services.heroDesc}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 flex flex-col gap-12 md:gap-24 mb-24">
        {t.services.categories?.map((service: any, index: number) => (
          <motion.div 
            key={service.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-12 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              {/* Desktop Hover Border */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-light rounded-sm z-0 transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 hidden md:block"></div>
              
              {/* Mobile/Desktop Image */}
              <motion.img 
                src={getImage(service.id)} 
                alt={service.title} 
                whileInView={{ scale: [0.95, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative z-10 w-full rounded-sm shadow-lg md:grayscale md:group-hover:grayscale-0 transition-all duration-500 object-cover h-[220px] md:h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold uppercase text-corporate mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed font-body">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8">
                {service.details?.map((detail: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <span className="bg-detail p-1 rounded-full shrink-0"><Check size={12} className="text-accent" /></span>
                    {detail}
                  </li>
                ))}
              </ul>

              <CTAButton 
                to={`/${service.id}`} 
                text={t.common.seeMore}
                variant="primary"
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom CTA Section - Full Width, No Card, Diagonal Gradient */}
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
               {t.services.notFoundTitle}
             </h2>
             <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto">{t.services.notFoundDesc}</p>
             <CTAButton 
               to="/contacto" 
               text={t.services.notFoundCta}
               variant="white"
             />
           </motion.div>
         </div>
      </div>
    </div>
  );
};

export default Services;