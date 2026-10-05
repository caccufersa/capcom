import { IoBookOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import ilustration from '../../assets/aviador2026.svg';
import { MapModal, useMapModal } from '../../components/map-modal';

export function Welcome() {
    const { isOpen, openMap, closeMap } = useMapModal();
    return (
        <section id="welcome" className="pt-[4rem] md:pt-[6.5rem] pb-16 sm:pb-20 w-full relative flex items-center justify-center min-h-screen px-4">
            <div className="container mx-auto max-w-7xl lg:max-w-6xl">
                <div className="grid min-[860px]:grid-cols-5 gap-6 lg:gap-16 items-center">
                    {/* Ilustração */}
                    <div className="hidden grid min-[860px]:block min-[860px]:col-span-2">
                        <img
                            src={ilustration}
                            alt="Ilustração CAPCOM"
                            className="w-full h-auto max-w-full object-contain drop-shadow-xl"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    {/* Conteúdo */}
                    <div className="min-[860px]:col-span-3 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            <h1 className="font-extrabold text-slate-900 leading-[1.1] tracking-tight text-[1em]">
                                CAPCOM <span className="text-[#3D568F]">2026</span>
                            </h1>

                            <img
                                src={ilustration}
                                alt="Ilustração CAPCOM"
                                className="min-[860px]:hidden h-[1em] w-auto shrink-0 drop-shadow-xl"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>


                        <p className="text-base md:text-lg text-slate-600 mt-[-8px] leading-relaxed font-medium">
                            Computação, Inovação e Futuro: 20 anos de Ciência da Computação.
                        </p>
                        <p className="text-base md:text-lg text-slate-600 mb-5 leading-relaxed font-light">
                            Mais do que um evento acadêmico, a CAPCOM é um <span className="font-medium">ambiente de integração, colaboração e inovação</span>.
                        </p>
                        <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed font-light">
                            Participe de oficinas, minicursos e atividades práticas que vão te envolver em experiências dinâmicas de aprendizado, despertando sua curiosidade e conectando você ao universo das tecnologias emergentes que transformam o nosso mundo.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                            <a
                                href="#minicourse"
                                className="px-8 py-4 bg-[#3D568F] text-white rounded-lg font-medium hover:bg-[#0E2251] transition-all hover:scale-105 inline-flex items-center justify-center gap-2 text-base shadow-lg shadow-[#3D568F]/20"
                            >
                                <IoBookOutline size={22} />
                                Explorar Minicursos
                            </a>
                            <a
                                href="#subscribe"
                                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-medium hover:border-slate-300 hover:shadow-md transition-all inline-flex items-center justify-center gap-2 text-base"
                            >
                                Como Participar
                            </a>
                        </div>

                        {/* Stats simplificados */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600 font-light">
                            <div className="flex items-center gap-2">
                                <MdMenuBook className="text-[#3D568F]" size={20} />
                                <span><span className="font-semibold text-slate-900">10+</span> Minicursos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoCalendarOutline className="text-[#3D568F]" size={20} />
                                <span><span className="font-semibold text-slate-900">09 a 13</span> de Novembro</span>
                            </div>
                            <button
                                onClick={(e) => { e.preventDefault(); openMap(); }}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openMap(); } }}
                                aria-label="Abrir mapa do LCC - UFERSA"
                                className="flex items-center gap-2 cursor-pointer text-left text-sm sm:text-base"
                            >
                                <svg className="w-5 h-5 text-[#3D568F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span><span className="font-semibold text-slate-900">LCC</span> UFERSA</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Map modal for quick access from the welcome stats */}
            <MapModal isOpen={isOpen} onClose={closeMap} />
        </section >
    )
}