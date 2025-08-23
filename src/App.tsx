import { Faq } from "./components/faq"
import { Footer } from "./components/footer"
import { Nav } from "./components/nav/index.tsx"
import { Infos } from "./components/infos"
import { Instructions } from "./components/instructions"
import { Instructor } from "./components/instructor"
import { Minicourse } from "./components/mini-course"
import { Welcome } from "./components/welcome"

function App() {
  return (
    <div>
      <Nav />
      <Welcome />
      <Infos />
      <Minicourse />
      <Instructions />
      <Instructor />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
