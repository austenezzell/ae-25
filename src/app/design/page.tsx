'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import PageNavigation from '@/components/PageNavigation';

export default function DesignPage() {
  const router = useRouter();

  useEffect(() => {
    // Find the main container and change its background color
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.classList.remove('bg-light-gray');
      mainContainer.classList.add('bg-[#FFA722]');
    }

    // Cleanup function to restore the original background color when leaving the page
    return () => {
      if (mainContainer) {
        mainContainer.classList.remove('bg-[#FFA722]');
        mainContainer.classList.add('bg-light-gray');
      }
    };
  }, []);

  const handleClose = () => {
    router.push('/');
  };

  return (
    <>
      <PageNavigation title="Design" onClose={handleClose} width="max-w-[300px]" />
      <div className="flex-grow flex items-center justify-center px-md-sp md:px-lg-sp py-xl-sp min-h-[300px] py-10">
        <p className="text-md md:max-w-[900px] text-center leading-tight text-balance">
          For me, design is opportunity. It&apos;s a mix of craft, business and art. It&apos;s nothing on it&apos;s own and grows stronger with diversity. At Dialpad, I&apos;m fortunate to work with a team that recognizes the advantage of involving design early and at the highest levels. Together, we&apos;re building a company where design helps shape every customer experience and drives our future.
        </p>
      </div>
    </>
  );
} 