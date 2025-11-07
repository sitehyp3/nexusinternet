export function SmartHomeIntegration() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/smart-home-integration-with-matter-protocol-device.jpg" alt="Smart home integration" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-6">Smart Home Integration</h2>
            <p className="text-xl text-gray-600 mb-6">
              Make your smart home react when you're busy: pause music, turn on lights, and lock the door with just one
              button.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nexus Internet supports Matter®, a modern smart home protocol that connects to Apple Home and Google Home.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" style={{ color: "#EA5212" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Pause Music</h3>
                  <p className="text-gray-600">Automatically pause playback during focus sessions</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" style={{ color: "#EA5212" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Turn On Lights</h3>
                  <p className="text-gray-600">Control smart lighting throughout your home</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" style={{ color: "#EA5212" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Lock the Door</h3>
                  <p className="text-gray-600">Secure your home with smart lock integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
