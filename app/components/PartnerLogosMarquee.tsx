'use client';

const PARTNER_NAMES = [
  'Abritel',
  'TripAdvisor',
  'HomeToGo',
  'Kayak',
  'Agoda',
  'FlipKey',
  'HolidayLettings',
  'HouseTrip',
  'Booking.com',
  'Expedia',
  'Vrbo',
  'Airbnb',
];

function LogoStrip({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-12 shrink-0 ${className}`}>
      {PARTNER_NAMES.map((name) => (
        <span
          key={name}
          className="text-white/95 font-semibold text-lg sm:text-xl whitespace-nowrap tracking-tight"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export default function PartnerLogosMarquee() {
  return (
    <section className="relative py-6 sm:py-8 overflow-hidden bg-black/90 border-y border-white/5">
      <div
        className="inline-flex items-center will-change-transform"
        style={{
          animation: "logo-marquee-scroll 35s linear infinite",
        }}
      >
        <LogoStrip />
        <LogoStrip aria-hidden />
      </div>
    </section>
  );
}
