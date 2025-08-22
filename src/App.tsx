import { Header } from "./components/header"
import { Infos } from "./components/infos"
import { Instructions } from "./components/instructions"
import { Instructor } from "./components/instructor"
import { Minicourse } from "./components/mini-course"
import { Welcome } from "./components/welcome"

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Infos />
      <Minicourse />
      <Instructions />
      <Instructor />
    </div>
  )
}

export default App
