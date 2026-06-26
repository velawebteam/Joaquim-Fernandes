import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, Tag, ShieldCheck, ImageIcon } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  if (!t) return null;

  // Helper to map images (reused logic for consistency)
  const getImage = (serviceId: string) => {
    switch(serviceId) {
        case 'projetos': return "https://drive.google.com/thumbnail?id=1XcIH3U-OGPbbRxaJZGRkjg3zOUH02I13&sz=w1000";
        case 'plrs': return "https://drive.google.com/thumbnail?id=1aO8Fz5mHCGNCzvOYG709XORsodUGheQJ&sz=w1000";
        case 'infraestruturas': return "https://drive.google.com/thumbnail?id=1kgeaUZc389LWYR_zGlPRgMmmkA3V2cHV&sz=w1000";
        case 'instalacoes': return "https://drive.google.com/thumbnail?id=1vFfKmmmxVzPktDOZ4YNYDGFVjO-oTpWy&sz=w1000";
        case 'postos-transformacao': return "https://drive.google.com/thumbnail?id=1u7DLNgNbHwWHuej4Omw7iR6YJ054n1UA&sz=w1000";
        case 'ev_charging': return "https://picsum.photos/seed/evcharging/1920/1080";
        case 'telecomunicacoes': return "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop";
        case 'outros': return "https://drive.google.com/thumbnail?id=16EZQLSNq5Mu1vrMN4bX7AzQGVm2Q5Nq5&sz=w1000";
        case 'iluminacao': return "https://drive.google.com/thumbnail?id=1Q7Ak5kMhDW4Xxk9VWPrOu5mThEKDGo0x&sz=w1000";
        default: return "https://picsum.photos/seed/electricity/1920/1080";
    }
  };

  // Helper to get Gallery Images (Mock data based on ID seed)
  const getGalleryImages = (serviceId: string) => {
     if (serviceId === 'instalacoes') {
        return [
           "https://drive.google.com/thumbnail?id=18H9oeluLrp2JTrcPU-HvdltEGU2dco0M&sz=w1000",
           "https://drive.google.com/thumbnail?id=1bivaf-8uCZMYJdYoFjOpcL1LORdMEYaQ&sz=w1000",
           "https://drive.google.com/thumbnail?id=1Uov_V6c6-7YOooxPbtmgeiGilbOd8la0&sz=w1000",
        ];
     }
     if (serviceId === 'outros') {
        return [
           "https://drive.google.com/thumbnail?id=1uPRfbqyXmDv7lH31jgfDEi587Ct7AJZ6&sz=w1000",
           "https://drive.google.com/thumbnail?id=16EZQLSNq5Mu1vrMN4bX7AzQGVm2Q5Nq5&sz=w1000",
           "https://drive.google.com/thumbnail?id=1w2hNFrkGTVNxI0H2Brl3KBE13aX_0SEY&sz=w1000",
           "https://drive.google.com/thumbnail?id=1adtAn85YzIk-VygRQnSokR46zimX1cwd&sz=w1000",
           "https://drive.google.com/thumbnail?id=1hnViOlbPqzatOL9DxAPv5Cojdmf-Sqjs&sz=w1000",
           "https://drive.google.com/thumbnail?id=1yhWe6Ae9YJGb6Wf9H0399AlXwGsvW6mc&sz=w1000",
           "https://drive.google.com/thumbnail?id=1jlP6-bjzZOcjhE5kIzieU2mQ0X_H1pdh&sz=w1000",
        ];
     }
     if (serviceId === 'plrs') {
        return [
           "https://drive.google.com/thumbnail?id=1kNQX2zzIbh4SXP66__t4nRBLULjryBiY&sz=w1000",
           "https://drive.google.com/thumbnail?id=12VNxerQUOpcAAqu3Q5Zo09XxiRHAcSUk&sz=w1000",
           "https://drive.google.com/thumbnail?id=17stwA_y-kuEybGTqiyT0T2sLoKf8PUKI&sz=w1000",
           "https://drive.google.com/thumbnail?id=1aO8Fz5mHCGNCzvOYG709XORsodUGheQJ&sz=w1000",
        ];
     }
     if (serviceId === 'telecomunicacoes') {
        return [
           "https://drive.google.com/thumbnail?id=1rEEVbgbvpruwpq_C--flPkId4qEadBEm&sz=w1000",
           "https://drive.google.com/thumbnail?id=1tUitwRQLrDmxwwf13W2egLL6WOrgAqM0&sz=w1000",
           "https://drive.google.com/thumbnail?id=1_ZQPdx8k_t1ySVh7UFWBPYvmS86zljmn&sz=w1000",
        ];
     }
     if (serviceId === 'postos-transformacao') {
        return [
           "https://drive.google.com/thumbnail?id=1lH-G3b8HENvyb0RVTYJCZZIZO5oMPq-u&sz=w1000",
           "https://drive.google.com/thumbnail?id=1ET2-rNTDUDfwTcVrBrqoa9r2JfuSysK1&sz=w1000",
           "https://drive.google.com/thumbnail?id=1w6TZRjJmS6cxIiAV-BHNmyzEubZD_fe6&sz=w1000",
        ];
     }
     if (serviceId === 'projetos') {
        return [
           "https://drive.google.com/thumbnail?id=1FBv-lypBW849rd90iFFPReI6FZLZUn8a&sz=w1000",
           "https://drive.google.com/thumbnail?id=1Pk1M5dRC0NlcICICcoHEFM2tAhiQ0x6G&sz=w1000",
           "https://drive.google.com/thumbnail?id=17wXC9EXJZRBE__G0xp9jxK2R0pWbakGc&sz=w1000",
        ];
     }
     if (serviceId === 'infraestruturas') {
        return [
           "https://drive.google.com/thumbnail?id=1bG7V0Qp7dWD2oC3zXP1Bgm0UpJdJxDGw&sz=w1000",
           "https://drive.google.com/thumbnail?id=1322b6omK4CcuAeWKzN8lHzKJEC5kBho0&sz=w1000",
           "https://drive.google.com/thumbnail?id=1L_NPl3ANcvtx03wm5-RKvP_81HSBN_oy&sz=w1000",
        ];
     }
     return [
        `https://picsum.photos/seed/${serviceId}1/600/400`,
        `https://picsum.photos/seed/${serviceId}2/600/400`,
        `https://picsum.photos/seed/${serviceId}3/600/400`,
     ];
  };

  // Safe check if service exists
  const serviceData = t.serviceDetails && id && t.serviceDetails[id] ? t.serviceDetails[id] : null;

  if (!serviceData) {
    return (
      <div className="pt-32 pb-20 text-center container mx-auto px-6">
        <SEO title="Serviço Não Encontrado | JF" description="O serviço que procura não foi encontrado." />
        <h2 className="text-2xl font-normal text-corporate mb-4">Serviço não encontrado / Service not found</h2>
        <CTAButton to="/servicos" text="Voltar / Back" variant="secondary" />
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Dynamic SEO based on service data */}
      <SEO 
        title={`${serviceData.seoTitle} | JF`} 
        description={serviceData.seoDescription || serviceData.description} 
        url={`/${id}`}
      />

      {/* 1. SEO HERO SECTION */}
      {/* Adjusted min-height for mobile to avoid taking up entire screen if not needed */}
      <div className="relative h-[40vh] min-h-[300px] md:h-[60vh] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImage(id || '')} 
            alt={serviceData.seoTitle} 
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
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-4xl mx-auto px-2 uppercase">
              {serviceData.seoTitle}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-12 md:py-16">
        
        {/* Breadcrumb / Back Link */}
        <Link to="/servicos" className="inline-flex items-center text-gray-500 hover:text-brand-light mb-8 md:mb-12 transition-colors font-semibold text-sm">
          <ArrowLeft size={16} className="mr-2" /> {t.nav.services}
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Content Area */}
          <div className="w-full lg:w-2/3">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-corporate mb-6 md:mb-8 border-l-4 border-brand-light pl-4 uppercase">
                {serviceData.title}
              </h2>
              <div className="prose prose-lg text-gray-600 font-body leading-relaxed mb-12 text-sm md:text-base text-justify">
                <p>{serviceData.fullText}</p>
              </div>

              {/* FEATURES LIST */}
              <h3 className="text-2xl font-bold font-heading text-corporate mb-6 md:mb-8 uppercase tracking-wide">
                 {t.services.featuresTitle || "O QUE INCLUÍMOS"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-16">
                {serviceData.features.map((feature: any, index: number) => {
                  const isObject = typeof feature === 'object' && feature !== null;
                  const title = isObject ? feature.title : feature;
                  const description = isObject ? feature.description : null;
                  const bullets = isObject ? feature.bullets : null;

                  return (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`bg-[#f8f8f8] p-5 md:p-6 rounded-sm ${isObject ? 'md:col-span-2' : ''} flex flex-col`}
                    >
                      <div className={`flex ${isObject && bullets ? 'items-start' : 'items-center'} gap-4`}>
                        <Check size={20} className="text-accent shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-corporate font-bold text-sm md:text-base uppercase tracking-tight">{title}</span>
                          {description && (
                            <p className="text-gray-500 text-xs md:text-sm mt-1 leading-relaxed">
                              {description}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {bullets && bullets.length > 0 && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-gray-200 pt-4">
                          {bullets.map((bullet: string, bIdx: number) => (
                            <div key={bIdx} className="flex items-center gap-2 text-gray-500 text-xs">
                              <div className="w-1 h-1 rounded-full bg-accent shrink-0"></div>
                              {bullet}
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* BENEFITS SECTION - NEW */}
              {serviceData.benefits && (
                <div className="mb-16">
                   <h3 className="text-lg md:text-xl font-bold text-corporate mb-6 uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck className="text-brand-light" /> Porquê a JF?
                   </h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {serviceData.benefits.map((benefit: any, index: number) => (
                         <div key={index} className="bg-white p-6 rounded shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <h4 className="text-corporate font-bold mb-2 text-base">{benefit.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                         </div>
                      ))}
                   </div>
                </div>
              )}

              {/* GALLERY SECTION - NEW */}
              {id !== 'projetos' && (
                <div className="mb-12">
                   <h3 className="text-lg md:text-xl font-bold text-corporate mb-6 uppercase tracking-wider flex items-center gap-2">
                      <ImageIcon className="text-brand-light" /> Galeria
                   </h3>
                   <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                      {getGalleryImages(id || 'default').map((img, index) => (
                         <div key={index} className={`rounded-lg overflow-hidden h-48 md:h-48 relative group ${index === 0 && !['outros', 'instalacoes', 'plrs', 'projetos', 'postos-transformacao', 'telecomunicacoes', 'infraestruturas', 'ev_charging'].includes(id || '') ? 'md:col-span-2 md:h-full' : ''}`}>
                            <img 
                               src={img} 
                               alt="Exemplo de Obra" 
                               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                         </div>
                      ))}
                   </div>
                </div>
              )}

            </motion.div>
          </div>

          {/* Sidebar / CTA Area */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              {/* Call to Action Box */}
              <div className="bg-corporate text-white p-6 md:p-8 rounded-lg shadow-xl mb-8">
                <h3 className="text-xl md:text-2xl font-bold font-heading mb-4">Pronto para avançar?</h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Fale com a nossa equipa técnica especializada para obter um orçamento personalizado para o seu projeto.
                </p>
                <Link 
                  to={`/contact?subject=orcamento&interest=${id}`}
                  className="block w-full text-center bg-white hover:bg-detail text-accent font-bold py-3 px-6 rounded transition-colors uppercase tracking-widest text-sm"
                >
                  {t.nav.quote}
                </Link>
              </div>

              {/* SEO Keyword Cloud (Visible) */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
                <h4 className="flex items-center gap-2 font-bold text-corporate mb-4 text-sm uppercase tracking-wider">
                  <Tag size={16} className="text-brand-light" /> Áreas de Foco
                </h4>
                <div className="flex flex-wrap gap-2">
                  {serviceData.keywords.map((keyword: string, index: number) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-brand-light/20 transition-colors">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Navigation Area - Centered Content with Blue Background */}
      <div className="w-full py-16 bg-[#3B455B] md:bg-[linear-gradient(105deg,#3B455B_60%,#252B3B_60.1%)] text-center">
        <div className="container mx-auto px-4 md:px-6">
           <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-wide">
             Explore outros serviços
           </h3>
           <CTAButton 
             to="/servicos" 
             text="Ver todos os serviços" 
             variant="outline" 
             className="text-white border-white hover:bg-white hover:text-[#3B455B]" 
           />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;