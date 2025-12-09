export default function CareersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Careers</h1>
      
      <div className="space-y-6 text-gray-600">
        <p className="text-lg">
          Join the NAQSHBANDI ATTIRE team and be part of our mission to create quality clothing.
        </p>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Open Positions</h2>
          <p>We are always looking for talented individuals to join our team.</p>
          <p className="mt-4">
            To apply, please send your resume to <a href="mailto:admin@naqshbandiattire.com" className="text-red-600 hover:underline">admin@naqshbandiattire.com</a>
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">Why Work With Us</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Competitive compensation packages</li>
            <li>Opportunities for growth and development</li>
            <li>Collaborative and supportive work environment</li>
            <li>Be part of a growing brand</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

