import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Diamond, Compass, CheckCircle, Scale, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import SEO from '../components/SEO.tsx';

const QualityPolicy: React.FC = () => {
  const { t } = useLanguage();
  const content = t.qualityPage;

  return (
    <div className="pt-24 pb-12 bg-white">
      <SEO 
        title={`${content.title} | JF`} 
        description={content.visionDesc} 
        url="/politica-qualidade"
      />
      
      {/* Header */}
      <div className="bg-corporate py-16 mb-16 text-center text-white relative">
         <div className="absolute inset-0 bg-accent/10 pattern-grid-lg opacity-20"></div>
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <h1 className="text-4xl font-bold mb-4 uppercase">{content.title}</h1>
            <div className="w-24 h-1 bg-brand-light mx-auto"></div>
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-detail p-8 rounded-lg border-l-4 border-brand-light"
           >
              <div className="flex items-center gap-3 mb-4">
                 <Eye className="text-accent" size={32} />
                 <h2 className="text-2xl font-bold text-corporate">{content.visionTitle}</h2>
              </div>
              <p className="text-gray-600 font-body leading-relaxed">
                 {content.visionDesc}
              </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-detail p-8 rounded-lg border-l-4 border-accent"
           >
              <div className="flex items-center gap-3 mb-4">
                 <Target className="text-accent" size={32} />
                 <h2 className="text-2xl font-bold text-corporate">{content.missionTitle}</h2>
              </div>
              <p className="text-gray-600 font-body leading-relaxed">
                 {content.missionDesc}
              </p>
           </motion.div>
        </div>

        {/* Values */}
        <div className="mb-20">
           <div className="flex items-center gap-3 mb-8 justify-center">
              <Diamond className="text-brand-light" size={32} />
              <h2 className="text-3xl font-bold text-corporate text-center">{content.valuesTitle}</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.values.map((val: any, index: number) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   viewport={{ once: true }}
                   className="bg-white border border-gray-100 p-6 rounded shadow-sm hover:shadow-lg transition-shadow"
                 >
                    <h3 className="font-bold text-corporate mb-3 text-lg border-b border-gray-100 pb-2">{val.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                       {val.desc}
                    </p>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* Strategic Guidelines */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-8 md:p-12 mb-20"
        >
           <div className="flex items-center gap-3 mb-8">
              <Compass className="text-accent" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-corporate">{content.strategyTitle}</h2>
           </div>
           
           <ul className="space-y-6">
              {content.strategies.map((strategy: string, index: number) => (
                 <li key={index} className="flex items-start gap-4">
                    <div className="bg-white p-1 rounded-full shadow-sm mt-1">
                       <CheckCircle className="text-green-500" size={18} />
                    </div>
                    <p className="text-gray-700 font-body leading-relaxed">
                       {strategy}
                    </p>
                 </li>
              ))}
           </ul>
        </motion.div>

        {/* CONTACT INFO */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
             <div className="inline-flex items-center justify-center p-3 bg-brand-light/10 text-accent rounded-full mb-4">
                 <Mail size={24} />
             </div>
             <p className="text-gray-700 font-medium text-lg">
                 {content.contactInfo.split('(')[0]}<br/>
                 <a href="mailto:qualidade@joaquimfernandes.pt" className="text-brand-light hover:text-accent font-bold transition-colors">
                    {content.contactInfo.match(/\((.*?)\)/)?.[1] || "qualidade@joaquimfernandes.pt"}
                 </a>
             </p>
        </div>

        {/* LEGAL / RAL SECTION */}
        {content.legalInfo && (
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm text-sm text-gray-600 max-w-4xl mx-auto"
           >
               <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                  <Scale size={24} className="text-corporate" />
                  <h3 className="font-bold text-corporate text-lg">{content.legalInfo.title}</h3>
               </div>
               
               <p className="mb-4 italic text-gray-700">{content.legalInfo.intro}</p>
               
               <div className="pl-4 border-l-2 border-brand-light space-y-1 mb-6">
                   <p className="font-normal text-corporate">{content.legalInfo.entityName}</p>
                   <p>{content.legalInfo.address}</p>
                   <p>{content.legalInfo.phone}</p>
                   <p>{content.legalInfo.email}</p>
               </div>
               
               <p className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                   <a href="http://www.consumidoronline.pt" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      {content.legalInfo.portal}
                   </a>
               </p>
           </motion.div>
        )}

      </div>
    </div>
  );
};

export default QualityPolicy;