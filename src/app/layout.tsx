import '../styles/global.css';

import { siteConfig } from '@config/config';
import Footer from '@modules/footer/components/footer';
import Navbar from '@modules/navbar/components/navbar';
import ThemeProvider from '@modules/theme/context/theme-context';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const interFont = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `Home | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Faustino Zanetto', 'Software Developer', 'Web Developer', 'Portfolio'],
  authors: [
    {
      name: 'Faustino Zanetto',
      url: 'https://www.faustinozanetto.com',
    },
  ],
  creator: 'Faustino Zanetto',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/assets/images/banner.webp`,
        width: 2000,
        height: 1500,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@faustinozanetto',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/assets/images/banner.webp`,
        width: 2000,
        height: 1500,
      },
    ],
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
  manifest: `${siteConfig.url}/site.webmanifest`,
  icons: {
    shortcut: 'favicons/favicon.ico',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interFont.variable} suppressHydrationWarning>
      <body className="bg-background-50 dark:bg-background-900 overflow-x-hidden font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableColorScheme enableSystem>
          <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1 overflow-x-hidden">{children}</div>
            <Footer />
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
