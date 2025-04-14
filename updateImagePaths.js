import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'components');
const pagesDir = path.join(__dirname, 'Pages');

// Function to update image paths in a file
function updateImagePaths(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

        // Replace image URLs with local paths
        content = content.replace(
            /https?:\/\/[^\s"']+\.(jpg|jpeg|png|gif|webp|svg)/g,
            (match) => {
                const filename = path.basename(match).split('?')[0];
                return `/images/${filename}`;
            }
        );

        // Only write to file if content has changed
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated: ${path.basename(filePath)}`);
        } else {
            console.log(`No changes needed in: ${path.basename(filePath)}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Process all JSX files in components directory
fs.readdirSync(componentsDir)
    .filter(file => file.endsWith('.jsx'))
    .forEach(file => {
        updateImagePaths(path.join(componentsDir, file));
    });

// Process all JSX files in pages directory
fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.jsx'))
    .forEach(file => {
        updateImagePaths(path.join(pagesDir, file));
    });

console.log('All files processed!'); 