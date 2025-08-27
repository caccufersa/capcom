import { FiUsers, FiCalendar } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export function Infos() {
    return (
        <section id="infos" className="flex items-center justify-center flex-col py-12 px-4">
            <h2 className="md:text-4xl text-2xl font-bold text-blue-900">Informações Importantes</h2>
            <p className="text-zinc-700 md:text-lg text-base pt-2">Tudo que você precisa saber sobre os minicursos</p>

            <div className="flex lg:flex-row flex-col md:gap-18 gap-12 py-12">
                <div className="flex flex-col items-center justify-center bg-blue-300/20 rounded-xl border border-blue-200 md:w-68 w-58 md:h-48 h-38">
                    <FiCalendar className="text-blue-700 md:text-4xl text-3xl" />
                    <p className="font-medium text-gray-900 md:text-xl text-lg py-2">Quando</p>
                    <span className="text-zinc-700 md:text-lg text-base">23/10 e 24/10</span>
                    <span className="text-zinc-700 md:text-lg text-base">Das 14:00 às 18:00</span>
                </div>
                <div >
                    <a
                        className="flex flex-col items-center justify-center bg-blue-300/20 rounded-xl border border-blue-200 md:w-68 w-58 md:h-48 h-38"
                        href="https://www.google.com/maps/place/LCC/@-5.206761,-37.3266134,17z/data=!3m1!4b1!4m6!3m5!1s0x7ba07ec488f7071:0x195359523efeb3d7!8m2!3d-5.206761!4d-37.3240385!16s%2Fg%2F11vjgr9hny?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank">
                        <GrLocation className="text-blue-700 md:text-4xl text-3xl" />
                        <p className="font-medium text-gray-900 md:text-xl text-lg py-2">Onde</p>
                        <span className="text-zinc-700 md:text-lg text-base">LCC</span>
                        <span className="text-zinc-700 md:text-lg text-base">UFERSA - Mossoró</span>
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center bg-blue-300/20 rounded-xl border border-blue-200 md:w-68 w-58 md:h-48 h-38">
                    <FiUsers className="text-blue-700 md:text-4xl text-3xl" />
                    <p className="font-medium text-gray-900 md:text-xl text-lg py-2">Para quem</p>
                    <span className="text-zinc-700 md:text-lg text-base text-center max-w-58">Estudantes e interessados em computação</span>
                </div>
            </div>

        </section>
    )
}