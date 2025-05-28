'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface Tool {
  id: string;
  title: string;
  description: string;
  url: string;
  chips: string[];
  categories: string[];
  thumbnail: string;
}

// Easy to modify tools data - add or remove tools here
const tools: Tool[] = [
  {
    id: '1',
    title: 'Design Partner GPT',
    description: 'Design gets better with iteration. AI can be a great partner in that process. The design partner gpt helps designers iterate on PRDs, design comps, and presentations.',
    url: 'https://chatgpt.com/g/g-6800176758688191898212bb79c9489c-design-partner',
    chips: ['AI', 'Dialpad', 'Design System', 'Presentations', 'PRDs'],
    categories: ['GPT'],
    thumbnail: '/tools/design-partner-gpt.png'
  },
  {
    id: '2',
    title: 'MD -> Figma',
    description: 'Plugin that creates figma slides from a markdown file.',
    url: 'https://github.com/austenezzell/Markdown-to-Figma-Slides',
    chips: ['Figma', 'Presentations', 'MD'],
    categories: ['Figma Plugin'],
    thumbnail: '/tools/md-figma.png'
  },
  {
    id: '3',
    title: 'Presentation Outline GPT',
    description: 'Create a skeleton outline for a presentation.',
    url: 'https://chatgpt.com/g/g-6820d5d2eca08191ae66bcc8ffcdd19d-presentation-draft',
    chips: ['AI', 'Dialpad', 'Presentation', 'Figma', 'Google Slides'],
    categories: ['GPT'],
    thumbnail: '/tools/presentation-gpt.png'
  },
  {
    id: '4',
    title: 'Aerolabs Content Creator',
    description: 'GPT that creates in product content for Dialpad.',
    url: 'https://chatgpt.com/g/g-8HaRxqqCY-aerolabs-content-creator',
    chips: ['AI', 'Dialpad', 'In Product Content'],
    categories: ['GPT'],
    thumbnail: '/tools/aerolabs-gpt.png'
  }
];

const filterCategories = ['All', 'GPT', 'Figma Plugin'];

export default function ToolsContent() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTools = activeFilter === 'All' 
    ? tools 
    : tools.filter(tool => tool.categories.includes(activeFilter));

  return (
    <div className="w-full max-w-[600px] mx-auto">
      {/* Sub header */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-serif italic mb-4">
            While no tool can replace clear communication, curiosity, or grit, a few have helped us get there faster.
        </h2>
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center gap-2 mb-8">
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
              activeFilter === category
                ? 'bg-black text-white'
                : 'text-black border border-black'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tools cards */}
      <div className="space-y-4 mb-12">
        {filteredTools.map((tool) => (
          <a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-6 backdrop-blur-sm rounded-2xl border border-black transition-all duration-200 hover:transform hover:scale-[1.02] relative group"
          >
            {/* External link icon */}
            <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-70 transition-opacity duration-200">
              <ExternalLink size={16} className="text-black" />
            </div>
            
            <div className="flex flex-col items-center text-center">
              {/* Title with inline thumbnail */}
              <div className="flex items-center gap-3 mb-3">
                {/* Thumbnail */}
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-8 h-8 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center border border-black">
                    <Image
                      src={tool.thumbnail}
                      alt={tool.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Hide the image and show fallback
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector('.fallback-icon')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-icon w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center';
                          fallback.innerHTML = '<span class="text-black/60 text-sm font-medium">🔧</span>';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-medium text-black">
                  {tool.title}
                </h3>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="mb-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                
                {/* Chips */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {tool.chips.map((chip, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-black/10 text-black rounded-full"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No tools found for the selected filter.</p>
        </div>
      )}
    </div>
  );
} 