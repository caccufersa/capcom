import { Faq } from "../faq/index.tsx"
import { Infos } from "../infos/index.tsx"
import { Subscribe } from "../subscribe/index.tsx"
import { ProgrammingMarathon } from "../marathon/index.tsx"
import { Instructor } from "../../components/instructor/index.tsx" // <-- Nome correto importado
import { Welcome } from "../welcome/index.tsx"
import { Sponsors } from "../sponsors/index.tsx"

export function Home() {
  return (
    <>
      <Welcome />
      {/* <Countdown /> */}
      <Infos />
      <Instructor /> {/* <-- Tag com o nome correto */}
      <ProgrammingMarathon />
      <Subscribe />
      <Faq />
      <Sponsors />
    </>
  )
}