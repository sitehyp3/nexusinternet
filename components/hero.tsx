export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
              Fiber-Fast Internet for Your World
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg">
              Experience unprecedented speed and reliability with our next-generation fiber internet infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8889932795" className="bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all text-lg text-center">
                Call (888) 993-2795
              </a>
              <a href="#plans" className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent/10 transition-all text-lg text-center">
                View Plans
              </a>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-accent/20 to-primary/50 rounded-2xl flex items-center justify-center">
            <img
              src="/modern-fiber-internet-router-device.jpg"
              alt="Nexus Router"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
