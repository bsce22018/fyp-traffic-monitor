'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#121212] border-b border-[#222] p-4 flex space-x-6">
      <Link href="/dashboard" className="text-white hover:text-green-400 font-medium">Dashboard</Link>
      <Link href="/logs" className="text-white hover:text-green-400 font-medium">Logs</Link>
    </nav>
  );
}
