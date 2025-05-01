'use client';

import MediaPage from '@/components/MediaPage';
import ContentPhotoblog from '@/components/ContentPhotoblog';

export default function PhotoblogPage() {
  return (
    <MediaPage
      OverlayComponent={ContentPhotoblog}
      title="Photoblog"
    />
  );
} 