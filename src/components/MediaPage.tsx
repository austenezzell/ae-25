'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import Link from 'next/link';

interface MediaPageProps {
  OverlayComponent: React.ComponentType<{ onClose: () => void; title: string }>;
  title: string;
}

export default function MediaPage({ OverlayComponent, title }: MediaPageProps) {
  const router = useRouter();
  const [showOverlay, setShowOverlay] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Only render the portal after the component has mounted
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  // Handle escape key to close overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showOverlay) {
        setShowOverlay(false);
        // Navigate back to home after overlay closes
        const timer = setTimeout(() => {
          router.push('/');
        }, 500); // Match the duration of the animation
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showOverlay, router]);

  const handleClose = () => {
    setShowOverlay(false);
    // Navigate back to home after overlay closes
    const timer = setTimeout(() => {
      router.push('/');
    }, 500); // Match the duration of the animation
    return () => clearTimeout(timer);
  };

  if (!mounted) return null;

  return (
    <div className="w-full h-full">
      {showOverlay && mounted && typeof document !== 'undefined' && createPortal(
        <OverlayComponent onClose={handleClose} title={title} />,
        document.body
      )}
      <div className="flex-grow flex items-center justify-center md:px-lg-sp py-xl-sp min-h-[300px] md:min-h-[640px]">
        <h2 className="text-xl w-full max-w-[500px] md:max-w-[900px] xl:max-w-[1200px] text-center leading-tight text-balance">
          Currently helping build <Link href="/design" className="font-serif italic hover:underline">design</Link> and the future of business communications at <Link href="/dialpad" className="font-serif italic hover:underline">Dialpad</Link>.
        </h2>
      </div>
    </div>
  );
} 