'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageNavigation from '@/components/PageNavigation';
import { GuestBookEntry } from '@/lib/db';

export default function GuestBook() {
  const router = useRouter();
  const [note, setNote] = useState('');
  const [name, setName] = useState('');
  const [entries, setEntries] = useState<GuestBookEntry[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/guestbook');
      const data = await response.json();
      if (data.success) {
        setEntries(data.entries);
      }
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setNote('');
        setName('');
        // Optionally show a success message
      } else {
        setError(data.message || 'Failed to submit note');
      }
    } catch (error) {
      setError('Failed to submit note');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full max-w-lg mx-auto px-4">
      <PageNavigation 
        title="Guest Book" 
        onClose={() => router.push('/')}
        width="max-w-[300px]"
      />

      <div className="mt-24 space-y-4">
        {/* Form */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-500 mb-1">Note</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Leave a note"
                className="w-full h-32 p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-400 font-serif italic text-gray-600 resize-none placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-400 font-serif italic text-gray-600 placeholder:text-gray-400"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-2xl font-serif italic text-gray-600 transition-colors flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Submit Note</span>
              <span className="text-xl">→</span>
            </button>
          </form>
        </div>

        {/* Entries */}
        <div className="space-y-3 pb-24">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-gray-500 italic text-sm mb-3">
                {new Date(entry.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
              <p className="text-gray-800 mb-2">&ldquo;{entry.note}&rdquo;</p>
              <p className="text-gray-500 italic">— {entry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 