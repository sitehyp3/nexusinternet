import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Pricing() {
  return (
    <div>
      <Navigation />
      <main className="pt-24 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-12">Choose the perfect plan for your needs</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for casual browsing</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ 300 Mbps download</li>
                <li>✓ Unlimited data</li>
                <li>✓ Professional installation</li>
                <li>✓ Basic support</li>
              </ul>
              <button
                className="w-full text-white font-semibold py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#EA5212" }}
              >
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-orange-500 relative">
              <div
                className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl"
                style={{ backgroundColor: "#EA5212" }}
              >
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600 mb-6">Best for most households</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ 1 Gbps download</li>
                <li>✓ Unlimited data</li>
                <li>✓ Professional installation</li>
                <li>✓ Priority support</li>
                <li>✓ Smart home ready</li>
              </ul>
              <button
                className="w-full text-white font-semibold py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#EA5212" }}
              >
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For power users & business</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$129</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ 10 Gbps download</li>
                <li>✓ Unlimited data</li>
                <li>✓ Dedicated support</li>
                <li>✓ Static IP addresses</li>
                <li>✓ Advanced security</li>
              </ul>
              <button
                className="w-full text-white font-semibold py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#EA5212" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
