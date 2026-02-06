import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PostHogProvider } from '@/components/providers/PostHogProvider';
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
  title: 'Nutree - Your AI Nutritionist in Your Pocket',
  description: 'AI-powered nutrition tracking with instant meal scanning, personalized meal planning, and real-time macro tracking. Open source, free to use.',
  keywords: ['nutrition tracking', 'AI meal scanner', 'calorie counter', 'macro tracking', 'meal planning', 'open source'],
  authors: [{ name: 'Nutree Team' }],
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Nutree - Your AI Nutritionist in Your Pocket',
    description: 'AI-powered nutrition tracking with instant meal scanning, personalized meal planning, and real-time macro tracking.',
    url: 'https://nutreeai.com',
    siteName: 'Nutree',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo-512.png',
        width: 512,
        height: 512,
        alt: 'Nutree Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutree - Your AI Nutritionist in Your Pocket',
    description: 'AI-powered nutrition tracking with instant meal scanning and personalized meal planning.',
    images: ['/logo-512.png'],
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
        <meta name="theme-color" content="#1A4739" />
      </head>
      <body className="flex min-h-screen flex-col">
        <PostHogProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
