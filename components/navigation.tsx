"use client"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white text-foreground z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Nexusnett" width={40} height={40} />
          <div className="text-xl font-bold text-black">
            nexusnett.com
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-black hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-black hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-black hover:text-accent transition-colors">
            About Us
          </Link>
          <Link href="/pricing" className="text-black hover:text-accent transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-black hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
        <a
          href="tel:8883915941"
          className="text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all"
          style={{ backgroundColor: "#EA5212" }}
        >
          Call (888) 391-5941
        </a>
      </div>
    </nav>
  )
}
