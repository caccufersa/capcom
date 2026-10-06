import { Outlet } from "react-router-dom"
import { Footer } from "./pages/footer/index.tsx"
import { Nav } from "./components/nav/index.tsx"
import WhatsAppButton from "./components/whatsapp-button"
import {ScrollToTop} from "./components/scroll-to-top"

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop/>
    </div>
  )
}

export default App
