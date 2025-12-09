export default function PressPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Press</h1>
      
      <div className="space-y-6 text-gray-600">
        <p className="text-lg">
          For media inquiries, press releases, or interview requests, please contact us.
        </p>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Media Contact</h2>
          <p>
            Email: <a href="mailto:admin@naqshbandiattire.com" className="text-red-600 hover:underline">admin@naqshbandiattire.com</a>
          </p>
          <p className="mt-2">
            Phone: Available upon request
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Press Kit</h2>
          <p>
            For logos, images, and brand assets, please contact our media team.
          </p>
        </section>
      </div>
    </div>
  )
}

