import React from 'react';
import HeroSecImg from '../../assets/images/hero-sec-img.webp'
import SecImg1 from '../../assets/images/sec-img-1.webp'
import AppStore from '../../assets/images/app-store.png'
import GooglePlay from '../../assets/images/google-play.png'
import AppGallery from '../../assets/images/app-gallery.png'
import SecImg2 from '../../assets/images/sec-img-2.webp'
import SecImg3 from '../../assets/images/sec-img-3.webp'
import SecImg4 from '../../assets/images/sec-img-4.webp'
import Crousel1 from '../../assets/images/crousel-1.jpg'
import Crousel2 from '../../assets/images/crousel-2.jpg'
import Crousel3 from '../../assets/images/crousel-3.webp'
import Crousel4 from '../../assets/images/crousel-4.webp'

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">

      <div className="relative">
        <img className='w-full h-120 object-cover' src={HeroSecImg} alt="Hero Background" />
        <div className="absolute inset-0">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl pt-18 font-extrabold mb-4 shadow-black text-shadow-lg">
                food <br />
                and groceries <br />
                in a tap
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            We’re here to help you <br /> live life the panda way. <br />
            Spend more time doing what you love – <br /> we’ll take care of tasty meals, fresh <br /> groceries and new flavours.
          </h2>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={SecImg1} alt="" />
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Meet the next<br />
                generation of delivery!
              </h2>
              <p className="mb-6">
                What makes quick commerce quick? We stand for swift personalised <br /> delivery solutions for our customers, partners and employees. Learn <br /> how we empower authentic lifestyles and drive innovation across the <br /> globe.
              </p>
              <button className="sec-btn">
                About
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Taste the convenience.</h2>
              <p className="mb-8">
                Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download our app.
              </p>
              <div className="flex flex-col lg:flex-row justify-start items-start gap-4">
                <img src={AppStore} alt="" />
                <img src={GooglePlay} alt="" />
                <img src={AppGallery} alt="" />

              </div>
            </div>
            <img src={SecImg2} alt="" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={SecImg3} alt="" />
            <div>
              <h2 className="text-5xl font-bold mb-6">Find the job you'd love</h2>
              <p className="mb-8">Hungry to make a difference? There's a seat at our table!</p>
              <p className="mb-6">
                Find out how we connect tech, products, projects and people – <br /> explore international career opportunities at foodpanda.
              </p>
              <button className="sec-btn">
                Join us!
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-4">Have you heard?</h2>
          <p className="text-center mb-12">
            The industry is changing fast! Stay up to date with foodpanda's plans. Catch up on the news, views, updates and reports here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="relative rounded-3xl p-6 h-110 flex flex-col overflow-hidden">
              <img
                src={Crousel1}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="crousel-card-bg"></div>
              <div className="relative z-10 text-white pt-6">
                <p className="font-semibold">Merchants</p>
                <p className='font-bold text-2xl py-4'>
                  foodpanda <br /> Malaysia <br /> launches <br /> 'Jejak Panda' <br /> to provide <br /> accessible <br /> income <br /> opportunities
                </p>
                <p>17.12.2025</p>
              </div>
            </div>
            <div className="relative rounded-3xl p-6 h-110 flex flex-col overflow-hidden">
              <img
                src={Crousel2}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="crousel-card-bg"></div>
              <div className="relative z-10 text-white pt-6">
                <p className="font-semibold">Press Releases</p>
                <p className='font-bold text-2xl py-4'>
                  foodpanda <br /> strengthens <br /> merchant care <br /> with record <br /> onboarding <br /> milestone in <br /> Asia.
                </p>
                <p>13.08.2025</p>
              </div>
            </div>
            <div className="relative rounded-3xl p-6 h-110 flex flex-col overflow-hidden">
              <img
                src={Crousel3}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="crousel-card-bg"></div>
              <div className="relative z-10 text-white pt-6">
                <p className="font-semibold">Merchants</p>
                <p className='font-bold text-2xl py-4'>
                  foodpanda <br /> Singapore <br /> launches <br /> inaugural Rider <br /> Safety Month <br /> in partnership <br /> with <br /> Traffic Police
                </p>
                <p>17.12.2025</p>
              </div>
            </div>
            <div className="relative rounded-3xl p-6 h-110 flex flex-col overflow-hidden">
              <img
                src={Crousel4}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="crousel-card-bg"></div>
              <div className="relative z-10 text-white pt-6">
                <p className="font-semibold">Business</p>
                <p className='font-bold text-2xl py-4'>
                  foodpanda <br /> brings unmatched <br /> value to <br /> pandapro members <br /> with one-of-a-kind <br /> ride-hailing partnerships <br /> across Asia.
                </p>
                <p>21.11.2025</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Feed your team.</h2>
              <p className="mb-8">
                Treat your team and team to their favourite meals. Let teams pick & explore flavour reimagined food delivery options and tasty employee perks.
              </p>
              <button className="sec-btn">
                Explore
              </button>
            </div>
            <img src={SecImg4} alt="" />
          </div>
        </div>
      </section>

    </div>
  );
}