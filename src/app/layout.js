import './globals.css';
import { Comfortaa } from '@next/font/google';

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
      {/* Apply the Comfortaa font globally */}
      <body className={comfortaa.className}>
        {children}
      </body>
    </html>
  );
}
