// src/app/seo/layout.tsx
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Halaman SEO',
  description: 'Contoh halaman yang SEO-friendly dengan metadata dinamis.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} bg-white text-gray-900`}>
      <header className="p-4 shadow mb-6">
        <h1 className="text-xl font-bold">Contoh Halaman SEO</h1>
      </header>
      <main className="max-w-3xl mx-auto p-4">{children}</main>
    </div>
  );
}
