export default function SizeGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Size Guide</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">How to Measure</h2>
          <p className="text-gray-600 mb-4">
            For the best fit, please measure yourself following these guidelines:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li><strong className="text-black">Chest:</strong> Measure around the fullest part of your chest</li>
            <li><strong className="text-black">Waist:</strong> Measure around your natural waistline</li>
            <li><strong className="text-black">Hips:</strong> Measure around the fullest part of your hips</li>
            <li><strong className="text-black">Length:</strong> Measure from shoulder to desired length</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Size Chart</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                  <th className="border border-gray-300 px-4 py-2">Chest (inches)</th>
                  <th className="border border-gray-300 px-4 py-2">Waist (inches)</th>
                  <th className="border border-gray-300 px-4 py-2">Hips (inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">XS</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">32-34</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">24-26</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">34-36</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">S</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">36-38</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">28-30</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">38-40</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">M</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">40-42</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">32-34</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">42-44</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">L</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">44-46</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">36-38</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">46-48</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">XL</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">48-50</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">40-42</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">50-52</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section>
          <p className="text-gray-600">
            If you need assistance with sizing, please <a href="/contact" className="text-red-600 hover:underline">contact us</a>.
          </p>
        </section>
      </div>
    </div>
  )
}

