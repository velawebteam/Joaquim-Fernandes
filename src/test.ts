import * as fs from 'fs';

const code = fs.readFileSync('context/LanguageContext.tsx', 'utf8');
const match = code.match(/const translations = (\{[\s\S]*?\});\s*export/);
if (match) {
  const translations = eval('(' + match[1] + ')');
  console.log('es.home.serviceCards:', !!translations.es.home.serviceCards);
  console.log('fr.home.serviceCards:', !!translations.fr.home.serviceCards);
  console.log('pt.home.serviceCards:', !!translations.pt.home.serviceCards);
  console.log('en.home.serviceCards:', !!translations.en.home.serviceCards);
} else {
  console.log('No match');
}
