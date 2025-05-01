'use client';

import MediaPage from '@/components/MediaPage';
import ContentDialpad from '@/components/ContentDialpad';

export default function DialpadPage() {
  return (
    <MediaPage
      OverlayComponent={ContentDialpad}
      title="Dialpad"
    />
  );
} 