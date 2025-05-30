import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Next.js',
  description: 'Halaman ini membahas tentang Next.js dalam konteks SEO.',
};

export default function NextjsPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Topik: Next.js</h1>
      <p className="text-gray-700">
        Ini adalah halaman untuk topik <strong>Next.js</strong>.
      </p>
    </main>
  );
}
