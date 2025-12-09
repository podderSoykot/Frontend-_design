import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex">
      {/* Left Side - Model with Product */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1000&h=1400&fit=crop"
          alt="Seamless Down Parka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        
        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Soft, yet powerful
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-md opacity-90">
            Discover premium clothing that combines comfort with strength.
          </p>
          
          {/* Pricing */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl md:text-5xl font-bold text-red-500">$149.90</span>
            </div>
            <span className="text-lg text-white/80 line-through">$179.90</span>
          </div>
          
          <p className="text-sm text-white/80 mb-6">Limited-Time Offer until 12/11</p>
          
          <Link
            href="/products/2"
            className="inline-block px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
          
          <p className="text-xs text-white/70 mt-6">@aa__anna</p>
        </div>
      </div>

      {/* Right Side - Product Detail */}
      <div className="relative w-1/2 h-full overflow-hidden bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1400&h=2000&fit=crop&crop=center&q=85"
          alt="Seamless Down Parka Detail"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Carousel Indicator */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white/50 rounded-full" />
          <div className="w-2 h-2 bg-white/50 rounded-full" />
          <div className="w-2 h-2 bg-white/50 rounded-full" />
          <div className="w-2 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

