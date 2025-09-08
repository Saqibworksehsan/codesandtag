'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Share2, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareOnWhatsApp = () => {
    const text = `Check out this article: ${title}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + currentUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      '_blank'
    );
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="flex space-x-2">
      <Button
        size="sm"
        variant="outline"
        onClick={shareOnWhatsApp}
        className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
      >
        <MessageCircle className="w-4 h-4 mr-1" />
        WhatsApp
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={shareOnLinkedIn}
        className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
      >
        <Linkedin className="w-4 h-4 mr-1" />
        LinkedIn
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={copyToClipboard}
        className="text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white"
      >
        <Share2 className="w-4 h-4 mr-1" />
        Copy Link
      </Button>
    </div>
  );
}