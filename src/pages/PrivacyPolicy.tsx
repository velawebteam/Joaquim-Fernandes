import React from 'react';
import { Lock, Building2, FileText, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
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

            {content.legalInfo && (
               <div className="mb-10 bg-gray-50 border border-gray-200 border-l-4 border-l-brand-light rounded-lg p-6">
                  <h2 className="text-xl font-bold text-corporate font-heading mb-4 uppercase tracking-wide flex items-center gap-2">
                     <Building2 size={20} className="text-accent shrink-0" />
                     {content.legalInfo.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-body">
                     <div className="flex items-start gap-3">
                        <Building2 size={16} className="text-accent mt-0.5 shrink-0" />
                        <div>
                           <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                              {content.legalInfo.companyLabel}
                           </span>
                           <span className="text-corporate font-semibold">
                              {content.legalInfo.companyName}
                           </span>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <FileText size={16} className="text-accent mt-0.5 shrink-0" />
                        <div>
                           <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                              {content.legalInfo.nifLabel}
                           </span>
                           <span className="text-corporate font-semibold">
                              {content.legalInfo.nif}
                           </span>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                        <div>
                           <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                              {content.legalInfo.emailLabel}
                           </span>
                           <a href={`mailto:${content.legalInfo.email}`} className="text-corporate font-semibold hover:text-accent transition-colors">
                              {content.legalInfo.email}
                           </a>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                        <div>
                           <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                              {content.legalInfo.addressLabel}
                           </span>
                           <span className="text-corporate font-semibold">
                              {content.legalInfo.address}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            )}

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

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
               <div className="flex flex-wrap gap-4">
                  <Link to="/politica-cookies" className="text-accent hover:underline font-medium">
                     {t.footer.cookies}
                  </Link>
                  <Link to="/termos" className="text-accent hover:underline font-medium">
                     {t.footer.terms}
                  </Link>
               </div>
               <div className="inline-flex items-center gap-2 text-gray-400">
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