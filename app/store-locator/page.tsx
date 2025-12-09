export default function StoreLocatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Store Locator</h1>
      
      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Main Store</h2>
          <div className="text-gray-600 space-y-2">
            <p className="font-semibold text-black">Address:</p>
            <p>57/1, Dewanbari Road, Azampur Kacha Bazar</p>
            <p>Dakkhinkhan, Dhaka-1230</p>
            <p className="mt-4">
              <a 
                href="https://maps.google.com/?q=57/1+Dewanbari+Road+Azampur+Kacha+Bazar+Dakkhinkhan+Dhaka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Store Hours</h3>
          <div className="text-gray-600 space-y-1">
            <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
            <p>Sunday: 12:00 PM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="text-gray-600">
          <p>For more information about our stores, please <a href="/contact" className="text-red-600 hover:underline">contact us</a>.</p>
        </div>
      </div>
    </div>
  )
}

