import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500'],
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
});

const interVariable = localFont({
  variable: '--font-inter-variable',
  src: '../../public/fonts/Inter-Variable/InterVariable.ttf',
});

export const metadata: Metadata = {
  title: 'TryFinder',
  description: 'Find prospects in 5 seconds. Close deals- find contacts.',
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
