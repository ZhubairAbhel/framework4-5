import Link from 'next/link';

export default function SeoHome() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Topik SEO</h1>
      <p className="mb-4 text-gray-700">
        Berikut adalah beberapa halaman SEO-friendly yang membahas berbagai
        teknologi frontend:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
        <li>
          <Link href="/seo/nextjs">SEO: Next.js</Link>
        </li>
        <li>
          <Link href="/seo/react">SEO: React</Link>
        </li>
        <li>
          <Link href="/seo/tailwind">SEO: Tailwind CSS</Link>
        </li>
      </ul>
    </main>
  );
}
