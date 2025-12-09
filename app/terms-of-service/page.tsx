export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by these terms of service.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Use of Website</h2>
          <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Product Information</h2>
          <p>We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate or complete.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Contact</h2>
          <p>
            For questions about these terms, please contact us at <a href="mailto:admin@naqshbandiattire.com" className="text-red-600 hover:underline">admin@naqshbandiattire.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}

