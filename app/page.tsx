import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      
      {/* Featured Products - Full Width */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <ProductGrid limit={8} />
        </div>
      </section>

      {/* Category Sections */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Women', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=1600&fit=crop&q=85', href: '/women' },
              { name: 'Men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&h=1600&fit=crop&q=85', href: '/men' },
              { name: 'Kids', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=1600&fit=crop&q=85', href: '/kids' },
              { name: 'Baby', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=1600&fit=crop&q=85', href: '/baby' },
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden aspect-[3/4]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-white text-sm opacity-90">Shop Now →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Product Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">New Arrivals</h2>
          <ProductGrid limit={4} />
        </div>
      </section>
    </div>
  )
}

