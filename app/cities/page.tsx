import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cities We Serve - Conciergerie',
  description: 'Professional property management services in major cities across France and Europe.',
};

export default function CitiesPage() {
  const cities = [
    {
      name: "Paris",
      description: "The capital's vibrant short-term rental market demands expert management. We ensure your Parisian property stands out and stays profitable year-round.",
      highlights: "Tourist hotspot • High demand • Premium rates",
    },
    {
      name: "Lyon",
      description: "France's gastronomic capital attracts business and leisure travelers alike. Our local expertise maximizes your property's appeal in this dynamic market.",
      highlights: "Business hub • Cultural events • Growing market",
    },
    {
      name: "Marseille",
      description: "The Mediterranean port city offers unique opportunities for coastal property management with strong seasonal demand and diverse clientele.",
      highlights: "Coastal location • Year-round tourism • Port city",
    },
    {
      name: "Bordeaux",
      description: "Wine tourism and cultural heritage make Bordeaux a premium destination. We leverage local knowledge to optimize your property's performance.",
      highlights: "Wine tourism • Historic center • High-end market",
    },
    {
      name: "Nice",
      description: "The French Riviera's crown jewel attracts international guests seeking luxury and comfort. Our premium services match the market's expectations.",
      highlights: "Riviera location • Luxury market • International appeal",
    },
    {
      name: "Toulouse",
      description: "The aerospace capital combines business travel with cultural tourism. We manage properties that serve both business and leisure guests effectively.",
      highlights: "Tech hub • University city • Business travel",
    },
    {
      name: "Strasbourg",
      description: "European Parliament seat and Alsatian charm create consistent demand. Our bilingual team ensures seamless guest experiences.",
      highlights: "European institutions • Cross-border appeal • Year-round demand",
    },
    {
      name: "Nantes",
      description: "The Loire Valley gateway offers strong rental potential with growing tourism and business sectors. We help your property thrive in this emerging market.",
      highlights: "Innovation hub • Cultural events • Growing tourism",
    },
    {
      name: "Montpellier",
      description: "Mediterranean lifestyle and university presence create diverse guest demographics. Our flexible management adapts to market seasonality.",
      highlights: "University city • Mediterranean climate • Young market",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Cities We Serve
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional property management in major cities across France. Local expertise, national standards.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <div
                key={city.name}
                className="rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {city.name}
                </h2>
                <p className="mt-4 text-sm text-gray-600">
                  {city.description}
                </p>
                <div className="mt-6 rounded-lg bg-gray-50 px-4 py-3">
                  <p className="text-xs font-medium text-gray-700">
                    {city.highlights}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-gray-900 hover:text-gray-700"
                  >
                    Get started in {city.name} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Notice */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Don&apos;t see your city?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;re constantly expanding our service areas. Contact us to discuss management options for your property location.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Expertise Matters */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Why Local Expertise Matters
            </h2>
          </div>
          <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">Local</div>
              <div className="mt-2 text-sm text-gray-600">Knowledge of neighborhood specifics and attractions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">Responsive</div>
              <div className="mt-2 text-sm text-gray-600">On-site teams for quick issue resolution</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">Connected</div>
              <div className="mt-2 text-sm text-gray-600">Trusted local service provider networks</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
