import React from 'react';
import Image1 from '../../assets/images/about-img-1.webp'
import Image2 from '../../assets/images/about-img-2.webp'
import { useState } from 'react';

import HeroSecImg from '../../assets/images/about-sec-img.webp'
import SecImg3 from '../../assets/images/sec-img-3.webp'

export default function AboutPage() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen bg-white">

      <div className="relative">
        <img className='w-full h-120 object-cover' src={HeroSecImg} alt="Hero Background" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl pt-18 font-extrabold mb-4 shadow-black text-shadow-lg">
                About <br />
                foodpanda
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-6">
            From food delivery to your<br />
            daily convenience companion.
          </h2>
          <div className="max-w-4xl space-y-6 text-gray-700 text-lg">
            <p>
              Once upon a time, delivery here, foodpanda launched in Singapore in 2012 as a food delivery platform.
              Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of
              customers in Asia.
            </p>
            <p>
              Powered by tech and operational excellence, foodpanda has been growing its quick commerce footprint in
              more than 400 cities across 11 markets in Asia - Singapore, Hong Kong, Thailand, Malaysia, Pakistan,
              Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar.
            </p>
            <p>
              Thanks to dedicated partners, riders, and a team united by shared values, foodpanda is now providing
              millions with a convenient way to get food and groceries in a few taps.
            </p>
          </div>
        </div>
      </section>

      {/* Customers Come First Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Customers<br />come first
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We're for more than just swift food delivery. foodpanda enables customers to pick up their
                takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of
                our business. Download the app to experience that convenience.
              </p>

              {/* Carousel Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-50"
                >
                  ←
                </button>
                <div className="flex gap-2">
                  {[...Array(totalSlides)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-pink-500' : 'bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-50"
                >
                  →
                </button>
              </div>
            </div>

            {/* Image */}
            <img src={Image1} alt="" />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-12">Our values</h2>

          {/* Values Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-50">
              prioritize, decide, deliver
            </button>
            <button className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-50">
              start with customer, end with customer
            </button>
            <button className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-50">
              own it end-to-end
            </button>
            <button className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-50">
              challenge the status quo
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800">
              we before me
            </button>
            <button className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-50">
              plan for tomorrow, focus on today
            </button>
          </div>

          {/* We Before Me Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            <div>
              <h3 className="text-5xl font-bold mb-6">we before me</h3>
              <p className="text-lg">
                Although we can make a difference individually, our achievement is our changing one for most.
                Whether to celebrate a win or learn from our struggles collectively, we cultivate a growth-driven mindset.
                We value diverse inputs, we push the envelope to open up possibilities and opportunities that drive mutual
                growth and ultimately staying ahead for our customers, for foodpanda, and ourselves.
              </p>
            </div>

            {/* Abstract Illustration */}
            <div className="h-80 flex items-center justify-center">
              <img src={Image2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Join the panda team!</h2>
              <p className="mb-8">
                Hungry for growth? There’s a seat at our table! We’re looking for the best in tech, marketing, sales, logistics, account management and more. Explore career opportunities at foodpanda now.
              </p>
              <button className="sec-btn">
                view jobs
              </button>
            </div>
            <img src={SecImg3} alt="" />
          </div>
        </div>
      </section>

    </div>
  );
}
