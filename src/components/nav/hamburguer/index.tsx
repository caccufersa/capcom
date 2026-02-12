import { TbMenu2 } from 'react-icons/tb';
import capcomLogo from '../../../assets/capcom-logo.png';
import { useState, useEffect } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export function Hamburguer() {
    const [statusNav, setStatusNav] = useState(false)

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setStatusNav(false)
        }
        if (statusNav) window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [statusNav]);

    return (
        <>
        <header className="z-50 fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 max-w-5xl mx-auto flex items-center justify-center rounded-full bg-white h-12 sm:h-14 border border-slate-200 shadow-sm">
            <nav className="flex justify-between items-center w-full px-4 sm:px-6 md:px-10">
                <a href="/#welcome" className="flex-shrink-0">
                    <img src={capcomLogo} alt="Logo capcom" className="w-16 md:w-20" loading="lazy" decoding="async" />
                </a>
                <button 
                    onClick={() => setStatusNav(!statusNav)} 
                    className="p-1.5 cursor-pointer transition-all duration-200 hover:bg-slate-50 rounded-lg"
                    aria-label="Menu"
                    aria-expanded={statusNav}
                    aria-controls="mobile-menu"
                >
                    <TbMenu2 size={22} className="text-slate-700" />
                </button>
            </nav>
        </header>

        {statusNav && (
            <>
                <div 
                    className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
                    onClick={() => setStatusNav(false)}
                    aria-hidden="true"
                />
                
        
                <div id="mobile-menu" className="fixed top-20 right-6 sm:right-10 z-50 w-56 sm:w-64">
                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-slate-200 transform rotate-45" />
                    <nav className="bg-white border border-slate-200 rounded-xl shadow-lg p-1.5">
                        <a
                            onClick={() => setStatusNav(false)}
                            href="/#cronograma"
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Cronograma</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a
                            onClick={() => setStatusNav(false)}
                            href="/#minicursos"
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Minicursos</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a
                            onClick={() => setStatusNav(false)}
                            href="/#maratona"
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Maratona</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a
                            onClick={() => setStatusNav(false)}
                            href="/#gamejam"
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Game Jam</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <Link
                            onClick={() => setStatusNav(false)}
                            to="/gallery"
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Galeria</span>
                            <RiArrowRightSLine size={18} />
                        </Link>
                        <a
                            onClick={() => setStatusNav(false)}
                            href="/#subscribe"
                            className="flex items-center justify-between px-3 py-2.5 font-medium text-slate-700 text-sm rounded-lg transition-all hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span>Inscrições</span>
                            <RiArrowRightSLine size={18} />
                        </a>
                        <a 
                            onClick={() => setStatusNav(false)} 
                            href="/#faq" 
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