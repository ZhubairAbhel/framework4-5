import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang React',
  description: 'Halaman ini membahas tentang React dalam konteks SEO.',
};

export default function ReactPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Topik: React</h1>
      <p className="text-gray-700">
        Ini adalah halaman untuk topik <strong>React</strong>.
      </p>
    </main>
  );
}
