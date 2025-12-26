import ContactImg from '../../assets/images/contact-img.webp'
import ContactImg2 from '../../assets/images/contact-img-2.webp'

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-white">

      <div className="relative">
        <img className='w-full h-120 object-cover' src={ContactImg} alt="Hero Background" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white pt-30">
              <h1 className="text-5xl md:text-7xl pt-18 font-extrabold shadow-black text-shadow-lg">
                Contact us
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h2 className="text-3xl font-bold mb-8">Contact form</h2>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">First</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Last</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Your message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="sec-btn"
              >
                Submit
              </button>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <img src={ContactImg2} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 mb-2">Got a question about your order?</p>
          <p className="text-gray-700 mb-2">Need help with some of your app features?</p>
          <p className="text-gray-700">
            Contact <span className="font-bold">Help Centre</span> via <span className="font-bold">app</span> menu.
          </p>
        </div>
      </section>

    </div>
  );
}