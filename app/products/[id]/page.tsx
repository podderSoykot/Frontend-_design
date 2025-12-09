import { notFound } from 'next/navigation'
import { Product } from '@/types/product'
import ProductGrid from '@/components/ProductGrid'

// Mock product data - in a real app, this would come from an API or database
const getProduct = (id: string): Product | null => {
  const products: Product[] = [
    {
      id: '1',
      name: 'AIRism Cotton Crew Neck T-Shirt',
      price: 19.90,
      originalPrice: 24.90,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=1600&fit=crop&q=85',
      category: 'Men',
      description: 'Made with AIRism technology for superior comfort and breathability. This crew neck t-shirt features a soft, lightweight cotton blend that keeps you cool and dry all day long.',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Navy', 'Gray'],
    },
    {
      id: '2',
      name: 'Ultra Light Down Parka',
      price: 79.90,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=1600&fit=crop&q=85',
      category: 'Women',
      description: 'Lightweight yet warm, this parka features premium down insulation and a water-repellent finish. Perfect for layering in any season.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Beige'],
    },
  ]

  return products.find(p => p.id === id) || null
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>

          {product.description && (
            <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>
          )}

          {/* Size Selection */}
          {product.sizes && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:border-black transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && (
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Color</label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:border-black transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors mb-4">
            Add to Cart
          </button>
          
          <button className="w-full border border-black text-black py-4 rounded-md font-semibold hover:bg-gray-50 transition-colors">
            Add to Wishlist
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <ProductGrid limit={4} />
      </div>
    </div>
  )
}

