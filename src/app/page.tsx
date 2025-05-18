'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex-grow flex items-center justify-center md:px-md-sp py-xl-sp min-h-[300px]">
        <h2 className="text-xl md:max-w-[900px] xl:max-w-[1200px] text-center leading-tight text-balance">
          Currently helping build <Link href="/design" className="font-serif italic hover:underline underline md:no-underline">design</Link> and the future of business communications at <Link href="/dialpad" className="font-serif italic hover:underline underline md:no-underline">Dialpad</Link>.
        </h2>
      </div>
    </div>
  );
}
