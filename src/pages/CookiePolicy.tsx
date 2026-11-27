import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import SEO from '@/components/SEO';

const CookiePolicy: React.FC = () => {
  const { t } = useLanguage();
  const content = t.cookiesPage;
  const [consentStatus, setConsentStatus] = useState<'accepted' | 'rejected' | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('cookie-consent');
    if (saved === 'true' || saved === 'accepted') {
      setConsentStatus('accepted');
    } else if (saved === 'rejected') {
      setConsentStatus('rejected');
    } else {
      setConsentStatus(null);
    }
  }, []);

  const updatePreference = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie-consent', choice);
    setConsentStatus(choice);
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  if (!content) return null;

  const statusLabel =
    consentStatus === 'accepted'
      ? content.statusAccepted
      : consentStatus === 'rejected'
      ? content.statusRejected
      : content.statusUnset;

  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <SEO
        title={`${content.title} | JF`}
        description={content.intro}
        url="/politica-cookies"
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

          {/* Cookie Preferences Management Box */}
          <div className="mb-10 bg-gray-50 border border-gray-200 border-l-4 border-l-brand-light rounded-lg p-6">
            <h2 className="text-xl font-bold text-corporate font-heading mb-2 uppercase tracking-wide flex items-center gap-2">
              <Cookie size={20} className="text-accent shrink-0" />
              {content.preferencesTitle}
            </h2>
            <p className="text-sm text-gray-600 font-body mb-4">
              {content.preferencesDesc}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-gray-200">
              <div className="text-sm font-body">
                <span className="text-gray-500 mr-2">{content.currentStatusLabel}</span>
                <span className="font-bold text-corporate">{statusLabel}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => updatePreference('rejected')}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                    consentStatus === 'rejected'
                      ? 'bg-corporate text-white border-corporate'
                      : 'bg-white text-corporate border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <X size={14} />
                  {content.rejectBtn}
                </button>
                <button
                  type="button"
                  onClick={() => updatePreference('accepted')}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    consentStatus === 'accepted'
                      ? 'bg-accent text-white'
                      : 'bg-brand-light text-corporate hover:bg-accent hover:text-white'
                  }`}
                >
                  <Check size={14} />
                  {content.acceptBtn}
                </button>
              </div>
            </div>
          </div>

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

          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <Link to="/privacidade" className="text-accent hover:underline font-medium">
              {t.footer.privacy}
            </Link>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck size={14} />
              <span>{content.lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
