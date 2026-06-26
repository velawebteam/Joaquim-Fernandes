import React from 'react';
import { FileText, Scale } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SEO from '@/components/SEO';

const TermsConditions: React.FC = () => {
  const { t } = useLanguage();
  const content = t.termsPage;

  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <SEO 
        title={`${content.title} | JF`} 
        description={content.intro} 
        url="/termos"
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
                  <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                     <h2 className="text-xl font-bold text-corporate font-heading mb-3 flex items-center gap-2">
                        <Scale size={18} className="text-accent" />
                        {section.title}
                     </h2>
                     <div className="text-gray-600 font-body text-sm leading-relaxed">
                        {section.content}
                     </div>
                  </div>
               ))}
            </div>
         </div>

      </div>
    </div>
  );
};

export default TermsConditions;