import { Faq } from "./components/faq"
import { Footer } from "./components/footer"
import { Nav } from "./components/nav/index.tsx"
import { Infos } from "./components/infos"
import { Instructions } from "./components/instructions"
import { Minicourse } from "./components/mini-course"
import { Welcome } from "./components/welcome"
import Countdown from "./components/countdown"
import WhatsAppButton from "./components/whatsapp-button"
import DeadlineBanner from "./components/deadline-banner"

function App() {
  return (
    <div>
      <DeadlineBanner />
      <Nav />
      <Welcome />
      <Countdown />
      <Infos />
      <Minicourse />
      <Instructions />
      <Faq />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
