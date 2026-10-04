import { FiUsers} from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

export function Instructor() {
    return (
        <section id="instructor" className="bg-white py-16 md:py-20 w-full flex flex-col items-center justify-center px-4 border-b border-slate-200">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                        <LuGraduationCap size={16} className="text-[#3D568F]" />
                        <span className="text-xs sm:text-sm font-semibold text-[#0E2251]">Oportunidade</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-3 tracking-tight">
                        Quer Ministrar um Minicurso?
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Compartilhe seu conhecimento e ajude outros estudantes a crescerem na área da computação
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                            <FiUsers className="text-[#3D568F] text-2xl" />
                        </div>
                        <h3 className="font-semibold text-slate-900 text-lg mb-2">Impacte Vidas</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Ensine e inspire novos talentos na área da computação</p>
                    </div>
                    
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                            <FaRegStar className="text-[#3D568F] text-2xl" />
                        </div>
                        <h3 className="font-semibold text-slate-900 text-lg mb-2">Desenvolva-se</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Aprimore suas habilidades de comunicação e ensino</p>
                    </div>
                    
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                            <IoBookOutline className="text-[#3D568F] text-2xl" />
                        </div>
                        <h3 className="font-semibold text-slate-900 text-lg mb-2">Flexibilidade</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Escolha o tema e formato que você domina</p>
                    </div>
                </div>

                <div className="flex justify-center gap-5">
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLScI1eGgIhQkvX6lFqWPlsRT1nSCspBCqJep4XyhDg0qq9VpAA/viewform?usp=send_form" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#3D568F] hover:bg-[#0E2251] text-white font-semibold px-4 py-2 md:px-8 md:py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg leading-tight"
                    >
                        <span>Edital submissão de propostas de minicursos</span>
                    </a>

                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLScI1eGgIhQkvX6lFqWPlsRT1nSCspBCqJep4XyhDg0qq9VpAA/viewform?usp=send_form" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#3D568F] hover:bg-[#0E2251] text-white font-semibold px-4 py-2 md:px-8 md:py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg leading-tight"
                    >
                        <span>Formulário de Inscrição</span>
                    </a>
                </div>
            </div>
        </section>
    )
}