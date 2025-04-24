'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DialpadOverlay from '@/components/DialpadOverlay';
import { createPortal } from 'react-dom';

export default function DialpadPage() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Only render the portal after the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && showOverlay && createPortal(
        <DialpadOverlay onClose={() => setShowOverlay(false)} />,
        document.body
      )}
      <div className="flex-grow flex items-center justify-center px-lg-sp py-xl-sp">
        <h2 className="text-xl md:max-w-[900px] text-center leading-tight text-balance">
          Building the future of business communications at <span className="font-serif italic">Dialpad</span>, where <Link href="/design" className="font-serif italic hover:underline">design</Link> meets innovation.
        </h2>
      </div>
    </>
  );
} 