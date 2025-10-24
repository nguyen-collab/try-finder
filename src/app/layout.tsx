import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const aeonikPro = localFont({
  variable: '--font-aeonik-pro',
  src: [
    {
      path: '../../public/fonts/Aeonik/AeonikPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});

const interVariable = localFont({
  variable: '--font-inter-variable',
  src: '../../public/fonts/Inter-Variable/InterVariable.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'TryFinder - Find Prospects in 5 Seconds',
    template: '%s | TryFinder',
  },
  description:
    'Find prospects in 5 seconds. Close deals faster with TryFinder - the fastest email finder and contact discovery platform for sales teams.',
  keywords: [
    'email finder',
    'prospect finder',
    'contact discovery',
    'sales tools',
    'lead generation',
    'email verification',
    'sales prospecting',
    'B2B sales',
    'contact database',
    'sales automation',
  ],
  authors: [{ name: 'TryFinder Team' }],
  creator: 'TryFinder',
  publisher: 'TryFinder LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tryfinder-ai.vercel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tryfinder-ai.vercel.app',
    siteName: 'TryFinder',
    title: 'TryFinder - Find Prospects in 5 Seconds',
    description:
      'Find prospects in 5 seconds. Close deals faster with TryFinder - the fastest email finder and contact discovery platform for sales teams.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'TryFinder - Find Prospects in 5 Seconds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TryFinder - Find Prospects in 5 Seconds',
    description:
      'Find prospects in 5 seconds. Close deals faster with TryFinder - the fastest email finder and contact discovery platform for sales teams.',
    images: ['/og.png'],
    creator: '@tryfinder',
    site: '@tryfinder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${aeonikPro.variable} ${interVariable.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
