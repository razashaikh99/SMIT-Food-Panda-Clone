import React from 'react';
import Image1 from '../../assets/images/news-img-1.jpg'
import Image2 from '../../assets/images/news-img-2.jpg'
import Image3 from '../../assets/images/news-img-3.jpg'
import Image4 from '../../assets/images/news-img-4.jpg'
import Image5 from '../../assets/images/news-img-5.webp'
import Image6 from '../../assets/images/news-img-6.webp'
import Image7 from '../../assets/images/news-img-7.webp'
import Image8 from '../../assets/images/news-img-8.webp'
import Image9 from '../../assets/images/news-img-9.webp'
import Image10 from '../../assets/images/news-img-10.webp'
import Image11 from '../../assets/images/news-img-11.jpg'
import Image12 from '../../assets/images/news-img-12.jpg'

export default function NewsroomPage() {

  const newsData = [
    {
      id: 1,
      image: Image1,
      category: "APAC",
      title: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
      date: "17.12.2025",
      gradientFrom: "from-blue-100",
      gradientTo: "to-blue-200"
    },
    {
      id: 2,
      image: Image2,
      category: "APAC",
      title: "foodpanda expands 'panda hearts' programme, reports 30% drop in rider accidents across Asia",
      date: "25.11.2025",
      gradientFrom: "from-pink-100",
      gradientTo: "to-pink-200"
    },
    {
      id: 3,
      image: Image3,
      category: "APAC",
      title: "foodpanda brings unmatched value to pandapro members with one-of-a-kind ride-hailing partnerships",
      date: "21.11.2025",
      gradientFrom: "from-purple-100",
      gradientTo: "to-purple-200"
    },
    {
      id: 4,
      image: Image4,
      category: "SINGAPORE",
      title: "foodpanda Singapore strengthens support for delivery partners through signed MOU with NDLC",
      date: "25.04.2025",
      gradientFrom: "from-pink-200",
      gradientTo: "to-pink-300"
    },
    {
      id: 5,
      image: Image5,
      category: "APAC",
      title: "foodpanda delivered 2024",
      date: "31.01.2025",
      gradientFrom: "from-yellow-100",
      gradientTo: "to-yellow-200"
    },
    {
      id: 6,
      image: Image6,
      category: "APAC",
      title: "foodpanda Partners with Fiserv to Enable More Streamlined and Secure eCommerce Payments Across Asia",
      date: "23.10.2024",
      gradientFrom: "from-orange-100",
      gradientTo: "to-orange-200"
    },
    {
      id: 7,
      image: Image7,
      category: "SINGAPORE",
      title: "foodpanda Singapore launches inaugural Rider Safety Month in partnership with Traffic Police",
      date: "07.10.2024",
      gradientFrom: "from-pink-200",
      gradientTo: "to-pink-300"
    },
    {
      id: 8,
      image: Image8,
      category: "MALAYSIA",
      title: "foodpanda Malaysia launches 'Jejak Panda' to provide accessible income opportunities",
      date: "14.08.2024",
      gradientFrom: "from-red-100",
      gradientTo: "to-red-200"
    },
    {
      id: 9,
      image: Image9,
      category: "SINGAPORE",
      title: "Finally, something in Yew Tee - foodpanda lights up Singapore's 'most dull' neighbourhood with unlimited free deliveries",
      date: "12.08.2024",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-200"
    },
    {
      id: 10,
      image: Image10,
      category: "PHILIPPINES",
      title: "foodpanda Philippines partners with Jia to extend support to partner vendors",
      date: "16.07.2024",
      gradientFrom: "from-indigo-100",
      gradientTo: "to-indigo-200"
    },
    {
      id: 11,
      image: Image11,
      category: "SINGAPORE",
      title: "foodpanda Singapore awards $10,500 in bursaries to delivery partners and in their families",
      date: "16.07.2024",
      gradientFrom: "from-pink-100",
      gradientTo: "to-pink-200"
    },
    {
      id: 12,
      image: Image12,
      category: "APAC",
      title: "foodpanda partners with Cybersource to drive business growth with enhanced customer checkout experience",
      date: "25.07.2024",
      gradientFrom: "from-gray-100",
      gradientTo: "to-gray-200"
    }
  ];

  const NewsCard = ({ news }) => (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className={`bg-gradient-to-br ${news.gradientFrom} ${news.gradientTo} flex items-center justify-center`}>
        <img className='h-60 object-cover' src={news.image} alt="" />
      </div>
      <div className="p-6">
        <div>
          <p className="text-primary text-sm font-semibold mb-2">{news.category}</p>
          <h3 className="text-2xl font-bold mb-3">{news.title}</h3>
        </div>
        <div>
          <p className="text-gray-500 text-sm pt-10">{news.date}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold mb-8 text-gray-900">Press Releases</h1>

          <div className="h-120 grid md:grid-cols-2 gap-8 mb-16 bg-gray-100">
            <div className="bg-gray-100 overflow-hidden">
              <img className='h-120 object-cover' src={Image1} alt="" />
            </div>
            <div className="flex flex-col justify-start pt-30 px-12">
              <p className="text-primary font-semibold mb-2">MERCHANTS • <span className='text-gray-500'>13 Dec 2025</span></p>
              <h2 className="text-4xl font-bold mb-4 text-gray-800 hover:text-primary">
                foodpanda strengthens <br /> merchant care with record <br /> onboarding milestone in Asia
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">Discover latest news</h2>
            <div className="flex gap-2 flex-wrap">
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm">All</button>
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm hover:border-gray-400">Business</button>
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm hover:border-gray-400">Campaigns</button>
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm hover:border-gray-400">Editorials</button>
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm hover:border-gray-400">Food delivery</button>
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm hover:border-gray-400">Infographics</button>
              <button className="text-primary px-4 py-2 text-sm font-semibold">Show more</button>
            </div>
          </div>

          {/* News Grid - Map se render karein */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsData.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-semibold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-primary hover:text-white">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-primary hover:text-white">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-primary hover:text-white">4</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-primary hover:text-white">5</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-primary hover:text-white">6</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-primary hover:text-white">7</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-primary hover:text-white">8</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-primary hover:text-white">9</button>
            <span className="px-2">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-primary hover:text-white">12</button>
          </div>
        </div>
      </section>

    </div>
  );
}