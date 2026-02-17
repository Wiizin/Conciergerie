import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works - Conciergerie',
  description: 'Learn about our simple and effective property management process from initial contact to daily operations.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Client Contacts Us",
      description: "Your journey begins with a simple conversation. Reach out via our contact form, phone, or email to schedule an initial consultation.",
      details: [
        "Free initial consultation",
        "Discussion of your property and goals",
        "Overview of our services and approach",
        "No obligation or commitment required",
      ],
    },
    {
      number: "02",
      title: "Property Evaluation",
      description: "We conduct a thorough assessment of your property to understand its unique potential and develop a customized management strategy.",
      details: [
        "On-site property visit and inspection",
        "Market analysis and revenue projections",
        "Identification of optimization opportunities",
        "Detailed proposal and pricing structure",
      ],
    },
    {
      number: "03",
      title: "Contract and Onboarding",
      description: "Once you decide to partner with us, we formalize our relationship and begin the onboarding process with clear terms and expectations.",
      details: [
        "Transparent service agreement",
        "Documentation and legal compliance",
        "Access credentials and property information",
        "Introduction to your dedicated account manager",
      ],
    },
    {
      number: "04",
      title: "Listing and Pricing Setup",
      description: "We create compelling listings and implement smart pricing strategies to maximize your property's visibility and revenue potential.",
      details: [
        "Professional photography session",
        "Optimized listing creation on major platforms",
        "Competitive pricing strategy implementation",
        "Calendar synchronization and availability setup",
      ],
    },
    {
      number: "05",
      title: "Daily Management and Reporting",
      description: "With everything in place, we handle all day-to-day operations while keeping you informed with regular updates and transparent reporting.",
      details: [
        "24/7 guest communication and support",
        "Coordinated cleaning and maintenance",
        "Dynamic pricing and calendar adjustments",
        "Regular performance reports and insights",
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              How It Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A simple, transparent process designed to get your property managed professionally and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connecting line - show for all except last item */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 -mb-16 hidden sm:block" />
                )}

                <div className="grid gap-8 sm:grid-cols-[auto,1fr] items-start">
                  {/* Number circle */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white text-xl font-bold flex-shrink-0">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="sm:pt-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h2>
                    <p className="mt-4 text-base text-gray-600">
                      {step.description}
                    </p>
                    <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
                      <ul className="space-y-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-gray-900 mt-0.5 mr-3 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Typical Timeline
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gray-900">1-2 days</div>
                <div className="mt-2 text-sm text-gray-600">Initial consultation and property evaluation</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gray-900">3-5 days</div>
                <div className="mt-2 text-sm text-gray-600">Contract review and onboarding</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gray-900">7-10 days</div>
                <div className="mt-2 text-sm text-gray-600">Complete setup and first listing live</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take the first step towards professional property management today.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

