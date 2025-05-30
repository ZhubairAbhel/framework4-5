'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-4xl mx-auto px-4 py-4 flex space-x-6 bg-yellow-200 border border-red-500">
        <Link
          href="/"
          className={`hover:text-teal-600 transition ${
            pathname === '/' ? 'text-teal-600 font-bold' : 'text-gray-700'
          }`}
        >
          Beranda
        </Link>
        <Link
          href="/projects"
          className={`hover:text-teal-600 transition ${
            pathname === '/projects'
              ? 'text-teal-600 font-bold'
              : 'text-gray-700'
          }`}
        >
          Projects
        </Link>
        <Link
          href="/essays"
          className={`hover:text-teal-600 transition ${
            pathname === '/essays' ? 'text-teal-600 font-bold' : 'text-gray-700'
          }`}
        >
          Essays
        </Link>
      </div>
    </nav>
  );
}
