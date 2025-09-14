import './globals.css';
import type { Metadata } from 'next';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Codes & Tags - Trademark & Copyright Registration Services',
  description: 'Protect your brand with India\'s trusted trademark & copyright registration experts. Quick, affordable, online.',
  keywords: 'trademark registration, copyright registration, brand protection, MSME, startup',
  icons: {
    icon: '/favicon2.png',
    shortcut: '/favicon2.png',
    apple: '/favicon2.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon2.png" />
      </Head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}