import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['700'], 
  variable: '--font-playfair',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'], 
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'StylTara Studio',
  description: 'Transform your wardrobe or your look with a personalized styling experience designed just for you.',
  icons: {
    icon: '/logo1.png',
    apple: '/logo1.png',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light-mode dark:dark-mode">
      <body className={`${playfair.variable} ${poppins.variable} font-poppins`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}