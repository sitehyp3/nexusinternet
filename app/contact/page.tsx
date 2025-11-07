import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Contact() {
  return (
    <div>
      <Navigation />
      <main className="pt-24 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12">We're here to help. Get in touch with our team.</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#EA5212" }}>
                  Phone
                </h3>
                <p className="text-gray-600">
                  <a href="tel:8883915941" className="hover:underline">(888) 391-5941</a>
                </p>
                <p className="text-gray-500 text-sm">Available 24/7</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#EA5212" }}>
                  Email
                </h3>
                <p className="text-gray-600">support@nexusnett.com</p>
                <p className="text-gray-500 text-sm">Response within 2 hours</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    style={{ borderColor: "#EA5212" }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    style={{ borderColor: "#EA5212" }}
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    style={{ borderColor: "#EA5212" }}
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none h-32"
                    style={{ borderColor: "#EA5212" }}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#EA5212" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
