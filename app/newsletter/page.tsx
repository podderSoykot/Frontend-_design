export default function NewsletterPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Newsletter</h1>
      
      <div className="bg-gray-50 p-8 rounded-lg">
        <p className="text-gray-600 mb-6 text-center">
          Subscribe to our newsletter to stay updated with the latest collections, exclusive offers, and news.
        </p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name (Optional)</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Your Name"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}

