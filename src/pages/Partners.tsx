import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import CTAButton from '@/components/CTAButton';
import { useLanguage } from '@/context/LanguageContext';

const Partners: React.FC = () => {
  const { t } = useLanguage();

  if (!t || !t.partners) {
    return null;
  }

  // Define slots including new partners
  const partnerSlots = [
    { type: "Iluminação técnica e decorativa", image: "https://drive.google.com/thumbnail?id=1YWtgccMsUVmbhQwtq7R-9sPZs8fAcQ1j&sz=w1000", url: "https://svelux.pt/", scaleClass: "scale-75" },
    { type: "Iluminação de Consumo", image: "https://drive.google.com/thumbnail?id=1nA3TaycESag22H2i6yHZWwiXZdQrocRu&sz=w1000", url: "https://www.signify.com/pt-pt", scaleClass: "scale-75" },
    { type: "Iluminação Exterior e Inteligente", image: "https://drive.google.com/thumbnail?id=1biPaxNPG6UvOAi_mRwCSRWCHDVT7ROD6&sz=w1000", url: "https://pt.schreder.com/pt", scaleClass: "scale-125" },
    { type: "Distribuição Especializada de Iluminação", image: "https://drive.google.com/thumbnail?id=11UxCCFrwhbG3HLlCELz9N2bZAl1EGh7t&sz=w1000", url: "https://ltx.pt/", scaleClass: "scale-125" },
    { type: "Fornecimento de Soluções de Iluminação", image: "https://drive.google.com/thumbnail?id=1S7vI_w9u3nisrikfI1S6MGMEKOPRwArf&sz=w1000", url: "", scaleClass: "scale-125" },
    { type: "Produtos de Iluminação", image: "https://drive.google.com/thumbnail?id=1Dqpjjc_nzbyKAINwRPvIvxCUCZ4o4fAD&sz=w1000", url: "https://www.philips.pt/" },
    { type: "Gestão de Energia e Automação Elétrica", image: "https://drive.google.com/thumbnail?id=1dbgZWvOZCDqKhheNhfOiBHlOqwP0DxHe&sz=w1000", url: "https://www.se.com/pt/pt/", scaleClass: "scale-75" },
    { type: "Soluções para Instalações Elétricas", image: "https://drive.google.com/thumbnail?id=1XdM8m5-kAKe-RE74bY-fclHSKD4Yql7k&sz=w1000", url: "https://www.obo.pt/", scaleClass: "scale-125" },
    { type: "Cabos Elétricos e de Telecomunicações", image: "https://drive.google.com/thumbnail?id=1-CeBT03xZhaDgN2QhjQK8BoDXPY-NBU9&sz=w1000", url: "https://www.cabelte.pt/", scaleClass: "scale-75" },
    { type: "Tecnologias e Equipamentos Elétricos", image: "https://drive.google.com/thumbnail?id=1MB83AcEQTQKM7_AtND5pn8xp4YHWi1H7&sz=w1000", url: "https://www.bosch.pt/", scaleClass: "scale-75" },
    { type: "Material Elétrico de Baixa Tensão", image: "https://drive.google.com/thumbnail?id=1K44hESgxmLh_hfqtGnI4bbOehA0MSW1m&sz=w1000", url: "https://www.efapel.pt/", scaleClass: "scale-125" },
    { type: "Conectores e Ligações Elétricas", image: "https://drive.google.com/thumbnail?id=1K0RQav-UmOsOKr6PaBBm265rdUbIbyYm&sz=w1000", url: "https://www.wago.com/global/", scaleClass: "scale-75" },
    { type: "Equipamentos, Automações e Sistemas Energéticos", image: "https://drive.google.com/thumbnail?id=1h_qFikyA8Grx19TsBGjpakyW5R0ygyAp&sz=w1000", url: "https://www.siemens.com/pt-pt/", scaleClass: "scale-75" },
    { type: "Material Elétrico", image: "https://drive.google.com/thumbnail?id=1KWoodbR8w7L36rG1G7lC6ztq7LMkdONg&sz=w1000", url: "https://www.al.pt/pt-pt/", scaleClass: "scale-75" },
    { type: "Material e Infraestruturas Elétricas", image: "https://drive.google.com/thumbnail?id=1LyLgXFcClPV_ZmR2RIoS_tgDCsmC4_P8&sz=w1000", url: "https://www.legrand.pt/", scaleClass: "scale-125" },
    { type: "Armários e Quadros Elétricos", image: "https://drive.google.com/thumbnail?id=1y1vF_oKBLqz5SB0ocWyZJhYg3tutmgJA&sz=w1000", url: "https://www.hager.pt/", scaleClass: "scale-75" },
    { type: "Soluções de Engenharia e Equipamentos", image: "https://drive.google.com/thumbnail?id=1BhUoqK2Fo09IMiF4Kkd5_JNoNmXF36TW&sz=w1000", url: "https://www.profor.pt/", scaleClass: "scale-[2.25]" },
    { type: "Transformadores e Energia", image: "https://drive.google.com/thumbnail?id=1vQR3zIybcQ9W9nxDdAFeSfNt72mO9oeu&sz=w1000", url: "https://transfopor.pt/", scaleClass: "scale-[2.25]" },
    { type: "Aparelhagem de Média Tensão", image: "https://drive.google.com/thumbnail?id=1L9IVWS1eLHFYdXRDkSAQ9FSYZvBZ7dwI&sz=w1000", url: "https://www.ormazabal.com/pt-pt/", scaleClass: "scale-75" },
    { type: "Consultoria e Sustentabilidade", image: "", url: "https://www.greenlab.pt/", scaleClass: "scale-75" },
    { type: "Distribuição de Material Elétrico", image: "https://drive.google.com/thumbnail?id=1qxKuRhXLlWgKShq2uZO72AJQSJLn2D-t&sz=w1000", url: "https://www.sonepar.pt/", scaleClass: "scale-75" },
    { type: "Ferramentas e Fixação", image: "https://drive.google.com/thumbnail?id=1Tz6jc7fKDdGmD3Jvk2Wv8Hp2jt6e1xBg&sz=w1000", url: "https://eshop.wurth.pt/pt/PT/EUR/", scaleClass: "scale-[2.25]" },
    { type: "Proteção e Ligas Elétricas", image: "https://drive.google.com/thumbnail?id=119FF0aBhjvbInRS9O3W_yp8f9xEJVVVN&sz=w1000", url: "https://jobasi-sa.com/", scaleClass: "scale-150" },
    { type: "Materiais para Redes Elétricas", image: "https://drive.google.com/thumbnail?id=1Sqx9Rpe_Qvv1n7qMUn-Hbj1vI2CX5DXK&sz=w1000", url: "https://sicame-group.com/en", scaleClass: "scale-150" },
    { type: "Segurança Elétrica", image: "https://drive.google.com/thumbnail?id=1sbxYv2nu_vFuA9-PHpUx_E4ZknxqBHzX&sz=w1000", url: "https://sofamel.com/pt/", scaleClass: "scale-150" },
    { type: "Iluminação", image: "https://drive.google.com/thumbnail?id=1lV9r7mXrBVgUWEmb18nI9_u67DLhxam0&sz=w1000", url: "https://www.ledvance.com/pt-pt", scaleClass: "scale-75" },
    { type: "Quadros e Envolvências", image: "https://drive.google.com/thumbnail?id=1R9UHdoPUDlf9IE2tzgrzzEsAaHqfpOwB&sz=w1000", url: "https://quiterios.pt/pt/inicio", scaleClass: "scale-75" },
    { type: "Fabrico de Cabos Elétricos", image: "https://drive.google.com/thumbnail?id=17MpsrXWxMTnHRH0P9EU9detWsqEsQhSc&sz=w1000", url: "https://www.miguelez.com/pt", scaleClass: "scale-[2.25]" },
    { type: "Eficiência Energética", image: "https://drive.google.com/thumbnail?id=18cwmEaBjEXKvGWvQApxWFkJF1nr8DWsk&sz=w1000", url: "https://circutor.com/pt/", scaleClass: "scale-75" },
    { type: "Gestão de Energia", image: "https://drive.google.com/thumbnail?id=1T5J8NNzPwoZNYw9Av19o2buGsNTTZM__&sz=w1000", url: "https://www.eaton.com/pt/pt-pt.html", scaleClass: "scale-75" },
    { type: "Material de Instalação", image: "https://drive.google.com/thumbnail?id=1JMw3WQBSWaBGzsQXZGyYtxX3FB8cmYye&sz=w1000", url: "https://jsl-online.com/", scaleClass: "scale-150" },
  ];

  return (
    <div className="pt-24 pb-0 bg-white overflow-x-hidden">
      <SEO 
        title={t.seo.partners.title} 
        description={t.seo.partners.description} 
        url="/parceiros"
      />

      {/* 1. Hero Section - Mais Sóbrio */}
      <div className="bg-corporate py-20 text-center text-white relative">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold uppercase font-heading mb-6 tracking-tight">{t.partners.heroTitle}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg leading-relaxed border-l-2 border-brand-light pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            {t.partners.heroDesc}
          </p>
        </div>
        {/* Background subtil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* 2. E-REDES: Layout Corporativo (Lado a Lado) */}
        <section className="mb-24 flex justify-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center text-center gap-8 max-w-3xl w-full"
           >
              {/* Logo e Identificação */}
              <div className="flex flex-col items-center gap-2">
                 <div className="w-48 md:w-64">
                     <img 
                        src="https://drive.google.com/thumbnail?id=1UTAnm_KyFRSMMJbhwzrlkhB9kGsphfO6&sz=w1000" 
                        alt="E-REDES" 
                        className="w-full h-auto object-contain" 
                        referrerPolicy="no-referrer"
                     />
                 </div>
                 
                 <div className="flex justify-between w-48 md:w-64 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                    <span>Empreiteiro</span>
                    <span>Qualificado</span>
                 </div>
              </div>

              {/* Conteúdo Técnico */}
              <div className="flex flex-col items-center">
                 <h3 className="text-xl md:text-2xl font-bold text-corporate mb-4 uppercase tracking-wide">
                    {t.partners.eredesHighlight.title}
                 </h3>
                 {t.partners.eredesHighlight.desc && (
                   <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-2xl">
                     {t.partners.eredesHighlight.desc}
                   </p>
                 )}
                 <a 
                   href="https://www.impic.pt/impic/pt-pt/consultar/empresas-titulares-de-alvara-de-empreiteiro-de-obras-publicas" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-brand-light font-bold text-sm uppercase tracking-widest hover:text-corporate transition-colors border-b-2 border-brand-light pb-1"
                 >
                   {t.partners.eredesHighlight.licenseLinkText}
                   <Zap size={14} fill="currentColor" />
                 </a>
              </div>
           </motion.div>
        </section>

        {/* 3. FORNECEDORES: 6 Cartões Brancos (Layout Grid) */}
        <section className="mb-24">
          <div className="mb-12 border-b border-gray-200 pb-4 flex flex-col md:flex-row justify-between items-end">
             <div>
                <h2 className="text-2xl font-bold text-corporate font-heading uppercase tracking-wide">
                  {t.partners.suppliersTitle}
                </h2>
                <p className="text-gray-500 text-sm mt-2 max-w-xl">
                  {t.partners.suppliersDesc}
                </p>
             </div>
             <div className="hidden md:flex gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Award size={14} className="text-accent" /> Materiais Homologados</span>
                <span className="flex items-center gap-1"><Check size={14} className="text-accent" /> ISO 9001</span>
             </div>
          </div>

          <div className="flex overflow-x-auto pb-10 gap-6 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-8 scrollbar-hide">
             {partnerSlots.map((slot, index) => {
               const CardContent = (
                 <>
                   {/* Main Area: Logo */}
                   <div className="flex-grow flex items-center justify-center p-4 md:p-6 relative min-h-[120px] md:min-h-0">
                      {slot.image ? (
                          <img 
                              src={slot.image} 
                              alt={slot.type} 
                              className={`w-full h-full max-h-[60px] md:max-h-[100px] object-contain transition-all duration-300 ${slot.scaleClass || ''}`} 
                              referrerPolicy="no-referrer"
                          />
                      ) : (
                          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-300">
                              <ShieldCheck size={24} />
                          </div>
                      )}
                   </div>

                   {/* Bottom Label Area */}
                   <div className="bg-detail py-3 px-2 text-center border-t border-gray-100 group-hover:bg-brand-light transition-colors duration-300">
                      <span className="text-[10px] md:text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest transition-colors block truncate">
                         {slot.type}
                      </span>
                   </div>
                 </>
               );

               return (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.3 }}
                   viewport={{ once: true }}
                   className="h-48 md:h-56 min-w-[280px] md:min-w-0 snap-center flex-shrink-0"
                 >
                   {slot.url ? (
                     <a 
                       href={slot.url} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group bg-white border border-gray-200 rounded-sm hover:shadow-xl hover:border-brand-light/30 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
                     >
                       {CardContent}
                     </a>
                   ) : (
                     <div className="group bg-white border border-gray-200 rounded-sm hover:shadow-xl hover:border-brand-light/30 transition-all duration-300 flex flex-col h-full overflow-hidden">
                       {CardContent}
                     </div>
                   )}
                 </motion.div>
               );
             })}
          </div>
        </section>

        {/* 2.5 A QUEM NOS ASSOCIAMOS */}
        <section className="mb-24 py-16 bg-corporate rounded-sm text-white px-8 md:px-16 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="text-center mb-12 relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold uppercase font-heading tracking-wider mb-4 border-b-2 border-brand-light pb-4 inline-block">
                 {t.partners.exclusiveTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                 {t.partners.exclusiveDesc}
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto relative z-10">
              {t.partners.exclusivePartners?.map((partner: any, idx: number) => (
                 <motion.a 
                   key={idx}
                   href={partner.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                   className="flex flex-col items-center group bg-white/5 p-8 rounded-sm border border-white/10 hover:border-brand-light/50 transition-all duration-300"
                 >
                    <div className="bg-white p-6 rounded-sm mb-8 w-full h-40 flex items-center justify-center transition-transform group-hover:scale-105 shadow-xl">
                       <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-h-24 w-auto object-contain" 
                          referrerPolicy="no-referrer"
                       />
                    </div>
                    <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-white group-hover:text-brand-light transition-colors">{partner.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-center">{partner.desc}</p>
                    <div className="mt-6 text-brand-light text-xs font-bold uppercase tracking-widest border-b border-brand-light/30 pb-1 group-hover:border-brand-light">Visitar Website</div>
                 </motion.a>
              ))}
           </div>
        </section>

      </div>
      
      {/* 5. Minimal CTA */}
      <div className="w-full py-12 md:py-16 bg-[linear-gradient(105deg,#3B455B_60%,#252B3B_60.1%)] text-center relative z-10 border-t-4 border-brand-light overflow-hidden">
         {/* Abstract Decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading uppercase tracking-wide">
              {t.partners.ctaTitle}
            </h2>
            <div className="flex justify-center">
               <CTAButton 
                  to="/contacto?subject=parceria" 
                  text={t.partners.ctaButton}
                  variant="white"
               />
            </div>
         </div>
      </div>

    </div>
  );
};

export default Partners;