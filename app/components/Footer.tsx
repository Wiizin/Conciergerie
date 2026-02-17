import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { href: '/services', label: 'All Services' },
      { href: '/services#guest-support', label: 'Guest Support' },
      { href: '/services#cleaning', label: 'Professional Cleaning' },
      { href: '/services#maintenance', label: 'Maintenance' },
    ],
    company: [
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/cities', label: 'Cities We Serve' },
      { href: '/become-a-partner', label: 'Become a Partner' },
      { href: '/contact', label: 'Contact Us' },
    ],
    legal: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookie Policy' },
    ],
  };

  return (
    <footer className="bg-black text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-white mb-4">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/images/white.png"
                  alt="Conciergerie Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="text-xl font-bold text-white">Conciergerie</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Professional property management services that maximize your rental income with hassle-free operations.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-var(--gold-600) hover:to-var(--gold-500) transition-colors"
                aria-label="Facebook"
              >
                <span className="text-lg">📘</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-var(--gold-600) hover:to-var(--gold-500) transition-colors"
                aria-label="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-var(--gold-600) hover:to-var(--gold-500) transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:info@conciergerie.com" className="hover:text-white transition-colors">
                  info@conciergerie.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Property Lane<br />Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t" style={{borderColor: 'rgba(212,175,55,0.12)'}}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Conciergerie. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
