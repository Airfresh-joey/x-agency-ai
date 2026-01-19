import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Strategy Insights & Implementation Guides | Blog',
  description: 'Expert insights on AI strategy, implementation, and business transformation. Learn how to successfully implement AI, train teams, and drive ROI with artificial intelligence.',
  keywords: [
    'AI strategy blog',
    'AI implementation guide',
    'AI business insights',
    'AI transformation tips',
    'enterprise AI best practices',
    'AI consulting insights'
  ],
  alternates: {
    canonical: 'https://x-agency-ai.vercel.app/blog',
  },
};

const articles = [
  {
    id: 'ai-implementation-guide-2026',
    title: 'The Complete Guide to AI Implementation for Businesses in 2026',
    excerpt: 'According to recent research, AI projects developed with specialized vendors have a 300% higher success rate than in-house AI projects. Learn the proven framework for successful AI implementation.',
    date: '2026-01-15',
    readTime: '12 min read',
    category: 'AI Strategy',
    slug: 'ai-implementation-guide-2026',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              AI Strategy <span className="gradient-text">Insights</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Expert insights on AI strategy, implementation, and business transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group block"
              >
                <article className="h-full p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-sm font-medium text-indigo-700 dark:text-indigo-300">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {article.excerpt}
                  </p>
                  <time className="text-sm text-gray-500">{article.date}</time>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
