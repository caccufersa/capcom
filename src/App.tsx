import { Header } from "./components/header"
import { Infos } from "./components/infos"
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
      <Instructor />
    </div>
  )
}

export default App
