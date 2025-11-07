import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <div>
      <Navigation />
      <main className="pt-24 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-6">About Nexus Internet</h1>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Nexus Internet, we're committed to bringing ultra-fast, reliable fiber internet to every corner of the
              country. Our mission is to bridge the digital divide and empower communities with technology that drives
              progress.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-4">
                <span className="text-2xl" style={{ color: "#EA5212" }}>
                  ✓
                </span>
                <span>
                  <strong>Fiber-Based Infrastructure:</strong> Latest fiber optic technology for maximum speed and
                  reliability
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl" style={{ color: "#EA5212" }}>
                  ✓
                </span>
                <span>
                  <strong>Customer First Approach:</strong> 24/7 support and professional service
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl" style={{ color: "#EA5212" }}>
                  ✓
                </span>
                <span>
                  <strong>Transparent Pricing:</strong> No hidden fees, straightforward pricing plans
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl" style={{ color: "#EA5212" }}>
                  ✓
                </span>
                <span>
                  <strong>Smart Home Ready:</strong> Matter protocol integration for future-proof connectivity
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold mb-4">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: "#EA5212" }}>
                  10M+
                </div>
                <p className="text-gray-600">Households Connected</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: "#EA5212" }}>
                  99.9%
                </div>
                <p className="text-gray-600">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: "#EA5212" }}>
                  50+
                </div>
                <p className="text-gray-600">States Coverage</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: "#EA5212" }}>
                  24/7
                </div>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Nexus Internet started with a simple vision: to revolutionize how people connect to the
              internet. What began as a small fiber network in a single city has grown into a nationwide infrastructure
              serving millions of households and businesses.
            </p>
            <p className="text-gray-600">
              Over the past decade, we've invested billions in fiber infrastructure, customer service excellence, and
              technological innovation. Today, we're proud to be one of the fastest-growing ISPs in North America, with
              plans to expand our services to every corner of the continent.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#EA5212" }}>
                  Reliability
                </h3>
                <p className="text-gray-600">
                  We believe internet should be dependable. Our 99.9% uptime guarantee reflects our commitment to always
                  staying connected.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#EA5212" }}>
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We continuously invest in the latest technology to bring cutting-edge speeds and smart home
                  integration to our customers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#EA5212" }}>
                  Transparency
                </h3>
                <p className="text-gray-600">
                  No hidden fees, no surprises. We believe in honest pricing and clear communication with every
                  customer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#EA5212" }}>
                  Community
                </h3>
                <p className="text-gray-600">
                  We're invested in the communities we serve, supporting local initiatives and bridging the digital
                  divide.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 mb-6">
              Nexus Internet is powered by a team of passionate engineers, customer service experts, and business
              leaders committed to excellence. Our diverse team brings decades of combined experience in
              telecommunications, networking, and customer satisfaction.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: "#EA5212" }}>
                  500+
                </div>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: "#EA5212" }}>
                  5000+
                </div>
                <p className="text-gray-600">Years Combined Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: "#EA5212" }}>
                  100%
                </div>
                <p className="text-gray-600">Dedicated to Customer Success</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-3xl font-bold mb-4">Sustainability & Future</h2>
            <p className="text-gray-600 mb-4">
              We're committed to sustainable practices in all aspects of our business. Our fiber infrastructure is built
              with environmentally conscious methods, and we're continuously working to reduce our carbon footprint.
            </p>
            <p className="text-gray-600 mb-4">
              Looking ahead, Nexus Internet is investing in next-generation technologies including satellite internet
              backup, quantum-resistant encryption, and AI-powered network optimization to ensure we remain at the
              forefront of the industry.
            </p>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong style={{ color: "#EA5212" }}>Join Our Mission:</strong> We're actively hiring talented
                individuals across engineering, customer service, and management. Visit our careers page to explore
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
