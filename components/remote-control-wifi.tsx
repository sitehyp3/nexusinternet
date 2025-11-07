export function RemoteControlWiFi() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Remote Control Over Wi-Fi</h2>
            <p className="text-xl text-gray-600 mb-8">
              Control Nexus Internet remotely over the internet. Place it on the wall or door and use the desktop app to
              automatically activate the status when you're on calls.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Automatic activation with microphone</h3>
                <p className="text-gray-600">Detects when you're on a call and activates the status automatically</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4" style={{ borderColor: "#EA5212" }}>
                <h4 className="font-bold mb-2">Wi-Fi 6 Module</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Ultra-low power Wi-Fi 6 SoC</li>
                  <li>• IPv6 support</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4" style={{ borderColor: "#EA5212" }}>
                <h4 className="font-bold mb-2">Battery Life</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 2 weeks in stand-by</li>
                  <li>• 8 hours active status</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <img src="/remote-control-device-with-wifi-on-call-status-dis.jpg" alt="Remote control device" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
