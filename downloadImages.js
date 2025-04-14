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

const imageUrls = [
    // Services.jsx
    'https://cdn.mos.cms.futurecdn.net/PnpUHNe8txt5nea57EPtLW-970-80.jpg.webp',
    
    // Team.jsx
    'https://retrosmart.co.uk/images/trust-mark.png',
    'https://retrosmart.co.uk/images/2nd.jpg',
    'https://retrosmart.co.uk/images/3rd.jpg',
    'https://retrosmart.co.uk/images/4th.jpg',
    'https://retrosmart.co.uk/images/5th.jpg',
    
    // SmartHeatingControls.jsx
    'https://starkheatingandgas.com/wp-content/uploads/2023/09/The-Benefits-of-Smart-Heating-Controls-1.jpg',
    'https://www.novismarthome.co.uk/wp-content/uploads/2018/09/Benefits-of-a-Smart-Control-System.jpg',
    
    // RetrofitDesign.jsx
    'https://ecotarget.co.uk/wp-content/uploads/2023/02/retrofit-design.jpg',
    'https://i0.wp.com/eco4gurus.co.uk/wp-content/uploads/2023/08/construction-design.jpg',
    'https://sanrachana.in/wp-content/uploads/2024/08/Retrofit-design-1-1024x702.jpg',
    
    // RetrofitCoordination.jsx
    'https://www.checkatrade.com/blog/wp-content/uploads/2021/09/retrofit-coordinator-cost.jpeg',
    'https://buildingenergyexperts.co.uk/wp-content/uploads/2024/10/Retrofit-Coordination.jpeg',
    'https://energy-trust.co.uk/wp-content/uploads/2020/12/House-Rating-800x450.webp',
    
    // RetrofitEvaluation.jsx
    'https://ecotarget.co.uk/wp-content/uploads/2023/02/retrofit-evaluation.jpg',
    'https://img1.wsimg.com/isteam/ip/0ae490d9-065f-441b-b25f-5057bcd2837d/iStock-1149551793.jpg',
    'https://greenthinkinc.com/wp-content/uploads/2024/01/Energize-Your-Home.webp',
    
    // RetrofitAssessment.jsx
    'https://hunt-a-epc.co.uk/wp-content/uploads/2023/02/retrofit-assessments.jpg',
    'https://buildingenergyexperts.co.uk/wp-content/uploads/2024/09/WECA-Retrofit-Draycott-Rd-22.jpg',
    
    // LoftInsulation.jsx
    'https://www.icecleaning.co.uk/media/images/uploaded/inline/how-does-loft-insulation-work.1707842278.jpg',
    'https://api.content.travisperkins.co.uk/site/binaries/content/gallery/loft-insulation-buying-guide-v2.jpg',
    
    // InternalWallInsulation.jsx
    'https://cdn.prod.website-files.com/63f506047d103546cf06bf03/640512ac8128be10a7f99cf3_internal-wall-insulation-1.jpg',
    'https://cdn.mos.cms.futurecdn.net/rfUFcAgdeAcpW9NN9bQrqQ-650-80.jpg.webp',
    'https://cdn.mos.cms.futurecdn.net/fs6zFLVUwZ3tAHtpFANMcR-970-80.jpg.webp',
    
    // HomeServices.jsx
    'https://retrosmart.co.uk/images/externalwallinsulation.jpeg',
    'https://retrosmart.co.uk/images/bg_3.jpg',
    'https://retrosmart.co.uk/images/bg_icon_2.jpg',
    'https://retrosmart.co.uk/images/bg_!.jpg',
    'https://retrosmart.co.uk/images/bg4.jpg',
    
    // Footer.jsx
    'https://retrosmart.co.uk/images/footerbg.png',
    
    // ExternalWallInsulation.jsx
    'https://corksoluk.com/wp-content/uploads/2022/04/4-External-Wall-Insulation-Problems-How-to-Solve-Them.jpg',
    'https://insulationgo.co.uk/image/catalog/blog/external-wall-insulation-problems/externall-wall-insulation-installation.jpg',
    'https://cdn.mos.cms.futurecdn.net/PnpUHNe8txt5nea57EPtLW-970-80.jpg.webp',
    'https://cdn.mos.cms.futurecdn.net/bxbXuk7drPhhpe6zeTwMaB-970-80.jpg.webp',
    
    // Eligibilityform.jsx
    'https://eco4grants.co.uk/wp-content/uploads/2024/07/6580d2de5a248f6ff386e2fc-1-1-1-1024x695.png',
    'https://retrosmart.co.uk/images/Mainformbg.png',
    
    // AboutUs.jsx
    'https://lowcarbonexchange.com/wp-content/uploads/revslider/video-media/EPC-Video_93_layer1.jpeg'
];

function downloadImage(url) {
    return new Promise((resolve, reject) => {
        const filename = path.basename(url).split('?')[0]; // Remove query parameters from filename
        const filepath = path.join(imagesDir, filename);
        
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            
            const file = fs.createWriteStream(filepath);
            response.pipe(file);
            
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filename}`);
                resolve(filepath);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function downloadAllImages() {
    console.log('Starting image downloads...');
    for (const url of imageUrls) {
        try {
            await downloadImage(url);
        } catch (error) {
            console.error(`Error downloading ${url}:`, error.message);
        }
    }
    console.log('All downloads completed!');
}

downloadAllImages(); 