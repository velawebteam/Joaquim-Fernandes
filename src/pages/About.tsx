import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Award, Briefcase, Users, HardHat, GraduationCap, GripHorizontal, FileText, ShieldCheck, CheckCircle, Zap, Star, ChevronDown } from 'lucide-react';
import SEO from '@/components/SEO';
import { useLanguage } from '@/context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [width, setWidth] = useState(0);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Safe access for dependency array
  const timeline = t?.about?.timeline;

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        // Calculate the scrollable width: Total content width - Visible container width
        const scrollWidth = carouselRef.current.scrollWidth;
        const offsetWidth = carouselRef.current.offsetWidth;
        setWidth(Math.max(0, scrollWidth - offsetWidth));
      }
    };

    // Initial calculation
    updateWidth();

    // Set up ResizeObserver to catch container size changes (e.g., window resize, orientation change)
    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
      // Observe the inner motion.div as well to catch content expansions
      if (carouselRef.current.firstElementChild) {
        observer.observe(carouselRef.current.firstElementChild);
      }
    }

    // Fallback window resize listener
    window.addEventListener('resize', updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, [timeline]); // Recalculate if timeline data changes

  // Defensive guard
  if (!t || !t.about) {
    return null;
  }

  // Define static data for the 3 requested cards (PME Líder/Excelência)
  const pmeBadges = [
    { type: 'lider', year: '2025', label: 'PME Líder' },
    { type: 'excelencia', year: '2024', label: 'PME Excelência' },
    { type: 'lider', year: '2023', label: 'PME Líder' },
  ];

  const technicalCerts = t.about.awards.list.slice(2);

  const getTimelineIcon = (index: number) => {
    switch(index) {
        case 0: return <Calendar size={20} className="text-white" />;
        case 1: return <Briefcase size={20} className="text-white" />;
        case 2: return <Users size={20} className="text-white" />;
        case 3: return <Award size={20} className="text-white" />;
        case 4: return <Zap size={20} className="text-white" />;
        default: return <Star size={20} className="text-white" />;
    }
  };

  return (
    <div className="pt-24 pb-0 bg-white overflow-hidden">
      <SEO 
        title={t.seo.about.title} 
        description={t.seo.about.description} 
        url="/sobre"
      />

      {/* 1. HEADER / HERO */}
      <div className="bg-corporate py-16 mb-0 text-center text-white relative">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold uppercase font-heading mb-4">{t.about.heroTitle}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light text-base md:text-lg">
            {t.about.heroDesc}
          </p>
        </div>
        {/* Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-light rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* 2. AWARDS & CERTIFICATIONS (Refactored for Hierarchy) */}
      <section className="bg-white py-16 md:py-24 mb-0 border-b border-gray-100">
         <div className="container mx-auto px-4 md:px-12">
            <div className="text-center mb-20">
               <h2 className="text-3xl font-bold uppercase text-corporate mb-4">{t.about.awards.title}</h2>
               <div className="w-16 h-1 bg-brand-light mx-auto"></div>
            </div>
            
            {/* FEATURED: 3 PME CARDS (Year Only, Bottom Interrupted Line) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-24">
                {pmeBadges.map((badge, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative bg-white border border-gray-300 rounded-sm hover:border-brand-light transition-colors duration-300 group min-h-[160px] flex items-center justify-center"
                    >
                        {/* Award Image */}
                        <div className="flex items-center justify-center p-4 pb-8">
                           <img 
                             src="https://drive.google.com/thumbnail?id=1qD8Or_lSCFWQCETFNj8Fpb5lQn08_FhE&sz=w1000" 
                             alt={badge.label}
                             className="h-24 md:h-32 w-auto object-contain transition-all duration-300"
                           />
                        </div>

                        {/* Year placed at the bottom, interrupting the border */}
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 transition-transform duration-300 group-hover:scale-110">
                           <span className="text-4xl md:text-5xl font-bold text-corporate tracking-tighter group-hover:text-brand-light transition-colors">
                             {badge.year}
                           </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* SECONDARY: TECHNICAL CERTIFICATIONS (Clean Grid) */}
            <div className="border-t border-gray-100 pt-16">
                <h3 className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">Certificações Técnicas & Qualidade</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {technicalCerts.map((cert: any, index: number) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center p-6 bg-detail rounded-sm hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 w-full"
                        >
                            <h4 className="font-bold text-corporate text-sm md:text-base mb-2 leading-tight">{cert.name}</h4>
                            <p className="text-xs text-gray-500 hidden md:block max-w-[200px]">
                                {cert.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* COLLAPSIBLE CAPABILITIES SECTION */}
            <div className="mt-20 max-w-6xl mx-auto">
               <div 
                  className="bg-[#f8f8f8] border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-md"
               >
                  <button 
                     onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                     className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                     <div className="flex items-center gap-4">
                        <div className="bg-corporate p-2 rounded-sm text-white group-hover:bg-brand-light transition-colors">
                           <FileText size={24} />
                        </div>
                        <div>
                           <h2 className="text-xl md:text-2xl font-bold text-corporate font-heading uppercase tracking-wide">
                              Certificações Técnicas & Alvará IMPIC
                           </h2>
                           <p className="text-gray-500 text-sm mt-1">
                              Consulte aqui as nossas habilitações e capacidades técnicas certificadas.
                           </p>
                        </div>
                     </div>
                     <motion.div
                        animate={{ rotate: isCapabilitiesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400 group-hover:text-corporate"
                     >
                        <ChevronDown size={28} />
                     </motion.div>
                  </button>

                  <AnimatePresence>
                     {isCapabilitiesOpen && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: "auto", opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           transition={{ duration: 0.4, ease: "easeInOut" }}
                           style={{ overflow: 'hidden' }}
                        >
                           <div className="px-8 pb-12 pt-4 border-t border-gray-200">
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                 
                                 {/* Table Area (2/3) */}
                                 <div className="lg:col-span-2">
                                    <h3 className="text-lg font-bold text-corporate mb-6 uppercase tracking-wider">
                                       Qualificações e Referências Técnicas Certificadas
                                    </h3>
                                    <div className="overflow-x-auto rounded-sm border border-gray-200 shadow-sm">
                                       <table className="w-full text-left border-collapse bg-white">
                                          <thead className="bg-corporate text-white">
                                             <tr>
                                                <th className="py-4 px-6 text-xs uppercase tracking-widest font-bold">Área de Atuação</th>
                                                <th className="py-4 px-6 text-xs uppercase tracking-widest font-bold">Qualificação</th>
                                                <th className="py-4 px-6 text-xs uppercase tracking-widest font-bold">Referência Técnica</th>
                                             </tr>
                                          </thead>
                                          <tbody className="divide-y divide-gray-100">
                                             {/* Média Tensão */}
                                             <tr className="hover:bg-detail transition-colors">
                                                <td rowSpan={2} className="py-4 px-6 text-sm font-bold text-corporate bg-gray-50/50 align-middle">Média Tensão</td>
                                                <td className="py-4 px-6 text-sm text-gray-600">Ligações Aéreas e Subterrâneas</td>
                                                <td className="py-4 px-6 text-sm font-bold text-accent">LAMT / LSMT</td>
                                             </tr>
                                             <tr className="hover:bg-detail transition-colors">
                                                <td className="py-4 px-6 text-sm text-gray-600">Postos de Transformação e Seccionamento</td>
                                                <td className="py-4 px-6 text-sm font-bold text-accent">PST</td>
                                             </tr>
                                             
                                             {/* Baixa Tensão */}
                                             <tr className="hover:bg-detail transition-colors">
                                                <td rowSpan={2} className="py-4 px-6 text-sm font-bold text-corporate bg-gray-50/50 align-middle">Baixa Tensão</td>
                                                <td className="py-4 px-6 text-sm text-gray-600">Redes de Distribuição e Iluminação Pública</td>
                                                <td className="py-4 px-6 text-sm font-bold text-accent">RABT / RSBT / IP</td>
                                             </tr>
                                             <tr className="hover:bg-detail transition-colors">
                                                <td className="py-4 px-6 text-sm text-gray-600">Ligações de Ramais e Edifícios</td>
                                                <td className="py-4 px-6 text-sm font-bold text-accent">CHABT / CHSBT</td>
                                             </tr>

                                             {/* Trabalhos Especiais */}
                                             <tr className="hover:bg-detail transition-colors">
                                                <td rowSpan={2} className="py-4 px-6 text-sm font-bold text-corporate bg-gray-50/50 align-middle">Trabalhos Especiais</td>
                                                <td className="py-4 px-6 text-sm text-gray-600">Trabalhos Em Tensão (sem corte)</td>
                                                <td className="py-4 px-6 text-sm font-bold text-accent">TET</td>
                                             </tr>
                                             <tr className="hover:bg-detail transition-colors">
                                                <td className="py-4 px-6 text-sm text-gray-600">Limpeza e Conservação de Postos de Seccionamento</td>
                                                <td className="py-4 px-6 text-sm font-bold text-accent">TET LPZ PST</td>
                                             </tr>

                                             {/* Contagens e Dados */}
                                             <tr className="hover:bg-detail transition-colors">
                                                <td className="py-4 px-6 text-sm font-bold text-corporate bg-gray-50/50 align-middle">Contagens e Dados</td>
                                                <td className="py-4 px-6 text-sm text-gray-600">Gestão de Contadores (BTN e BTE) e TeleServiços</td>
                                                <td className="py-4 px-6 text-sm font-bold text-accent">TS / CONT MT BTE / BTN</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>

                                 {/* Classes Highlighting (1/3) */}
                                 <div className="bg-white p-8 rounded-sm border-l-4 border-brand-light shadow-sm self-start">
                                    <h3 className="text-lg font-bold text-corporate mb-8 uppercase tracking-wider">
                                       Classes a Destacar
                                    </h3>
                                    <div className="space-y-8">
                                       <div className="relative group">
                                          <div className="flex items-center gap-3 mb-2 whitespace-nowrap">
                                             <span className="bg-corporate text-white text-xs font-bold px-3 py-1 rounded-sm">CLASSE 5</span>
                                             <h4 className="font-bold text-corporate uppercase text-sm">Instalações Elétricas</h4>
                                          </div>
                                          <p className="text-gray-600 text-sm leading-relaxed">
                                             Capacidade técnica para grandes empreitadas até <span className="font-bold text-corporate">3,2M€</span>.
                                          </p>
                                       </div>

                                       <div className="relative group">
                                          <div className="flex items-center gap-3 mb-2 whitespace-nowrap">
                                             <span className="bg-brand-light text-corporate text-xs font-bold px-3 py-1 rounded-sm">CLASSE 4</span>
                                             <h4 className="font-bold text-corporate uppercase text-sm">Postos de Transformação</h4>
                                          </div>
                                          <p className="text-gray-600 text-sm leading-relaxed">
                                             Especialização em infraestruturas elétricas até <span className="font-bold text-corporate">1,6M€</span>.
                                          </p>
                                       </div>

                                       <div className="relative group">
                                          <div className="flex items-center gap-3 mb-2 whitespace-nowrap">
                                             <span className="bg-brand-light text-corporate text-xs font-bold px-3 py-1 rounded-sm">CLASSE 4</span>
                                             <h4 className="font-bold text-corporate uppercase text-sm">Redes Elétricas</h4>
                                          </div>
                                          <p className="text-gray-600 text-sm leading-relaxed">
                                             Habilitação certificada para redes e instalações até <span className="font-bold text-corporate">1,6M€</span>.
                                          </p>
                                       </div>
                                    </div>

                                    <div className="mt-10 pt-6 border-t border-gray-100 flex items-start gap-3">
                                       <Award className="text-accent shrink-0" size={20} />
                                       <p className="text-[10px] text-gray-400 leading-relaxed uppercase font-semibold">
                                          Certificações atualizadas de acordo com as normas vigentes do IMPIC e padrões europeus de segurança elétrica.
                                       </p>
                                    </div>
                                 </div>

                              </div>
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </section>

      {/* 3. TEAM (Human Connection) */}
      <section className="bg-detail py-16 md:py-20 relative overflow-hidden mb-16">
         <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
               
               {/* Image Side */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="w-full lg:w-1/2 relative"
               >
                  <div className="absolute top-4 left-4 w-full h-full border-2 border-corporate rounded-sm z-0"></div>
                  <img 
                    src="https://drive.google.com/thumbnail?id=1g2FamKcgGLjgcyCIeuRb-hLdjLnmxWtH&sz=w1000" 
                    alt="Equipa JF" 
                    className="relative z-10 rounded-sm shadow-xl w-full object-cover h-[300px] md:h-[400px]"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 md:p-6 rounded-sm shadow-lg z-20 hidden md:block">
                     <span className="block text-3xl md:text-4xl font-bold font-heading">35+</span>
                     <span className="text-xs uppercase tracking-widest font-semibold">Anos de Experiência</span>
                  </div>
               </motion.div>

               {/* Text Side */}
               <div className="w-full lg:w-1/2">
                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h4 className="text-brand-light font-bold uppercase tracking-widest text-xs md:text-sm mb-2">{t.about.teamSection.title}</h4>
                     <h2 className="text-2xl md:text-4xl font-bold uppercase text-corporate mb-6 leading-tight">
                        {t.about.teamSection.subtitle}
                     </h2>
                     <p className="text-gray-600 mb-8 leading-relaxed font-body text-justify">
                        {t.about.teamSection.description}
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                        {/* REMOVED justify-center to align left */}
                        <div className="flex items-center gap-3">
                           <div className="bg-white p-2 rounded shadow-sm text-accent">
                              <Users size={20} />
                           </div>
                           <div>
                              <h5 className="font-bold text-corporate text-sm">{t.about.teamSection.stat1}</h5>
                           </div>
                        </div>
                        {/* REMOVED justify-center to align left */}
                        <div className="flex items-center gap-3">
                           <div className="bg-white p-2 rounded shadow-sm text-accent">
                              <HardHat size={20} />
                           </div>
                           <div>
                              <h5 className="font-bold text-corporate text-sm">{t.about.teamSection.stat2}</h5>
                           </div>
                        </div>
                        {/* REMOVED justify-center to align left */}
                        <div className="flex items-center gap-3">
                           <div className="bg-white p-2 rounded shadow-sm text-accent">
                              <GraduationCap size={20} />
                           </div>
                           <div>
                              <h5 className="font-bold text-corporate text-sm">{t.about.teamSection.stat3}</h5>
                           </div>
                        </div>
                     </div>

                     <div className="p-6 bg-white rounded-sm border-l-4 border-brand-light shadow-sm">
                        <p className="text-sm italic text-gray-500">"{t.about.teamSection.highlight}"</p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. TIMELINE (Interactive Depth) - Full Width */}
      <div className="mb-24 w-full">
        
        <div className="container mx-auto px-4 md:px-12 text-center mb-8">
            <h2 className="text-2xl font-bold uppercase text-corporate">O Nosso Percurso</h2>
        </div>

        {/* Draggable Hint */}
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8 animate-pulse">
            <GripHorizontal size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold">Arraste para explorar</span>
        </div>

        {/* Horizontal Timeline Container */}
        <div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden w-full bg-gray-50/50 py-12">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex items-center min-h-[450px] pl-0"
          >
            {t.about.timeline.map((event: any, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex-shrink-0 w-[280px] md:w-[400px] flex flex-col items-center justify-center h-full group">
                  
                  {/* The Horizontal Line Segment */}
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 group-last:bg-gradient-to-r group-last:from-gray-200 group-last:to-transparent"></div>
                  
                  {/* The Dot / Node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {getTimelineIcon(index)}
                  </div>

                  {/* Content Card - Alternating Top/Bottom */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`
                      relative w-[90%] bg-white p-6 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-light transition-all duration-300 z-20
                      ${isEven ? 'mb-24 md:mb-32' : 'mt-24 md:mt-32'}
                    `}
                  >
                     {/* Connector Line to the main axis */}
                     <div className={`
                       absolute left-1/2 -translate-x-1/2 w-0.5 h-8 md:h-12 bg-brand-light/50
                       ${isEven ? '-bottom-8 md:-bottom-12' : '-top-8 md:-top-12'}
                     `}></div>

                    <span className="inline-block px-3 py-1 bg-brand-light/20 text-accent font-bold rounded-sm text-sm mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-corporate mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 font-body text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
            
            {/* Extra padding at the end to ensure last item isn't cut off */}
            <div className="w-12 md:w-[20vw] flex-shrink-0"></div>
          </motion.div>
        </div>
      </div>

      {/* 5. CLOSING / CTA Section - Full Width, Diagonal Gradient */}
      <div className="w-full py-12 md:py-16 bg-[linear-gradient(105deg,#3B455B_60%,#252B3B_60.1%)] text-center relative z-10 border-t-4 border-brand-light">
         {/* Abstract Decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>

         <div className="container mx-auto px-4 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading uppercase tracking-wide">
                 {t.about.closingTitle}
               </h2>
               <p className="text-gray-300 max-w-xl mx-auto mb-6 text-lg">
                 {t.about.closingDesc}
               </p>
               <Link 
                 to="/recrutamento" 
                 className="py-3 px-8 rounded-sm font-bold uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1 inline-block text-center border-2 border-white text-white hover:bg-white hover:text-[#3B455B]"
               >
                 {t.about.closingCta}
               </Link>
            </motion.div>
         </div>
      </div>

    </div>
  );
};

export default About;
