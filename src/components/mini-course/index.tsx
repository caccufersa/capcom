import { IoIosArrowForward } from "react-icons/io";

export function Minicourse() {
    return (
        <section id="minicourse" className="min-h-screen flex items-center justify-center flex-col text-center w-full bg-blue-50/50 px-4 py-12 ">
            <div className="w-full flex items-center flex-col">
                <h2 className="font-bold bg-gradient-to-l from-blue-900 to-blue-500 bg-clip-text text-transparent md:text-4xl text-2xl font-serif">Minicursos em Destaque</h2>
                <p className="text-zinc-700 md:text-lg text-base md:max-w-none max-w-lg">Descubra alguns dos nossos minicursos mais populares e comece sua jornada de aprendizado.</p>
            </div>

            <div className="flex xl:flex-row flex-col gap-12 mb-12">
                <h3 className="font-medium text-xl py-36 text-blue-950">Agurdando cadastrar cursos.</h3>
            </div>

            <button className="bg-transparent flex items-center justify-center gap-4 border border-zinc-400 rounded-4xl px-6 h-10 shadow-md text-zinc-700 font-medium cursor-pointer transition-all hover:scale-105">
                Ver Todos os Minicursos
                <IoIosArrowForward className="text-zinc-700 md:text-xl text-lg mt-1" />
            </button>
        </section>
    )
}