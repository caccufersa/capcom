import { IoBookOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import ilustration from '../../assets/aviador2026.svg';
import { MapModal, useMapModal } from '../../components/map-modal';

export function Welcome() {
    const { isOpen, openMap, closeMap } = useMapModal();
    return (
        <section id="welcome" className="pt-[2rem] md:pt-[6.5rem] pb-16 sm:pb-20 w-full relative flex items-center justify-center min-h-screen px-4">
            <div className="container mx-auto max-w-7xl lg:max-w-6xl">
                <div className="grid lg:grid-cols-3 gap-[18rem] lg:gap-[22rem] items-center">
                    {/* Ilustração */}
                    <div className="hidden md:block">
                        <img
                            src={ilustration}
                            alt="Ilustração CAPCOM"
                            className="min-w-[10rem] max-w-[26rem] drop-shadow-xl"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    {/* Conteúdo */}
                    <div className=" md:col-span-2 flex flex-col justify-center lg:order-2 order-1">
                        <div className="flex gap-1">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                                CAPCOM <span className="text-[#3D568F]">2026</span>
                            </h1>
                            <div className="md:hidden">
                                <img
                                    src={ilustration}
                                    alt="Ilustração CAPCOM"
                                    className="min-w-[1rem] max-w-[1.8rem] drop-shadow-xl"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                        </div>


                        <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed font-light">
                            Mais do que um evento acadêmico, a CAPCOM é um <span className="font-medium text-slate-900">ambiente de integração, colaboração e inovação</span>.
                        </p>

                        <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed font-light">
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
        </section>
    )
}