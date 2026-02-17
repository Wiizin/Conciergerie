'use client';

import { useState } from 'react';

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    partnerType: '',
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        partnerType: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    {
      title: "Revenue Sharing",
      description: "Competitive commission structure with transparent payment terms",
    },
    {
      title: "Quality Standards",
      description: "Join a network committed to excellence and professional service",
    },
    {
      title: "Support & Training",
      description: "Access to our systems, tools, and ongoing professional development",
    },
    {
      title: "Brand Recognition",
      description: "Benefit from our established reputation and marketing efforts",
    },
  ];

  const partnerTypes = [
    {
      title: "Service Providers",
      description: "Cleaning companies, maintenance professionals, photographers, and other service providers",
    },
    {
      title: "Property Owners",
      description: "Owners with multiple properties looking for professional management partnerships",
    },
    {
      title: "Real Estate Professionals",
      description: "Agents and agencies seeking property management solutions for their clients",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Become a Partner
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our network of trusted professionals and grow your business with Conciergerie.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Who We Partner With
            </h2>
          </div>
          <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-3">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Partnership Benefits
            </h2>
          </div>
          <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Partner Application
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and we&apos;ll be in touch within 48 hours.
            </p>
          </div>

          {status === 'success' && (
            <div className="mb-8 rounded-lg bg-green-50 border border-green-200 p-4">
              <p className="text-sm text-green-800">
                Thank you for your application! We&apos;ll review your information and get back to you within 48 hours.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-8 rounded-lg bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-800">
                There was an error submitting your application. Please try again or contact us directly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  value={formData.company}
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
            </div>

            <div>
              <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700">
                Partnership Type *
              </label>
              <select
                name="partnerType"
                id="partnerType"
                required
                value={formData.partnerType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
              >
                <option value="">Select a partnership type</option>
                <option value="service-provider">Service Provider</option>
                <option value="property-owner">Property Owner</option>
                <option value="real-estate">Real Estate Professional</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Tell us about your business *
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
