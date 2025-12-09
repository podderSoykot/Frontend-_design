'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, Menu, X, Heart, User } from 'lucide-react'
import NavDropdown from './NavDropdown'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  const navItems = [
    { name: 'WOMEN', href: '/women' },
    { name: 'MEN', href: '/men' },
    { name: 'KIDS', href: '/kids' },
    { name: 'BABY', href: '/baby' },
  ]

  // Women dropdown categories
  const womenCategories = [
    [
      { name: 'Outerwear', href: '/women/outerwear', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&q=80' },
      { name: 'Bottoms', href: '/women/bottoms', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&q=80' },
      { name: 'Accessories', href: '/women/accessories', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop&q=80' },
      { name: 'Special Collaborations', href: '/women/collaborations', isLogo: true },
      { name: 'Cashmere', href: '/women/cashmere', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&q=80' },
    ],
    [
      { name: 'T-Shirts, Fleece & Sweats', href: '/women/t-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&q=80' },
      { name: 'Dresses & Skirts', href: '/women/dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&q=80' },
      { name: 'HEATTECH', href: '/women/heattech', isLogo: true },
      { name: 'KAWS WINTER', href: '/women/kaws', isLogo: true },
      { name: 'PUFFTECH', href: '/women/pufftech', isLogo: true },
    ],
    [
      { name: 'Sweaters & Cardigans', href: '/women/sweaters', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&q=80' },
      { name: 'Innerwear & Underwear', href: '/women/innerwear', image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop&q=80' },
      { name: 'AIRism', href: '/women/airism', isLogo: true },
      { name: 'NAQSHBANDI ATTIRE and JW ANDERSON', href: '/women/jw-anderson', isLogo: true },
      { name: '2025 Fall/Winter', href: '/women/fall-winter', isLogo: true },
    ],
    [
      { name: 'Shirts & Blouses', href: '/women/shirts', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&q=80' },
      { name: 'Loungewear & Home', href: '/women/loungewear', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&q=80' },
      { name: 'Sport Utility Wear', href: '/women/sport', isLogo: true },
      { name: 'UT: Graphic Tees', href: '/women/ut', isLogo: true },
      { name: 'Limited-Time Offers', href: '/women/sale', isLogo: true },
    ],
  ]

  // Men dropdown categories (similar structure)
  const menCategories = [
    [
      { name: 'Outerwear', href: '/men/outerwear', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&q=80' },
      { name: 'Bottoms', href: '/men/bottoms', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop&q=80' },
      { name: 'Accessories', href: '/men/accessories', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop&q=80' },
      { name: 'Special Collaborations', href: '/men/collaborations', isLogo: true },
    ],
    [
      { name: 'T-Shirts, Fleece & Sweats', href: '/men/t-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&q=80' },
      { name: 'Shirts', href: '/men/shirts', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop&q=80' },
      { name: 'HEATTECH', href: '/men/heattech', isLogo: true },
      { name: 'AIRism', href: '/men/airism', isLogo: true },
    ],
    [
      { name: 'Sweaters & Cardigans', href: '/men/sweaters', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&q=80' },
      { name: 'Innerwear & Underwear', href: '/men/innerwear', image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop&q=80' },
      { name: 'Sport Utility Wear', href: '/men/sport', isLogo: true },
      { name: 'UT: Graphic Tees', href: '/men/ut', isLogo: true },
    ],
    [
      { name: 'Loungewear & Home', href: '/men/loungewear', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&q=80' },
      { name: 'Limited-Time Offers', href: '/men/sale', isLogo: true },
    ],
  ]

  // Kids dropdown categories
  const kidsCategories = [
    [
      { name: 'Outerwear', href: '/kids/outerwear', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'Bottoms', href: '/kids/bottoms', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'Tops & T-Shirts', href: '/kids/tops', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'Dresses', href: '/kids/dresses', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
    ],
    [
      { name: 'Sweaters & Cardigans', href: '/kids/sweaters', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'Accessories', href: '/kids/accessories', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'HEATTECH', href: '/kids/heattech', isLogo: true },
      { name: 'AIRism', href: '/kids/airism', isLogo: true },
    ],
    [
      { name: 'Innerwear', href: '/kids/innerwear', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'Sport Utility Wear', href: '/kids/sport', isLogo: true },
      { name: 'UT: Graphic Tees', href: '/kids/ut', isLogo: true },
      { name: 'Limited-Time Offers', href: '/kids/sale', isLogo: true },
    ],
  ]

  // Baby dropdown categories
  const babyCategories = [
    [
      { name: 'Outerwear', href: '/baby/outerwear', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'Bottoms', href: '/baby/bottoms', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'Tops & Onesies', href: '/baby/tops', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
    ],
    [
      { name: 'Sleepwear', href: '/baby/sleepwear', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'Accessories', href: '/baby/accessories', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'HEATTECH', href: '/baby/heattech', isLogo: true },
      { name: 'AIRism', href: '/baby/airism', isLogo: true },
    ],
    [
      { name: 'Innerwear', href: '/baby/innerwear', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80' },
      { name: 'Limited-Time Offers', href: '/baby/sale', isLogo: true },
    ],
  ]

  const getCategoriesForNav = (navName: string) => {
    switch (navName) {
      case 'WOMEN':
        return womenCategories
      case 'MEN':
        return menCategories
      case 'KIDS':
        return kidsCategories
      case 'BABY':
        return babyCategories
      default:
        return []
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <p>Order by 12/17 for Christmas Delivery | SHOP HOLIDAY SALE</p>
      </div>

      {/* Main Header */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation - Centered with X button */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (closeTimeout) {
                    clearTimeout(closeTimeout)
                    setCloseTimeout(null)
                  }
                  setHoveredNav(item.name)
                }}
                onMouseLeave={() => {
                  // Only close if not moving to dropdown
                  const timeout = setTimeout(() => {
                    setHoveredNav(null)
                  }, 500)
                  setCloseTimeout(timeout)
                }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium text-black transition-colors uppercase tracking-wide ${
                    hoveredNav === item.name ? 'underline' : 'hover:underline'
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            {/* X button appears when dropdown is open */}
            {hoveredNav && (
              <button
                onClick={() => {
                  setHoveredNav(null)
                  if (closeTimeout) {
                    clearTimeout(closeTimeout)
                    setCloseTimeout(null)
                  }
                }}
                className="ml-4 p-1 hover:bg-gray-100 rounded transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors lg:hidden"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden lg:block"
              aria-label="Favorites"
            >
              <Heart size={20} />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden lg:block"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} />
            </button>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Always visible on desktop, below navigation */}
        <div className="hidden lg:block py-3">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by keyword"
              className="w-full pl-12 pr-12 py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black text-sm"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs font-bold bg-black text-white px-3 py-1">
              IQ
            </button>
          </div>
        </div>

        {/* Dropdown Menus - Positioned below search bar */}
        {hoveredNav && (
          <NavDropdown
            isOpen={true}
            onClose={() => {
              if (closeTimeout) {
                clearTimeout(closeTimeout)
                setCloseTimeout(null)
              }
              setHoveredNav(null)
            }}
            categories={getCategoriesForNav(hoveredNav)}
            onMouseEnter={() => {
              if (closeTimeout) {
                clearTimeout(closeTimeout)
                setCloseTimeout(null)
              }
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => {
                setHoveredNav(null)
              }, 500)
              setCloseTimeout(timeout)
            }}
          />
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

