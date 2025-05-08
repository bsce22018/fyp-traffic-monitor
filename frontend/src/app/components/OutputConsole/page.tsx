'use client';
import { useState } from 'react';

export default function OutputConsole() {
  const [output, setOutput] = useState('Results will appear here...');

  return (
    <div className="bg-black text-green-400 font-mono rounded-xl p-4 min-h-[120px] mt-4">
      <pre>{output}</pre>
    </div>
  );
}
