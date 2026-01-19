import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | AI Implementation Success Stories',
  description: 'See how 50+ companies have driven actual impact with AI. Real case studies showing 8,000+ hours saved annually, $420,000 cost reductions, and 57% efficiency increases. Proven AI implementation results across industries.',
  keywords: [
    'AI case studies',
    'AI implementation success stories',
    'AI ROI examples',
    'AI automation results',
    'business AI transformation',
    'AI agent case studies',
    'enterprise AI results'
  ],
  openGraph: {
    title: 'Case Studies | AI Implementation Success Stories | X Agency AI',
    description: 'Real case studies showing hours saved, revenue increased, and costs reduced with AI implementation.',
    images: ['/preview-case-studies.png'],
  },
  alternates: {
    canonical: 'https://x-agency-ai.vercel.app/case-studies',
  },
};

const caseStudies = [
  {
    id: 1,
    metric: '45 Hours Saved Monthly',
    title: 'AI Lead Processing Agent',
    highlights: [
      '1,500+ emails processed and 650+ leads handled monthly through an AI Agent across 5 branches',
      'Manual tasks like email monitoring, data entry, and 45-minute lead import sessions completely eliminated',
      'AI Agent running 24/7, distributing tasks automatically based on real-time availability and fair rotation logic',
    ],
    industry: 'Professional Services',
    company: 'Non-Disclosed Company',
    problem: "This company's sales coordinator manually monitored a shared inbox across five branches, spending 3-5 minutes per lead on CRM data entry and spreadsheet tracking. Mornings consumed 30-45 minutes just importing and assigning leads, costing the facility significant time.",
    solution: "X Agency AI built a workflow automation that monitors their inbox 24/7, classifies emails, and searches their CRM for existing customers. The system auto-creates cards with AI notes, checks real-time agent availability, and distributes tasks based on branch rules with automated notifications.",
    quote: "I was thrilled by how fast X Agency AI delivered. My goal is to free an employee up, he's capable of so much more.",
    quoteAuthor: 'Sales Manager',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    metric: '220 Hours Saved Monthly',
    title: 'AI Supplier Automation',
    highlights: [
      'AI Workflow Automation Cut processing time by 60%',
      '200-300 supplier confirmations processed automatically each day',
      'Reduced manual processing time from 2-6 minutes per ticket to zero for matching orders',
    ],
    industry: 'Manufacturing & Logistics',
    company: 'Non-Disclosed Company',
    problem: "This company processed 200-300 supplier confirmation emails daily across hundreds of suppliers with unique formats. Staff manually extracted data from Zendesk and cross-referenced NetSuite records, spending 2-6 minutes per confirmation on routine verification instead of higher-value work.",
    solution: "X Agency AI deployed AI automation that extracts and matches supplier data against NetSuite records, automatically confirming orders when data aligns. The system flags exceptions for human review at 90% accuracy, cutting processing time by more than half and freeing staff to focus on customer service.",
    quote: "This can save us over 1,500 hours every year that now gets spent on more impactful work for our business.",
    quoteAuthor: 'Manager',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 3,
    metric: '8,000+ Hours Saved Annually',
    title: 'AI Proposal Automation',
    highlights: [
      'Cut proposal processing time by more than 50% with AI',
      '20-30 proposal submissions processed automatically every week',
      'Reduced manual processing time from 1-2 days to 20 minutes for all proposal submissions',
    ],
    industry: 'Manufacturing & Logistics',
    company: 'Non-Disclosed Company',
    problem: "This company's proposal team manually copied fixture values, waited on rebate calculations, translated part IDs to descriptions, and looked up prices in guides for each fixture. This process took 1-2 days per proposal option, delaying client estimates and preventing comparison of multiple project scenarios.",
    solution: "X Agency AI deployed AI automation that standardized part IDs for automated price and description lookup, auto-estimates rebates per location, and reduced manual time to just 10% for review. This company now runs multiple proposal options simultaneously, delivering actionable results within an hour instead of days.",
    quote: "AI now does 90% of every application. That just takes a ton of time off my plate.",
    quoteAuthor: 'Director of Operations',
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 4,
    metric: '$420,000 Saved Annually',
    title: 'AI-Powered Housing Visibility',
    highlights: [
      'Created AI-Powered booking visibility dashboard replacing unmanageable Excel sheet system',
      'Integrated seamlessly with existing CRM to automate booking logic',
      'Prevented "flip day" incidents by blocking same-day bookings when another team is departing',
    ],
    industry: 'Hospitality',
    company: 'Non-Disclosed Company',
    problem: "This company's outdated booking system lacked occupancy visibility, causing teams to book rooms the same day others departed. This required $1,000 expedited cleaning fees per incident, costing the facility $35,000 monthly in \"flip day expenses.\"",
    solution: "X Agency AI built an AI-powered booking visibility dashboard integrated with the company's CRM to provide real-time booking data and visual flip day indicators. The AI workflow automatically prevents same-day turnovers by blocking conflicting bookings, eliminating double-bookings and giving staff clear room availability.",
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 5,
    metric: '57% Increase In Daily Efficiency',
    title: 'AI Scheduling System',
    highlights: [
      'Inspection Field Specialist capacity by 50% across daily inspections',
      '72% reduction in fuel expenses through AI optimized route planning',
      '$136,000 revenue increase per Field Specialist',
    ],
    industry: 'Real Estate',
    company: 'Non-Disclosed Company',
    problem: "Field specialists manually managed inspections through spreadsheet exports, multiple communication platforms, and physical letter stuffing while driving inefficient routes. The chaotic process limited inspection capacity, preventing the company from scaling operations to match their portfolio growth.",
    solution: "X Agency AI built a custom AI Field Scheduling platform with automated route optimization, territory-based assignment, and 6+ platform integrations. The system processes 25+ filtering conditions to prioritize properties, schedules 2 weeks in advance, alongside automated emails and mail letters, providing a real-time interface for the entire team.",
    quote: "X Agency AI distilled this complex process into a really beautiful AI platform. This is my first time working deeply in AI and I've learned a lot.",
    quoteAuthor: 'Director of Property Management',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    id: 6,
    metric: '3,500 Hours Saved Annually',
    title: 'AI Email Agent Automation',
    highlights: [
      'Reduced manual email management & processing time from 9 hours per week to ~55 minutes',
      '4000+ emails processed & drafted per month with AI Email Agent deployed across 55 Sales Reps',
    ],
    industry: 'Manufacturing & Logistics',
    company: 'Non-Disclosed Company',
    problem: "This company manually sorted high-volume email requests, prioritized messages, drafted responses based on past correspondence, and managed call documentation separately. This manual organization and drafting for each inquiry delayed responses and consumed significant time on repetitive tasks.",
    solution: "X Agency AI deployed an email agent with integrated call recording that auto-organizes inboxes, and generates response drafts using historical patterns. The system unifies email threads with call recordings, saving staff 8-9 hours per week allowing them to focus on technical consultation.",
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 7,
    metric: '2,500 Hours Saved Annually',
    title: 'Loan Intelligence Assistant (LIA)',
    highlights: [
      'Reduced manual processing time from 1-2 day to <15 minutes',
      '27 Loan Officers using daily, with over 3,960 chat inquiries in the first 90 days of deployment',
    ],
    industry: 'Financial Services',
    company: 'Non-Disclosed Company',
    problem: "This company's loan officers manually navigated complex guidelines across disconnected systems, taking 1-2 days per loan while borrowers remained uninformed. Constant platform switching and manual coordination with multiple teams created bottlenecks that slowed loan funding.",
    solution: "X Agency AI deployed a custom AI chatbot that unified all loan tools into one automated platform. This eliminated system switching, and enabled instant guideline access, investor matching, and borrower communications, transforming 1-2 day processing into rapid approvals with real-time updates.",
    quote: "We brought on X Agency AI to lead AI Strategy, Design, and Implementation, and they delivered on every level.",
    quoteAuthor: 'CEO & Founder',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 8,
    metric: '1,500 Hours Saved Annually',
    title: 'AI Voice Agents and Chat Agents',
    highlights: [
      '500-700 Appointment Requests processed automatically per month',
      'Reduced manual processing time from extended booking cycles to immediate appointment confirmations',
    ],
    industry: 'Professional Services',
    company: 'Non-Disclosed Company',
    problem: "This company manually handled consultation requests across phone and SMS channels, checking availability and coordinating schedules for each booking. This human intervention created response delays and reduced customer satisfaction as clients waited for appointment confirmation.",
    solution: "X Agency AI deployed AI voice and chat agents that unified communication channels with complete SaaS integration for instant availability checking and automatic booking. This eliminated manual intervention, transforming bookings into immediate confirmations with 24/7 availability and improved satisfaction.",
    color: 'from-violet-500 to-purple-600',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            See how companies have driven{' '}
            <span className="gradient-text">actual impact</span> with AI
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What used to take months or weeks now happens in days or even minutes. Hear from the teams that have automated workflows, increased revenue, and driven real EBITDA.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Stats Card */}
                <div className={`rounded-3xl bg-gradient-to-br ${study.color} p-1`}>
                  <div className="rounded-3xl bg-white dark:bg-gray-900 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="text-sm text-gray-500">{study.company}</span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                      {study.metric}
                    </h2>
                    <h3 className="text-xl font-semibold mt-2 mb-6">with {study.title}</h3>
                    <ul className="space-y-3">
                      {study.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Problem/Solution */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-red-600 dark:text-red-400 mb-3">The Problem</h4>
                    <p className="text-gray-600 dark:text-gray-400">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3">The Solution</h4>
                    <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                  </div>
                  {study.quote && (
                    <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 dark:text-gray-300">
                      &ldquo;{study.quote}&rdquo;
                      <footer className="mt-2 text-sm font-medium text-gray-500">— {study.quoteAuthor}</footer>
                    </blockquote>
                  )}
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
