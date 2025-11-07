export function SmartHome() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Power Your <span className="text-accent">Smart Home</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              With gigabit speeds and stable connectivity, your smart home devices work together seamlessly
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Smart Lighting & Climate</h4>
                  <p className="text-primary-foreground/70">Control every room instantly</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Security Cameras</h4>
                  <p className="text-primary-foreground/70">Crystal clear 4K streaming</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2H6v2zm3.5 0h2v-2h-2v2zm3.5 0h2v-2h-2v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Entertainment Systems</h4>
                  <p className="text-primary-foreground/70">Lag-free gaming & streaming</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-accent/10 rounded-2xl p-8 border border-accent/30">
            <img src="/smart-home-integration-devices-router.jpg" alt="Smart Home" className="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
