import { TbMenu2 } from 'react-icons/tb';
import capcomLogo from '../../../assets/capcom-logo.png';
import { useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";

export function Hamburguer() {
    const [statusNav, setStatusNav] = useState(false)

    return (
        <header className="z-50 fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 max-w-5xl mx-auto flex items-center justify-center rounded-full bg-white md:h-16 h-12 border-2 border-zinc-300 shadow-md">
            <nav className="flex justify-between md:gap-0 gap-4 items-center w-full px-12">
                <a href="#welcome">
                    <img src={capcomLogo} alt="Logo capcom" className="md:w-24 w-18" />
                </a>
                <div className='flex gap-2 md:gap-16 sm:gap-8'>
                    <button onClick={() => setStatusNav(!statusNav)} className="cursor-pointer transition-all duration-200 hover:scale-105">
                        <TbMenu2 size={30} />
                    </button>

                    {statusNav && (
                        <section className='relative left-5'>
                            <div className="absolute top-14 right-8 w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
                            <nav className="bg-white px-5 py-7 absolute right-5 top-16 z-10 rounded-lg shadow-lg sm:w-64 w-54 flex flex-col justify-center gap-2">
                                <a onClick={() => setStatusNav(false)} href="#infos" className="flex items-center justify-between font-medium text-zince-700 md:text-lg text-base transition-all hover:scale-105 hover:text-blue-700">Sobre
                                    <RiArrowRightSLine size={20} />
                                </a>
                                <a onClick={() => setStatusNav(false)} href="#minicourse" className="flex items-center justify-between font-medium text-zince-700 md:text-lg text-base transition-all hover:scale-105 hover:text-blue-700">Minicursos
                                    <RiArrowRightSLine size={20} />
                                </a>
                                <a onClick={() => setStatusNav(false)} href="#instructions" className="flex items-center justify-between font-medium text-zince-700 md:text-lg text-base transition-all hover:scale-105 hover:text-blue-700">Inscrições
                                    <RiArrowRightSLine size={20} />
                                </a>
                                <a onClick={() => setStatusNav(false)} href="#instructor" className="flex items-center justify-between font-medium text-zince-700 md:text-lg text-base transition-all hover:scale-105 hover:text-blue-700">Instrutores
                                    <RiArrowRightSLine size={20} />
                                </a>
                                <a onClick={() => setStatusNav(false)} href="#faq" className="flex items-center justify-between font-medium text-zince-700 md:text-lg text-base transition-all hover:scale-105 hover:text-blue-700">FAQ
                                    <RiArrowRightSLine size={20} />
                                </a>
                            </nav>
                        </section>
                    )}
                </div>
            </nav>
        </header>


    )
}