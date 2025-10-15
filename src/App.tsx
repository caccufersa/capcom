import { Faq } from "./components/faq"
import { Footer } from "./components/footer"
import { Nav } from "./components/nav/index.tsx"
import { Infos } from "./components/infos"
import { Instructions } from "./components/instructions"
import { ProgrammingMarathon } from "./components/marathon"
import { Minicourse } from "./components/mini-course"
import { Welcome } from "./components/welcome"
import Countdown from "./components/countdown"
import WhatsAppButton from "./components/whatsapp-button"
import DeadlineBanner from "./components/deadline-banner"
import { Sponsors } from "./components/sponsors"

function App() {
  return (
    <div>
      <DeadlineBanner />
      <Nav />
      <Welcome />
      <Countdown />
      <Infos />
      <Minicourse />
      <ProgrammingMarathon />
      <Instructions />
      <Faq />
      <Sponsors />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
