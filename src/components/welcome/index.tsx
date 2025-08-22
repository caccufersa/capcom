import { IoBookOutline, IoTimerSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import ilustration from '../../assets/ilustrationGirl.png'

export function Welcome() {
    return (
        <section className="lg:py-0 py-18 lg:flex-row flex-col w-full bg-gradient-to-l from-blue-900 to-blue-500 flex items-center justify-center min-h-screen px-4">
            <div className="flex flex-1 justify-center flex-col items-center lg:py-0 py-4">
                <img src={ilustration} alt="Ilustração" className="lg:w-168 md:w-128 w-68" />
            </div>

            <div className="w-full max-w-7xl flex flex-col items-center flex-1 justify-center">
                <h2 className="text-white font-bold md:text-4xl text-2xl md:text-left text-center max-w-2xl mb-4">Semana de Capacitação em Computação da UFERSA</h2>
                <p className="md:text-left text-center max-w-2xl md:text-xl text-base text-white">Minicursos gratuitos de computação ministrados por alunos ativos do curso.
                    Aprenda sobre desenvolvimento web, jogos, robótica, mineração de dados e
                    muito mais em um ambiente colaborativo de aprendizado.</p>

                <div className="flex gap-4 my-10 md:flex-row flex-col w-full max-w-2xl justify-center">
                    <button className="rounded-3xl bg-blue-950 px-4 h-10 text-white font-medium md:text-lg text-base justify-center shadow-md flex items-center gap-2 cursor-pointer transition-all hover:scale-105 w-full">
                        <IoBookOutline className="md:text-xl text-lg" color="#fff" />
                        Explorar Minicursos
                    </button>
                    <button className="border border-white rounded-3xl px-4 h-10 text-white font-medium md:text-lg text-base justify-center shadow-md flex items-center gap-2 cursor-pointer transition-all hover:scale-105 w-full">
                        Como me Inscrever
                        <IoIosArrowForward className=" md:text-xl text-lg" color="#fff" />
                    </button>
                </div>

                <div className="flex gap-8 md:flex-row flex-col">
                    <div className="flex flex-col items-center justify-center bg-white rounded-2xl md:w-50 w-40 md:h-40 h-30">
                        <MdMenuBook className="text-blue-700 md:text-5xl text-3xl" />
                        <p className="font-bold text-blue-700 md:text-3xl text-2xl">10 +</p>
                        <span className="text-zinc-700 text-center md:text-base text-sm">Minicursos Disponíveis</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-2xl md:w-50 w-40 md:h-40 h-30">
                        <RiMoneyDollarCircleLine className="text-blue-700 md:text-5xl text-3xl" />
                        <p className="font-bold text-blue-700 md:text-3xl text-2xl">100%</p>
                        <span className="text-zinc-700 text-center md:text-base text-sm">Gratuito</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-2xl md:w-50 w-40 md:h-40 h-30">
                        <IoTimerSharp className="text-blue-700 md:text-5xl text-3xl" />
                        <p className="font-bold text-blue-700 md:text-3xl text-2xl">2 dias</p>
                        <span className="text-zinc-700 text-center md:text-base text-sm">de Aprendizado</span>
                    </div>
                </div>

            </div>
        </section >
    )
}