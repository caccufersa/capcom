import { TbMenu2 } from 'react-icons/tb';
import capcomLogo from '../../../assets/capcom-logo.png';
import { useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";

export function Hamburguer() {
    const [statusNav, setStatusNav] = useState(false)

    return (
        <>
        <header
            className="fixed left-4 right-4 z-50 mx-auto flex max-w-5xl items-center justify-center md:left-8 md:right-8 lg:left-16 lg:right-16"
            style={{ top: 'calc(var(--banner-offset, 28px) + 12px)' }}
        >
            <nav className="flex h-11 w-full items-center justify-between rounded-full border border-slate-200/70 bg-white/90 px-4 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.48)] backdrop-blur-sm sm:h-12 sm:px-5">
                <a href="#welcome" className="group flex flex-shrink-0 items-center gap-2 rounded-full px-1 py-1">
                    <img src={capcomLogo} alt="Logo capcom" className="w-16 transition-transform duration-300 ease-out group-hover:scale-105" />
                    <span className="hidden text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:block">
                        2025
                    </span>
                </a>
                <button 
                    onClick={() => setStatusNav(!statusNav)} 
                    className="rounded-full p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100"
                    aria-label="Menu"
                >
                    <TbMenu2 size={20} />
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
                <div className="fixed right-6 z-50 w-56 sm:right-10 sm:w-64" style={{ top: 'calc(var(--banner-offset, 28px) + 72px)' }}>
                    {/* Seta decorativa */}
                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-slate-200 transform rotate-45" />
                    
                    {/* Container do menu */}
                    <nav className="bg-white border border-slate-200 rounded-xl shadow-lg p-1.5">
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#minicourse" 
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-transparent text-sm font-semibold text-slate-700 transition-all duration-200 ease-out hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                            <span>Minicursos</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#maratona" 
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-transparent text-sm font-semibold text-slate-700 transition-all duration-200 ease-out hover:text-purple-600 hover:border-purple-200 hover:bg-purple-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                            <span>Maratona</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#gamejam" 
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-transparent text-sm font-semibold text-slate-700 transition-all duration-200 ease-out hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                            <span>GameJam</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#game" 
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-transparent text-sm font-semibold text-slate-700 transition-all duration-200 ease-out hover:text-purple-600 hover:border-purple-200 hover:bg-purple-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                            <span>Jogo</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#instructions" 
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-transparent text-sm font-semibold text-slate-700 transition-all duration-200 ease-out hover:text-sky-600 hover:border-sky-200 hover:bg-sky-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                            <span>Inscrições</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="#faq" 
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-transparent text-sm font-semibold text-slate-700 transition-all duration-200 ease-out hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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