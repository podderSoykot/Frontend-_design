import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    'Customer Service': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Shipping & Returns', href: '/shipping-returns' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Store Locator', href: '/store-locator' },
    ],
    'About Us': [
      { name: 'Our Story', href: '/about' },
      { name: 'Quality', href: '/quality' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    'Connect': [
      { name: 'Newsletter', href: '/newsletter' },
      { name: 'Instagram', href: 'https://instagram.com/naqshbandiattire', external: true },
      { name: 'Facebook', href: 'https://facebook.com/naqshbandiattire', external: true },
      { name: 'Twitter', href: 'https://twitter.com/naqshbandiattire', external: true },
      { name: 'YouTube', href: 'https://youtube.com/@naqshbandiattire', external: true },
    ],
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-red-700">NAQSHBANDI ATTIRE</h2>
            <p className="text-sm text-gray-600 mb-4 italic">
              Soft, yet powerful
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>57/1, Dewanbari Road, Azampur Kacha Bazar</p>
              <p>Dakkhinkhan, Dhaka-1230</p>
              <p className="mt-2">
                <a 
                  href="mailto:admin@naqshbandiattire.com" 
                  className="hover:text-red-600 transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  admin@naqshbandiattire.com
                </a>
              </p>
              <p>
                <a 
                  href="mailto:naqshbandiattire@gmail.com" 
                  className="hover:text-red-600 transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  naqshbandiattire@gmail.com
                </a>
              </p>
              <p className="mt-2">
                <a 
                  href="https://www.naqshbandiattire.com" 
                  className="hover:text-red-600 transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.naqshbandiattire.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-sm">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © 2024 NAQSHBANDI ATTIRE. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link href="/privacy-policy" className="hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-black transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-black transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

