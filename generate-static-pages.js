import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');
const langCtxPath = path.join(__dirname, 'src', 'context', 'LanguageContext.tsx');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html not found. Run build first.');
  process.exit(1);
}

const indexHtmlTemplate = fs.readFileSync(indexHtmlPath, 'utf-8');
const langSource = fs.readFileSync(langCtxPath, 'utf-8');
const match = langSource.match(/const translations = (\{[\s\S]*?\n\});\s*\n\s*const LanguageContext/);
if (!match) {
  console.error('Error: Could not parse translations from src/context/LanguageContext.tsx');
  process.exit(1);
}

const translations = vm.runInNewContext(`(${match[1]})`);

const BASE_URL = 'https://joaquim-fernandes.pt';
const SITE_NAME = 'Joaquim & Fernandes, Lda';
const COMPANY_LOGO_URL =
  'https://drive.google.com/thumbnail?id=1BTpjyYhqw2fL_Dr_f9f1S_3ylE8dXwi5&sz=w1000';
const DEFAULT_KEYWORDS =
  'E-REDES, redes elétricas, baixa tensão, média tensão, alta tensão, instalações elétricas, infraestruturas elétricas, operador de rede de distribuição, ligação à rede E-REDES, certificação E-REDES, empreiteiro E-REDES, Joaquim & Fernandes, construção civil, iluminação pública, telecomunicações, mobilidade elétrica, postos de carregamento, Algarve, Alentejo';

const LANGUAGES = ['pt', 'en', 'es', 'fr'];
const HTML_LANG_MAP = { pt: 'pt-PT', en: 'en', es: 'es', fr: 'fr' };
const OG_LOCALE_MAP = { pt: 'pt_PT', en: 'en_GB', es: 'es_ES', fr: 'fr_FR' };

const ROUTES = [
  '/',
  '/sobre',
  '/servicos',
  '/iluminacao',
  '/parceiros',
  '/recrutamento',
  '/contacto',
  '/perguntas-frequentes',
  '/politica-qualidade',
  '/privacidade',
  '/politica-cookies',
  '/termos',
  '/plrs',
  '/infraestruturas',
  '/postos-transformacao',
  '/instalacoes',
  '/projetos',
  '/telecomunicacoes',
  '/outros',
];

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildLocalizedPath(lang, routePath) {
  if (lang === 'pt') return routePath === '/' ? '/' : routePath;
  return routePath === '/' ? `/${lang}` : `/${lang}${routePath}`;
}

function formatTitle(title) {
  if (!title) return SITE_NAME;
  return title.includes('Joaquim & Fernandes') ? title : `${title} | Joaquim & Fernandes`;
}

