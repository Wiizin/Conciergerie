import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import HeroVideo from "./components/HeroVideo";
import PartnerLogosMarquee from "./components/PartnerLogosMarquee";

export const metadata: Metadata = {
  title: "Conciergerie - Professional Property Management",
  description:
    "Transform your property into a profitable short-term rental with our comprehensive management services.",
};

export default function HomePage() {
  const features = [
    {
      icon: '/images/feature-guest-support.jpg',
      title: "24/7 Guest Support",
      description:
        "Round-the-clock multilingual support ensuring exceptional guest experiences.",
    },
    {
      icon: '/images/feature-cleaning.jpg',
      title: "Professional Cleaning",
      description: "Hotel-quality cleaning and linen service between each stay.",
    },
    {
      icon: '/images/feature-revenue.jpg',
      title: "Revenue Optimization",
      description: "Dynamic pricing strategies to maximize your property income.",
    },
    {
      icon: '/images/feature-maintenance.jpg',
      title: "Maintenance & Care",
      description: "Proactive property maintenance and rapid emergency response.",
    },
    {
      icon: '/images/feature-photography.jpg',
      title: "Listing Optimization",
      description: "Professional photography and compelling property descriptions.",
    },
    {
      icon: '/images/feature-calendar.jpg',
      title: "Calendar Management",
      description:
        "Multi-platform synchronization and smart availability management.",
    },
  ];

  const stats = [
    { value: "500+", label: "Properties Managed" },
    { value: "98%", label: "Guest Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "30%", label: "Average Revenue Increase" },
  ];

  return (
    <main>
      {/* Hero with video background (Jarvis-style) */}
      <HeroVideo />

      {/* Scrolling partner / apps we work with */}
      <PartnerLogosMarquee />

      {/* Optional: image grid block - keep below hero for variety, or remove */}
      <section className="relative overflow-hidden bg-white text-black py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Transform Your Property Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-500">
                  Profit
                </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Professional property management services that handle everything
                from guest communication to cleaning, maintenance, and revenue
                optimization.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full btn-gold px-8 py-3.5 text-sm font-semibold shadow-sm hover:scale-105 transition-all transform"
                >
                  Get Free Audit
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded-full bg-transparent border-2 border-black px-8 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-black/5 transition-all"
                >
                  Learn How It Works
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <div className="h-44 rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                    <Image
                      src="/images/home1.jpg"
                      alt="Luxury property interior"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-44 rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                    <Image
                      src="/images/hero-2.jpg"
                      alt="Guest check-in experience"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-44 rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                    <Image
                      src="/images/hero-3.jpg"
                      alt="Professional cleaning service"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-44 rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                    <Image
                      src="/images/hero-4.jpg"
                      alt="Revenue growth analytics"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive services designed to maximize your property's
              potential
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  {feature.icon && feature.icon.startsWith('/') ? (
                    <div className="w-16 h-16 rounded-lg overflow-hidden mx-auto mb-4">
                      <Image src={feature.icon} alt={feature.title} width={64} height={64} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="text-5xl mb-4 text-gray-900">{feature.icon}</div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-4 transition-all"
            >
              View All Services
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple Process, Maximum Results
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Free Property Audit",
                description:
                  "We analyze your property and market to identify optimization opportunities.",
              },
              {
                step: "02",
                title: "Custom Strategy",
                description:
                  "Receive a tailored management plan designed to maximize your revenue.",
              },
              {
                step: "03",
                title: "Sit Back & Earn",
                description:
                  "We handle everything while you enjoy hassle-free passive income.",
              },
            ].map((step, index) => (
              <div
                key={step.step}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-var(--gold-600) to-var(--gold-500) text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div
                    className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300"
                    aria-hidden="true"
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="rounded-full bg-gradient-to-br from-black to-black px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-all hover:scale-105 transform inline-block"
            >
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials / Trust Section */}
      <section className="py-16 sm:py-24 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Trusted by Property Owners Worldwide
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Join hundreds of satisfied property owners who have increased their
              rental income with our professional management services.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-4xl animate-bounce-slow">🏆</div>
              <div
                className="text-4xl animate-bounce-slow"
                style={{ animationDelay: "200ms" }}
              >
                ⭐
              </div>
              <div
                className="text-4xl animate-bounce-slow"
                style={{ animationDelay: "400ms" }}
              >
                🎯
              </div>
              <div
                className="text-4xl animate-bounce-slow"
                style={{ animationDelay: "600ms" }}
              >
                💎
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-var(--gold-600) to-var(--gold-500) text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Maximize Your Property Revenue?
            </h2>
            <p className="mt-6 text-lg leading-8 text-yellow-50">
              Get a free property audit and discover how much more you could be
              earning. No obligations, just insights.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-all hover:scale-105 transform"
              >
                Request Free Audit
              </Link>
              <Link
                href="/become-a-partner"
                className="rounded-full bg-transparent px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-white/10 transition-all border-2 border-white"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
