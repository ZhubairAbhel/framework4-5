import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Website Pribadi',
  description: 'Profil, proyek, dan tulisan saya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta
          name="google-site-verification"
          content="YqZEBIL-kcAzszs2MOuTwE4pqwr3UHLZ1eKwM99sKTA"
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
