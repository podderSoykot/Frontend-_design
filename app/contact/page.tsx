export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <p className="font-semibold text-black mb-1">Address</p>
              <p>57/1, Dewanbari Road, Azampur Kacha Bazar</p>
              <p>Dakkhinkhan, Dhaka-1230</p>
            </div>
            <div>
              <p className="font-semibold text-black mb-1">Email</p>
              <p>
                <a href="mailto:admin@naqshbandiattire.com" className="text-red-600 hover:underline">
                  admin@naqshbandiattire.com
                </a>
              </p>
              <p>
                <a href="mailto:naqshbandiattire@gmail.com" className="text-red-600 hover:underline">
                  naqshbandiattire@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-black mb-1">Website</p>
              <p>
                <a href="https://www.naqshbandiattire.com" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  www.naqshbandiattire.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