function buildOrganizationNode() {
  return {
    '@type': ['ElectricalContractor', 'LocalBusiness', 'Organization'],
    '@id': `${BASE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ['JF', 'Joaquim & Fernandes'],
    legalName: 'Joaquim & Fernandes - Electricidade e Telecomunicações, Lda',
    url: BASE_URL,
    logo: { '@type': 'ImageObject', url: COMPANY_LOGO_URL },
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
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'Alvará de Construção Nº 8887 (IMPIC)' },
      { '@type': 'EducationalOccupationalCredential', name: 'Certificação de Qualidade ISO 9001:2015' },
    ],
    award: ['PME Líder', 'PME Excelência', 'Medalha de Dedicação Grau Ouro - Município de Olhão'],
    sameAs: [
      'https://www.facebook.com/JoaquimFernandes86?locale=pt_PT',
      'https://www.linkedin.com/in/joaquim-e-fernandes-174561368',
      'https://www.instagram.com/joaquim_fernandes86/',
    ],
  };
}

function getRouteData(lang, routePath) {
  const t = translations[lang] || translations.pt;
  const ptT = translations.pt;
  const homeUrl = buildLocalizedPath(lang, '/');
  const servicesUrl = buildLocalizedPath(lang, '/servicos');
  const currentUrl = `${BASE_URL}${buildLocalizedPath(lang, routePath)}`;
  const navHome = t.nav?.home || 'Início';
  const navServices = t.nav?.services || 'Serviços';

  const serviceId = routePath.slice(1);
  if (t.serviceDetails && t.serviceDetails[serviceId]) {
    const srv = t.serviceDetails[serviceId];
    const title = formatTitle(`${srv.seoTitle} | JF`);
    const description = srv.seoDescription || srv.description;
    const keywords = [...(srv.keywords || []), DEFAULT_KEYWORDS].join(', ');
    const breadcrumbs = [
      { name: navHome, url: `${BASE_URL}${homeUrl}` },
      { name: navServices, url: `${BASE_URL}${servicesUrl}` },
      { name: srv.title, url: currentUrl },
    ];
    const featuresHtml = (srv.features || [])
      .map((f) => {
        if (typeof f === 'string') return `<li>${escapeHtml(f)}</li>`;
        return `<li><strong>${escapeHtml(f.title)}</strong>${f.description ? `: ${escapeHtml(f.description)}` : ''}</li>`;
      })
      .join('');
    const bodyHtml = `<h1>${escapeHtml(srv.title)}</h1><p>${escapeHtml(srv.fullText || srv.description)}</p><ul>${featuresHtml}</ul>`;
    const extraGraph = [
      {
        '@type': 'Service',
        '@id': `${currentUrl}#service`,
        name: srv.title,
        description,
        serviceType: srv.title,
        url: currentUrl,
        provider: { '@id': `${BASE_URL}/#organization` },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Algarve' },
          { '@type': 'AdministrativeArea', name: 'Alentejo' },
        ],
      },
    ];
    return { title, description, keywords, breadcrumbs, bodyHtml, extraGraph };
  }

  switch (routePath) {
    case '/': {
      const seo = t.seo?.home || ptT.seo.home;
      const cards = Object.entries(t.home?.serviceCards || {}).map(([id, card]) => ({
        id,
        title: card.title,
        desc: card.desc,
      }));
      const listHtml = cards
        .map(
          (c) =>
            `<li><a href="${buildLocalizedPath(lang, '/' + c.id)}">${escapeHtml(c.title)}</a>: ${escapeHtml(c.desc)}</li>`
        )
        .join('');
      const bodyHtml = `<h1>${escapeHtml(t.home?.servicesTitle || 'As Nossas Áreas de Atuação')}</h1><p>${escapeHtml(t.home?.whyUsDesc || seo.description)}</p><ul>${listHtml}</ul>`;
      const extraGraph = [
        {
          '@type': 'OfferCatalog',
          '@id': `${currentUrl}#services`,
          name: formatTitle(seo.title),
          itemListElement: cards.map((c, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'Service',
              name: c.title,
              description: c.desc,
              url: `${BASE_URL}${buildLocalizedPath(lang, '/' + c.id)}`,
              provider: { '@id': `${BASE_URL}/#organization` },
            },
          })),
        },
      ];
      return {
        title: formatTitle(seo.title),
        description: seo.description,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [{ name: navHome, url: currentUrl }],
        bodyHtml,
        extraGraph,
      };
    }

    case '/sobre': {
      const seo = t.seo?.about || ptT.seo.about;
      const teamDesc = t.about?.teamSection?.description || '';
      const timelineHtml = (t.about?.timeline || [])
        .map((e) => `<li><strong>${escapeHtml(e.year)} — ${escapeHtml(e.title)}</strong>: ${escapeHtml(e.description)}</li>`)
        .join('');
      return {
        title: formatTitle(seo.title),
        description: seo.description,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: t.about?.heroTitle || 'Sobre Nós', url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(t.about?.heroTitle || 'Sobre Nós')}</h1><p>${escapeHtml(teamDesc)}</p><ul>${timelineHtml}</ul>`,
        extraGraph: [],
      };
    }

    case '/servicos': {
      const seo = t.seo?.services || ptT.seo.services;
      const cats = t.services?.categories || [];
      const catsHtml = cats
        .map(
          (c) =>
            `<li><a href="${buildLocalizedPath(lang, '/' + c.id)}"><strong>${escapeHtml(c.title)}</strong></a>: ${escapeHtml(c.description)}</li>`
        )
        .join('');
      return {
        title: formatTitle(seo.title),
        description: seo.description,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: t.services?.heroTitle || navServices, url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(t.services?.heroTitle || navServices)}</h1><p>${escapeHtml(t.services?.heroDesc || seo.description)}</p><ul>${catsHtml}</ul>`,
        extraGraph: [
          {
            '@type': 'OfferCatalog',
            '@id': `${currentUrl}#services`,
            name: formatTitle(seo.title),
            itemListElement: cats.map((c, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: {
                '@type': 'Service',
                name: c.title,
                description: c.description,
                url: `${BASE_URL}${buildLocalizedPath(lang, '/' + c.id)}`,
                provider: { '@id': `${BASE_URL}/#organization` },
              },
            })),
          },
        ],
      };
    }

    case '/iluminacao': {
      const seo = t.seo?.lighting || ptT.seo.lighting;
      const typesHtml = (t.lighting?.types || [])
        .map((tp) => `<li><strong>${escapeHtml(tp.title)}</strong>: ${escapeHtml(tp.desc)}</li>`)
        .join('');
      return {
        title: formatTitle(seo.title),
        description: seo.description,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: navServices, url: `${BASE_URL}${servicesUrl}` },
          { name: t.lighting?.heroTitle || 'Iluminação', url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(t.lighting?.heroTitle || 'Iluminação')}</h1><p>${escapeHtml(t.lighting?.heroDesc || seo.description)}</p><ul>${typesHtml}</ul>`,
        extraGraph: [
          {
            '@type': 'Service',
            '@id': `${currentUrl}#service`,
            name: t.lighting?.heroTitle || 'Iluminação',
            description: seo.description,
            url: currentUrl,
            provider: { '@id': `${BASE_URL}/#organization` },
          },
        ],
      };
    }

    case '/parceiros': {
      const seo = t.seo?.partners || ptT.seo.partners;
      return {
        title: formatTitle(seo.title),
        description: seo.description,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: t.partners?.heroTitle || 'Parceiros', url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(t.partners?.heroTitle || 'Parceiros')}</h1><p>${escapeHtml(t.partners?.heroDesc || seo.description)}</p>`,
        extraGraph: [],
      };
    }

    case '/recrutamento': {
      const seo = t.seo?.careers || ptT.seo.careers;
      const jobsHtml = (t.careers?.jobs || [])
        .map((j) => `<li><strong>${escapeHtml(j.title)}</strong> (${escapeHtml(j.location)}): ${escapeHtml(j.description)}</li>`)
        .join('');
      return {
        title: formatTitle(seo.title),
        description: seo.description,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: t.careers?.heroTitle || 'Recrutamento', url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(t.careers?.heroTitle || 'Recrutamento')}</h1><p>${escapeHtml(t.careers?.introDesc || seo.description)}</p><ul>${jobsHtml}</ul>`,
        extraGraph: [],
      };
    }

    case '/contacto': {
      const seo = t.seo?.contact || ptT.seo.contact;
      return {
        title: formatTitle(seo.title),
        description: seo.description,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: t.contact?.heroTitle || 'Contactos', url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(t.contact?.heroTitle || 'Contactos')}</h1><p>${escapeHtml(t.contact?.heroDesc || seo.description)}</p><address>${escapeHtml(t.common?.address || '')}, ${escapeHtml(t.common?.city || '8700-066 Olhão')}, Portugal | Tel: +351 289 790 500 | Email: mail@joaquimfernandes.pt</address>`,
        extraGraph: [],
      };
    }

    case '/perguntas-frequentes': {
      const seo = t.seo?.faqs || ptT.seo.faqs;
      const faqs = t.faqs?.list || [];
      const faqHtml = faqs
        .map((item) => `<article><h2>${escapeHtml(item.q)}</h2><p>${escapeHtml(item.a)}</p></article>`)
        .join('');
      return {
        title: formatTitle(seo.title),
        description: seo.description,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: t.faqs?.sectionTitle || 'FAQs', url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(t.faqs?.heroTitle || 'FAQs')}</h1><p>${escapeHtml(t.faqs?.heroDesc || seo.description)}</p>${faqHtml}`,
        extraGraph: [
          {
            '@type': 'FAQPage',
            '@id': `${currentUrl}#faq`,
            mainEntity: faqs
              .filter((f) => f.q && f.a)
              .map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
          },
        ],
      };
    }

    case '/politica-qualidade': {
      const q = t.qualityPage || ptT.qualityPage;
      return {
        title: formatTitle(`${q.title} | JF`),
        description: q.visionDesc,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: q.title, url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(q.title)}</h1><p>${escapeHtml(q.visionDesc)}</p><p>${escapeHtml(q.missionDesc)}</p>`,
        extraGraph: [],
      };
    }

    case '/privacidade': {
      const p = t.privacyPage || ptT.privacyPage;
      const legal = p.legalInfo;
      const legalHtml = legal
        ? `<section><h2>${escapeHtml(legal.title)}</h2><ul><li><strong>${escapeHtml(legal.companyLabel)}:</strong> ${escapeHtml(legal.companyName)}</li><li><strong>${escapeHtml(legal.nifLabel)}:</strong> ${escapeHtml(legal.nif)}</li><li><strong>${escapeHtml(legal.emailLabel)}:</strong> ${escapeHtml(legal.email)}</li><li><strong>${escapeHtml(legal.addressLabel)}:</strong> ${escapeHtml(legal.address)}</li></ul></section>`
        : '';
      const sectionsHtml = (p.sections || [])
        .map((s) => `<section><h2>${escapeHtml(s.title)}</h2><p>${escapeHtml(s.content)}</p></section>`)
        .join('');
      return {
        title: formatTitle(`${p.title} | JF`),
        description: p.intro,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: p.title, url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(p.title)}</h1><p>${escapeHtml(p.intro)}</p>${legalHtml}${sectionsHtml}`,
        extraGraph: [],
      };
    }

    case '/politica-cookies': {
      const ck = t.cookiesPage || ptT.cookiesPage;
      const sectionsHtml = (ck.sections || [])
        .map((s) => `<section><h2>${escapeHtml(s.title)}</h2><p>${escapeHtml(s.content)}</p></section>`)
        .join('');
      return {
        title: formatTitle(`${ck.title} | JF`),
        description: ck.intro,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: ck.title, url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(ck.title)}</h1><p>${escapeHtml(ck.intro)}</p>${sectionsHtml}`,
        extraGraph: [],
      };
    }

    case '/termos': {
      const tm = t.termsPage || ptT.termsPage;
      const legalItemsHtml = (tm.legalItems || [])
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('');
      const sectionsHtml = (tm.sections || [])
        .map((s) => `<section><h2>${escapeHtml(s.title)}</h2><p>${escapeHtml(s.content)}</p></section>`)
        .join('');
      return {
        title: formatTitle(`${tm.title} | JF`),
        description: tm.intro,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [
          { name: navHome, url: `${BASE_URL}${homeUrl}` },
          { name: tm.title, url: currentUrl },
        ],
        bodyHtml: `<h1>${escapeHtml(tm.title)}</h1><p>${escapeHtml(tm.intro)}</p>${legalItemsHtml ? `<ul>${legalItemsHtml}</ul>` : ''}${sectionsHtml}`,
        extraGraph: [],
      };
    }

    default:
      return {
        title: SITE_NAME,
        description: ptT.seo.home.description,
        keywords: DEFAULT_KEYWORDS,
        breadcrumbs: [{ name: navHome, url: currentUrl }],
        bodyHtml: `<h1>${SITE_NAME}</h1>`,
        extraGraph: [],
      };
  }
}

function renderStaticHtml(lang, routePath) {
  const t = translations[lang] || translations.pt;
  const htmlLang = HTML_LANG_MAP[lang];
  const ogLocale = OG_LOCALE_MAP[lang];
  const currentUrl = `${BASE_URL}${buildLocalizedPath(lang, routePath)}`;
  const ptUrl = `${BASE_URL}${buildLocalizedPath('pt', routePath)}`;
  const enUrl = `${BASE_URL}${buildLocalizedPath('en', routePath)}`;
  const esUrl = `${BASE_URL}${buildLocalizedPath('es', routePath)}`;
  const frUrl = `${BASE_URL}${buildLocalizedPath('fr', routePath)}`;

  const { title, description, keywords, breadcrumbs, bodyHtml, extraGraph } = getRouteData(
    lang,
    routePath
  );

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(),
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: SITE_NAME,
        inLanguage: htmlLang,
        publisher: { '@id': `${BASE_URL}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${currentUrl}#webpage`,
        url: currentUrl,
        name: title,
        description,
        inLanguage: htmlLang,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        primaryImageOfPage: { '@type': 'ImageObject', url: COMPANY_LOGO_URL },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${currentUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.url,
        })),
      },
      ...extraGraph,
    ],
  };

  const altLocales = LANGUAGES.filter((l) => l !== lang)
    .map((l) => `<meta data-rh="true" property="og:locale:alternate" content="${OG_LOCALE_MAP[l]}" />`)
    .join('\n    ');

  const seoBlock = `<!-- SEO:START -->
    <meta data-rh="true" name="description" content="${escapeHtml(description)}" />
    <meta data-rh="true" name="keywords" content="${escapeHtml(keywords)}" />
    <meta data-rh="true" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta data-rh="true" property="og:type" content="website" />
    <meta data-rh="true" property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <meta data-rh="true" property="og:locale" content="${ogLocale}" />
    ${altLocales}
    <meta data-rh="true" property="og:url" content="${currentUrl}" />
    <meta data-rh="true" property="og:title" content="${escapeHtml(title)}" />
    <meta data-rh="true" property="og:description" content="${escapeHtml(description)}" />
    <meta data-rh="true" property="og:image" content="${COMPANY_LOGO_URL}" />
    <meta data-rh="true" property="og:image:alt" content="${escapeHtml(SITE_NAME)}" />
    <meta data-rh="true" name="twitter:card" content="summary_large_image" />
    <meta data-rh="true" name="twitter:url" content="${currentUrl}" />
    <meta data-rh="true" name="twitter:title" content="${escapeHtml(title)}" />
    <meta data-rh="true" name="twitter:description" content="${escapeHtml(description)}" />
    <meta data-rh="true" name="twitter:image" content="${COMPANY_LOGO_URL}" />
    <meta data-rh="true" name="twitter:image:alt" content="${escapeHtml(SITE_NAME)}" />
    <link data-rh="true" rel="canonical" href="${currentUrl}" />
    <link data-rh="true" rel="alternate" hreflang="pt-PT" href="${ptUrl}" />
    <link data-rh="true" rel="alternate" hreflang="en" href="${enUrl}" />
    <link data-rh="true" rel="alternate" hreflang="es" href="${esUrl}" />
    <link data-rh="true" rel="alternate" hreflang="fr" href="${frUrl}" />
    <link data-rh="true" rel="alternate" hreflang="x-default" href="${ptUrl}" />
    <script data-rh="true" type="application/ld+json">${JSON.stringify(structuredData)}</script>
    <!-- SEO:END -->`;

  const navLinks = [
    ['/', t.nav?.home || 'Início'],
    ['/sobre', t.nav?.about || 'Sobre Nós'],
    ['/servicos', t.nav?.services || 'Serviços'],
    ['/iluminacao', t.nav?.lighting || 'Iluminação'],
    ['/parceiros', t.nav?.partners || 'Parceiros'],
    ['/recrutamento', t.nav?.careers || 'Recrutamento'],
    ['/contacto', t.nav?.contact || 'Contactos'],
    ['/perguntas-frequentes', 'FAQs'],
  ]
    .map(([r, label]) => `<a href="${buildLocalizedPath(lang, r)}">${escapeHtml(label)}</a>`)
    .join(' | ');

  const prerenderBlock = `<!-- PRERENDER:START --><div style="font-family:Montserrat,sans-serif;color:#1f2937;max-width:1120px;margin:0 auto;padding:32px 20px"><header><p><strong>Joaquim &amp; Fernandes, Lda</strong> — ${escapeHtml(t.home?.slogan || 'Eletricidade é Connosco!')}</p><nav aria-label="Navegação">${navLinks}</nav></header><main>${bodyHtml}</main><footer><address>${escapeHtml(t.common?.address || 'Estrada Nacional 125, Bias Norte, Moncarapacho')}, ${escapeHtml(t.common?.city || '8700-066 Olhão')}, Portugal | Tel: +351 289 790 500 | Email: mail@joaquimfernandes.pt</address></footer></div><!-- PRERENDER:END -->`;

  return indexHtmlTemplate
    .replace(/<html lang="[^"]*">/, `<html lang="${htmlLang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, seoBlock)
    .replace(/<div id="root"><!-- PRERENDER:START -->[\s\S]*?<!-- PRERENDER:END --><\/div>/, `<div id="root"></div>\n    <noscript>${prerenderBlock}</noscript>`)
    .replace(/<!-- PRERENDER:START -->[\s\S]*?<!-- PRERENDER:END -->/, prerenderBlock);
}

