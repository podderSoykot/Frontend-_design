import ProductGrid from '@/components/ProductGrid'

export default function MenCollaborationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Special Collaborations</h1>
        <p className="text-gray-600">
          Discover our special collaboration collections
        </p>
      </div>
      
      <ProductGrid />
    </div>
  )
}

