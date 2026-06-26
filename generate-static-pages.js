import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html not found. Run build first.');
  process.exit(1);
}

const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

const siteName = "Joaquim & Fernandes";
const defaultKeywords = "E-REDES, redes elétricas, baixa tensão, média tensão, alta tensão, instalações elétricas, infraestruturas elétricas, operador de rede de distribuição, ligação à rede E-REDES, certificação E-REDES, empreiteiro E-REDES, Joaquim & Fernandes, construção civil, iluminação pública, telecomunicações, mobilidade elétrica, postos de carregamento";

const seoData = {
  'sobre': { title: 'Sobre Nós', description: 'Conheça a Joaquim & Fernandes, especialistas em infraestruturas elétricas, construção civil e parceiros de confiança da E-REDES em Portugal.' },
  'servicos': { title: 'Serviços', description: 'Oferecemos soluções completas em eletricidade, construção, telecomunicações e mobilidade elétrica. Empreiteiro certificado E-REDES.' },
  'projetos': { title: 'Projetos Elétricos', description: 'Elaboração de projetos elétricos para redes de baixa, média e alta tensão. Especialistas em infraestruturas E-REDES.' },
  'plrs': { title: 'PLRs', description: 'Postos de Ligação à Rede (PLRs) para garantir a melhor ligação à rede E-REDES com total segurança e certificação.' },
  'instalacoes': { title: 'Instalações Elétricas', description: 'Instalações elétricas industriais e comerciais. Certificação e ligação à rede E-REDES.' },
  'postos-transformacao': { title: 'Postos de Transformação', description: 'Construção e manutenção de Postos de Transformação (PTs) e subestações. Parceiro E-REDES.' },
  'telecomunicacoes': { title: 'Telecomunicações', description: 'Infraestruturas de telecomunicações, redes de fibra ótica e estruturadas.' },
  'outros': { title: 'Outros Serviços', description: 'Serviços complementares em construção civil, remodelações e manutenção de infraestruturas.' },
  'iluminacao': { title: 'Iluminação Pública', description: 'Projetos e instalação de iluminação pública eficiente e sustentável. Trabalhamos em conformidade com as normas da E-REDES.' },
  'parceiros': { title: 'Parceiros', description: 'Os nossos parceiros de negócio. Somos um parceiro de confiança da E-REDES e outras entidades de referência.' },
  'recrutamento': { title: 'Recrutamento', description: 'Junte-se à equipa Joaquim & Fernandes. Procuramos profissionais para a área de eletricidade, construção e infraestruturas E-REDES.' },
  'contacto': { title: 'Contactos', description: 'Contacte a Joaquim & Fernandes para orçamentos e informações sobre serviços de eletricidade, construção e ligações E-REDES.' },
  'politica-qualidade': { title: 'Política de Qualidade', description: 'A nossa política de qualidade e compromisso com a excelência nos serviços prestados.' },
  'privacidade': { title: 'Política de Privacidade', description: 'Política de privacidade e proteção de dados da Joaquim & Fernandes.' },
  'termos': { title: 'Termos e Condições', description: 'Termos e condições de utilização do nosso website e serviços.' },
  'perguntas-frequentes': { title: 'FAQs', description: 'Perguntas frequentes sobre os nossos serviços, ligações à rede E-REDES e processos de construção.' }
};

const routes = Object.keys(seoData);

routes.forEach(route => {
  const dir = path.join(distDir, route);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const data = seoData[route];
  const fullTitle = `${data.title} | ${siteName}`;
  const currentUrl = `https://joaquim-fernandes.pt/${route}`;
  
  // Replace title and add meta tags
  let newHtml = indexHtmlContent.replace(
    /<title>(.*?)<\/title>/,
    `<title>${fullTitle}</title>\n    <meta name="description" content="${data.description}" />\n    <meta name="keywords" content="${defaultKeywords}" />\n    <meta property="og:title" content="${fullTitle}" />\n    <meta property="og:description" content="${data.description}" />\n    <meta property="og:url" content="${currentUrl}" />\n    <meta property="twitter:title" content="${fullTitle}" />\n    <meta property="twitter:description" content="${data.description}" />\n    <link rel="canonical" href="${currentUrl}" />`
  );
  
  fs.writeFileSync(path.join(dir, 'index.html'), newHtml);
  console.log(`Created ${route}/index.html with SEO tags`);
});

// Also update the main index.html with base SEO
const baseData = { title: 'Início', description: 'Joaquim & Fernandes: Especialistas em infraestruturas elétricas, construção civil e telecomunicações. Empreiteiro certificado e parceiro de confiança da E-REDES.' };
const baseFullTitle = `${baseData.title} | ${siteName}`;
const baseUrl = `https://joaquim-fernandes.pt/`;
let baseHtml = indexHtmlContent.replace(
  /<title>(.*?)<\/title>/,
  `<title>${baseFullTitle}</title>\n    <meta name="description" content="${baseData.description}" />\n    <meta name="keywords" content="${defaultKeywords}" />\n    <meta property="og:title" content="${baseFullTitle}" />\n    <meta property="og:description" content="${baseData.description}" />\n    <meta property="og:url" content="${baseUrl}" />\n    <meta property="twitter:title" content="${baseFullTitle}" />\n    <meta property="twitter:description" content="${baseData.description}" />\n    <link rel="canonical" href="${baseUrl}" />`
);
fs.writeFileSync(indexHtmlPath, baseHtml);
console.log('Updated root index.html with SEO tags');

// Generate sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://joaquim-fernandes.pt/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${routes.map(route => `  <url>
    <loc>https://joaquim-fernandes.pt/${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent);
console.log('Created sitemap.xml');

// Generate robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://joaquim-fernandes.pt/sitemap.xml`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent);
console.log('Created robots.txt');

console.log('Static pages generated successfully.');
