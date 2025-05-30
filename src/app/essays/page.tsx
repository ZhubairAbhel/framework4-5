export default function EssaysPage() {
  const essays = [
    {
      title: 'Mengapa Belajar Next.js',
      summary: 'Next.js membuat pengembangan web lebih mudah dan cepat.',
      link: 'https://medium.com/@kamu/nextjs',
    },
    {
      title: 'Tailwind Itu Keren',
      summary: 'Utility-first CSS framework yang efisien.',
      link: 'https://medium.com/@kamu/tailwind',
    },
    // tambah artikel lain jika ingin
  ];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Esai Saya</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {essays.map((essay, i) => (
          <a
            key={i}
            href={essay.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-4 rounded hover:shadow-md transition bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{essay.title}</h2>
            <p className="text-gray-600 text-sm">{essay.summary}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
