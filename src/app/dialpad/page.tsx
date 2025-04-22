'use client';

import { useState } from 'react';
import Link from 'next/link';
import DialpadOverlay from '@/components/DialpadOverlay';

export default function DialpadPage() {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <>
      {showOverlay && <DialpadOverlay onClose={() => setShowOverlay(false)} />}
      <div className="flex-grow flex items-center justify-center px-lg-sp py-xl-sp">
        <h2 className="text-xl md:max-w-[900px] text-center leading-tight text-balance">
          Building the future of business communications at <span className="font-serif italic">Dialpad</span>, where <Link href="/design" className="font-serif italic hover:underline">design</Link> meets innovation.
        </h2>
      </div>
    </>
  );
} 