import { IoBookOutline, IoCalendarOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import ilustration from '../../assets/ilustrationGirl.webp'

const brandColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#4285F4", "#EA4335"];

export function Welcome() {
    return (
        <section
            id="welcome"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pb-16 pt-[5.75rem] sm:pb-20 sm:pt-[6.5rem]"
        >
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
                <div className="absolute left-[-10%] top-[12%] h-48 w-48 rounded-full bg-[#4285F4]/15 blur-3xl sm:h-60 sm:w-60" />
                <div className="absolute bottom-[8%] right-[-12%] h-56 w-56 rounded-full bg-[#EA4335]/12 blur-3xl sm:h-64 sm:w-64" />
                <div className="absolute bottom-[24%] left-[8%] h-40 w-40 rounded-full bg-[#FBBC05]/18 blur-3xl sm:h-48 sm:w-48" />
            </div>

            <div className="container mx-auto max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    {/* Conteúdo */}
                    <div className="flex flex-col justify-center space-y-7 lg:order-1">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
                            <span>Comunidade CAPCOM</span>
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[58px]">
                            <span className="block text-slate-700 text-lg font-semibold uppercase tracking-[0.35em] text-left sm:text-center lg:text-left">Edição 2025</span>
                            <span className="mt-3 flex flex-wrap items-baseline gap-3">
                                {"CAPCOM".split("").map((letter, index) => (
                                    <span
                                        key={`${letter}-${index}`}
                                        className="inline-flex rounded-2xl bg-white/70 px-2.5 pb-1.5 pt-1 text-4xl sm:text-5xl md:text-6xl lg:text-[56px]"
                                        style={{ color: brandColors[index % brandColors.length], boxShadow: `0 14px 32px -22px ${brandColors[index % brandColors.length]}` }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                                <span className="rounded-2xl bg-white/70 px-3 py-1 text-4xl text-slate-900 shadow-sm sm:text-5xl md:text-6xl lg:text-[56px]">
                                    2025
                                </span>
                            </span>
                        </h1>

                        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            Mais do que um evento acadêmico, a CAPCOM conecta quem ama tecnologia com experiências humanas, colaborativas e acolhedoras.
                        </p>

                        <div className="grid gap-3 sm:inline-grid sm:auto-cols-fr sm:grid-flow-col">
                            <a
                                href="#minicourse"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4285F4] px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_32px_-18px_rgba(66,133,244,0.65)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#3b78d7]"
                            >
                                <IoBookOutline size={20} />
                                Explorar Minicursos
                            </a>
                            <a
                                href="#instructions"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-8 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-white"
                            >
                                Como participar
                            </a>
                        </div>

                        <div className="grid gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
                            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-sm">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#EA4335]/10 text-[#EA4335]">
                                    <MdMenuBook size={20} />
                                </span>
                                <span><span className="font-semibold text-slate-900">10+</span> minicursos para experimentar</span>
                            </div>
                            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-sm">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FBBC05]/10 text-[#FBBC05]">
                                    <IoCalendarOutline size={20} />
                                </span>
                                <span><span className="font-semibold text-slate-900">23 e 24 de outubro</span> no LCC</span>
                            </div>
                            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-sm">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#34A853]/10 text-[#34A853]">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10a7.5 7.5 0 11-15 0c0-3.728 3-6.75 7.5-6.75S19.5 6.272 19.5 10Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.5 21a6.5 6.5 0 0113 0" />
                                    </svg>
                                </span>
                                <span>Comunidade diversa, criativa e acolhedora</span>
                            </div>
                        </div>
                    </div>

                    {/* Ilustração */}
                    <div className="relative flex justify-center lg:order-2">
                        <div className="absolute inset-0 -z-10 mx-auto max-w-md rounded-[46px] bg-white/75 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.4)] backdrop-blur" />
                        <img
                            src={ilustration}
                            alt="Ilustração CAPCOM"
                            className="w-full max-w-md rounded-[40px] border border-white/60 shadow-xl"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}