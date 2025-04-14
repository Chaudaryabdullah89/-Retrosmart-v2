import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'components');
const pagesDir = path.join(__dirname, 'Pages');

// Map of failed images to their alternatives
const imageReplacements = {
    // Team.jsx images - using professional team member photos
    'retrofit-design.jpg': 'team-member-1.jpg',
    'retrofit-coordinator-cost.jpeg': 'team-member-2.jpg',
    'retrofit-evaluation.jpg': 'team-member-3.jpg',
    'retrofit-assessments.jpg': 'team-member-4.jpg',
    'WECA-Retrofit-Draycott-Rd-22.jpg': 'team-member-5.jpg',
    
    // HomeServices.jsx images - using relevant service images
    'externalwallinsulation.jpeg': '4-External-Wall-Insulation-Problems-How-to-Solve-Them.jpg',
    'bg_3.jpg': 'Energize-Your-Home.webp',
    'bg_icon_2.jpg': 'House-Rating-800x450.webp',
    'bg_!.jpg': 'construction-design.jpg',
    'bg4.jpg': 'Retrofit-Coordination.jpeg',
    
    // Footer.jsx image
    'footerbg.png': 'EPC-Video_93_layer1.jpeg',
    
    // Eligibilityform.jsx image
    'Mainformbg.png': 'Energize-Your-Home.webp'
};

function replaceFailedImages(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Replace failed image paths with alternatives
        for (const [failedImage, replacement] of Object.entries(imageReplacements)) {
            const failedImagePattern = new RegExp(`/images/${failedImage}`, 'g');
            content = content.replace(failedImagePattern, `/images/${replacement}`);
            
            // Also replace the original URLs in case they weren't updated yet
            const originalUrlPattern = new RegExp(`https://retrosmart.co.uk/images/${failedImage}`, 'g');
            content = content.replace(originalUrlPattern, `/images/${replacement}`);
        }
        
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
        replaceFailedImages(path.join(componentsDir, file));
    });

// Process all JSX files in pages directory
fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.jsx'))
    .forEach(file => {
        replaceFailedImages(path.join(pagesDir, file));
    });

console.log('All failed images have been replaced with alternatives!'); 