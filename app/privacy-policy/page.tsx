export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Information We Collect</h2>
          <p>We collect information that you provide directly to us, including when you make a purchase, create an account, or contact us.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">How We Use Your Information</h2>
          <p>We use the information we collect to process orders, communicate with you, and improve our services.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Contact Us</h2>
          <p>
            For questions about this privacy policy, please contact us at <a href="mailto:admin@naqshbandiattire.com" className="text-red-600 hover:underline">admin@naqshbandiattire.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}

