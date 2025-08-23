import { FiUsers, FiUserPlus } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

export function Instructor() {
    return (
        <section id="instructor" className="min-h-screen w-full flex flex-col items-center justify-center ">
            <p className="bg-blue-300/50 border border-blue-300/30 shadow-md px-8 py-1 rounded-2xl text-blue-800 font-bold flex items-center justify-center gap-4">
                <LuGraduationCap size={20} className="text-blue-800" />
                Para Instrutores
            </p>
            <h2 className="md:text-4xl text-2xl font-bold text-blue-900 pt-8 pb-2">Quer Ministrar um Minicurso?</h2>
            <p className="text-zinc-700 md:text-lg text-base md:max-w-none max-w-lg">Compartilhe seu conhecimento e ajude outros estudantes a crescerem na área da computação</p>

            <div className="mt-12 w-full max-w-5xl h-72 bg-blue-300/20 rounded-xl border border-blue-200 flex items-center justify-center flex-col gap-12">
                <div className="flex gap-18">
                    <div className="flex items-center flex-col justify-center">
                        <span className="bg-blue-300/30 rounded-full p-5">
                            <FiUsers size={38} className="text-blue-700" />
                        </span>
                        <h3 className="font-medium text-gray-900 md:text-xl text-lg pt-2">Impacte Vidas</h3>
                        <span className="text-zinc-700 md:text-lg text-base">Ensine e inspire novos talentos</span>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                        <span className="bg-blue-300/30 rounded-full p-5">
                            <FaRegStar size={38} className="text-blue-700" />
                        </span>
                        <h3 className="font-medium text-gray-900 md:text-xl text-lg pt-2">Desenvolva-se</h3>
                        <span className="text-zinc-700 md:text-lg text-base">Aprimore suas habilidades de ensino</span>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                        <span className="bg-blue-300/30 rounded-full p-5">
                            <IoBookOutline size={38} className="text-blue-700" />
                        </span>
                        <h3 className="font-medium text-gray-900 md:text-xl text-lg pt-2">Flexibilidade</h3>
                        <span className="text-zinc-700 md:text-lg text-base">Escolha o tema que domina</span>
                    </div>
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScI1eGgIhQkvX6lFqWPlsRT1nSCspBCqJep4XyhDg0qq9VpAA/viewform?usp=send_form" target="_blank" className="bg-blue-700 rounded-3xl md:text-lg text-base text-white font-medium px-8 py-2 transition-all hover:scale-105 cursor-pointer shadow-md flex items-center justify-center gap-4">
                    <FiUserPlus size={20} color="#fff" />
                    Seja um Instrutor
                </a>
            </div>
        </section>
    )
}