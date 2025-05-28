import type { Metadata } from 'next';
import { Instrument_Sans, Instrument_Serif } from 'next/font/google';
import Link from 'next/link';
import { ModalProvider } from '@/context/ModalContext';
import ClientFooter from '../components/ClientFooter';
import TitleOverlay from '../components/TitleOverlay';
import './globals.css';
import { MediaProvider } from '@/context/MediaContext';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://austenezzell.com'),
  title: 'Austen Ezzell',
  description: 'The design practice of Austen Ezzell',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '16x16 32x32',
      },
      {
        url: '/favicon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/apple-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
      },
    ],
  },
  openGraph: {
    title: 'Austen Ezzell',
    description: 'The design practice of Austen Ezzell',
    url: 'https://austenezzell.com',
    siteName: 'Austen Ezzell',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Austen Ezzell',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austen Ezzell',
    description: 'The design practice of Austen Ezzell',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} ${instrumentSerif.variable}`}>
        <ModalProvider>
          <MediaProvider>
            <div className="main-container min-h-screen flex flex-col bg-light-gray">
              {/* Header */}
              <header className="py-6 text-center md:h-[200px]">
                <Link href="/" className="text-sm inline-block">
                  The design practice<br />of Austen Ezzell
                </Link>
              </header>

              {/* Main Content */}
              <main className="flex-1 flex items-center justify-center">
                {children}
              </main>

              {/* Footer container */}
              <div id="footer-root" />
              <ClientFooter />
              <TitleOverlay />
            </div>
          </MediaProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
