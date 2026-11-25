import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  useLanguage,
  HTML_LANG_MAP,
  OG_LOCALE_MAP,
  buildLocalizedPath,
} from '@/context/LanguageContext';

const BASE_URL = 'https://joaquim-fernandes.pt';
export const COMPANY_LOGO_URL =
  'https://drive.google.com/thumbnail?id=1BTpjyYhqw2fL_Dr_f9f1S_3ylE8dXwi5&sz=w1000';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  serviceType?: string;
  url?: string;
}

export interface FAQSchemaItem {
  q: string;
  a: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  serviceData?: ServiceSchemaData;
  servicesList?: ServiceSchemaData[];
  faqItems?: FAQSchemaItem[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  url = '/',
  image = COMPANY_LOGO_URL,
  breadcrumbs,
  serviceData,
  servicesList,
  faqItems,
}) => {
  const { language } = useLanguage();
  const siteName = 'Joaquim & Fernandes, Lda';
  const htmlLang = HTML_LANG_MAP[language] || 'pt-PT';
  const ogLocale = OG_LOCALE_MAP[language] || 'pt_PT';

  const fullTitle = title.includes('Joaquim & Fernandes')
    ? title
    : `${title} | Joaquim & Fernandes`;

  const defaultKeywords =
    'E-REDES, redes elétricas, baixa tensão, média tensão, alta tensão, instalações elétricas, infraestruturas elétricas, operador de rede de distribuição, ligação à rede E-REDES, certificação E-REDES, empreiteiro E-REDES, Joaquim & Fernandes, construção civil, iluminação pública, telecomunicações, mobilidade elétrica, postos de carregamento, Algarve, Alentejo';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const cleanBasePath = url.startsWith('/') ? url : `/${url}`;
  const localizedPath = buildLocalizedPath(language, cleanBasePath);
  const currentUrl = `${BASE_URL}${localizedPath}`;

  const ptUrl = `${BASE_URL}${buildLocalizedPath('pt', cleanBasePath)}`;
  const enUrl = `${BASE_URL}${buildLocalizedPath('en', cleanBasePath)}`;
  const esUrl = `${BASE_URL}${buildLocalizedPath('es', cleanBasePath)}`;
  const frUrl = `${BASE_URL}${buildLocalizedPath('fr', cleanBasePath)}`;

  const alternateLocales = (['pt', 'en', 'es', 'fr'] as const)
    .filter((l) => l !== language)
    .map((l) => OG_LOCALE_MAP[l]);

  const organizationNode = {
    '@type': ['ElectricalContractor', 'LocalBusiness', 'Organization'],
    '@id': `${BASE_URL}/#organization`,
    name: 'Joaquim & Fernandes, Lda',
    alternateName: ['JF', 'Joaquim & Fernandes'],
    legalName: 'Joaquim & Fernandes - Electricidade e Telecomunicações, Lda',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: COMPANY_LOGO_URL,
    },
    image: COMPANY_LOGO_URL,
    description:
      'Empresa especializada em infraestruturas elétricas de baixa e média tensão, ramais de ligação à rede (PLRs), postos de transformação, iluminação pública, Smart Cities, telecomunicações ITED/ITUR e mobilidade elétrica no Algarve e Alentejo desde 1986.',
    foundingDate: '1986',
    telephone: '+351289790500',
    email: 'mail@joaquimfernandes.pt',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Estrada Nacional 125, Bias Norte, Moncarapacho',
      addressLocality: 'Olhão',
      addressRegion: 'Algarve',
      postalCode: '8700-066',
      addressCountry: 'PT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.0499453,
      longitude: -7.7820113,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '12:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '14:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Algarve' },
      { '@type': 'AdministrativeArea', name: 'Alentejo' },
      { '@type': 'City', name: 'Faro' },
      { '@type': 'City', name: 'Olhão' },
      { '@type': 'City', name: 'Tavira' },
      { '@type': 'City', name: 'Loulé' },
      { '@type': 'City', name: 'Albufeira' },
      { '@type': 'City', name: 'Portimão' },
      { '@type': 'City', name: 'Lagos' },
      { '@type': 'City', name: 'Beja' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+351289790500',
      email: 'mail@joaquimfernandes.pt',
      contactType: 'customer service',
      areaServed: 'PT',
      availableLanguage: ['Portuguese', 'English', 'Spanish', 'French'],
    },
    award: ['PME Líder', 'PME Excelência', 'Medalha de Dedicação Grau Ouro - Município de Olhão'],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Alvará de Construção Nº 8887 (IMPIC)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Certificação de Qualidade ISO 9001:2015',
      },
    ],
    knowsAbout: [
      'Infraestruturas Elétricas de Baixa e Média Tensão',
      'Pedidos de Ligação à Rede (PLR) e Ramais E-REDES',
      'Postos de Transformação (PTs)',
      'Iluminação Pública, Desportiva e Festiva',
      'Smart Cities e Telegestão LED',
      'Telecomunicações ITED e ITUR',
      'Mobilidade Elétrica e Postos de Carregamento',
    ],
    sameAs: [
      'https://www.facebook.com/JoaquimFernandes86?locale=pt_PT',
      'https://www.linkedin.com/in/joaquim-e-fernandes-174561368',
      'https://www.instagram.com/joaquim_fernandes86/',
    ],
  };

  const websiteNode = {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: siteName,
    inLanguage: htmlLang,
    publisher: { '@id': `${BASE_URL}/#organization` },
  };

  const webpageNode = {
    '@type': 'WebPage',
    '@id': `${currentUrl}#webpage`,
    url: currentUrl,
    name: fullTitle,
    description,
    inLanguage: htmlLang,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#organization` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: image,
    },
  };

  const graph: any[] = [organizationNode, websiteNode, webpageNode];

  const resolvedBreadcrumbs: BreadcrumbItem[] =
    breadcrumbs && breadcrumbs.length > 0
      ? breadcrumbs
      : cleanBasePath === '/'
      ? [{ name: 'Início', url: ptUrl }]
      : [
          { name: 'Início', url: `${BASE_URL}${buildLocalizedPath(language, '/')}` },
          { name: fullTitle.split(' | ')[0], url: currentUrl },
        ];

  graph.push({
    '@type': 'BreadcrumbList',
    '@id': `${currentUrl}#breadcrumb`,
    itemListElement: resolvedBreadcrumbs.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http')
        ? item.url
        : `${BASE_URL}${buildLocalizedPath(language, item.url)}`,
    })),
  });

  if (serviceData) {
    graph.push({
      '@type': 'Service',
      '@id': `${currentUrl}#service`,
      name: serviceData.name,
      description: serviceData.description,
      serviceType: serviceData.serviceType || serviceData.name,
      url: serviceData.url ? `${BASE_URL}${buildLocalizedPath(language, serviceData.url)}` : currentUrl,
      provider: { '@id': `${BASE_URL}/#organization` },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Algarve' },
        { '@type': 'AdministrativeArea', name: 'Alentejo' },
      ],
    });
  }

  if (servicesList && servicesList.length > 0) {
    graph.push({
      '@type': 'OfferCatalog',
      '@id': `${currentUrl}#services`,
      name: fullTitle,
      itemListElement: servicesList.map((srv, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: srv.name,
          description: srv.description,
          url: srv.url ? `${BASE_URL}${buildLocalizedPath(language, srv.url)}` : currentUrl,
          provider: { '@id': `${BASE_URL}/#organization` },
          areaServed: [
            { '@type': 'AdministrativeArea', name: 'Algarve' },
            { '@type': 'AdministrativeArea', name: 'Alentejo' },
          ],
        },
      })),
    });
  }

  if (faqItems && faqItems.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${currentUrl}#faq`,
      mainEntity: faqItems
        .filter((item) => item.q && item.a)
        .map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
    });
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <Helmet htmlAttributes={{ lang: htmlLang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={ogLocale} />
      {alternateLocales.map((loc) => (
        <meta key={loc} property="og:locale:alternate" content={loc} />
      ))}
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={siteName} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={siteName} />

      {/* Canonical & Hreflang Alternates */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" hrefLang="pt-PT" href={ptUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="es" href={esUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={ptUrl} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
