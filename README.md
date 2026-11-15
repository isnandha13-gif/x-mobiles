# X MOBILES – Tiruppur

Responsive React + Vite frontend for the X MOBILES business website.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal.

## Build

Run `npm run build`. Vite creates the production site in `dist/`.

## Deploy

This project is a static Vite site and can be deployed from GitHub using Cloudflare Pages. No backend, API keys, or Cloudflare-specific configuration file is required.

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: `Vite`

### GitHub and Cloudflare Pages setup

1. In GitHub, create a new repository for the existing project.
2. Open a terminal in this project folder and run:

   ```sh
   git init
   git add .
   git commit -m "Prepare X MOBILES website for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

   Replace the remote URL with the repository URL shown by GitHub.
3. In Cloudflare, open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
4. Choose the GitHub repository and production branch (`main`).
5. Set the build configuration to:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Save and deploy. Cloudflare will provide a `*.pages.dev` URL and build future pushes to the production branch automatically.

To check the production build locally, run `npm ci`, `npm run build`, then `npm run preview`.

## Current form behaviour

The enquiry and feedback forms open WhatsApp with a prefilled message. The customer reviews and sends it. This frontend does not currently save form submissions to a database or send email automatically. For private email delivery, admin storage, or database-backed forms, add a secure backend/serverless function later. Do not put email provider API keys in frontend code.

## Business details used

- X MOBILES, Tiruppur
- Phone: 74486 76376
- Email: gsmwizard0@gmail.com
- Address: 1/44E, 60 Feet Main Road, Velliyankadu, Tiruppur - 641604
- Branch 2 name shown on the visiting card: Retail & Dealer Service
- Branch 2 address shown by its supplied Google Maps link: Xmobiles X2, 298/1, Iduvampalayam Rd, Valai Tottam, Periyandipalayam, Andipalayam, Tiruppur, Tamil Nadu 641687
- The visiting card does not show a separate phone number; branch contact buttons use the official main number above.
- Instagram: https://www.instagram.com/x_mobiles_tirupur/
