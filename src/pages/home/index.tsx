import { Faq } from "../faq/index.tsx"
import { Infos } from "../infos/index.tsx"
import { Subscribe } from "../subscribe/index.tsx"
import { ProgrammingMarathon } from "../marathon/index.tsx"
import { Welcome } from "../welcome/index.tsx"
import { Sponsors } from "../sponsors/index.tsx"

export function Home() {
  return (
    <>
      <Welcome />
      {/* <Countdown /> */}
      <Infos />
      <ProgrammingMarathon />
      <Subscribe />
      <Faq />
      <Sponsors />
    </>
  )
}