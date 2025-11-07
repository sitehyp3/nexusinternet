export function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Product Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-full max-w-4xl h-64 sm:h-80 bg-gradient-to-b from-gray-100 to-gray-50 rounded-3xl flex items-center justify-center overflow-hidden">
            <img src="/internet world.jpg" alt="Nexus Elite Router" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#EA5212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Ultra-Fast Speeds</h3>
            </div>
            <p className="text-gray-700 mb-4">Gigabit-class fiber connectivity delivering speeds up to 1 Gbps</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>Download speeds up to 1 Gbps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>Low latency below 10ms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>Symmetrical upload speeds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>99.9% uptime guarantee</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#EA5212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Smart Control</h3>
            </div>
            <p className="text-gray-700 mb-4">Manage your internet from anywhere with our intuitive mobile app</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>Real-time network monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>Parental controls and filters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>Device management dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>WiFi scheduling and optimization</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#EA5212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4m0 6l-4 4m4-4l4 4m-4-4l-4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Developer-Ready</h3>
            </div>
            <p className="text-gray-700 mb-4">Open API for seamless integration with your existing systems</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>RESTful API endpoints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>Webhook support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>SDKs for Python, JavaScript, Go</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA5212] font-bold mt-0.5">•</span>
                <span>Complete documentation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
