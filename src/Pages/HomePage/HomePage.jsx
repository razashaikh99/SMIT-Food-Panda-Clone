import React from 'react';
import { Menu, X, ChevronRight, Apple, Play } from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              food<br />
              and groceries<br />
              in a tap
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            We're here to help you<br />
            live life the panda way.
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl">
            Spend more time doing what you love – we'll take care of tasty meals, fresh groceries and new flavours.
          </p>
        </div>
      </section>

      {/* Next Generation Delivery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-pink-200 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-lg font-semibold">Mobile App Preview</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Meet the next<br />
                generation of delivery!
              </h2>
              <p className="text-gray-700 mb-6">
                What makes quick commerce quick? We could be held personalised delivery solutions for our customers, partners and employees. Learn how our Glownar Autonomy devices drive speed and innovation across ten markets in Asia.
              </p>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
                About
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Taste the convenience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Taste the convenience.</h2>
              <p className="text-gray-700 mb-8">
                Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download our app.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                  <Apple size={24} />
                  <div className="text-left text-xs">
                    <div>Download on the</div>
                    <div className="font-semibold text-sm">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                  <Play size={24} />
                  <div className="text-left text-xs">
                    <div>GET IT ON</div>
                    <div className="font-semibold text-sm">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-pink-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🛵</div>
                <p className="text-lg font-semibold">Delivery Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find the job */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👥</div>
                <p className="text-lg font-semibold">Team Meeting</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Find the job you'd love</h2>
              <p className="text-gray-700 mb-2">Hungry to make a difference? There's a seat at our table!</p>
              <p className="text-gray-700 mb-6">
                Find out how we connect tech, products, projects and people – explore international career opportunities at foodpanda.
              </p>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
                Join us!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Have you heard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Have you heard?</h2>
          <p className="text-center text-gray-700 mb-12">
            The industry is changing fast! Stay up to date with foodpanda's plans. Catch up on the news, views, updates and reports here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-pink-500 text-white rounded-2xl p-6 h-64 flex items-end">
                <p className="font-semibold">foodpanda news article {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feed your team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Feed your team.</h2>
              <p className="text-gray-700 mb-8">
                Treat your team and team to their favourite meals. Let teams pick & explore flavour reimagined food delivery options and tasty employee perks.
              </p>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
                Explore
              </button>
            </div>
            <div className="bg-black rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
              <div className="text-white text-center">
                <div className="text-2xl font-bold mb-2">foodpanda</div>
                <div className="text-lg">for business</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">fp</span>
            </div>
            <span className="text-xl font-bold text-pink-500">foodpanda</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Navigate</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-500">Home</a></li>
                <li><a href="#" className="hover:text-pink-500">About</a></li>
                <li><a href="#" className="hover:text-pink-500">Newsroom</a></li>
                <li><a href="#" className="hover:text-pink-500">Partners</a></li>
                <li><a href="#" className="hover:text-pink-500">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Collaborate</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-500">Explore careers</a></li>
                <li><a href="#" className="hover:text-pink-500">Become a rider</a></li>
                <li><a href="#" className="hover:text-pink-500">Partner with us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Follow us on</h3>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-pink-500">f</a>
                <a href="#" className="hover:text-pink-500">in</a>
                <a href="#" className="hover:text-pink-500">ig</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>Copyright © 2025 foodpanda</p>
            <a href="#" className="hover:text-pink-500">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}