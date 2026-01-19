import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Leading AI Strategy & Implementation Agency',
  description: 'AI designed for the bottom line. X Agency AI turns enterprise AI into real profitability, scale, and enterprise value. 300% higher success rate than in-house AI projects. Proven results across 50+ companies with 100+ high-ROI use cases.',
  keywords: [
    'AI agency',
    'AI consulting firm',
    'AI implementation company',
    'enterprise AI partner',
    'AI transformation experts',
    'business AI specialists'
  ],
  openGraph: {
    title: 'About Us | X Agency AI',
    description: 'AI designed for the bottom line. We turn enterprise AI into real profitability, scale, and enterprise value.',
    images: ['/preview-homepage.png'],
  },
  alternates: {
    canonical: 'https://x-agency-ai.vercel.app/about',
  },
};

const stats = [
  { value: '3x', label: 'higher success rate with a strategic AI partner' },
  { value: '100+', label: 'high-ROI use cases delivered across 50+ companies' },
];

const benefits = [
  {
    title: 'Drive Revenue',
    description: 'Scale faster with AI-driven automation and predictive insights that unlock new growth opportunities.',
    icon: '📈',
  },
  {
    title: 'Increase Profitability',
    description: 'Optimize operations and eliminate inefficiencies to boost profit margins and enterprise value.',
    icon: '💰',
  },
  {
    title: 'Elevate Employees',
    description: 'Remove tedious tasks and empower your team to focus on high-impact, meaningful work.',
    icon: '🚀',
  },
];

const values = [
  {
    title: 'Growth Mindset',
    description: 'We are lifelong learners on a mission to get 1% better every single day',
  },
  {
    title: 'Extreme Ownership',
    description: 'We own the problem, the solution, and the outcome, regardless of scenario',
  },
  {
    title: 'Team First',
    description: 'We constantly find ways to make the entire team and company better',
  },
  {
    title: 'Scrappy',
    description: 'We are adaptable, resourceful, and always solving problems',
  },
];

const leadership = [
  { name: 'Alex Thompson', role: 'Founder / CEO' },
  { name: 'Jordan Mitchell', role: 'President' },
  { name: 'Sam Rodriguez', role: 'Chief Strategy Officer' },
  { name: 'Morgan Chen', role: 'CFO' },
  { name: 'Taylor Williams', role: 'Executive Partner, Growth' },
  { name: 'Casey Davis', role: 'Chief AI Officer' },
  { name: 'Riley Johnson', role: 'VP, Client Strategy' },
  { name: 'Jamie Lee', role: 'Head of AI Strategy' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            AI designed for the{' '}
            <span className="gradient-text">bottom line</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We turn enterprise AI into real profitability, scale, and enterprise value.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                <div className="text-5xl font-bold gradient-text">{stat.value}</div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">As your AI Strategy & Implementation Partner</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">We help you</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Rate Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">The numbers don&apos;t lie.</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            AI projects developed with specialized vendors have a success rate
          </p>
          <div className="text-6xl font-bold gradient-text mb-4">300% higher</div>
          <p className="text-gray-600 dark:text-gray-400">
            than in-house AI projects.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Source: State of AI in Business 2025, MIT
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">The X Agency AI Way</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              The mindset and behaviors we hire for, reward, and live by
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors">
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Leadership Team</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Behind every great solution is a team of passionate innovators, problem-solvers, and visionaries.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {leadership.map((person) => (
              <div key={person.name} className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join the Best Team in AI</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We&apos;re building a collection of innovators and the most talented minds in AI who are passionate about transforming how businesses operate and eager to grow their careers at the cutting edge of technology.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            If you&apos;re ready to be on a rocket ship with a team of AI-first problem solvers tackling exciting challenges that actually matter, we want to hear from you.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center rounded-full gradient-bg px-8 py-4 text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
          >
            Join the Team
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Track your AI results</h2>
          <p className="text-xl text-white/90 mb-8">
            X Agency AI gives you a centralized portal to track tools, agents, training, and results. Stay aligned, stay accountable, and scale what works.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg hover:bg-gray-100 transition-colors"
          >
            Get Your AI Results
          </Link>
        </div>
      </section>
    </div>
  );
}
