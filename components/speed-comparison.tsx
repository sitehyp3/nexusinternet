export function SpeedComparison() {
  const comparisons = [
    { label: "Standard Cable", speed: "150 Mbps", color: "bg-muted" },
    { label: "Premium Cable", speed: "300 Mbps", color: "bg-accent/30" },
    { label: "Nexus Fiber", speed: "1 Gbps", color: "bg-accent" },
  ]

  return (
    <section className="py-24 bg-primary/50 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Speed That Matters</h2>
          <p className="text-lg text-primary-foreground/70">Compare our fiber speeds to the competition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {comparisons.map((item) => (
            <div key={item.label} className={`rounded-xl p-8 ${item.color} border border-accent/20 text-center`}>
              <p className={item.label === "Premium Cable" ? "text-accent mb-2" : "text-white mb-2"}>{item.label}</p>
              <p className={`text-5xl font-bold ${item.label === "Premium Cable" ? "text-accent" : "text-white"}`}>{item.speed}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            <span className="text-accent">10x Faster</span> than standard cable
          </h3>
          <p className="text-lg text-primary-foreground/70 mb-6">
            Stream 4K, game without lag, and download entire movies in seconds
          </p>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference with fiber-optic technology. While traditional cable internet struggles with speed and reliability, Nexusnett delivers consistent performance.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="tel:8889932795" className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all inline-block">
              Call (888) 993-2795
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
