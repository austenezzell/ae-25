'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-grow flex items-center justify-center px-lg-sp py-xl-sp">
      <h2 className="text-xl md:max-w-[900px] text-center leading-tight text-balance">
        Currently building <Link href="/design" className="font-serif italic hover:underline">design</Link> and the future of business communications at <Link href="/dialpad" className="font-serif italic hover:underline">Dialpad</Link>.
      </h2>
    </div>
  );
}
