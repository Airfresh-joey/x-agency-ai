import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get Started with AI Transformation',
  description: 'Contact X Agency AI to discuss your AI strategy and implementation needs. Talk to an AI strategist about driving revenue, increasing profitability, and transforming your business with AI. Serving businesses across industries worldwide.',
  keywords: [
    'contact AI agency',
    'AI consultation',
    'AI strategy consultation',
    'AI implementation inquiry',
    'enterprise AI contact',
    'AI transformation consultation'
  ],
  openGraph: {
    title: 'Contact Us | X Agency AI',
    description: 'Talk to an AI strategist about transforming your business with AI.',
    images: ['/preview-homepage.png'],
  },
  alternates: {
    canonical: 'https://x-agency-ai.vercel.app/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
