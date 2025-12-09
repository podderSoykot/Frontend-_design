export default function ShippingReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Shipping & Returns</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <div className="text-gray-600 space-y-3">
            <p><strong className="text-black">Standard Shipping:</strong> 5-7 business days</p>
            <p><strong className="text-black">Express Shipping:</strong> 2-3 business days</p>
            <p><strong className="text-black">Free Shipping:</strong> Available on orders over $99</p>
            <p>Orders are processed within 1-2 business days. You will receive a tracking number once your order ships.</p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
          <div className="text-gray-600 space-y-3">
            <p>We offer hassle-free returns within 30 days of purchase.</p>
            <p><strong className="text-black">Conditions:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Items must be unworn, unwashed, and in original condition</li>
              <li>Original tags and packaging must be included</li>
              <li>Proof of purchase required</li>
            </ul>
            <p className="mt-4">To initiate a return, please contact us at <a href="mailto:admin@naqshbandiattire.com" className="text-red-600 hover:underline">admin@naqshbandiattire.com</a></p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
          <div className="text-gray-600 space-y-3">
            <p>Refunds will be processed to the original payment method within 5-10 business days after we receive your returned items.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

