import Link from 'next/link'
import { Product } from '@/types/product'

interface ProductGridProps {
  limit?: number
  products?: Product[]
}

// Mock product data with high-quality images
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'AIRism Cotton Crew Neck T-Shirt',
    price: 19.90,
    originalPrice: 24.90,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&q=80',
    category: 'Men',
  },
  {
    id: '2',
    name: 'Ultra Light Down Parka',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop&q=80',
    category: 'Women',
  },
  {
    id: '3',
    name: 'Dry-EX Crew Neck T-Shirt',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop&q=80',
    category: 'Men',
  },
  {
    id: '4',
    name: 'Heattech Extra Warm Leggings',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop&q=80',
    category: 'Women',
  },
  {
    id: '5',
    name: 'Cotton Relaxed Ankle Pants',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb566b?w=800&h=1000&fit=crop&q=80',
    category: 'Men',
  },
  {
    id: '6',
    name: 'Fluffy Yarn Cardigan',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop&q=80',
    category: 'Women',
  },
  {
    id: '7',
    name: 'Ultra Stretch Active Ankle Pants',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=1000&fit=crop&q=80',
    category: 'Men',
  },
  {
    id: '8',
    name: 'Ribbed Turtleneck Long Sleeve T-Shirt',
    price: 19.90,
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=1000&fit=crop&q=80',
    category: 'Women',
  },
  {
    id: '9',
    name: 'Premium Wool Blend Sweater',
    price: 59.90,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop&q=80',
    category: 'Men',
  },
  {
    id: '10',
    name: 'Classic Denim Jacket',
    price: 69.90,
    originalPrice: 89.90,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop&q=80',
    category: 'Women',
  },
  {
    id: '11',
    name: 'Comfort Fit Chino Pants',
    price: 44.90,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop&q=80',
    category: 'Men',
  },
  {
    id: '12',
    name: 'Elegant Midi Dress',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop&q=80',
    category: 'Women',
  },
]

export default function ProductGrid({ limit, products = mockProducts }: ProductGridProps) {
  const displayProducts = limit ? products.slice(0, limit) : products

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {displayProducts.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg mb-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {product.originalPrice && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                SALE
              </span>
            )}
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1 line-clamp-2 group-hover:underline">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

