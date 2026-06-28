import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, url }) => {
  const siteName = "Joaquim & Fernandes";
  const fullTitle = title.includes("Joaquim & Fernandes") ? title : `${title} | ${siteName}`;
  const defaultKeywords = "E-REDES, redes elétricas, baixa tensão, média tensão, alta tensão, instalações elétricas, infraestruturas elétricas, operador de rede de distribuição, ligação à rede E-REDES, certificação E-REDES, empreiteiro E-REDES, Joaquim & Fernandes, construção civil, iluminação pública, telecomunicações, mobilidade elétrica, postos de carregamento";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const currentUrl = url ? `https://joaquim-fernandes.pt${url}` : "https://joaquim-fernandes.pt";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />

      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;
