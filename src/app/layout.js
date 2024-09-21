// src/app/layout.js
import './globals.css';
import { Comfortaa } from 'next/font/google';

/* Import Comfortaa with specific weights */
const comfortaa = Comfortaa({
  weight: ['300', '400', '700'], // Add more weights if needed
  subsets: ['latin'],            // Specify the character subsets you need
});

export const metadata = {
  title: 'PreCognitive.AI',
  description: 'PreCognitive Co., Ltd.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo_only.png" />
      </head>
      <body className={comfortaa.className}>
        {children}
      </body>
    </html>
  );
}
