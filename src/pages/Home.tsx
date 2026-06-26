import React, { useRef, useState, useEffect } from 'react';
import { Zap, CheckCircle, Star, Activity, Wrench, Wifi, FileText, Layers, Pen, ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import CTAButton from '../components/CTAButton.tsx';
import ServiceCard from '../components/ServiceCard.tsx';
import SEO from '../components/SEO.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

// Partners list
const partners = [
  { name: "Iluminação técnica e decorativa", image: "https://drive.google.com/thumbnail?id=1YWtgccMsUVmbhQwtq7R-9sPZs8fAcQ1j&sz=w1000", scaleClass: "scale-75" },
  { name: "Iluminação de Consumo", image: "https://drive.google.com/thumbnail?id=1nA3TaycESag22H2i6yHZWwiXZdQrocRu&sz=w1000", scaleClass: "scale-75" },
  { name: "Iluminação Exterior e Inteligente", image: "https://drive.google.com/thumbnail?id=1biPaxNPG6UvOAi_mRwCSRWCHDVT7ROD6&sz=w1000", scaleClass: "scale-125" },
  { name: "Distribuição Especializada de Iluminação", image: "https://drive.google.com/thumbnail?id=11UxCCFrwhbG3HLlCELz9N2bZAl1EGh7t&sz=w1000", scaleClass: "scale-125" },
  { name: "Fornecimento de Soluções de Iluminação", image: "https://drive.google.com/thumbnail?id=1S7vI_w9u3nisrikfI1S6MGMEKOPRwArf&sz=w1000", scaleClass: "scale-125" },
  { name: "Produtos de Iluminação", image: "https://drive.google.com/thumbnail?id=1Dqpjjc_nzbyKAINwRPvIvxCUCZ4o4fAD&sz=w1000", url: "https://www.philips.pt/" },
  { name: "Gestão de Energia e Automação Elétrica", image: "https://drive.google.com/thumbnail?id=1dbgZWvOZCDqKhheNhfOiBHlOqwP0DxHe&sz=w1000", url: "https://www.se.com/pt/pt/", scaleClass: "scale-75" },
  { name: "Soluções para Instalações Elétricas", image: "https://drive.google.com/thumbnail?id=1XdM8m5-kAKe-RE74bY-fclHSKD4Yql7k&sz=w1000", url: "https://www.obo.pt/", scaleClass: "scale-125" },
  { name: "Cabos Elétricos e de Telecomunicações", image: "https://drive.google.com/thumbnail?id=1-CeBT03xZhaDgN2QhjQK8BoDXPY-NBU9&sz=w1000", url: "https://www.cabelte.pt/", scaleClass: "scale-75" },
  { name: "Tecnologias e Equipamentos Elétricos", image: "https://drive.google.com/thumbnail?id=1MB83AcEQTQKM7_AtND5pn8xp4YHWi1H7&sz=w1000", url: "https://www.bosch.pt/", scaleClass: "scale-75" },
  { name: "Material Elétrico de Baixa Tensão", image: "https://drive.google.com/thumbnail?id=1K44hESgxmLh_hfqtGnI4bbOehA0MSW1m&sz=w1000", url: "https://www.efapel.pt/", scaleClass: "scale-125" },
  { name: "Conectores e Ligações Elétricas", image: "https://drive.google.com/thumbnail?id=1K0RQav-UmOsOKr6PaBBm265rdUbIbyYm&sz=w1000", url: "https://www.wago.com/global/", scaleClass: "scale-75" },
  { name: "Equipamentos, Automações e Sistemas Energéticos", image: "https://drive.google.com/thumbnail?id=1h_qFikyA8Grx19TsBGjpakyW5R0ygyAp&sz=w1000", url: "https://www.siemens.com/pt-pt/", scaleClass: "scale-75" },
  { name: "Material Elétrico", image: "https://drive.google.com/thumbnail?id=1KWoodbR8w7L36rG1G7lC6ztq7LMkdONg&sz=w1000", url: "https://www.al.pt/pt-pt/", scaleClass: "scale-75" },
  { name: "Material e Infraestruturas Elétricas", image: "https://drive.google.com/thumbnail?id=1LyLgXFcClPV_ZmR2RIoS_tgDCsmC4_P8&sz=w1000", url: "https://www.legrand.pt/", scaleClass: "scale-125" },
  { name: "Armários e Quadros Elétricos", image: "https://drive.google.com/thumbnail?id=1y1vF_oKBLqz5SB0ocWyZJhYg3tutmgJA&sz=w1000", url: "https://www.hager.pt/", scaleClass: "scale-75" },
  { name: "Soluções de Engenharia e Equipamentos", image: "https://drive.google.com/thumbnail?id=1BhUoqK2Fo09IMiF4Kkd5_JNoNmXF36TW&sz=w1000", url: "https://www.profor.pt/", scaleClass: "scale-[2.25]" },
  { name: "Transformadores e Energia", image: "https://drive.google.com/thumbnail?id=1vQR3zIybcQ9W9nxDdAFeSfNt72mO9oeu&sz=w1000", url: "https://transfopor.pt/", scaleClass: "scale-[2.25]" },
  { name: "Aparelhagem de Média Tensão", image: "https://drive.google.com/thumbnail?id=1L9IVWS1eLHFYdXRDkSAQ9FSYZvBZ7dwI&sz=w1000", url: "https://www.ormazabal.com/pt-pt/", scaleClass: "scale-75" },
  { name: "Consultoria e Sustentabilidade", image: "", url: "https://www.greenlab.pt/", scaleClass: "scale-75" },
  { name: "Distribuição de Material Elétrico", image: "https://drive.google.com/thumbnail?id=1qxKuRhXLlWgKShq2uZO72AJQSJLn2D-t&sz=w1000", url: "https://www.sonepar.pt/", scaleClass: "scale-75" },
  { name: "Ferramentas e Fixação", image: "https://drive.google.com/thumbnail?id=1Tz6jc7fKDdGmD3Jvk2Wv8Hp2jt6e1xBg&sz=w1000", url: "https://eshop.wurth.pt/pt/PT/EUR/", scaleClass: "scale-[2.25]" },
  { name: "Proteção e Ligas Elétricas", image: "https://drive.google.com/thumbnail?id=119FF0aBhjvbInRS9O3W_yp8f9xEJVVVN&sz=w1000", url: "https://jobasi-sa.com/", scaleClass: "scale-150" },
  { name: "Materiais para Redes Elétricas", image: "https://drive.google.com/thumbnail?id=1Sqx9Rpe_Qvv1n7qMUn-Hbj1vI2CX5DXK&sz=w1000", url: "https://sicame-group.com/en", scaleClass: "scale-150" },
  { name: "Segurança Elétrica", image: "https://drive.google.com/thumbnail?id=1sbxYv2nu_vFuA9-PHpUx_E4ZknxqBHzX&sz=w1000", url: "https://sofamel.com/pt/", scaleClass: "scale-150" },
  { name: "Iluminação", image: "https://drive.google.com/thumbnail?id=1lV9r7mXrBVgUWEmb18nI9_u67DLhxam0&sz=w1000", url: "https://www.ledvance.com/pt-pt", scaleClass: "scale-75" },
  { name: "Quadros e Envolvências", image: "https://drive.google.com/thumbnail?id=1R9UHdoPUDlf9IE2tzgrzzEsAaHqfpOwB&sz=w1000", url: "https://quiterios.pt/pt/inicio", scaleClass: "scale-75" },
  { name: "Fabrico de Cabos Elétricos", image: "https://drive.google.com/thumbnail?id=17MpsrXWxMTnHRH0P9EU9detWsqEsQhSc&sz=w1000", url: "https://www.miguelez.com/pt", scaleClass: "scale-[2.25]" },
  { name: "Eficiência Energética", image: "https://drive.google.com/thumbnail?id=18cwmEaBjEXKvGWvQApxWFkJF1nr8DWsk&sz=w1000", url: "https://circutor.com/pt/", scaleClass: "scale-75" },
  { name: "Gestão de Energia", image: "https://drive.google.com/thumbnail?id=1T5J8NNzPwoZNYw9Av19o2buGsNTTZM__&sz=w1000", url: "https://www.eaton.com/pt/pt-pt.html", scaleClass: "scale-75" },
  { name: "Material de Instalação", image: "https://drive.google.com/thumbnail?id=1JMw3WQBSWaBGzsQXZGyYtxX3FB8cmYye&sz=w1000", url: "https://jsl-online.com/", scaleClass: "scale-150" },
];

// Custom Lightning Bolt Component (Icon style for floating)
const FloatingBoltIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// Realistic Complex Lightning Bolt Component
const ComplexLightningBolt = ({ isMainStrike }: { isMainStrike: boolean }) => (
  <svg viewBox="0 0 400 600" className="w-full h-[100%] md:h-[150%] -mt-0 md:-mt-20 object-cover pointer-events-none" preserveAspectRatio="none">
    <defs>
      <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glow-white" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Leader Branches (Faint) */}
    <path 
      d="M200 0 L180 50 L220 120 L150 200 L180 250" 
      stroke="rgba(168, 85, 247, 0.6)" // Purple-500
      strokeWidth="2" 
      fill="none" 
      className="opacity-70"
    />
    <path 
      d="M220 120 L280 160 L320 250" 
      stroke="rgba(168, 85, 247, 0.4)" 
      strokeWidth="1" 
      fill="none" 
    />
    
    {/* Main Bolt */}
    <path 
      d="M200 0 L190 40 L230 110 L160 220 L260 280 L120 480 L280 400 L220 600" 
      stroke={isMainStrike ? "#FFFFFF" : "rgba(255,255,255,0.8)"}
      strokeWidth={isMainStrike ? "6" : "3"} 
      fill="none" 
      filter={isMainStrike ? "url(#glow-white)" : "url(#glow-purple)"}
      className={`transition-all duration-75 ${isMainStrike ? 'opacity-100' : 'opacity-0'}`}
      style={{
        animation: isMainStrike ? 'none' : 'flicker 0.2s infinite'
      }}
    />

    {/* Secondary Branches (Visible on Main Strike) */}
    {isMainStrike && (
      <>
        <path d="M230 110 L300 150 L350 250" stroke="#E9D5FF" strokeWidth="2" fill="none" filter="url(#glow-purple)" />
        <path d="M160 220 L80 280 L40 350" stroke="#E9D5FF" strokeWidth="2" fill="none" filter="url(#glow-purple)" />
        <path d="M260 280 L320 320" stroke="#E9D5FF" strokeWidth="1" fill="none" />
      </>
    )}
  </svg>
);

const heroImages = [
  "https://drive.google.com/thumbnail?id=1NSWL_bq-WRZ4mMsEM1ff057AjCKRbTY7&sz=w1920"
];

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  // --- Animation Hooks ---
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for rotation and movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // TRIGGER: Require 90% of the section to be visible before starting
  const isCtaInView = useInView(ctaSectionRef, { amount: 0.9, once: true });
  
  // Animation States: 0=Idle, 1=Leader(Start), 2=Flash(Impact), 3=Done(Lit)
  const [animStep, setAnimStep] = useState(0);

  // Hero Carousel State
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  
  // Services Carousel State
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  
  const services = [
    { title: t.home.serviceCards.plrs.title, desc: t.home.serviceCards.plrs.desc, icon: <Activity size={32} />, link: "/plrs" },
    { title: t.home.serviceCards.infraestruturas.title, desc: t.home.serviceCards.infraestruturas.desc, icon: <Zap size={32} />, link: "/infraestruturas" },
    { title: t.home.serviceCards['postos-transformacao'].title, desc: t.home.serviceCards['postos-transformacao'].desc, icon: <Zap size={32} />, link: "/postos-transformacao" },
    { title: t.home.serviceCards.iluminacao.title, desc: t.home.serviceCards.iluminacao.desc, icon: <Lightbulb size={32} />, link: "/iluminacao" },
    { title: t.home.serviceCards.instalacoes.title, desc: t.home.serviceCards.instalacoes.desc, icon: <Wrench size={32} />, link: "/instalacoes" },
    { title: t.home.serviceCards.projetos.title, desc: t.home.serviceCards.projetos.desc, icon: <FileText size={32} />, link: "/projetos" },
    { title: t.home.serviceCards.telecomunicacoes.title, desc: t.home.serviceCards.telecomunicacoes.desc, icon: <Wifi size={32} />, link: "/telecomunicacoes" },
    { title: t.home.serviceCards.outros.title, desc: t.home.serviceCards.outros.desc, icon: <Layers size={32} />, link: "/outros" }
  ];

  const handleServicesScroll = () => {
    if (servicesScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = servicesScrollRef.current;
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
      const index = Math.round(scrollPercentage * (services.length - 1));
      setActiveServiceIndex(index);
    }
  };

  // Track if slogan has animated
  const [hasAnimatedSlogan, setHasAnimatedSlogan] = useState(false);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isCtaInView && animStep === 0) {
      // Step 1: Leader bolts appear (Darkness)
      setAnimStep(1); 
      
      // Step 2: Main Impact (Flash + Purple Sky)
      setTimeout(() => {
        setAnimStep(2);
      }, 300); 

      // Step 3: Stabilize (Lights On)
      setTimeout(() => {
        setAnimStep(3);
      }, 550); // Short flash duration
    }
  }, [isCtaInView, animStep]);

  // PHYSICS: Bolt Rotation linked to scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]); 
  
  // PHYSICS: Bolt Position (X, Y)
  const bulbX = useTransform(scrollYProgress, [0, 0.65], ["-50%", "-20%"]); 
  const bulbY = useTransform(scrollYProgress, [0, 0.65], ["0%", "50vh"]);
  
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(bulbX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(bulbY, { stiffness: 50, damping: 20 });

  // --- Scroll Logic for Testimonials ---
  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialRef.current) {
      const { current } = testimonialRef;
      // Scroll by the width of the container (showing 1 card at a time)
      const scrollAmount = current.clientWidth;
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!t || !t.home) return <div className="min-h-screen bg-white"></div>;

  return (
    <div ref={containerRef} className="flex flex-col w-full relative">
      <SEO title={t.seo.home.title} description={t.seo.home.description} url="/" />
      
      {/* === FLOATING BOLT === */}
      <AnimatePresence>
        {animStep === 0 && (
          <motion.div
            key="floating-bolt"
            className="fixed right-4 md:right-16 top-1/2 z-50 pointer-events-none hidden md:block"
            style={{ rotate: smoothRotate, x: smoothX, y: smoothY }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0, 5, 0], transition: { opacity: { duration: 0.5 } }}}
            exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)", transition: { duration: 0.2 } }}
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, -3, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
               <div className="absolute inset-0 bg-[#8DC8E8]/40 blur-[50px] rounded-full animate-pulse"></div>
               <FloatingBoltIcon className="w-24 h-24 md:w-56 md:h-56 text-[#8DC8E8] drop-shadow-[0_0_15px_rgba(141,200,232,0.8)]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      {/* 
          UPDATE: 
          - md:min-h-0 and md:h-[60vh] forces the section to be shorter on tablet.
          - Content sizing restored to larger values below.
      */}
      <section className="relative min-h-[90vh] md:min-h-0 md:h-[60vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.img 
              key={currentHeroImage}
              src={heroImages[currentHeroImage]} 
              alt="Hero Background" 
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-10 pt-4 md:pt-0 lg:pt-0 lg:-mt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0,
                    delayChildren: 0 // Start immediately
                  }
                }
              }}
              className="w-full lg:w-3/4 max-w-4xl"
            >
              <motion.div 
                className="flex items-center gap-3 mb-4 md:mb-6 overflow-hidden"
                initial="hidden"
                animate="visible"
              >
                {/* Left Line */}
                <motion.span 
                  className="h-0.5 bg-brand-light block"
                  style={{ width: "2rem", transformOrigin: "left" }} 
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { 
                      scaleX: 1, 
                      transition: { duration: 0.5, ease: "easeOut" } 
                    }
                  }}
                ></motion.span>
                
                {/* Text with Typing Effect */}
                <motion.span 
                  className="text-brand-light font-bold uppercase tracking-[0.2em] text-xs md:text-base font-body shadow-black drop-shadow-md whitespace-nowrap overflow-hidden block"
                  variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1 }
                  }}
                >
                  {hasAnimatedSlogan ? (
                    <span>{t.home.slogan}</span>
                  ) : (
                    t.home.slogan.split('').map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { 
                            opacity: 1,
                            transition: { 
                              delay: 0.5 + (index * 0.06), // Start after left line (0.5s)
                              duration: 0 
                            } 
                          }
                        }}
                        onAnimationComplete={() => {
                          if (index === t.home.slogan.length - 1) {
                            setHasAnimatedSlogan(true);
                          }
                        }}
                      >
                        {char}
                      </motion.span>
                    ))
                  )}
                </motion.span>

                {/* Right Line */}
                <motion.span 
                  className="h-0.5 bg-brand-light block"
                  style={{ width: "2rem", transformOrigin: "left" }}
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { 
                      scaleX: 1, 
                      transition: { 
                        delay: 2.0, // Wait for left line + text
                        duration: 0.5, 
                        ease: "easeOut" 
                      } 
                    }
                  }}
                ></motion.span>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      delay: 2.9, // Staggered slightly
                      duration: 1.5, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
              >
                {/* RESTORED: Standard button sizing */}
                <CTAButton to="/contacto" text={t.home.hero.ctaPrimary} variant="primary" className="w-full sm:w-auto text-center" />
              </motion.div>
            </motion.div>
            <div className="hidden lg:block w-full lg:w-1/4"></div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES */}
      <section className="py-12 md:py-20 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-corporate mb-4">{t.home.servicesTitle}</h2>
            <div className="w-16 md:w-20 h-1 bg-brand-light mx-auto"></div>
          </div>
          
          {/* MOBILE: Horizontal Scroll Carousel */}
          <div 
            ref={servicesScrollRef}
            onScroll={handleServicesScroll}
            className="md:hidden flex items-stretch overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 scrollbar-hide"
          >
            {services.map((service, index) => (
              <div key={index} className="min-w-[85vw] snap-center flex flex-col">
                <ServiceCard {...service} delay={0} className="flex-1" />
              </div>
            ))}
          </div>

          {/* MOBILE: Navigation Dots */}
          <div className="md:hidden flex justify-center gap-2 mb-8">
            {services.map((_, index) => (
              <div 
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${index === activeServiceIndex ? 'w-6 bg-brand-light' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>

          {/* DESKTOP: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center">
            <ServiceCard title={t.home.serviceCards.plrs.title} description={t.home.serviceCards.plrs.desc} icon={<Activity size={32} />} delay={0.1} link="/plrs" />
            <ServiceCard title={t.home.serviceCards.infraestruturas.title} description={t.home.serviceCards.infraestruturas.desc} icon={<Zap size={32} />} delay={0.2} link="/infraestruturas" />
            <ServiceCard title={t.home.serviceCards['postos-transformacao'].title} description={t.home.serviceCards['postos-transformacao'].desc} icon={<Zap size={32} />} delay={0.3} link="/postos-transformacao" />
            <ServiceCard title={t.home.serviceCards.iluminacao.title} description={t.home.serviceCards.iluminacao.desc} icon={<Lightbulb size={32} />} delay={0.4} link="/iluminacao" />
            <ServiceCard title={t.home.serviceCards.instalacoes.title} description={t.home.serviceCards.instalacoes.desc} icon={<Wrench size={32} />} delay={0.5} link="/instalacoes" />
            <ServiceCard title={t.home.serviceCards.projetos.title} description={t.home.serviceCards.projetos.desc} icon={<FileText size={32} />} delay={0.6} link="/projetos" />
            <ServiceCard title={t.home.serviceCards.telecomunicacoes.title} description={t.home.serviceCards.telecomunicacoes.desc} icon={<Wifi size={32} />} delay={0.7} link="/telecomunicacoes" />
            <ServiceCard title={t.home.serviceCards.outros.title} description={t.home.serviceCards.outros.desc} icon={<Layers size={32} />} delay={0.8} link="/outros" />
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="py-12 md:py-20 bg-detail relative z-20">
        <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img src="https://drive.google.com/thumbnail?id=16SefoRSV3dPLvfVbIJHTmXMmKMi9JSNg&sz=w1000" alt="Engenheiro" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-corporate mb-6">{t.home.whyUsTitle}</h2>
            <p className="text-gray-600 mb-8 font-body leading-relaxed">{t.home.whyUsDesc}</p>
            {/* UPDATED GRID: Forced 2 columns on all screens including mobile (removed grid-cols-1, added grid-cols-2) */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {t.home.benefits && t.home.benefits.map((benefit: any, index: number) => (
                <motion.div 
                  key={benefit.id} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-start text-left gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded shadow-sm border-l-4 border-brand-light"
                >
                  <CheckCircle className="text-accent shrink-0" size={20} />
                  <span className="font-semibold text-corporate font-body text-xs sm:text-sm md:text-base leading-tight">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-10">
              <CTAButton to="/servicos" text={t.home.ctaButton} variant="secondary" className="w-full sm:w-auto text-center" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. REALISTIC LIGHTNING STRIKE CTA */}
      <section 
        ref={ctaSectionRef}
        className={`py-20 md:py-32 relative overflow-hidden transition-colors duration-700 ease-out`}
        style={{
          backgroundColor: animStep === 3 ? '#1A1A1A' : '#000000' // Corporate vs Black
        }}
      >
        {/* ATMOSPHERE: Purple Glow Sequence */}
        <div 
           className="absolute inset-0 z-0 transition-opacity duration-100 ease-in-out pointer-events-none"
           style={{
             opacity: animStep === 2 ? 1 : 0,
             background: 'radial-gradient(circle at 50% 10%, #7e22ce 0%, #3b0764 40%, #000000 90%)', // Purple-700 to Black
             mixBlendMode: 'screen'
           }}
        ></div>

        {/* LIGHTNING BOLTS */}
        {(animStep === 1 || animStep === 2) && (
           <div className="absolute inset-0 z-10 flex justify-center items-start overflow-hidden pointer-events-none">
              <ComplexLightningBolt isMainStrike={animStep === 2} />
           </div>
        )}

        {/* FLASH: White Overlay */}
        <div 
          className="absolute inset-0 bg-white z-20 pointer-events-none transition-opacity duration-[50ms]"
          style={{ opacity: animStep === 2 ? 0.8 : 0 }}
        ></div>

        {/* CONTENT (Revealed after strike) */}
        <div className="container mx-auto px-4 md:px-12 text-center relative z-30">
          <motion.div
             initial={{ opacity: 0, filter: 'brightness(0)' }}
             animate={{ 
                opacity: animStep === 3 ? 1 : (animStep === 2 ? 0.8 : 0),
                filter: animStep === 3 ? 'brightness(1)' : 'brightness(0)'
             }}
             transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative inline-block max-w-full">
               <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold uppercase mb-6 text-white drop-shadow-lg ${animStep === 3 ? 'text-shadow-glow' : ''}`}>
                 {t.home.lightUp.title}
               </h2>
            </div>
            
            <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md px-2">
              {t.home.lightUp.desc}
            </p>
            
            <div className="relative inline-block w-full sm:w-auto">
               {animStep === 3 && (
                 <div className="absolute inset-0 bg-brand-light blur-2xl opacity-20 animate-pulse rounded-full"></div>
               )}
               <CTAButton to="/contacto" text={t.home.lightUp.cta} variant="primary" className="text-base md:text-lg py-3 md:py-4 px-8 md:px-10 relative z-10 w-full sm:w-auto shadow-[0_0_20px_rgba(141,200,232,0.3)]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-12 md:py-20 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-corporate mb-4">{t.home.testimonialsTitle}</h2>
            <div className="w-16 md:w-20 h-1 bg-brand-light mx-auto"></div>
          </div>
          
          {/* 
            FIXED CAROUSEL LOGIC:
            - Mobile/Tablet (< lg): Uses Flexbox with snap.
            - Items have w-full to ensure only ONE card is seen at a time.
            - Desktop (>= lg): Switches to Grid.
          */}
          <div className="relative group">
            <div 
               ref={testimonialRef}
               className="
                  flex overflow-x-auto snap-x snap-mandatory gap-0 pb-8 
                  lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0
                  scrollbar-hide
               "
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
               {/* Internal style to hide scrollbar */}
               <style>{`
                 .scrollbar-hide::-webkit-scrollbar {
                     display: none;
                 }
               `}</style>

              {t.home.testimonials && t.home.testimonials.map((tr: any) => (
                <div 
                  key={tr.id} 
                  className="
                     flex-none w-full lg:w-auto snap-center
                     px-2 lg:px-0
                  "
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    className="bg-detail p-6 md:p-8 rounded-lg relative flex flex-col justify-between h-full"
                  >
                    <div>
                       <div className="flex gap-1 text-brand-light mb-4">
                         {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                       </div>
                       <p className="text-gray-600 italic mb-6 font-body text-sm leading-relaxed">"{tr.text}"</p>
                    </div>
                    <div>
                      <h4 className="font-normal text-corporate">{tr.name}</h4>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* CAROUSEL CONTROLS (Mobile/Tablet Only) - FLOATING AT EDGES */}
            <button 
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 lg:hidden bg-white/90 border border-gray-200 text-accent hover:bg-accent hover:text-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 lg:hidden bg-white/90 border border-gray-200 text-accent hover:bg-accent hover:text-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-8 lg:mt-12 text-center">
            <a href="https://www.google.com/maps/place/Joaquim+%26+Fernandes-electricidade+E+Telecomunica%C3%A7%C3%B5es+Lda/@37.0499496,-7.7845862,17z/data=!4m8!3m7!1s0xd100015fa93cb27:0x9f2e8973008bd28a!8m2!3d37.0499453!4d-7.7820113!9m1!1b1!16s%2Fg%2F1ts3gwcy?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-3 px-6 md:px-8 rounded-sm transition-colors uppercase tracking-widest text-xs md:text-sm">
              {t.home.leaveReview} <Pen size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. PARTNERS */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-200 overflow-hidden relative z-20">
        <div className="container mx-auto px-4 md:px-12 mb-10 md:mb-16 text-center">
             <h2 className="text-2xl md:text-3xl font-bold uppercase text-corporate mb-4">{t.home.partnersTitle}</h2>
             <div className="w-16 md:w-20 h-1 bg-brand-light mx-auto"></div>
        </div>
        <div className="w-full relative overflow-hidden">
          <motion.div 
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 180 }}
            style={{ width: "fit-content" }}
          >
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
               <div key={index} className="flex-shrink-0 mx-6 md:mx-12">
                 {partner.url ? (
                   <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:scale-105">
                     {partner.image ? (
                       <img 
                         src={partner.image} 
                         alt={partner.name} 
                         className={`h-16 md:h-20 w-auto max-w-[150px] md:max-w-[180px] object-contain ${partner.scaleClass || ''}`}
                       />
                     ) : (
                       <span className="text-xl md:text-3xl font-bold text-gray-400 font-heading transition-all duration-300 cursor-pointer whitespace-nowrap hover:text-corporate">{partner.name}</span>
                     )}
                   </a>
                 ) : (
                   partner.image ? (
                     <img 
                       src={partner.image} 
                       alt={partner.name} 
                       className={`h-16 md:h-20 w-auto max-w-[150px] md:max-w-[180px] object-contain ${partner.scaleClass || ''}`}
                     />
                   ) : (
                     <span className="text-xl md:text-3xl font-bold text-gray-400 font-heading transition-all duration-300 cursor-default whitespace-nowrap">{partner.name}</span>
                   )
                 )}
               </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;