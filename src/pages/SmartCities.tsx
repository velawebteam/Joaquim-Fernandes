import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Cpu, Server, BatteryCharging, ArrowRight, Activity, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { useLanguage } from '@/context/LanguageContext';

const SmartCities: React.FC = () => {
  const { t } = useLanguage();

  // Defensive guard against undefined translations
  if (!t || !t.smartCities) {
    return null;
  }

  const icons = [
    <Wifi className="w-12 h-12 mb-4 text-brand-light" />,
    <BatteryCharging className="w-12 h-12 mb-4 text-brand-light" />,
    <Cpu className="w-12 h-12 mb-4 text-brand-light" />,
    <Zap className="w-12 h-12 mb-4 text-brand-light" />
  ];

  return (
    <div className="pt-24 pb-12 bg-white overflow-hidden">
      <SEO 
        title={t.seo.smartCities.title} 
        description={t.seo.smartCities.description} 
      />

      {/* 1. FUTURISTIC HERO */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-corporate">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop" 
            alt="Futuristic City" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-corporate via-corporate/80 to-transparent"></div>
          {/* Animated Grid Overlay - Updated RGBA to match #8DC8E8 (141, 200, 232) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(141,200,232,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(141,200,232,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/10 border border-brand-light/30 text-brand-light text-xs md:text-sm font-mono mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
              </span>
              SMART CITIES & IOT
            </div>
            {/* Optimized h1 for mobile (text-4xl) up to desktop (text-7xl) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-none uppercase">
              {t.smartCities.heroTitle}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* 2. INTRO & VISION */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-3xl md:text-4xl font-bold text-corporate mb-8 leading-tight uppercase">
                 {t.smartCities.introTitle}
               </h2>
               <div className="w-24 h-1 bg-accent mb-8"></div>
               <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
                 {t.smartCities.introDesc}
               </p>
               <div className="mt-8 flex gap-4">
                 <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-accent">30%</span>
                    <span className="text-xs uppercase text-gray-500 font-bold tracking-wider">{t.smartCities.stat1}</span>
                 </div>
                 <div className="w-px bg-gray-200 mx-4"></div>
                 <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-brand-light">-45%</span>
                    <span className="text-xs uppercase text-gray-500 font-bold tracking-wider">{t.smartCities.stat2}</span>
                 </div>
               </div>
             </motion.div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-brand-light/20 rounded-lg blur-xl transform rotate-3"></div>
             <img 
               src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" 
               alt="Smart Control Center" 
               className="relative rounded-lg shadow-2xl z-10 w-full h-auto"
             />
          </div>
        </div>
      </section>

      {/* 3. INNOVATION GRID */}
      <section className="py-16 md:py-24 bg-detail relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.smartCities.features.map((feature: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-brand-light transition-all duration-300 group"
              >
                <div className="bg-detail w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-corporate group-hover:scale-110 transition-all duration-300">
                  {React.cloneElement(icons[index], { className: "w-8 h-8 text-accent group-hover:text-brand-light transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-corporate mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INNOVATION HIGHLIGHT (Dark Mode Section) */}
      <section className="py-16 md:py-24 bg-corporate text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
               <div className="lg:w-1/2">
                  <div className="inline-block bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest rounded mb-6">
                    R&D + Tech
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 uppercase">
                    {t.smartCities.innovationTitle}
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 font-light">
                    {t.smartCities.innovationDesc}
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <Server className="text-brand-light mt-1" />
                       <div>
                         <h4 className="font-bold text-white text-lg font-heading">Big Data Analytics</h4>
                         <p className="text-gray-500 text-sm">Processamento de dados em tempo real para tomada de decisão.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <Activity className="text-brand-light mt-1" />
                       <div>
                         <h4 className="font-bold text-white text-lg font-heading">Monitorização 24/7</h4>
                         <p className="text-gray-500 text-sm">Centro de controlo remoto para resposta imediata a incidências.</p>
                       </div>
                    </div>
                  </div>
               </div>
               
               <div className="lg:w-1/2 w-full">
                  <div className="relative bg-gray-800 rounded-xl p-2 border border-gray-700 shadow-2xl">
                     <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent rounded-full blur-3xl opacity-50"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                       alt="Dashboard Analytics" 
                       className="rounded-lg w-full h-auto opacity-90"
                     />
                     <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded border border-white/20">
                        <div className="flex items-center justify-between">
                           <span className="text-xs uppercase font-bold text-brand-light">System Status</span>
                           <span className="flex items-center gap-2 text-green-400 text-xs font-bold"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-gradient-to-br from-detail to-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-corporate mb-4 uppercase">{t.smartCities.ctaTitle}</h2>
            <p className="text-gray-600 mb-8 text-base md:text-lg">{t.smartCities.ctaDesc}</p>
            <Link 
              to="/contacto" 
              className="py-3 px-8 rounded-sm font-bold uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1 inline-block text-center bg-accent text-white hover:bg-[#2A3345] shadow-lg hover:shadow-xl border-b-2 border-transparent hover:border-brand-light"
            >
              {t.smartCities.ctaButton}
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default SmartCities;