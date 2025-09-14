import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Codes & Tags',
  description: 'Get in touch with our trademark and copyright experts. Multiple ways to reach us for your intellectual property needs.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}