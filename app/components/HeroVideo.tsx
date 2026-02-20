'use client';

import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-neutral-900 -mt-20 pt-20">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-bg.mp4"
          aria-hidden
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0 bg-black/55"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Own the game.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">
                Rent like a legend!
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              N°1 in Digital Rental Management & Concierge Services
            </p>
          </div>

          {/* Right: Description + CTAs */}
          <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
              Maximisez vos revenus locatifs jusqu&apos;à <strong className="text-white">x3</strong> avec une
              gestion intégrale, automatisée et optimisée. Rentabilité garantie par contrat, vous
              encaissez, on s&apos;occupe de tout !
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full btn-gold px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold-600/25 hover:opacity-95 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Demander une démo
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border-2 border-gold-500 bg-transparent px-6 py-3.5 text-sm font-semibold text-gold-400 hover:bg-gold-500/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Simuler vos revenus
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/80">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
}
