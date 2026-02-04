import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputImage = path.join(__dirname, '../public/logo.png');
const publicDir = path.join(__dirname, '../public');

async function generateFavicons() {
    console.log('Generating favicons from logo.png...');

    try {
        // favicon-16x16.png
        await sharp(inputImage)
            .resize(16, 16)
            .png()
            .toFile(path.join(publicDir, 'favicon-16x16.png'));
        console.log('✓ favicon-16x16.png');

        // favicon-32x32.png
        await sharp(inputImage)
            .resize(32, 32)
            .png()
            .toFile(path.join(publicDir, 'favicon-32x32.png'));
        console.log('✓ favicon-32x32.png');

        // apple-touch-icon.png
        await sharp(inputImage)
            .resize(180, 180)
            .png()
            .toFile(path.join(publicDir, 'apple-touch-icon.png'));
        console.log('✓ apple-touch-icon.png');

        // android-chrome-192x192.png
        await sharp(inputImage)
            .resize(192, 192)
            .png()
            .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
        console.log('✓ android-chrome-192x192.png');

        // android-chrome-512x512.png
        await sharp(inputImage)
            .resize(512, 512)
            .png()
            .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
        console.log('✓ android-chrome-512x512.png');

        // favicon.ico (simulated with png)
        await sharp(inputImage)
            .resize(32, 32)
            .png()
            .toFile(path.join(publicDir, 'favicon.ico'));
        console.log('✓ favicon.ico (simulated)');

    } catch (err) {
        console.error('Error generating favicons:', err);
        process.exit(1);
    }
}

generateFavicons();
