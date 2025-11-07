export function Support() {
  return (
    <section className="py-24 bg-primary/50 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Support When You <span className="text-accent">Need It</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">Available 24/7/365 to keep you connected</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary border border-accent/20 rounded-xl p-8 text-center hover:border-accent transition-all">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-2xl font-bold mb-2">Phone Support</h3>
            <p className="text-primary-foreground/70 mb-6">Talk to an expert instantly</p>
            <a href="tel:8883915941" className="font-bold text-accent hover:underline">(888) 391-5941</a>
          </div>

          <div className="bg-primary border border-accent/20 rounded-xl p-8 text-center hover:border-accent transition-all">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
            <p className="text-primary-foreground/70 mb-6">Get instant answers</p>
            <p className="font-bold text-accent">Available online now</p>
          </div>

          <div className="bg-primary border border-accent/20 rounded-xl p-8 text-center hover:border-accent transition-all">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold mb-2">Email Support</h3>
            <p className="text-primary-foreground/70 mb-6">Detailed technical help</p>
            <p className="font-bold text-accent">support@nexusnett.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
