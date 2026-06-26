import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SEO from '@/components/SEO';

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();
  const content = t.privacyPage;

  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <SEO 
        title={`${content.title} | JF`} 
        description={content.intro} 
        url="/privacidade"
      />
      
      {/* Header */}
      <div className="bg-corporate py-16 mb-12 text-center text-white relative">
         <div className="absolute inset-0 bg-accent/20 pattern-grid-lg opacity-30"></div>
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 uppercase">{content.title}</h1>
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
         
         <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm border border-gray-100">
            <p className="text-lg text-gray-700 font-body mb-8 leading-relaxed">
               {content.intro}
            </p>

            <div className="space-y-8">
               {content.sections.map((section: any, index: number) => (
                  <div key={index}>
                     <h2 className="text-xl font-bold text-corporate font-heading mb-3 border-l-4 border-brand-light pl-3">
                        {section.title}
                     </h2>
                     <div className="text-gray-600 font-body text-sm leading-relaxed whitespace-pre-line">
                        {section.content}
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
               <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                  <Lock size={14} />
                  <span>{content.lastUpdated}</span>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;