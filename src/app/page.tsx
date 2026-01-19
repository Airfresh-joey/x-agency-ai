import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Strategy & Implementation for Business Growth',
  description: 'X Agency AI transforms businesses with AI strategy, custom AI agents, and implementation services. Drive revenue, increase profitability, and elevate employees with proven AI solutions. 300% higher success rate than in-house AI projects.',
  openGraph: {
    title: 'X Agency AI | From AI Confusion to AI Confidence',
    description: 'Transform your business with AI. We help you pinpoint the right AI opportunities, implement them seamlessly, and deliver real business impact.',
    images: ['/preview-homepage.png'],
  },
  alternates: {
    canonical: 'https://x-agency-ai.vercel.app',
  },
};

const partners = [
  { name: 'Meta', logo: '🔷' },
  { name: 'OpenAI', logo: '🤖' },
  { name: 'Snowflake', logo: '❄️' },
  { name: 'Salesforce', logo: '☁️' },
  { name: 'Microsoft', logo: '🪟' },
  { name: 'AWS', logo: '🌐' },
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

const approach = [
  {
    title: 'Find the highest impact',
    description: 'We go department by department to identify and implement AI workflows and agents that unlock real ROI.',
  },
  {
    title: 'Optimize your LLM',
    description: 'We help you select and configure the LLM(s) that best align with your tech stack and business goals.',
  },
  {
    title: 'Shift the culture',
    description: 'We teach your team how to use AI effectively, when to rely on it, and when to lead without it.',
  },
];

const services = [
  {
    title: 'AI Strategy',
    description: 'Most businesses know they need to implement AI, they just don\'t know how. We guide you from initial uncertainty to measurable business impact with AI.',
    link: '/services#strategy',
    linkText: 'Explore AI Strategy',
  },
  {
    title: 'AI Leadership & Training',
    description: 'You can spend millions on AI tools and get zero ROI if your people aren\'t ready. We transform executives and teams from AI-hesitant to AI-ambitious.',
    link: '/services#leadership',
    linkText: 'Train Your Teams',
  },
  {
    title: 'AI Engineering',
    description: 'We solve business problems with the right combination of existing tools, smart automation, and custom AI agents to integrate AI where traditional workflows fail.',
    link: '/services#engineering',
    linkText: 'Our Approach to Automation',
  },
];

const testimonial = {
  quote: "The X Agency AI team is exceptionally professional & knowledgeable. They did an excellent AI training with our team members. The team was very enthusiastic, which should drive adoption.",
  author: "Sarah Mitchell",
  company: "TechCorp Solutions",
  role: "CEO",
};

const faqs = [
  "How will the AI Maturity Index help me?",
  "What does X Agency AI actually do?",
  "What kind of tools does X Agency AI build?",
  "Why not just do AI in-house?",
  "Can you work with our current tools and systems?",
  "What types of companies are the best fit?",
];

export default function Home() {
  // Structured data for SEO and GEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "X Agency AI",
    "url": "https://x-agency-ai.vercel.app",
    "logo": "https://x-agency-ai.vercel.app/preview-homepage.png",
    "description": "X Agency AI is a leading AI strategy and implementation agency helping businesses transform with artificial intelligence solutions, custom AI agents, and expert training.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 AI Innovation Drive, Suite 150",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94102",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service",
      "email": "hello@xagencyai.com"
    },
    "sameAs": [
      "https://twitter.com/xagencyai",
      "https://linkedin.com/company/xagencyai"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "X Agency AI",
    "image": "https://x-agency-ai.vercel.app/preview-homepage.png",
    "description": "Expert AI strategy, implementation, and training services for businesses. We help companies find high-impact AI opportunities, implement custom AI agents, and train teams for AI transformation.",
    "priceRange": "$$$$",
    "url": "https://x-agency-ai.vercel.app",
    "telephone": "+1-555-123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 AI Innovation Drive, Suite 150",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94102",
      "addressCountry": "US"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Strategy Consulting",
            "description": "Discover high-impact AI use cases, assess AI maturity, and develop comprehensive AI transformation roadmaps."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Implementation & Engineering",
            "description": "Build custom AI agents, workflow automations, and integrate AI solutions into existing business systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Leadership & Training",
            "description": "Transform teams from AI-hesitant to AI-ambitious through comprehensive training and change management."
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://x-agency-ai.vercel.app"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Partnership Banner */}
          <div className="flex justify-center mb-8">
            <Link href="/articles/partnership" className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors">
              <span className="font-semibold">X Agency AI</span>
              <span className="text-indigo-500">Official AI Partner</span>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              From AI Confusion to{' '}
              <span className="gradient-text">AI Confidence.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We help you pinpoint the right AI opportunities, implement them seamlessly, and deliver real business impact.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full gradient-bg px-8 py-4 text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
              >
                Talk to an AI Strategist
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">
            Partnering with the best
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                <span className="text-3xl">{partner.logo}</span>
                <span className="text-lg font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-32">
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

      {/* Strategic AI Enablement */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Strategic AI Enablement</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Set your team up to succeed with AI</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Most businesses know they need to implement AI, they just don&apos;t know how. We guide you from initial uncertainty to measurable impact with AI.
              </p>
              <div className="mt-8 space-y-6">
                {approach.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/services#strategy"
                className="mt-8 inline-flex items-center text-primary font-semibold hover:underline"
              >
                How AI transformation works
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-bg opacity-10 absolute inset-0" />
              <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Find. Prepare. Implement.</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Real AI transformation requires finding the right problems, preparing your people to lead change, and implementing solutions that drive measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">Our Strategic Approach</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Find. Prepare. Implement.</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real AI transformation requires finding the right problems, preparing your people to lead change, and implementing solutions that drive measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                <Link href={service.link} className="inline-flex items-center text-primary font-semibold hover:underline">
                  {service.linkText}
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-8">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Hear from businesses like yours</h2>
          <blockquote className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-gray-500">{testimonial.company}, {testimonial.role}</p>
          </div>
          <Link
            href="/case-studies"
            className="mt-8 inline-flex items-center justify-center rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            View Case Studies
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">FAQ</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Common questions, straight answers</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              No fluff. Just clear answers to what business leaders really want to know when it comes to AI.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{faq}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ))}
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
