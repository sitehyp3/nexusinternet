export function RouterShowcase() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-accent">Nexus Elite Router</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Our flagship router combines cutting-edge WiFi 6E technology with enterprise-grade performance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/5g internet.jpg" alt="Nexus Elite Router" className="w-full rounded-2xl" />
          </div>
          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold mb-2">WiFi 6E Ready</h3>
              <p className="text-primary-foreground/70">Triple band technology delivers simultaneous gigabit speeds</p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold mb-2">Smart AI Integration</h3>
              <p className="text-primary-foreground/70">
                Automatic optimization and device prioritization for seamless streaming
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-primary-foreground/70">Military-grade encryption protects your connected home</p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold mb-2">Mobile Management</h3>
              <p className="text-primary-foreground/70">Complete control from anywhere with our intuitive app</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
