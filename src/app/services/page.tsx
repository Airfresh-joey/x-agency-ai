import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Services | Strategy, Engineering & Leadership',
  description: 'Comprehensive AI services including AI strategy consulting, custom AI agent development, AI engineering, and leadership training. Proven across 50+ companies with 100+ high-ROI use cases. Transform your business with expert AI implementation.',
  keywords: [
    'AI strategy consulting',
    'AI implementation services',
    'custom AI agents',
    'AI engineering',
    'AI leadership training',
    'AI transformation services',
    'enterprise AI solutions',
    'AI automation services',
    'business AI consulting'
  ],
  openGraph: {
    title: 'AI Services | Strategy, Engineering & Leadership | X Agency AI',
    description: 'Comprehensive AI services including strategy, engineering, leadership training, and custom AI agents.',
    images: ['/preview-homepage.png'],
  },
  alternates: {
    canonical: 'https://x-agency-ai.vercel.app/services',
  },
};

const strategicApproach = [
  {
    number: '1',
    title: 'Discover Use Cases',
    items: [
      'Interview teams across departments to find real problems',
      'Calculate potential ROI for each opportunity',
      'Prioritize based on impact and feasibility',
    ],
  },
  {
    number: '2',
    title: 'Survey the Landscape',
    items: [
      'Research existing tools that solve your specific problems',
      'Track emerging AI capabilities launching in the next 3-6 months',
      'Identify gaps where current solutions fall short',
    ],
  },
  {
    number: '3',
    title: 'Implement Solutions',
    items: [
      'Deploy chosen tools and integrate them into daily workflows',
      'Train your team on how to use them effectively',
      'Monitor usage and iterate based on real feedback',
    ],
  },
  {
    number: '4',
    title: 'Scale with Confidence',
    items: [
      'Expand successful implementations to other departments',
      'Establish internal champions who can lead new opportunities',
      'Create 3-year roadmap based on proven wins',
    ],
  },
];

const pillars = [
  'Build your dedicated AI team',
  'Define your AI vision & goals',
  'Assess your current AI maturity',
  'Identify high-impact use cases',
  'Select the right technology stack',
  'Develop your data strategy',
  'Create change management plan',
  'Measure & optimize ROI',
];

const industries = [
  'Retail & E-commerce',
  'Hospitality',
  'Mortgage & Lending',
  'Financial Services',
  'Construction',
  'Manufacturing & Logistics',
  'Real Estate',
  'Professional Services',
  'Private Equity',
];

const llmFeatures = [
  'Select the right LLM tailored to your use cases',
  'Black-box your data so it\'s never used to train other models',
  'Stop employees from sharing company secrets on personal LLMs',
  'Get your entire team on secure, compliant AI tools',
];

export default function ServicesPage() {
  // Structured data for services
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://x-agency-ai.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://x-agency-ai.vercel.app/services"
      }
    ]
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AI Services Offered by X Agency AI",
    "description": "Comprehensive AI strategy, implementation, and training services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "AI Strategy Consulting",
          "description": "We guide businesses from initial uncertainty to measurable business impact with AI. Discover high-impact use cases, assess AI maturity, and develop comprehensive transformation roadmaps.",
          "provider": {
            "@type": "Organization",
            "name": "X Agency AI"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "AI Engineering & Implementation",
          "description": "Build custom AI agents, workflow automations, and integrate AI solutions into existing business systems. We solve business problems with the right combination of existing tools and custom AI solutions.",
          "provider": {
            "@type": "Organization",
            "name": "X Agency AI"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "AI Leadership & Training",
          "description": "Transform executives and teams from AI-hesitant to AI-ambitious through comprehensive training backed by behavioral science and real-world implementation experience.",
          "provider": {
            "@type": "Organization",
            "name": "X Agency AI"
          }
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      {/* Hero Section */}
      <section id="strategy" className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            You know you need AI.{' '}
            <span className="gradient-text">We&apos;ll show you where, when and how.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Most businesses know they need to implement AI, they just don&apos;t know how. We guide you from initial uncertainty to measurable business impact with AI.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full gradient-bg px-8 py-4 text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
            >
              Talk to an AI Strategist
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our <span className="gradient-text">Strategic</span> Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicApproach.map((step) => (
              <div key={step.number} className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Difference:</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            We don&apos;t deliver massive slide decks and walk away.
          </p>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            We find <span className="font-bold text-primary">quick wins</span> that create{' '}
            <span className="font-bold text-primary">measurable EBITDA impact</span>,{' '}
            <span className="font-bold">build</span> the roadmap, then{' '}
            <span className="font-bold">implement</span> that roadmap.
          </p>
        </div>
      </section>

      {/* 8 Pillars */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">AI Transformation</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">The 8 Pillars of AI Transformation</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              To win with AI, you need more than tools. You need a sustainable, efficient, and profitable transformation plan.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {pillars.map((pillar, index) => (
              <div key={index} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors">
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold mb-3">
                  {index + 1}
                </div>
                <p className="font-medium">{pillar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM Selection */}
      <section id="engineering" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">LLM Selection & Data Security</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Choose the Right LLM for Your Business</h2>
              <ul className="mt-8 space-y-4">
                {llmFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-bg opacity-10 absolute inset-0" />
              <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
                <div className="text-6xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We build AI command centers to transform fragmented, risky AI usage into secure, centralized systems that protect your data while maximizing team efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">Industry Specific Expertise</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Proven Across Industries</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We don&apos;t bring generic solutions. We bring deep industry-specific knowledge from real implementations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span key={industry} className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Engineering */}
      <section id="leadership" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">Our Strategic Approach</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Strategy is Just the Beginning</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The right AI implementation requires both technical excellence and human readiness. We help you find the strategy, train your team, and implement the solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AI Leadership & Training</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You can spend millions on AI tools and get zero ROI if your people aren&apos;t ready. We transform executives and teams from AI-hesitant to AI-ambitious through facilitation backed by behavioral science and real-world implementation experience.
              </p>
              <Link href="/contact" className="inline-flex items-center text-primary font-semibold hover:underline">
                Train Your Executives & Teams
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div id="agents" className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AI Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We solve business problems with the right combination of existing tools, smart automation, and custom AI agents to integrate AI where traditional workflows fail. We know what works, what&apos;s coming next, and how to drive real ROI.
              </p>
              <Link href="/contact" className="inline-flex items-center text-primary font-semibold hover:underline">
                Our Approach to Automation
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
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
