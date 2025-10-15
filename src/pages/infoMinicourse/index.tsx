import { MdOutlineClose, MdOutlineMail } from "react-icons/md";
import { ListMinicourse } from "../../listMinicourse";
import { FaInstagram, FaItchIo, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { useMemo, useState } from "react";
import MetallicPaint from "../../components/metalic";

interface ModalProps {
    closeModal: () => void;
    id: number | null;
}

export function InfosMinicouse({ closeModal, id }: ModalProps) {
    const course = useMemo(() => ListMinicourse.find((item) => item.id === id), [id])
    const [scrolled, setScrolled] = useState(false)
    const metallicTexture = useMemo(() => {
        if (typeof window === "undefined") {
            return null
        }

        const canvas = document.createElement("canvas")
        const size = 512
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext("2d")

        if (!ctx) {
            return null
        }

        const linear = ctx.createLinearGradient(0, 0, size, size)
        linear.addColorStop(0, "#f8fafc")
        linear.addColorStop(0.35, "#e2e8f0")
        linear.addColorStop(0.7, "#cbd5e1")
        linear.addColorStop(1, "#f1f5f9")
        ctx.fillStyle = linear
        ctx.fillRect(0, 0, size, size)

        const radial = ctx.createRadialGradient(size * 0.25, size * 0.25, size * 0.1, size * 0.6, size * 0.6, size * 0.7)
        radial.addColorStop(0, "rgba(255,255,255,0.9)")
        radial.addColorStop(0.45, "rgba(226,232,240,0.4)")
        radial.addColorStop(1, "rgba(148,163,184,0.15)")
        ctx.fillStyle = radial
        ctx.fillRect(0, 0, size, size)

        return ctx.getImageData(0, 0, size, size)
    }, [])

    const metallicParams = useMemo(
        () => ({
            patternScale: 2.75,
            refraction: 0.02,
            edge: 0.85,
            patternBlur: 0.004,
            liquid: 0.06,
            speed: 0.42
        }),
        []
    )

    if (!course) {
        return null
    }

    type InstructorInfo = NonNullable<typeof course.instructor1>
    const instructors = [course.instructor1, course.instructor2].filter((instructor): instructor is InstructorInfo => Boolean(instructor))
    const prerequisites = course.prerequisites ?? "Sem pré-requisitos informados."

    function renderSocialLinks(instructor: InstructorInfo) {
        return (
            <span className="flex gap-2 items-center">
                {instructor.insta && (
                    <a href={instructor.insta} target="_blank" rel="noreferrer" aria-label="Instagram do ministrante">
                        <FaInstagram size={22} className="text-blue-800 hover:text-blue-600 transition-colors" />
                    </a>
                )}
                {instructor.github && (
                    <a href={instructor.github} target="_blank" rel="noreferrer" aria-label="GitHub do ministrante">
                        <IoLogoGithub size={22} className="text-blue-800 hover:text-blue-600 transition-colors" />
                    </a>
                )}
                {instructor.email && (
                    <a href={`mailto:${instructor.email}`} aria-label="Enviar e-mail para o ministrante">
                        <MdOutlineMail size={22} className="text-blue-800 hover:text-blue-600 transition-colors" />
                    </a>
                )}
                {instructor.itchio && (
                    <a href={instructor.itchio} target="_blank" rel="noreferrer" aria-label="Itch.io do ministrante">
                        <FaItchIo size={22} className="text-blue-800 hover:text-blue-600 transition-colors" />
                    </a>
                )}
                {instructor.linkedin && (
                    <a href={instructor.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn do ministrante">
                        <FaLinkedin size={22} className="text-blue-800 hover:text-blue-600 transition-colors" />
                    </a>
                )}
            </span>
        )
    }

    function renderAvatar(instructor: InstructorInfo) {
        if (instructor.img) {
            return <img className="rounded-full w-24 h-24 object-cover border border-blue-100" src={instructor.img} alt={`Foto de ${instructor.name}`} />
        }

        const initials = instructor.name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase()

        return (
            <div className="rounded-full w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold text-xl">
                {initials}
            </div>
        )
    }

    return (
        <div className="bg-black/50 backdrop-blur-md fixed inset-0 flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300" onClick={closeModal}>
            <main
                role="dialog"
                aria-modal="true"
                className="max-h-[92vh] overflow-y-auto bg-white w-full max-w-3xl h-auto flex flex-col rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 duration-400 ease-out"
                onClick={(e) => e.stopPropagation()}
                onScroll={(e) => {
                    const target = e.target as HTMLElement
                    const next = target.scrollTop > 20
                    setScrolled((prev) => (prev === next ? prev : next))
                }}
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#cbd5e1 #f8fafc',
                    scrollBehavior: 'smooth'
                }}
            >
                {/* Header com animação metálica real */}
                <header className="sticky top-0 z-10">
                    <div
                        className={`relative overflow-hidden border ${
                            scrolled ? "border-slate-200/70 shadow-xl shadow-slate-900/5" : "border-slate-100/60 shadow-lg shadow-slate-900/7"
                        } transition-all duration-500 rounded-t-2xl`}
                    >
                        {/* Metallic animated canvas */}
                        {metallicTexture && (
                            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-80"}`}>
                                <MetallicPaint imageData={metallicTexture} params={metallicParams} />
                            </div>
                        )}
                        {/* Frosted glass overlay for readability */}
                        <div
                            className={`absolute inset-0 bg-white/82 backdrop-blur-xl transition-all duration-500 ${
                                scrolled ? "bg-white/88" : "bg-white/76"
                            }`}
                        ></div>
                        {/* Accent line */}
                        <div
                            className="absolute top-0 left-0 right-0 h-[2px]"
                            style={{
                                background:
                                    "linear-gradient(90deg, transparent 0%, rgba(148,163,184,0.7) 18%, rgba(226,232,240,0.95) 50%, rgba(148,163,184,0.7) 82%, transparent 100%)"
                            }}
                        ></div>

                        <div className="relative flex items-start justify-between gap-5 px-5 pt-5 pb-4">
                            <div className="flex-1 max-w-xl">
                                <h2
                                    className={`font-semibold text-slate-900 text-left leading-tight tracking-tight transition-transform duration-500 ${
                                        scrolled ? "translate-y-[-2px]" : "translate-y-0"
                                    }`}
                                    style={{ fontSize: scrolled ? "1.1rem" : "1.4rem" }}
                                >
                                    {course.title}
                                </h2>
                                <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500/80">
                                    {course.date} • {course.courseLocation}
                                </span>

                                {course.tags && course.tags.length > 0 && (
                                    <div
                                        className={`flex flex-wrap gap-1.5 mt-2 transition-all duration-500 ${
                                            scrolled ? "opacity-75 blur-[0.2px]" : "opacity-100"
                                        }`}
                                    >
                                        {course.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="group relative inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600"
                                            >
                                                <span className="pointer-events-none absolute inset-[1px] rounded-[4px] bg-white/35"></span>
                                                <span className="pointer-events-none absolute inset-0 rounded-[5px] border border-white/30 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.18)] bg-gradient-to-br from-white/60 via-white/20 to-slate-100/30"></span>
                                                <span className="pointer-events-none absolute inset-0 rounded-[5px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"></span>
                                                <span className="relative z-10">{tag}</span>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={closeModal}
                                className="relative group rounded-full p-2 text-slate-400 transition-all duration-300 hover:text-slate-700"
                                aria-label="Fechar detalhes do minicurso"
                            >
                                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/10 to-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                                <span className="pointer-events-none absolute inset-0 rounded-full border border-white/40 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.25)]"></span>
                                <span className="relative">
                                    <MdOutlineClose size={20} />
                                </span>
                            </button>
                        </div>
                    </div>
                </header>
                
                {/* Content com animações suaves */}
                <section className="flex gap-6 lg:flex-row flex-col px-5 py-5">
                    <div className="flex flex-col text-left flex-1 gap-5">
                        <p className="text-slate-700 leading-relaxed text-[15px]">{course.description}</p>
                        
                        {/* Pré-requisitos com estilo metálico */}
                        <div className="relative group bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200/60 rounded-xl p-4 overflow-hidden hover:border-slate-300 transition-all duration-300 hover:shadow-md">
                            {/* Metallic shine */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                            <p className="relative font-semibold text-[15px] text-slate-900 mb-2 flex items-center gap-2">
                                <span className="w-1 h-4 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></span>
                                Pré-requisitos
                            </p>
                            <span className="relative text-slate-600 text-[13px] leading-relaxed">{prerequisites}</span>
                        </div>
                        
                        {/* CTA Button com efeito metálico */}
                        <a
                            onClick={closeModal}
                            href="#instructions"
                            className="group relative inline-flex items-center justify-center gap-2 mt-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Metallic overlay */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                            <span className="relative z-10">Inscrever-se</span>
                        </a>
                    </div>
                    
                    {/* Instructors com animações */}
                    <div className="flex flex-col gap-4 lg:w-80">
                        {instructors.map((instructor, index) => (
                            <article 
                                key={instructor.name ?? index} 
                                className="group relative flex gap-3 items-start p-3.5 bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200/60 rounded-xl hover:border-slate-300 transition-all duration-300 hover:shadow-lg overflow-hidden"
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Metallic shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                
                                {renderAvatar(instructor)}
                                <div className="flex-1 relative z-10">
                                    <p className="text-left font-semibold text-[15px] text-slate-900 mb-0.5">{instructor.name}</p>
                                    {instructor.description && (
                                        <p className="pb-1.5 text-left text-slate-600 text-[12px] leading-relaxed">{instructor.description}</p>
                                    )}
                                    {renderSocialLinks(instructor)}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}