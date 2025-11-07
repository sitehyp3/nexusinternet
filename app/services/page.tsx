import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Services() {
  return (
    <div>
      <Navigation />
      <main className="pt-24 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12">Comprehensive internet solutions for your needs</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Home Internet</h3>
              <p className="text-gray-600 mb-4">
                High-speed fiber internet for your entire household with speeds up to 10 Gbps.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Ultra-fast speeds</li>
                <li>Unlimited data</li>
                <li>24/7 support</li>
                <li>Professional installation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Business Internet</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade connectivity with guaranteed uptime and dedicated support.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>99.9% uptime SLA</li>
                <li>Dedicated support team</li>
                <li>Static IP addresses</li>
                <li>Custom packages</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Smart Home Integration</h3>
              <p className="text-gray-600 mb-4">Connect all your smart devices with Matter protocol support.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Matter protocol ready</li>
                <li>Smart automation</li>
                <li>Voice control compatible</li>
                <li>Energy monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Security Services</h3>
              <p className="text-gray-600 mb-4">Advanced security features to protect your network and data.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>DDoS protection</li>
                <li>Advanced firewall</li>
                <li>Malware protection</li>
                <li>24/7 monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Cloud Backup & Storage</h3>
              <p className="text-gray-600 mb-4">
                Secure cloud storage solutions integrated with your internet service.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Unlimited cloud storage</li>
                <li>Automatic backups</li>
                <li>256-bit encryption</li>
                <li>Multi-device sync</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-600 mb-4">Expert technical assistance available round the clock.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>24/7 phone support</li>
                <li>Remote troubleshooting</li>
                <li>On-site technicians</li>
                <li>Priority response times</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Fiber Installation</h3>
              <p className="text-gray-600 mb-4">Professional fiber connection setup for optimal performance.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Free professional installation</li>
                <li>Same-week service</li>
                <li>Network optimization</li>
                <li>Equipment setup included</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Streaming Optimization</h3>
              <p className="text-gray-600 mb-4">Premium streaming experience with dedicated bandwidth management.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>4K/8K streaming support</li>
                <li>Multi-stream capability</li>
                <li>Low latency guarantee</li>
                <li>Gaming optimized</li>
              </ul>
            </div>
          </div>

          {/* Service Add-ons Section */}
          <section className="bg-white p-12 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-3xl font-bold mb-8">Service Add-ons</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-bold mb-2" style={{ color: "#EA5212" }}>
                  WiFi 6 Router
                </h4>
                <p className="text-gray-600">Upgrade to our advanced WiFi 6 router for better coverage and speed.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2" style={{ color: "#EA5212" }}>
                  Mesh Network
                </h4>
                <p className="text-gray-600">Extend coverage throughout your home with mesh network technology.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2" style={{ color: "#EA5212" }}>
                  VPN Service
                </h4>
                <p className="text-gray-600">Keep your connection secure with our premium VPN service.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
