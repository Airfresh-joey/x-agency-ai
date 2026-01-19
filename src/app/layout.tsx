import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://x-agency-ai.vercel.app'),
  title: {
    default: "X Agency AI | AI Strategy & Implementation for Business Growth",
    template: "%s | X Agency AI"
  },
  description: "Transform your business with AI. We help you pinpoint the right AI opportunities, implement them seamlessly, and deliver real business impact. Expert AI consulting, custom AI agents, and AI training for enterprises.",
  keywords: [
    "AI agency",
    "AI strategy consulting",
    "AI implementation",
    "custom AI agents",
    "AI automation",
    "business AI solutions",
    "AI transformation",
    "AI consulting services",
    "enterprise AI",
    "AI training",
    "artificial intelligence consulting",
    "AI for business",
    "AI strategy development",
    "AI engineering",
    "generative AI consulting"
  ],
  authors: [{ name: "X Agency AI" }],
  creator: "X Agency AI",
  publisher: "X Agency AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://x-agency-ai.vercel.app',
    siteName: 'X Agency AI',
    title: 'X Agency AI | AI Strategy & Implementation for Business Growth',
    description: 'Transform your business with AI. Expert AI consulting, custom AI agents, and AI training for enterprises. From AI confusion to AI confidence.',
    images: [
      {
        url: '/preview-homepage.png',
        width: 1200,
        height: 630,
        alt: 'X Agency AI - AI Strategy & Implementation',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X Agency AI | AI Strategy & Implementation for Business Growth',
    description: 'Transform your business with AI. Expert AI consulting, custom AI agents, and AI training for enterprises.',
    images: ['/preview-homepage.png'],
    creator: '@xagencyai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://x-agency-ai.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
