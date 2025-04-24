'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const quotes = [
  {
    text: "As AI gets smarter, the need for human-centered design becomes greater, not lesser",
    author: "Don Norman"
  },
  {
    text: "It took me four years to paint like Raphael, but a lifetime to paint like a child",
    author: "Pablo Picasso"
  },
  {
    text: "Never delegate understanding",
    author: "Charles Emes"
  },
  {
    text: "Design is not what we make. Design is what we make possible for others",
    author: "Tim Brown"
  },
  {
    text: "Art is never finished, only abandoned",
    author: "Leonardo da Vinci"
  },
  {
    text: "Design is relationships. Design is a relationship between form and content",
    author: "Paul Rand"
  }
];

export default function Footer() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <footer className="max-w-6xl mx-auto py-6 h-[200px] flex items-end">
      <div className="flex flex-wrap justify-between gap-8 text-center md:text-left w-[auto] mx-auto items-end">
        {/* Quote Section */}
        <div className="w-[400px] text-center">
          <p className="text-sm text-gray-600 mb-2">
            &ldquo;{quotes[currentQuoteIndex].text}&rdquo;<span className='nowrap'> — {quotes[currentQuoteIndex].author}</span>
          </p>
          <button 
            onClick={handleNextQuote}
            className="opacity-65 font-serif italic hover:text-gray transition-colors block w-full opacity-65 hover:opacity-100"
          >
            (view another)
          </button>
        </div>

        {/* Logo */}
        <div className="w-[120px] text-center opacity-65 hover:opacity-100">
          <Link href="/">
            <Image
              src="/ae25.svg"
              alt="AE25"
              width={54}
              height={60}
              priority
              className="w-full h-auto mx-auto text-black hover:text-gray transition-colors"
            />
          </Link>
        </div>
      
        {/* First Column */}
        <div className="w-[auto] text-center">
          <ul className="flex flex-col font-serif italic">
            <li><Link href="/design" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Design</Link></li>
            <li><Link href="#" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Photo Blog</Link></li>
            <li><Link href="#" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Portfolios Past</Link></li>
          </ul>
        </div>
        {/* Second Column */}
        <div className="w-[auto] text-center">
          <ul className="flex flex-col font-serif italic">
            <li><Link href="#" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Email</Link></li>
            <li><Link href="#" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">LinkedIn</Link></li>
            <li><Link href="#" className="hover:text-gray transition-colors opacity-65 hover:opacity-100">Sign the Guest Book</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
} 
