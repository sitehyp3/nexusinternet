export function Installation() {
  const steps = [
    {
      number: "1",
      title: "Check Availability",
      description: "Enter your address to see if Nexus Fiber is available",
    },
    {
      number: "2",
      title: "Choose Your Plan",
      description: "Select the speed tier that fits your needs",
    },
    {
      number: "3",
      title: "Schedule Installation",
      description: "Pick a convenient time for our certified technicians",
    },
    {
      number: "4",
      title: "Get Connected",
      description: "We install your equipment and optimize your setup",
    },
  ]

  return (
    <section className="py-24 bg-primary/50 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Easy <span className="text-accent">Setup</span> in 4 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              <div className="bg-primary border-2 border-accent/30 rounded-2xl p-8 text-center hover:border-accent transition-all">
                <div className="text-5xl font-bold text-accent mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-accent/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
