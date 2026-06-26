
import * as fs from 'fs';
import * as path from 'path';

const srcDir = path.resolve('src');

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

const allSrcFiles = getAllFiles(srcDir).filter(f => f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.js') || f.endsWith('.jsx'));

const brokenImports: { file: string; line: number; importPath: string; resolvedPath: string }[] = [];

allSrcFiles.forEach(file => {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  
  lines.forEach((line, index) => {
      // Improved regex to catch more variations of imports
      const importRegex = /(?:import|from)\s+['"]([^'"]+)['"]/g;
      let match;

      while ((match = importRegex.exec(line)) !== null) {
        const importPath = match[1];
        
        // Handle aliases like @/
        let resolvedPath = '';
        if (importPath.startsWith('@/')) {
            resolvedPath = path.join(srcDir, importPath.substring(2));
        } else if (importPath.startsWith('./') || importPath.startsWith('../')) {
            resolvedPath = path.resolve(path.dirname(file), importPath);
        } else {
            // Probably a node_module, skip
            continue;
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

        // Special case for CSS imports in Vite that might not have extension in the string but exist
        if (!exists && importPath.endsWith('.css')) {
            // Already checked above
        }

        if (!exists) {
            brokenImports.push({ file, line: index + 1, importPath, resolvedPath });
        }
      }
  });
});

if (brokenImports.length > 0) {
  console.log('--- BROKEN_IMPORTS_LIST ---');
  brokenImports.forEach(b => {
    console.log(`FILE: ${b.file} | LINE: ${b.line} | IMPORT: ${b.importPath}`);
  });
  console.log('--- END_LIST ---');
} else {
  console.log('ALL_IMPORTS_RESOLVED');
}