let generatedCount = 0;

for (const lang of LANGUAGES) {
  for (const routePath of ROUTES) {
    const localized = buildLocalizedPath(lang, routePath);
    const html = renderStaticHtml(lang, routePath);
    if (localized === '/') {
      fs.writeFileSync(indexHtmlPath, html);
    } else {
      const targetDir = path.join(distDir, localized.replace(/^\//, ''));
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, 'index.html'), html);
    }
    generatedCount++;
  }
}

console.log(`Pre-rendered ${generatedCount} static HTML pages across ${LANGUAGES.join(', ')}.`);

// Generate multilingual sitemap.xml with hreflang alternates
const sitemapEntries = [];
for (const routePath of ROUTES) {
  const ptUrl = `${BASE_URL}${buildLocalizedPath('pt', routePath)}`;
  const enUrl = `${BASE_URL}${buildLocalizedPath('en', routePath)}`;
  const esUrl = `${BASE_URL}${buildLocalizedPath('es', routePath)}`;
  const frUrl = `${BASE_URL}${buildLocalizedPath('fr', routePath)}`;

  const alternates = [
    `    <xhtml:link rel="alternate" hreflang="pt-PT" href="${ptUrl}" />`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}" />`,
    `    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${ptUrl}" />`,
  ].join('\n');

  for (const lang of LANGUAGES) {
    const loc = `${BASE_URL}${buildLocalizedPath(lang, routePath)}`;
    const changefreq = routePath === '/' ? 'weekly' : 'monthly';
    const basePriority =
      routePath === '/'
        ? 1.0
        : ['/servicos', '/plrs', '/infraestruturas', '/postos-transformacao', '/iluminacao'].includes(routePath)
        ? 0.9
        : ['/sobre', '/contacto', '/perguntas-frequentes', '/instalacoes', '/projetos', '/telecomunicacoes', '/outros'].includes(routePath)
        ? 0.8
        : ['/parceiros', '/recrutamento'].includes(routePath)
        ? 0.7
        : 0.5;
    const priority = (lang === 'pt' ? basePriority : Math.max(0.4, Number((basePriority - 0.1).toFixed(1)))).toFixed(1);

    sitemapEntries.push(`  <url>
    <loc>${loc}</loc>
${alternates}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`);
  }
}

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent);
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
console.log(`Updated sitemap.xml with ${sitemapEntries.length} multilingual URLs.`);

const robotsContent = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent);
console.log('Verified robots.txt in dist/.');
