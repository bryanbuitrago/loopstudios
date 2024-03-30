import { MenuProvider } from '@/contexts/menuContext';

import { Alata } from 'next/font/google';
import './globals.css';

const alata = Alata({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'loopstudios-landing-page',
  description: 'Loopstudios landing page built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={alata.className}>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
