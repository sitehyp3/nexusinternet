import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t" style={{ borderColor: "#EA5212" }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-2xl font-bold mb-6">
              <span style={{ color: "#EA5212" }}>NEXUSNETT</span>
            </h4>
            <p className="text-gray-400">Bringing fiber-fast internet to every home</p>
          </div>
          <div>
            <h5 className="font-bold mb-4" style={{ color: "#EA5212" }}>
              Services
            </h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Home Internet
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Business Internet
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Security Services
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Smart Home
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4" style={{ color: "#EA5212" }}>
              Company
            </h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4" style={{ color: "#EA5212" }}>
              Legal
            </h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Nexusnett. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
