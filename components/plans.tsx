export function Plans() {
  const plans = [
    {
      name: "Essential",
      speed: "300 Mbps",
      price: "39",
      features: ["Perfect for streaming", "Work from home", "Multiple devices", "Free router rental"],
      highlighted: false,
    },
    {
      name: "Professional",
      speed: "750 Mbps",
      price: "59",
      features: ["4K streaming", "4K video calls", "20+ devices", "Priority support", "Free installation"],
      highlighted: true,
    },
    {
      name: "Ultimate",
      speed: "1 Gbps",
      price: "79",
      features: [
        "Unlimited potential",
        "Gaming optimized",
        "Smart home ready",
        "24/7 VIP support",
        "Free premium router",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="plans" className="py-24 bg-primary/50 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Plans Built for You</h2>
          <p className="text-lg text-primary-foreground/70">Choose the speed that fits your lifestyle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border-2 transition-all ${
                plan.highlighted ? "bg-accent/10 border-accent scale-105" : "bg-primary border-accent/20"
              }`}
            >
              {plan.highlighted && <div className="text-accent text-sm font-bold mb-4 uppercase">Most Popular</div>}
              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <p className="text-5xl font-bold text-accent mb-1">{plan.speed}</p>
              <p className="text-primary-foreground/70 mb-6">
                <span className="text-3xl font-bold">${plan.price}</span>/mo
              </p>
              <a
                href="tel:8883915941"
                className={`w-full py-3 px-6 rounded-full font-semibold mb-8 transition-all inline-block text-center ${
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-opacity-90"
                    : "border border-accent text-accent hover:bg-accent/10"
                }`}
              >
                Call (888) 391-5941
              </a>
              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs">✓</div>
                    <span className="text-primary-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
