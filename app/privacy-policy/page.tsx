import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: November 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p>
                Nexus Internet ("Company," "we," "us," or "our") operates the Nexus Internet website and services. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="mb-3">We may collect information about you in a variety of ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, billing address, and payment
                  information
                </li>
                <li>
                  <strong>Service Data:</strong> Internet usage patterns, connection speeds, and device information
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, and device identifiers
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages you send through our support channels
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing your transactions and sending related information</li>
                <li>Improving our website and services</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Responding to your inquiries and customer support requests</li>
                <li>Detecting and preventing fraudulent activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of
                transmission over the Internet or electronic storage is 100% secure. While we strive to protect your
                personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of other websites. We encourage you to review the privacy policies of any third-party sites before
                providing your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                <br />
                <strong>Email:</strong> privacy@nexusnett.com
                <br />
                <strong>Phone:</strong> <a href="tel:8883915941" className="text-accent hover:underline">(888) 391-5941</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
