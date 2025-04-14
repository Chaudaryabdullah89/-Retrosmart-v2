import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create public/images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Professional team member photos from a reliable source
const teamImages = [
    {
        url: 'https://images.unsplash.com/photo-1563183929-662f889bac5a?w=500&h=500&fit=crop',
        filename: 'team-member-1.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500&fit=crop',
        filename: 'team-member-2.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&h=500&fit=crop',
        filename: 'team-member-3.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500&fit=crop',
        filename: 'team-member-4.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&h=500&fit=crop',
        filename: 'team-member-5.jpg'
    }
];

function downloadImage(image) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(imagesDir, image.filename);
        
        https.get(image.url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${image.url}: ${response.statusCode}`));
                return;
            }
            
            const file = fs.createWriteStream(filepath);
            response.pipe(file);
            
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${image.filename}`);
                resolve(filepath);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function downloadAllTeamImages() {
    console.log('Starting team image downloads...');
    for (const image of teamImages) {
        try {
            await downloadImage(image);
        } catch (error) {
            console.error(`Error downloading ${image.filename}:`, error.message);
        }
    }
    console.log('All team images downloaded!');
}

downloadAllTeamImages(); 