import { Faq } from "./pages/faq/index.tsx"
import { Footer } from "./pages/footer/index.tsx"
import { Nav } from "./components/nav/index.tsx"
import { Infos } from "./pages/infos/index.tsx"
import { Subscribe } from "./pages/subscribe/index.tsx"
import { ProgrammingMarathon } from "./pages/marathon/index.tsx"
import { Minicourse } from "./pages/mini-course/index.tsx"
import { Welcome } from "./pages/welcome/index.tsx"
// import Countdown from "./components/countdown" Countdown component temporarily disabled, because the event date has passed
import WhatsAppButton from "./components/whatsapp-button"
import DeadlineBanner from "./components/deadline-banner"
import { Sponsors } from "./pages/sponsors/index.tsx"
import { GameJam } from "./pages/gamejam/index.tsx"

function App() {
  return (
    <div>
      <DeadlineBanner />
      <Nav />
      <Welcome />
      {/* <Countdown /> */}
      <Infos />
      <Minicourse />
      <ProgrammingMarathon />
      <GameJam />
      <Subscribe />
      <Faq />
      <Sponsors />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
