import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Activités - Expériences & Loisirs | Conciergerie",
    description:
        "Découvrez nos activités exclusives : sorties en bateau, excursions désert, quad & aventures, programmes piscine sur mesure.",
};

export default function ActivitesPage() {
    const activities = [
        {
            id: "bateau",
            icon: "🚤",
            title: "Sortie en bateau privé",
            subtitle: "Coucou Beach",
            description:
                "Profitez d'une expérience maritime exclusive avec notre service de bateau privé vers Coucou Beach. Navigation en toute sérénité avec équipage professionnel.",
            features: [
                "Bateau privé luxueux",
                "Équipage professionnel",
                "Restauration à bord",
                "Équipements de snorkeling",
            ],
            image: "/images/activites/bateau.jpg.jpg",
            hasImage: true,
        },
        {
            id: "desert",
            icon: "🏜️",
            title: "Excursion désert",
            subtitle: "Bus premium & programme personnalisé",
            description:
                "Vivez une aventure inoubliable dans le désert avec notre bus premium. Programme entièrement personnalisable selon vos envies et votre rythme.",
            features: [
                "Transport premium climatisé",
                "Guide expérimenté",
                "Programme sur mesure",
                "Repas traditionnel inclus",
            ],
            image: "/images/activites/desert.jpg",
            hasImage: false,
        },
        {
            id: "quad",
            icon: "🏍️",
            title: "Quad & Aventures",
            subtitle: "Encadrement professionnel & sécurité",
            description:
                "Sensations fortes garanties avec nos circuits quad encadrés par des professionnels. Toute la sécurité nécessaire pour une aventure mémorable.",
            features: [
                "Équipement de sécurité fourni",
                "Encadrement professionnel",
                "Circuits variés",
                "Tous niveaux acceptés",
            ],
            image: "/images/activites/quad.jpg",
            hasImage: false,
        },
        {
            id: "piscine",
            icon: "🏊♂️",
            title: "Programmes piscine",
            subtitle: "Sur mesure pour toute la famille",
            description:
                "Des moments de détente et d'animation autour de la piscine. Programmes adaptés pour la détente, l'animation ou les moments en famille.",
            features: [
                "Espace privatisable",
                "Animations sur demande",
                "Service de restauration",
                "Activités pour enfants",
            ],
            image: "/images/activites/piscine.jpg",
            hasImage: false,
        },
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-grid-pattern animate-grid-flow"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center animate-fade-in-up">
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <span className="text-3xl">✨</span>
                            <span className="text-sm font-semibold tracking-wide uppercase">
                                Expériences & Loisirs
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
                            Découvrez Nos{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 animate-gradient">
                                Activités
                            </span>
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
                            Tout ce qui est expérience, loisir et sortie pour rendre votre
                            séjour inoubliable. Des moments uniques créés spécialement pour vous.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="rounded-full btn-gold px-8 py-3.5 text-sm font-semibold shadow-lg hover:scale-105 transition-all transform"
                            >
                                Réserver une activité
                            </Link>
                            <Link
                                href="/services"
                                className="rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-all"
                            >
                                Voir tous nos services
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Wave Separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="w-full h-16 fill-white"
                    >
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* Activities Grid Section */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:gap-16">
                        {activities.map((activity, index) => (
                            <div
                                key={activity.id}
                                className={`group relative animate-fade-in-up grid gap-8 lg:gap-12 items-center ${index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"
                                    }`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Image Placeholder - Alternating sides */}
                                <div
                                    className={`relative ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                                        }`}
                                >
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border border-gray-200">
                                        {activity.hasImage ? (
                                            <>
                                                {/* Actual Image */}
                                                <Image
                                                    src={activity.image}
                                                    alt={activity.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                                {/* Gold shimmer effect on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            </>
                                        ) : (
                                            <>
                                                {/* Subtle gradient overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200"></div>

                                                {/* Placeholder content */}
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <div className="text-8xl mb-4 drop-shadow-sm animate-float">
                                                        {activity.icon}
                                                    </div>
                                                    <div className="text-sm font-medium bg-black/80 text-white px-6 py-2 rounded-full">
                                                        Image à venir
                                                    </div>
                                                </div>

                                                {/* Gold shimmer effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent animate-shimmer"></div>
                                            </>
                                        )}
                                    </div>

                                    {/* Decorative gold accent */}
                                    <div className="absolute -z-10 w-full h-full top-6 left-6 rounded-3xl bg-gradient-to-br from-gold-100 to-gold-200 opacity-30"></div>
                                </div>

                                {/* Content */}
                                <div
                                    className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                                        }`}
                                >
                                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gold-50 border border-gold-200">
                                        <span className="text-2xl">{activity.icon}</span>
                                        <span className="text-xs font-semibold text-gold-700 uppercase tracking-wide">
                                            {activity.subtitle}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                        {activity.title}
                                    </h2>

                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        {activity.description}
                                    </p>

                                    {/* Features list */}
                                    <ul className="space-y-3 mb-8">
                                        {activity.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-3 text-gray-700"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-sm">
                                                    <svg
                                                        className="w-4 h-4 text-white"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={3}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-600 to-gold-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                                    >
                                        Réserver cette activité
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 sm:py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                            Pourquoi choisir nos activités ?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Des expériences uniques conçues pour créer des souvenirs
                            inoubliables
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: "🛡️",
                                title: "Sécurité garantie",
                                description: "Équipements certifiés et encadrement professionnel",
                            },
                            {
                                icon: "⭐",
                                title: "Expérience premium",
                                description: "Services haut de gamme pour des moments d'exception",
                            },
                            {
                                icon: "🎯",
                                title: "Sur mesure",
                                description: "Programmes personnalisés selon vos envies",
                            },
                            {
                                icon: "💎",
                                title: "Excellence",
                                description: "Qualité et satisfaction garanties à 100%",
                            },
                        ].map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-gray-100"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-gold-600 to-gold-500 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Prêt pour l'aventure ?
                        </h2>
                        <p className="text-lg leading-8 text-gold-50 mb-10">
                            Contactez-nous dès maintenant pour réserver votre activité et
                            créer des souvenirs inoubliables.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100 transition-all hover:scale-105 transform"
                            >
                                Nous contacter
                            </Link>
                            <Link
                                href="/services"
                                className="rounded-full bg-transparent px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-white/10 transition-all border-2 border-white"
                            >
                                Découvrir nos services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
