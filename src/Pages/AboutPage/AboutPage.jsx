import React from 'react';
import HeroSecImg from '../../assets/images/about-sec-img.webp'
import SecImg3 from '../../assets/images/sec-img-3.webp'

export default function AboutPage() {

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