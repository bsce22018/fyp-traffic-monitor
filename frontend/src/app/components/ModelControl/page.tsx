'use client';
import { useState } from 'react';
import { runModel } from '@/lib/api';

export default function ModelControl() {
  const [status, setStatus] = useState('');

  const handleRun = async (type: 'rf' | 'rl') => {
    setStatus(`Running ${type.toUpperCase()}...`);
    const res = await runModel(type);
    setStatus(res.success ? res.output : res.error);
  };

  return (
    <div className="bg-[#1e1e1e] rounded-xl shadow p-6 space-x-4">
      <button onClick={() => handleRun('rf')} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl">Run Random Forest</button>
      <button onClick={() => handleRun('rl')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">Run Reinforcement Learning</button>
      <p className="mt-4 text-sm text-gray-400">{status}</p>
    </div>
  );
}
