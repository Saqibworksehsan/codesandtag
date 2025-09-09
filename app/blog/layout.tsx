import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Codes & Tags',
  description: 'Latest insights on trademark registration, copyright protection, and intellectual property law in India.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}