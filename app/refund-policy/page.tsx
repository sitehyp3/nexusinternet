import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RefundPolicy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Refund Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: November 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">30-Day Money Back Guarantee</h2>
              <p>
                At Nexus Internet, we stand behind our services. If you're not completely satisfied with your service
                within the first 30 days, we'll provide a full refund. No questions asked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Request a Refund</h2>
              <p className="mb-3">To request a refund, please follow these steps:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our customer support team at refunds@nexusnett.com</li>
                <li>Provide your account number and reason for the refund request</li>
                <li>Our team will review your request and process within 5-7 business days</li>
                <li>Refunds will be issued to the original payment method</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility for Refunds</h2>
              <p className="mb-3">To be eligible for a refund, the following conditions must be met:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The refund request must be made within 30 days of service activation</li>
                <li>You must be a new customer or returning customer who hasn't subscribed within the last 6 months</li>
                <li>All equipment must be returned in good condition</li>
                <li>No significant service outages should be due to customer error or misuse</li>
                <li>Any promotional credits or discounts will be deducted from the refund amount</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Equipment Return</h2>
              <p className="mb-3">If you return your service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All equipment must be returned within 15 days of cancellation</li>
                <li>Equipment should be in the same condition as received (normal wear and tear excepted)</li>
                <li>A prepaid shipping label will be provided</li>
                <li>If equipment is not returned or damaged, a equipment fee may apply</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Installation and Professional Service Fees</h2>
              <p>
                Professional installation fees are non-refundable unless they are not completed or are unsatisfactory.
                If installation is not completed to your satisfaction, we will reschedule at no additional cost. If you
                still wish to cancel after reinstatement of installation, the original installation fee will be waived.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Partial Refunds</h2>
              <p>
                For refund requests made after the 30-day period, we may offer partial refunds for unused service on a
                pro-rata basis. This is at the discretion of Nexus Internet and is not guaranteed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Non-Refundable Items</h2>
              <p className="mb-3">The following items are non-refundable:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Premium service add-ons or premium channels</li>
                <li>Services already rendered beyond the 30-day period</li>
                <li>Late payment fees or reconnection fees</li>
                <li>Equipment damage fees (beyond normal wear and tear)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>
              <p>
                If there's a dispute regarding your refund, we encourage you to contact our customer support team first.
                If the matter cannot be resolved, you may file a complaint with the Federal Communications Commission
                (FCC) or your local consumer protection agency.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                For refund inquiries, please contact:
                <br />
                <strong>Email:</strong> refunds@nexusnett.com
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
