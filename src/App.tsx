import { useEffect } from "react"
import { Faq } from "./pages/faq/index.tsx"
import { Footer } from "./pages/footer/index.tsx"
import { Nav } from "./pages/nav/index.tsx"
import { Instructions } from "./pages/instructions/index.tsx"
import { Minicourse } from "./components/mini-course"
import { Welcome } from "./pages/welcome/index.tsx"
import Countdown from "./components/countdown"
import WhatsAppButton from "./components/whatsapp-button"
import DeadlineBanner from "./components/deadline-banner"
import { Sponsors } from "./pages/sponsors/index.tsx"
import { Maratona } from "./pages/maratona/index.tsx"
import { GameJam } from "./pages/gamejam/index.tsx"
import { Game } from "./pages/game/index.tsx"
import { AnalyticsCounter } from "./components/analytics-counter"
import { initGA, GA_MEASUREMENT_ID } from "./utils/analytics"

function App() {
  useEffect(() => {
    // Inicializa Google Analytics quando o app carrega
    initGA(GA_MEASUREMENT_ID);
  }, []);

  return (
    <div>
      <DeadlineBanner />
      <Nav />
      <Welcome />
      <Countdown />
      <Minicourse />
      <Maratona />
      <GameJam />
      <Game />
      <Instructions />
      <Faq />
      <AnalyticsCounter measurementId={GA_MEASUREMENT_ID} />
      <Sponsors />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
