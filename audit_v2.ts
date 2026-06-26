
import * as fs from 'fs';
import * as path from 'path';

const srcDir = path.resolve('src');
const componentsDir = path.join(srcDir, 'components');
const pagesDir = path.join(srcDir, 'pages');
const contextDir = path.join(srcDir, 'context');

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

const allSrcFiles = getAllFiles(srcDir).filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));

const brokenImports: { file: string; importPath: string; resolvedPath: string }[] = [];

allSrcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match both static and dynamic imports
  const importRegex = /(?:import|from)\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    
    // Only check local imports (starting with @/ or ./)
    if (importPath.startsWith('@/') || importPath.startsWith('./') || importPath.startsWith('../')) {
        let resolvedPath = '';
        if (importPath.startsWith('@/')) {
            resolvedPath = path.join(srcDir, importPath.substring(2));
        } else {
            resolvedPath = path.resolve(path.dirname(file), importPath);
        }

        // Check if file exists with common extensions
        const extensions = ['.tsx', '.ts', '.jsx', '.js', '.css', '.png', '.jpg', '.jpeg', '.svg', '.json'];
        let exists = fs.existsSync(resolvedPath);
        
        if (!exists) {
            for (const ext of extensions) {
                if (fs.existsSync(resolvedPath + ext)) {
                    exists = true;
                    break;
                }
                // Check if it's a directory with an index file
                if (fs.existsSync(path.join(resolvedPath, 'index' + ext))) {
                    exists = true;
                    break;
                }
            }
        }

        if (!exists) {
            brokenImports.push({ file, importPath, resolvedPath });
        }
    }
  }
});

if (brokenImports.length > 0) {
  console.log('--- BROKEN IMPORTS ---');
  brokenImports.forEach(b => {
    console.log(`File: ${b.file}`);
    console.log(`  Import: ${b.importPath}`);
    console.log(`  Expected: ${b.resolvedPath}`);
    console.log('---');
  });
} else {
  console.log('No broken imports found.');
}
