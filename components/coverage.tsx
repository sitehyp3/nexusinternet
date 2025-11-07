export function Coverage() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-accent/10 rounded-2xl p-8 border border-accent/30">
            <img src="/usa-coverage-map-with-fiber-network-visualization.jpg" alt="Coverage Map" className="w-full rounded-xl" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expanding <span className="text-accent">Coverage</span> Daily
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              We're rapidly expanding our fiber network to bring ultra-fast internet to more communities across the
              nation
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-primary/50 border border-accent/20 rounded-lg p-4">
                <p className="font-bold text-accent mb-1">500+</p>
                <p className="text-primary-foreground/70">Cities with service</p>
              </div>
              <div className="bg-primary/50 border border-accent/20 rounded-lg p-4">
                <p className="font-bold text-accent mb-1">2M+</p>
                <p className="text-primary-foreground/70">Connected households</p>
              </div>
              <div className="bg-primary/50 border border-accent/20 rounded-lg p-4">
                <p className="font-bold text-accent mb-1">Ongoing</p>
                <p className="text-primary-foreground/70">Expansion in every state</p>
              </div>
            </div>
            <a href="tel:8883915941" className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all inline-block">
              Call (888) 391-5941
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
