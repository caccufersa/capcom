import { TbMenu2 } from 'react-icons/tb';
import capcomLogo from '../../../assets/capcom-logo.png';
import { useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";

export function Hamburguer() {
    const [statusNav, setStatusNav] = useState(false)

    return (
        <>
        <header className="z-50 fixed top-12 sm:top-14 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 max-w-5xl mx-auto flex items-center justify-center rounded-full bg-white md:h-16 h-14 border-2 border-slate-200 shadow-md">
            <nav className="flex justify-between items-center w-full px-5 sm:px-8 md:px-12">
                <a href="#welcome" className="flex-shrink-0">
                    <img src={capcomLogo} alt="Logo capcom" className="md:w-24 w-20" />
                </a>
                <button 
                    onClick={() => setStatusNav(!statusNav)} 
                    className="p-2 cursor-pointer transition-all duration-200 hover:bg-slate-50 rounded-lg"
                    aria-label="Menu"
                >
                    <TbMenu2 size={24} className="text-slate-700" />
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
                <div className="fixed top-28 sm:top-30 right-6 sm:right-10 z-50 w-64 sm:w-72">
                    {/* Seta decorativa */}
                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l-2 border-t-2 border-slate-200 transform rotate-45" />
                    
                    {/* Container do menu */}
                    <nav className="bg-white border-2 border-slate-200 rounded-xl shadow-xl p-2">
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#infos" 
                            className="flex items-center justify-between px-4 py-3 font-medium text-slate-700 text-base rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Sobre</span>
                            <RiArrowRightSLine size={20} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#minicourse" 
                            className="flex items-center justify-between px-4 py-3 font-medium text-slate-700 text-base rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Minicursos</span>
                            <RiArrowRightSLine size={20} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#instructions" 
                            className="flex items-center justify-between px-4 py-3 font-medium text-slate-700 text-base rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Inscrições</span>
                            <RiArrowRightSLine size={20} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#faq" 
                            className="flex items-center justify-between px-4 py-3 font-medium text-slate-700 text-base rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>FAQ</span>
                            <RiArrowRightSLine size={20} />
                        </a>
                    </nav>
                </div>
            </>
        )}
        </>


    )
}