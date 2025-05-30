'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <Image
          src="/profile.jpg"
          alt="Foto Saya"
          width={128}
          height={128}
          className="rounded-full shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">Halo, saya Zhubair Abhel</h1>
          <p className="text-gray-700">
            Saya adalah seorang mahasiswa yang sedang belajar{' '}
            <strong>Next.js</strong> dan <strong>Tailwind CSS</strong>. Saya
            tertarik dalam pengembangan web modern dan senang membangun aplikasi
            yang fungsional dan estetik.
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Keahlian</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>HTML, CSS, JavaScript</li>
          <li>React & Next.js</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </section>
    </main>
  );
}
