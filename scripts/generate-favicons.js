#!/usr/bin/env node
/**
 * Script to generate favicons from app/icon.jpg
 * Run with: node scripts/generate-favicons.js or npm run generate-favicons
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_IMAGE = path.join(__dirname, '..', 'app', 'icon.jpg');
const OUTPUT_DIR = path.join(__dirname, '..', 'public');

async function generateFavicons() {
    console.log('Generating favicons...');

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    try {
        // Generate favicon.ico (32x32)
        await sharp(INPUT_IMAGE)
            .resize(32, 32)
            .toFile(path.join(OUTPUT_DIR, 'favicon.ico'));
        console.log('✓ Generated favicon.ico (32x32)');

        // Generate apple-touch-icon.png (180x180)
        await sharp(INPUT_IMAGE)
            .resize(180, 180)
            .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
        console.log('✓ Generated apple-touch-icon.png (180x180)');

        // Generate additional sizes for better compatibility
        await sharp(INPUT_IMAGE)
            .resize(192, 192)
            .toFile(path.join(OUTPUT_DIR, 'icon-192.png'));
        console.log('✓ Generated icon-192.png (192x192)');

        await sharp(INPUT_IMAGE)
            .resize(512, 512)
            .toFile(path.join(OUTPUT_DIR, 'icon-512.png'));
        console.log('✓ Generated icon-512.png (512x512)');

        console.log('\n✅ All favicons generated successfully!');
    } catch (error) {
        console.error('❌ Error generating favicons:', error);
        process.exit(1);
    }
}

generateFavicons();
