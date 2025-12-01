import { Outlet } from "react-router-dom"
import { Footer } from "./pages/footer/index.tsx"
import { Nav } from "./components/nav/index.tsx"
import WhatsAppButton from "./components/whatsapp-button"

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
