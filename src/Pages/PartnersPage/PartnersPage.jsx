import React, { useState } from 'react';

import PartnerImg1 from '../../assets/images/partner-img-1.png'
import PartnerImg2 from '../../assets/images/partner-img-2.webp'
import PartnerCard1 from '../../assets/images/partner-card-1.webp'
import PartnerCard2 from '../../assets/images/partner-card-2.jpg'
import PartnerCard3 from '../../assets/images/partner-card-3.jpg'
import PartnerCard4 from '../../assets/images/partner-card-4.jpg'

export default function PartnersPage() {
  const [selectedCountry, setSelectedCountry] = useState('Philippines');

  const countries = [
    { name: 'Malaysia', active: false },
    { name: 'Philippines', active: true },
    { name: 'Bangladesh', active: false },
    { name: 'Hong Kong', active: false },
    { name: 'Pakistan', active: false },
    { name: 'Singapore', active: false },
    { name: 'Taiwan', active: false },
    { name: 'Cambodia', active: false },
    { name: 'Laos', active: false },
    { name: 'Myanmar', active: false }
  ];

  const faqs = [
    'How can I receive orders?',
    'Are there any costs if I register on the site?',
    'What are the opening hours like?'
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative h-120 overflow-hidden">
        <img className='' src={PartnerImg1} alt="" />
        <div className="absolute inset-0 flex items-center bg-gradient-to-t from-black/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get more orders with<br />with foodpanda
            </h1>
            <button className="sec-btn">
              Become a Partner!
            </button>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Become a restaurant or local shop partner</h2>
          <p className="text-lg text-gray-700">
            Take your business to new heights by partnering with foodpanda, the leading delivery service trusted by businesses large and small.
            We send a steady, go further, helping you reach untapped customer bases, boost order volume, and drive more sales.
          </p>
        </div>
      </section>

      {/* Country Selection */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((country) => (
              <button
                key={country.name}
                onClick={() => setSelectedCountry(country.name)}
                className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${country.name === selectedCountry
                  ? 'bg-black text-white'
                  : 'border-2 border-pink-500 text-pink-500 hover:bg-pink-50'
                  }`}
              >
                {country.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Are you ready to <br />
                expand your reach <br />
                and connect with <br />
                new customers?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Let more customers find you. Partner with foodpanda and increase online orders.
              </p>
              <button className="sec-btn">
                Get Started
              </button>
            </div>

            {/* Food Image */}
            <div className=''>
              <img className='w-full h-120 object-cover' src={PartnerImg2} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-12">Why partner with foodpanda?</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center px-4">
                  REACH NEW<br />CUSTOMERS
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center px-4">
                  BOOST YOUR<br />BRAND
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center px-4">
                  DRIVE MORE SALES
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center px-4">
                  INCREASE<br />CUSTOMER<br />RETENTION
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Does it Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">How does it work?</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">📱</span>
              </div>
              <div className="text-6xl font-bold text-pink-500 mb-4">1</div>
              <p className="text-gray-700 font-semibold">
                The customer adds their delivery address in the app or on the website and then searches for their restaurant in their area.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">📋</span>
              </div>
              <div className="text-6xl font-bold text-pink-500 mb-4">2</div>
              <p className="text-gray-700 font-semibold">
                You receive the order with the reading tablet and prepare it for delivery.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🛵</span>
              </div>
              <div className="text-6xl font-bold text-pink-500 mb-4">3</div>
              <p className="text-gray-700 font-semibold">
                A rider will come to you at the specified time and collect the order. It is then delivered safely to the customer!
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">💰</span>
              </div>
              <div className="text-6xl font-bold text-pink-500 mb-4">4</div>
              <p className="text-gray-700 font-semibold">
                Twice per month you receive payments for the deliveries you made. You automatically receive a basis for your accounting with insight into your sales statistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Have more questions? Check it out here</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex justify-between items-center hover:shadow-md transition cursor-pointer">
                <p className="text-lg font-semibold text-gray-800">{faq}</p>
                <span className="text-gray-400 text-xl">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}