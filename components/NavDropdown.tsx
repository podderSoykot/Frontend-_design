'use client'

import Link from 'next/link'
import { X } from 'lucide-react'

interface CategoryItem {
  name: string
  href: string
  image?: string
  isLogo?: boolean
}

interface NavDropdownProps {
  isOpen: boolean
  onClose: () => void
  categories: CategoryItem[][]
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function NavDropdown({ isOpen, onClose, categories, onMouseEnter, onMouseLeave }: NavDropdownProps) {
  if (!isOpen) return null

  return (
    <div 
      className="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
      style={{ top: '100%', marginTop: '0px', paddingTop: '4px' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((column, colIndex) => (
            <div key={colIndex} className="space-y-3">
              {column.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-start gap-3 hover:opacity-80 transition-opacity py-1"
                  onClick={onClose}
                >
                  {item.image && !item.isLogo && (
                    <div className="w-14 h-20 flex-shrink-0 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  {item.isLogo && (
                    <div className="w-14 h-20 flex-shrink-0 bg-black flex items-center justify-center p-1">
                      <span className="text-white text-[9px] font-bold text-center leading-tight uppercase">{item.name.length > 15 ? item.name.substring(0, 12) + '...' : item.name}</span>
                    </div>
                  )}
                  <span className="text-xs font-medium text-black leading-snug pt-1 flex-1">{item.name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

