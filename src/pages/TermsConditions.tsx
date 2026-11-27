import React from 'react';
import { Scale, Building2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
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

            {content.legalItems && content.legalItems.length > 0 && (
               <div className="mb-10 bg-gray-50 border border-gray-200 border-l-4 border-l-brand-light rounded-lg p-6">
                  <h2 className="text-xl font-bold text-corporate font-heading mb-4 uppercase tracking-wide flex items-center gap-2">
                     <Building2 size={20} className="text-accent shrink-0" />
                     {content.legalBoxTitle}
                  </h2>
                  <ul className="space-y-1.5 text-sm font-body text-gray-700">
                     {content.legalItems.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                     ))}
                  </ul>
               </div>
            )}

            <div className="space-y-8">
               {content.sections.map((section: any, index: number) => (
                  <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                     <h2 className="text-xl font-bold text-corporate font-heading mb-3 flex items-center gap-2">
                        <Scale size={18} className="text-accent shrink-0" />
                        {section.title}
                     </h2>
                     <div className="text-gray-600 font-body text-sm leading-relaxed whitespace-pre-line">
                        {section.content}
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
               <div className="flex flex-wrap gap-4">
                  <a
                     href="https://www.livroreclamacoes.pt/Inicio/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-1 text-accent hover:underline font-semibold"
                  >
                     {t.footer.complaintsBook} <ExternalLink size={12} />
                  </a>
                  <a
                     href="https://www.consumoalgarve.pt/index.php/pt"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-1 text-accent hover:underline font-semibold"
                  >
                     CIMAAL (RAL) <ExternalLink size={12} />
                  </a>
                  <Link to="/privacidade" className="text-accent hover:underline font-semibold">
                     {t.footer.privacy}
                  </Link>
                  <Link to="/politica-cookies" className="text-accent hover:underline font-semibold">
                     {t.footer.cookies}
                  </Link>
               </div>
               {content.lastUpdated && (
                  <span className="text-gray-400">{content.lastUpdated}</span>
               )}
            </div>
         </div>

      </div>
    </div>
  );
};

export default TermsConditions;