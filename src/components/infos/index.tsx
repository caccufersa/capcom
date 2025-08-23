import { FiUsers, FiCalendar } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export function Infos() {
    return (
        <section id="infos" className="flex items-center justify-center flex-col py-24 px-4">
            <h2 className="md:text-4xl text-2xl font-bold text-blue-900">Informações Importantes</h2>
            <p className="text-zinc-700 md:text-lg text-base pt-2">Tudo que você precisa saber sobre os minicursos</p>

            <div className="flex gap-18 py-12">
                <div className="flex flex-col items-center justify-center bg-blue-300/20 rounded-xl border border-blue-200 w-68 h-48">
                    <FiCalendar size={38} className="text-blue-700" />
                    <p className="font-medium text-gray-900 md:text-xl text-lg py-2">Quando</p>
                    <span className="text-zinc-700 md:text-lg text-base">23/10 e 24/10</span>
                    <span className="text-zinc-700 md:text-lg text-base">Das 14:00 às 18:00</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-blue-300/20 rounded-xl border border-blue-200 w-68 h-48">
                    <GrLocation size={38} className="text-blue-700" />
                    <p className="font-medium text-gray-900 md:text-xl text-lg py-2">Onde</p>
                    <span className="text-zinc-700 md:text-lg text-base">LCC</span>
                    <span className="text-zinc-700 md:text-lg text-base">UFERSA - Mossoró</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-blue-300/20 rounded-xl border border-blue-200 w-68 h-48">
                    <FiUsers size={38} className="text-blue-700" />
                    <p className="font-medium text-gray-900 md:text-xl text-lg py-2">Para quem</p>
                    <span className="text-zinc-700 md:text-lg text-base text-center max-w-58">Estudantes e interessados em computação</span>
                </div>
            </div>

        </section>
    )
}