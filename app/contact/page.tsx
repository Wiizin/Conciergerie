'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch to discuss how we can help maximize your property&apos;s potential.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Get in Touch
              </h2>
              <p className="mt-4 text-base text-gray-600">
                We&apos;re here to answer your questions and discuss how our property management services can benefit you.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                  <p className="mt-2 text-base text-gray-600">
                    <a href="mailto:contact@conciergerie.com" className="hover:text-gray-900">
                      contact@conciergerie.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Phone</h3>
                  <p className="mt-2 text-base text-gray-600">
                    <a href="tel:+33123456789" className="hover:text-gray-900">
                      +33 1 23 45 67 89
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Office Hours</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Monday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: 10:00 AM – 4:00 PM<br />
                    Sunday: Closed
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    (Emergency support available 24/7 for active clients)
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-gray-900 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Response within 24 hours
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-gray-900 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Free initial consultation
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-gray-900 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      No obligation or commitment
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-gray-900 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Personalized property assessment
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                {status === 'success' && (
                  <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4">
                    <p className="text-sm text-green-800">
                      Thank you for contacting us! We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
                    <p className="text-sm text-red-800">
                      There was an error sending your message. Please try again or contact us directly via email or phone.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your property and how we can help..."
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Common Questions
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                How much do your services cost?
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Our pricing is customized based on your property type, location, and service needs. Contact us for a free consultation and personalized quote.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                What areas do you serve?
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                We currently serve major cities across France. Visit our Cities page for a complete list, or contact us to inquire about your specific location.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Do you require a long-term contract?
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                We offer flexible contract terms to suit your needs. Details will be discussed during your consultation based on your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
