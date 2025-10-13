import { IoBookOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import ilustration from '../../assets/ilustrationGirl.webp'

export function Welcome() {
    return (
        <section id="welcome" className="pt-36 sm:pt-40 pb-20 lg:flex-row flex-col w-full bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center min-h-screen px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Conteúdo */}
                    <div className="flex flex-col justify-center lg:order-1 order-2">
                        <div className="inline-block mb-6">
                            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                                Evento Gratuito
                            </span>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
                            Semana de Capacitação em Computação
                        </h1>
                        
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                            Participe de oficinas, minicursos e atividades práticas que vão te conectar ao universo das tecnologias emergentes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
                            <a 
                                href="#minicourse" 
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                <IoBookOutline size={20} />
                                Ver Minicursos
                            </a>
                            <a 
                                href="#instructions" 
                                className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                Como Participar
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        {/* Stats minimalistas */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-slate-200">
                            <div>
                                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                                    <MdMenuBook className="text-blue-600" size={18} />
                                    <p className="text-xl sm:text-2xl font-light text-slate-900">10+</p>
                                </div>
                                <span className="text-xs sm:text-sm text-slate-600">Minicursos</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                                    <IoCalendarOutline className="text-blue-600" size={18} />
                                    <p className="text-xl sm:text-2xl font-light text-slate-900">2</p>
                                </div>
                                <span className="text-xs sm:text-sm text-slate-600">Dias</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                                    <RiMoneyDollarCircleLine className="text-blue-600" size={18} />
                                    <p className="text-xl sm:text-2xl font-light text-slate-900">100%</p>
                                </div>
                                <span className="text-xs sm:text-sm text-slate-600">Gratuito</span>
                            </div>
                        </div>
                    </div>

                    {/* Ilustração */}
                    <div className="flex justify-center lg:order-2 order-1">
                        <img 
                            src={ilustration} 
                            alt="Ilustração CAPCOM" 
                            className="w-full max-w-lg drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}