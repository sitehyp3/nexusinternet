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
            <p className="text-xl text-muted-foreground mb-8">
              Our fiber network spans across major metropolitan areas, bringing ultra-fast internet to homes and businesses nationwide.
            </p>
            <div className="flex gap-4">
              <a href="tel:8889932795" className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all inline-block">
                Call (888) 993-2795
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
