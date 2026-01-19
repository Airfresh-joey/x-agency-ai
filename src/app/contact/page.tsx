'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How will the AI Maturity Index help me?",
    answer: "Our AI Maturity Index provides a comprehensive assessment of your organization's current AI capabilities, identifying gaps and opportunities. It gives you a clear roadmap for AI adoption and helps prioritize investments for maximum ROI."
  },
  {
    question: "What does X Agency AI actually do?",
    answer: "We're an AI Strategy & Implementation partner. We help businesses discover high-impact AI opportunities, select the right tools and technologies, train teams, and implement custom AI solutions that drive measurable business results."
  },
  {
    question: "What kind of tools does X Agency AI build?",
    answer: "We build custom AI agents, workflow automations, chatbots, data pipelines, and integrations. Our solutions range from email processing agents to complex multi-system automations that can save thousands of hours annually."
  },
  {
    question: "Why not just do AI in-house?",
    answer: "AI projects developed with specialized vendors have a 300% higher success rate than in-house projects. We bring deep expertise, proven frameworks, and experience across 100+ implementations - getting you to ROI faster while avoiding common pitfalls."
  },
  {
    question: "Can you work with our current tools and systems?",
    answer: "Absolutely. We specialize in integrating AI with your existing tech stack - whether that's Salesforce, NetSuite, HubSpot, custom databases, or legacy systems. We build solutions that enhance what you already have."
  },
  {
    question: "What types of companies are the best fit?",
    answer: "We work best with mid-market to enterprise companies ($10M+ revenue) who have manual processes ripe for automation, growing data volumes, and leadership committed to AI transformation. We've served 50+ companies across industries including financial services, manufacturing, real estate, and professional services."
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will be in touch shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // FAQ Schema for SEO and GEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://x-agency-ai.vercel.app/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO and GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                <span className="gradient-text">Contact us</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                As your partner in AI Strategy & Implementation, we&apos;re here for you.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Office Location</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    123 AI Innovation Drive, Suite 150<br />
                    San Francisco<br />
                    CA, 94102
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Support</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    hello@xagencyai.com<br />
                    (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Work Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    How Can We Help You? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg gradient-bg text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
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
              <div
                key={index}
                className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
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
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg hover:bg-gray-100 transition-colors"
          >
            Get Your AI Results
          </a>
        </div>
      </section>
    </div>
  );
}
