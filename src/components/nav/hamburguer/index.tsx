import { TbMenu2 } from 'react-icons/tb';
import capcomLogo from '../../../assets/capcom-logo.png';
import { useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";

export function Hamburguer() {
    const [statusNav, setStatusNav] = useState(false)

    return (
        <>
        <header className="z-50 fixed top-11 sm:top-12 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 max-w-5xl mx-auto flex items-center justify-center rounded-full bg-white h-12 sm:h-14 border border-slate-200 shadow-sm">
            <nav className="flex justify-between items-center w-full px-4 sm:px-6 md:px-10">
                <a href="#welcome" className="flex-shrink-0">
                    <img src={capcomLogo} alt="Logo capcom" className="w-16 sm:w-18 md:w-20" />
                </a>
                <button 
                    onClick={() => setStatusNav(!statusNav)} 
                    className="p-1.5 cursor-pointer transition-all duration-200 hover:bg-slate-50 rounded-lg"
                    aria-label="Menu"
                >
                    <TbMenu2 size={22} className="text-slate-700" />
                </button>
            </nav>
        </header>

        {/* Menu dropdown - Fora do header para evitar movimento */}
        {statusNav && (
            <>
                {/* Overlay para fechar ao clicar fora */}
                <div 
                    className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
                    onClick={() => setStatusNav(false)}
                />
                
                {/* Menu */}
                <div className="fixed top-[5.5rem] sm:top-24 right-6 sm:right-10 z-50 w-56 sm:w-64">
                    {/* Seta decorativa */}
                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-slate-200 transform rotate-45" />
                    
                    {/* Container do menu */}
                    <nav className="bg-white border border-slate-200 rounded-xl shadow-lg p-1.5">
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#infos" 
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Sobre</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#minicourse" 
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Minicursos</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#marathon" 
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Maratona</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#gamejam" 
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Game Jam</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#instructions" 
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Inscrições</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#faq" 
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>FAQ</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                    </nav>
                </div>
            </>
        )}
        </>


    )
}