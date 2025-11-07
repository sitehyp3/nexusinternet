export function NetworkConnectivity() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-5xl font-bold mb-6">Multiple Network Connectivity</h2>
            <p className="text-xl text-gray-400">
              Connect Nexus Internet to your project using Open API and any type of network connection: USB, LAN, or
              Cloud.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/device-with-network-information-display-usb-lan-an.jpg" alt="Network connectivity device" className="rounded-lg w-full max-h-48 object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex-shrink-0 mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EA5212" }}
              >
                <span className="text-2xl">☁️</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Connect to Cloud</h3>
              <p className="text-gray-400 mb-4">
                Connect the device to your Nexus App account for remote access via the internet, or connect to your own
                server.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Remote access behind the NAT</li>
                <li>• Connect to any cloud via MQTT</li>
                <li>• No vendor lock-in</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex-shrink-0 mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EA5212" }}
              >
                <span className="text-2xl">📡</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">LAN via Wi-Fi</h3>
              <p className="text-gray-400">
                Get full access to the HTTP API, web interface and Matter smart home protocol in your local network even
                if Nexus has no internet access.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex-shrink-0 mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EA5212" }}
              >
                <span className="text-2xl">🔌</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">USB Ethernet</h3>
              <p className="text-gray-400">
                Connect to PC to create a Virtual LAN interface, allowing access to the local web interface and HTTP API
                without Wi-Fi or internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
