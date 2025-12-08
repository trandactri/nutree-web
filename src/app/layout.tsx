import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Nutree AI - Your AI Nutritionist in Your Pocket',
  description: 'AI-powered nutrition tracking with instant meal scanning, personalized meal planning, and real-time macro tracking. Open source, free to use.',
  keywords: ['nutrition tracking', 'AI meal scanner', 'calorie counter', 'macro tracking', 'meal planning', 'open source'],
  authors: [{ name: 'Nutree Team' }],
  openGraph: {
    title: 'Nutree AI - Your AI Nutritionist in Your Pocket',
    description: 'AI-powered nutrition tracking with instant meal scanning, personalized meal planning, and real-time macro tracking.',
    url: 'https://nutreeai.com',
    siteName: 'Nutree AI',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutree AI - Your AI Nutritionist in Your Pocket',
    description: 'AI-powered nutrition tracking with instant meal scanning and personalized meal planning.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1A4739" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
