import ProductGrid from '@/components/ProductGrid'

export default function MenSalePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Limited-Time Offers</h1>
        <p className="text-gray-600">
          Shop our limited-time offers and save on your favorite items
        </p>
      </div>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
        <p className="text-red-800 font-medium">
          Limited time offers - Shop now before they're gone!
        </p>
      </div>
      
      <ProductGrid />
    </div>
  )
}

