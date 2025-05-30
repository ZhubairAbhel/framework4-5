import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Tailwind CSS',
  description: 'Halaman ini membahas tentang Tailwind CSS dalam konteks SEO.',
};

export default function TailwindPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Topik: Tailwind CSS</h1>
      <p className="text-gray-700">
        Ini adalah halaman untuk topik <strong>Tailwind CSS</strong>.
      </p>
    </main>
  );
}
