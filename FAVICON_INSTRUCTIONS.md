Using the provided logo as the site favicon

What I'll do for you:
- I updated `app/layout.tsx` metadata to reference `/favicon.ico` and `/apple-touch-icon.png`.
- Next.js will include the appropriate <link> tags from the `metadata.icons` configuration.

What you need to do (very small, local steps):

1) Save the image you attached here as a PNG in the project `public/` directory:
   - `public/logo.png`

2) Generate `favicon.ico` and the Apple touch icon (two quick ways):

   a) Using ImageMagick (Windows PowerShell):

   ```powershell
   # Install ImageMagick if you don't have it, then run:
   magick convert public/logo.png -resize 16x16 public/favicon.ico
   magick convert public/logo.png -resize 180x180 public/apple-touch-icon.png
   ```

   b) Using npm `sharp` (cross-platform):

   ```powershell
   npm install --save-dev sharp
   node -e "(async()=>{const sharp=require('sharp'); await sharp('public/logo.png').resize(16,16).toFile('public/favicon.ico'); await sharp('public/logo.png').resize(180,180).toFile('public/apple-touch-icon.png'); console.log('favicons generated');})()"
   ```

   c) Or use an online favicon generator (if you prefer GUI). The generator will produce `favicon.ico` and various sizes; copy the resulting `favicon.ico` and `apple-touch-icon.png` into `public/`.

3) Verify locally by running the dev server and opening the site:

```powershell
npm run dev
# open http://localhost:3001
```

4) Optional: Add additional favicons for Android/Windows if you want richer platform support. For most cases the two files above are enough.

Notes:
- I added `icons` to `metadata` in `app/layout.tsx` so Next.js will emit the right `<link rel="icon">` and `<link rel="apple-touch-icon">` tags.
- Do not commit any local-only artifacts you don't want — if you want `public/favicon.ico` included in git, just `git add public/favicon.ico` and commit. Otherwise keep them local.

If you want, I can:
- Generate the favicons for you if you upload the raw image file into the repo (binary) or provide it as a base64 string.
- Add a small npm script to generate favicons automatically.

Tell me which option you prefer and I will proceed.