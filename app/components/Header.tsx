'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/activites', label: 'Activités' },
    { href: '/cities', label: 'Cities' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/become-a-partner', label: 'Partners' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Optimized Size */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label="Home"
            >
              <div className="relative w-32 h-16 flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="/images/black.png"
                  alt="Conciergerie Logo"
                  width={128}
                  height={64}
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced Design */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-6 py-2.5 text-[15px] font-medium tracking-wide rounded-lg transition-all duration-300 ${isActive(link.href)
                    ? 'text-gold-500 bg-gold-500/10'
                    : 'text-gray-200 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Premium Glow Effect */}
            <div className="hidden lg:block flex-shrink-0">
              <Link
                href="/contact"
                className="group relative overflow-hidden px-7 py-3 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-semibold text-[15px] tracking-wide shadow-lg shadow-gold-600/20 hover:shadow-xl hover:shadow-gold-500/30 inline-flex items-center gap-2 transition-all duration-500"
              >
                <span className="relative z-10">Get Started</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </Link>
            </div>

            {/* Mobile Menu Button - Modern Design */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-800/50 flex-shrink-0 transition-all duration-300 border border-transparent hover:border-gray-700"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Premium Design */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-24 right-6 left-6 sm:left-auto sm:right-8 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-down">
            <div className="p-6">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative text-base font-medium py-3.5 px-5 rounded-xl transition-all duration-300 ${isActive(link.href)
                      ? 'bg-gradient-to-r from-gold-50 to-gold-100 text-gold-700 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-5 w-full px-6 py-3.5 text-center text-base font-semibold text-white bg-gradient-to-r from-gold-600 to-gold-500 shadow-lg hover:shadow-xl rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}