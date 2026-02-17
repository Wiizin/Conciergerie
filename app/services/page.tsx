import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Conciergerie',
  description: 'Comprehensive property management services including guest communication, cleaning, maintenance, and listing optimization.',
};

export default function ServicesPage() {
  const services = [
    {
      title: "Guest Communication",
      description: "We provide 24/7 professional guest support to ensure every stay is exceptional. Our multilingual team handles all inquiries, booking confirmations, and guest requests promptly and professionally.",
      features: [
        "24/7 availability in multiple languages",
        "Pre-arrival information and instructions",
        "During-stay support and assistance",
        "Post-stay follow-up and reviews",
      ],
    },
    {
      title: "Check-in and Check-out",
      description: "Seamless arrival and departure experiences create lasting impressions. We coordinate every detail to ensure smooth transitions for your guests.",
      features: [
        "Personalized welcome and property orientation",
        "Flexible check-in times",
        "Key exchange and access management",
        "Property inspection after each stay",
      ],
    },
    {
      title: "Cleaning and Linen",
      description: "Professional cleaning services maintain your property to the highest standards. Fresh linens and immaculate spaces ensure five-star guest experiences.",
      features: [
        "Deep cleaning between each reservation",
        "Hotel-quality linen service",
        "Quality control inspections",
        "Eco-friendly cleaning products available",
      ],
    },
    {
      title: "Maintenance",
      description: "Proactive property care and rapid response to issues keep your investment in excellent condition and guests satisfied.",
      features: [
        "Regular property inspections",
        "Coordination with trusted service providers",
        "Emergency repair response",
        "Preventive maintenance planning",
      ],
    },
    {
      title: "Listing Optimization",
      description: "Professional presentation maximizes your property's appeal and booking potential across all platforms.",
      features: [
        "Professional photography",
        "Compelling property descriptions",
        "Strategic keyword optimization",
        "Regular listing updates and improvements",
      ],
    },
    {
      title: "Pricing and Calendar Management",
      description: "Data-driven pricing strategies and smart calendar management maximize your revenue while maintaining optimal occupancy rates.",
      features: [
        "Dynamic pricing based on demand",
        "Seasonal rate adjustments",
        "Multi-platform synchronization",
        "Revenue reporting and analytics",
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
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive property management solutions designed to maximize your revenue and minimize your workload.
              </p>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-16">
              {services.map((service, index) => (
                  <div
                      key={service.title}
                      className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-start ${
                          index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                      }`}
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base text-gray-600">
                        {service.description}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">
                        What&apos;s included:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                            <li key={feature} className="flex items-start">
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
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packs / Pricing Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Nos Forfaits</h2>
              <p className="mt-4 text-lg text-gray-600">Choisissez le forfait qui correspond à vos besoins</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 max-w-7xl mx-auto lg:items-stretch">
              {/* Card: Essentiel */}
              <div className="rounded-3xl border-2 border-gray-300 bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="p-8 text-center">
                  {/* Icon */}
                  <div className="mx-auto w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">Essentiel</h3>
                  <div className="mt-4">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">1.500</span>
                    <span className="text-xl font-bold text-gold-600"> TND</span>
                    <span className="text-gray-500 text-sm ml-1">/ mois</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">Parfait pour les propriétaires débutants souhaitant tester nos services</p>
                </div>

                <div className="flex-1 px-8 pb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Gestion des réservations sur 1 plateforme</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Communication avec les invités</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Nettoyage après chaque séjour</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Rapport mensuel de performance</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Support par email (48h)</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Commission de 20% sur les revenus</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Link
                        href="/contact?pack=essentiel"
                        className="block w-full text-center rounded-full border-2 border-gray-900 bg-white hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-3.5 text-base transition-all duration-300"
                    >
                      Choisir ce Forfait
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card: SuperHost (RECOMMANDÉ) */}
              <div className="rounded-3xl border-2 border-gray-300 bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative h-full">
                {/* RECOMMANDÉ Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="inline-block px-8 py-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 text-black font-bold text-sm shadow-xl uppercase tracking-wide">
            Recommandé
          </span>
                </div>

                <div className="p-8 text-center">
                  {/* Icon */}
                  <div className="mx-auto w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">SuperHost</h3>
                  <div className="mt-4">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">2.800</span>
                    <span className="text-xl font-bold text-gold-600"> TND</span>
                    <span className="text-gray-500 text-sm ml-1">/ mois</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">Notre forfait le plus populaire pour atteindre l&apos;excellence</p>
                </div>

                <div className="flex-1 px-8 pb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug font-medium">Tout du forfait Essentiel</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Gestion multi-plateformes (Airbnb, Booking.com)</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Photographie professionnelle incluse</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Tarification dynamique optimisée</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Service de conciergerie 24/7</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Check-in/check-out personnalisés</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Maintenance préventive trimestrielle</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Support prioritaire par téléphone</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Commission de 18% sur les revenus</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Link
                        href="/contact?pack=superhost"
                        className="block w-full text-center rounded-full border-2 border-gray-900 bg-white hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-3.5 text-base transition-all duration-300"
                    >
                      Choisir ce Forfait
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card: Prestige */}
              <div className="rounded-3xl border-2 border-gray-300 bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="p-8 text-center">
                  {/* Icon */}
                  <div className="mx-auto w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">Prestige</h3>
                  <div className="mt-4">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">4.500</span>
                    <span className="text-xl font-bold text-gold-600"> TND</span>
                    <span className="text-gray-500 text-sm ml-1">/ mois</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">Service premium pour propriétés de luxe exigeant l&apos;excellence absolue</p>
                </div>

                <div className="flex-1 px-8 pb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug font-medium">Tout du forfait SuperHost</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Gestionnaire dédié à votre propriété</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Design d&apos;intérieur et staging inclus</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Marketing premium et publicité ciblée</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Expériences VIP pour les invités</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Maintenance illimitée et réparations</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Assurance dommages premium</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Rapports hebdomadaires détaillés</span>
                    </li>
                    <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
                      <span className="text-sm text-gray-700 leading-snug">Commission de 15% sur les revenus</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Link
                        href="/contact?pack=prestige"
                        className="block w-full text-center rounded-full border-2 border-gray-900 bg-white hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-3.5 text-base transition-all duration-300"
                    >
                      Choisir ce Forfait
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Package CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-gray-600 mb-6">Besoin d&apos;un forfait personnalisé pour votre propriété ?</p>
              <Link
                  href="/contact"
                  className="inline-block px-10 py-4 rounded-full bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg"
              >
                Contactez-nous pour un Devis
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}
