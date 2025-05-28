'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import PageNavigation from '@/components/PageNavigation';
import ToolsContent from '@/components/ToolsContent';

export default function ToolsPage() {
  const router = useRouter();

  useEffect(() => {
    // Find the main container and change its background color
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.classList.remove('bg-light-gray');
      mainContainer.classList.add('bg-[#CB71FF]'); // Using a blue color for tools
    }

    // Cleanup function to restore the original background color when leaving the page
    return () => {
      if (mainContainer) {
        mainContainer.classList.remove('bg-[#CB71FF]');
        mainContainer.classList.add('bg-light-gray');
      }
    };
  }, []);

  const handleClose = () => {
    router.push('/');
  };

  return (
    <>
      <PageNavigation title="Tools" onClose={handleClose} width="max-w-[300px]" />
      <div className="flex-grow flex flex-col justify-start px-md-sp md:px-lg-sp py-xl-sp min-h-[300px] py-10">
        <ToolsContent />
      </div>
    </>
  );
} 