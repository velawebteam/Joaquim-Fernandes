import React, { useState, useRef } from 'react';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import CTAButton from '@/components/CTAButton';
import { useLanguage } from '@/context/LanguageContext';

const Careers: React.FC = () => {
  const { t } = useLanguage();
  const [activeJobIndex, setActiveJobIndex] = useState(0);
  const jobsContainerRef = useRef<HTMLDivElement>(null);

  if (!t || !t.careers) return null;

  const handleScroll = () => {
    if (jobsContainerRef.current) {
      const container = jobsContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const children = Array.from(container.children);
      
      let closestIndex = 0;
      let minDistance = Infinity;
      
      children.forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      
      if (closestIndex !== activeJobIndex) {
        setActiveJobIndex(closestIndex);
      }
    }
  };

  const scrollToJob = (index: number) => {
    if (jobsContainerRef.current) {
      const container = jobsContainerRef.current;
      const children = Array.from(container.children);
      const targetChild = children[index] as HTMLElement;
      
      if (targetChild) {
        targetChild.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest', 
          inline: 'center' 
        });
      }
    }
  };

  return (
    <div className="pt-24 pb-0 bg-white">
      <SEO 
        title={t.seo.careers.title} 
        description={t.seo.careers.description} 
        url="/recrutamento"
      />

      {/* Internal style to hide scrollbar for the carousel */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      {/* Header / Hero (Standardized) */}
      <div className="bg-corporate py-16 mb-16 text-center text-white relative">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold uppercase font-heading mb-4">{t.careers.heroTitle}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light text-base md:text-lg">
            {t.careers.heroDesc}
          </p>
        </div>
        {/* Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-light rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="px-6 md:px-12 overflow-x-hidden">
        
        {/* Intro Section */}
        <div className="container mx-auto mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold uppercase text-corporate mb-6">{t.careers.introTitle}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.careers.introDesc}
              </p>
              <ul className="space-y-3">
                {t.careers.benefits.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 font-semibold">
                    <CheckCircle size={18} className="text-brand-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://drive.google.com/thumbnail?id=1FlGqNgp5eVSgTpJrvHss9j8D_YTDkqdN&sz=w1000" 
                alt="Equipa a trabalhar" 
                className="rounded-lg shadow-xl w-full h-80 md:h-[500px] object-cover object-[50%_25%]"
              />
            </div>
          </div>
        </div>

        {/* Job Listings (Mobile Carousel / Desktop Grid) */}
        <div className="mb-24 w-full max-w-[1800px] mx-auto">
          <h2 className="text-2xl font-bold uppercase text-corporate mb-8 border-b-2 border-brand-light inline-block pb-2">
            {t.careers.openingsTitle}
          </h2>

          <div className="relative group/carousel">
            <div 
              ref={jobsContainerRef}
              onScroll={handleScroll}
              className="
                flex items-stretch overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 scrollbar-hide
                md:mx-auto md:px-0
              "
            >
              {t.careers.jobs.map((job: any, index: number) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="
                    min-w-[85vw] sm:min-w-[400px] md:min-w-[450px] lg:min-w-[450px] snap-center
                    bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group
                  "
                >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-detail text-corporate text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                    {job.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-corporate mb-6">
                  {job.title}
                </h3>
                
                {/* Location removed as requested */}

                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {job.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-normal text-gray-400 uppercase mb-2">{t.careers.reqTitle}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.requirements.slice(0, 2).map((req: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {req}
                      </li>
                    ))}
                    {job.requirements.length > 2 && <li className="text-xs text-gray-400 pt-1">{t.careers.otherReq}</li>}
                  </ul>
                </div>

                <CTAButton 
                  to={`/contact?subject=recrutamento&job=${encodeURIComponent(job.title)}`}
                  text={t.careers.applyBtn}
                  variant="outline"
                  className="mt-auto w-full"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {t.careers.jobs.map((_: any, index: number) => (
                <button
                    key={index}
                    onClick={() => scrollToJob(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        activeJobIndex === index ? 'w-8 bg-corporate' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to job ${index + 1}`}
                />
            ))}
          </div>
        </div>
      </div>
    </div>

      {/* General Application CTA - Full Width */}
      <div className="w-full py-12 md:py-16 bg-[linear-gradient(105deg,#3B455B_60%,#252B3B_60.1%)] text-center relative z-10 border-t-4 border-brand-light overflow-hidden">
         {/* Abstract Decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>
         <Mail className="absolute top-10 left-10 text-white/5 w-24 h-24 -rotate-12 pointer-events-none" />

         <div className="container mx-auto px-6 md:px-12 relative z-10">
           <h2 className="text-2xl md:text-3xl font-bold uppercase text-white mb-4 font-heading tracking-wide">
             {t.careers.spontaneousTitle}
           </h2>
           <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
             {t.careers.spontaneousDesc}
           </p>
           
           <CTAButton 
             to="mailto:mail@joaquimfernandes.pt?subject=Candidatura%20Espont%C3%A2nea"
             text={t.careers.spontaneousBtn}
             variant="white"
           />
           
           <p className="mt-6 text-xs text-gray-400">
             {t.careers.spontaneousDisclaimer}
           </p>
         </div>
      </div>

    </div>
  );
};

export default Careers;