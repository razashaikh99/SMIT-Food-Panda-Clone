import React from 'react'
import HeroAdsImg from '../../assets/images/ads-img-1.webp'
import Icon1 from '../../assets/images/ads-icon-1.png'
import Icon2 from '../../assets/images/ads-icon-2.png'
import Icon3 from '../../assets/images/ads-icon-3.png'
import AdsSec1 from '../../assets/images/ads-sec-2.png'
import AdsSec2 from '../../assets/images/ads-sec-3.png'
import AdsSec3 from '../../assets/images/ads-sec-4.png'
import AdsSec4 from '../../assets/images/ads-sec-5.png'
import Crousel1 from '../../assets/images/ads-cros-1.jpg'
import Crousel2 from '../../assets/images/ads-cros-2.jpg'
import Crousel3 from '../../assets/images/ads-cros-3.jpg'
import Review1 from '../../assets/images/review-1.png'
import Review2 from '../../assets/images/review-2.png'
import Review3 from '../../assets/images/review-3.png'

export default function PandaadsPage() {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative">
        <img className='w-full h-120 object-cover' src={HeroAdsImg} alt="Hero Background" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl pt-18 font-extrabold mb-4 shadow-black text-shadow-lg">
                Reach millions <br />
                with panda ads
              </h1>
              <div className='py-6'>
                <p>Advertise with foodpanda and connect with millions of </p>
                <p>ready-to-shop customers within and beyond the foodpanda app.</p>
              </div>
              <button className="sec-btn-2">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Boost your brand with Asia's largest<br />
            food and grocery delivery network*
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <p className="text-6xl md:text-7xl font-bold mb-2">125M</p>
              <p className="text-lg md:text-xl font-medium text-gray-700">app downloads</p>
            </div>
            <div>
              <p className="text-6xl md:text-7xl font-bold mb-2">11</p>
              <p className="text-lg md:text-xl font-medium text-gray-700">markets</p>
            </div>
            <div>
              <p className="text-6xl md:text-7xl font-bold mb-2">400+</p>
              <p className="text-lg md:text-xl font-medium text-gray-700">cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Power up your visibility & engagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center">
                <img src={Icon1} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maximise your reach</h3>
              <p className="text-gray-700">
                Amplify your campaign by connecting with your target customers right where they shop
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center">
                <img src={Icon2} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-3">Engage high-value audiences</h3>
              <p className="text-gray-700">
                Connect with frequent and high-spend customers who are ready to purchase
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center">
                <img src={Icon3} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-3">Get personalised support</h3>
              <p className="text-gray-700">
                Our team is here to help guide you every step of the way with your ads
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customised Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-18">
            Customised retail media advertising <br />
            solutions for your brand's needs
          </h2>

          {/* In-app Advertising */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img src={AdsSec1} alt="" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold mb-6">In-app advertising</h3>
              <p className="text-lg text-gray-700 mb-8">
                Boost brand awareness by strategically placing ads across different
                sections of the foodpanda app.
              </p>
              <button className="sec-btn">
                Explore solutions
              </button>
            </div>
          </div>

          {/* Off-app Advertising */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-4xl font-bold mb-6">Off-app advertising</h3>
              <p className="text-lg text-gray-700 mb-8">
                Extend your campaign beyond foodpanda, tapping into packaging and brand
                visibility opportunities.
              </p>
              <button className="sec-btn">
                Explore solutions
              </button>
            </div>
            <div>
              <img src={AdsSec2} alt="" />
            </div>
          </div>

          {/* Strategic Partnerships */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img src={AdsSec3} alt="" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold mb-6">Strategic partnerships</h3>
              <p className="text-lg text-gray-700 mb-8">
                Co-create targeted campaigns to drive trial of your product with exclusive
                experiences and customer insights.
              </p>
              <button className="sec-btn">
                Explore solutions
              </button>
            </div>
          </div>

          {/* Beyond Basic Targeting */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Go beyond basic targeting with panda ads</h3>
              <p className="text-lg text-gray-700 mb-8">
                Leverage first-party data and smart targeting capabilities to
                effectively engage customers for first-party data.
              </p>
              <button className="sec-btn">
                Explore solutions
              </button>
            </div>
            <div>
              <img src={AdsSec4} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Proven impact with panda ads
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <img className='h-74 object-cover' src={Crousel1} alt="" />
              <div className="p-6">
                <h3 className="text-3xl font-bold pb-10">
                  Coca-Cola leveraged retail media channels to boost sales and drive growth
                </h3>
                <button className="sec-btn">
                  Read more →
                </button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <img className='h-74 object-cover' src={Crousel2} alt="" />
              <div className="p-6">
                <h3 className="text-3xl font-bold pb-19">
                  Mars Wrigley finds the perfect audience match with panda ads
                </h3>
                <button className="sec-btn">
                  Read more →
                </button>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <img className='h-74 object-cover' src={Crousel3} alt="" />

              <div className="p-6">
                <h3 className="text-3xl font-bold pb-10">
                  Amazon Prime Video and foodpanda's impressive cross-channel strategy
                </h3>
                <button className="sec-btn">
                  Read more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What our customers are saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="flex flex-col text-center">
              <p className="text-gray-800 mb-8 italic text-lg leading-relaxed flex-grow">
                "We were looking for a large APAC-wide partner with premium O&O mobile ad inventory that could connect us to our target audiences. panda ads were able to be that partner and have delivered beyond our campaign's target KPIs. We look forward to expanding our business with them."
              </p>
              <div className="mb-6">
                <p className="font-bold text-lg mb-1">Luke Addison</p>
                <p className="text-gray-600">Managing Director</p>
              </div>
              <div className="h-16 flex justify-center items-center">
                <img className='w-50' src={Review1} alt="" />
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col text-center">
              <p className="text-gray-800 mb-8 italic text-lg leading-relaxed flex-grow">
                "As one of the goals from 2023 was to accelerate quick commerce growth through new activations and media, tapping into panda ads helped us grow our quick commerce business and deliver on our KPIs."
              </p>
              <div className="mb-6">
                <p className="font-bold text-lg mb-1">Jayson Lopez</p>
                <p className="text-gray-600">Senior Media and Digital Marketing Manager</p>
              </div>
              <div className="h-16 flex justify-center items-center">
                <img className='w-50' src={Review2} alt="" />
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col text-center">
              <p className="text-gray-800 mb-8 italic text-lg leading-relaxed flex-grow">
                "The collaboration with foodpanda through panda ads greatly enhanced our customer acquisition initiatives, by capturing our audience's interest and fostering heightened user engagement."
              </p>
              <div className="mb-6">
                <p className="font-bold text-lg mb-1">Jessica Faye Tan</p>
                <p className="text-gray-600">Head of Commercial</p>
              </div>
              <div className="h-16 flex justify-center items-center">
                <img className='w-50' src={Review3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex justify-center gap-14 items-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Start advertising with panda ads today!
          </h2>
          <button className="sec-btn">
            Start now
          </button>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Brands excelling with us</h2>

          {/* Brand Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">amazon</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Heineken</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">NETFLIX</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">SAMSUNG</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">citi</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">HUAWEI</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Coca-Cola</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Nespresso</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Starbucks</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">VISA</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">MARS</p>
            </div>
            <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Disney+</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}