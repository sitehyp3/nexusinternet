import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { RouterShowcase } from "@/components/router-showcase"
import { SpeedComparison } from "@/components/speed-comparison"
import { Features } from "@/components/features"
import { Plans } from "@/components/plans"
import { SmartHome } from "@/components/smart-home"
import { Installation } from "@/components/installation"
import { Coverage } from "@/components/coverage"
import { Support } from "@/components/support"
import { SmartHomeIntegration } from "@/components/smart-home-integration"
import { NetworkConnectivity } from "@/components/network-connectivity"
import { PomodroSection } from "@/components/pomodoro-section"
import { ConnectedVideo } from "@/components/connected-video"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="dark">
      <Navigation />
      <Hero />
      <ConnectedVideo />
      <ProductShowcase />
      <RouterShowcase />
      <SpeedComparison />
      <Features />
      <Plans />
      <SmartHomeIntegration />
      <NetworkConnectivity />
      <PomodroSection />
      <SmartHome />
      <Installation />
      <Coverage />
      <Support />
      <Footer />
    </div>
  )
}
