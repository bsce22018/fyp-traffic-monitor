'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#121212] border border-[#222] px-6 py-4 flex space-x-6 rounded-lg shadow-md">
      <Link href="/dashboard" className="text-white hover:text-white font-medium">Dashboard</Link>
      <Link href="/logs" className="text-white hover:text-white font-medium">Logs</Link>
    </nav>
  );
}