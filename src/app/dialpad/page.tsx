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

  useEffect(() => {
    // Find the main container and change its background color
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.classList.remove('bg-light-gray');
      mainContainer.classList.add('bg-[#D3BCFF]');
    }

    // Cleanup function to restore the original background color when leaving the page
    return () => {
      if (mainContainer) {
        mainContainer.classList.remove('bg-[#D3BCFF]');
        mainContainer.classList.add('bg-light-gray');
      }
    };
  }, []);

  // Handle escape key to close overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showOverlay) {
        setShowOverlay(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showOverlay]);

  return (
    <div className="w-full h-full">
      {mounted && showOverlay && createPortal(
        <DialpadOverlay onClose={() => setShowOverlay(false)} />,
        document.body
      )}
      <div className="flex-grow flex items-center justify-center px-lg-sp py-xl-sp">
        <h2 className="text-xl md:max-w-[900px] text-center leading-tight text-balance">
          Currently building <Link href="/design" className="font-serif italic hover:underline">design</Link> and the future of business communications at <Link href="/dialpad" className="font-serif italic hover:underline">Dialpad</Link>.
        </h2>
      </div>
    </div>
  );
} 