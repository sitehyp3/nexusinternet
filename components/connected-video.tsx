export function ConnectedVideo() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Stay <span className="text-accent">Connected</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience seamless connectivity that keeps you connected to what matters most
          </p>
        </div>
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Connected.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
