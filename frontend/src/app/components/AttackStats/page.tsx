'use client';
import { useEffect, useState } from 'react';
import { fetchLogs } from '@/lib/api';

export default function AttackStats() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchLogs().then(logs => setTotal(logs.length - 1));
  }, []);

  return (
    <div className="bg-[#1e1e1e] rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-300">Attacks Stopped</h2>
      <p className="text-4xl font-bold text-green-500 mt-2">{total}</p>
    </div>
  );
}