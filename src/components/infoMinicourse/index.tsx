import { MdOutlineClose, MdOutlineMail } from "react-icons/md";
import { ListMinicourse } from "../../listMinicourse";
import { FaInstagram, FaItchIo, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { useMemo } from "react";

interface ModalProps {
    closeModal: () => void;
    id: number | null;
}

export function InfosMinicouse({ closeModal, id }: ModalProps) {
    const course = useMemo(() => ListMinicourse.find((item) => item.id === id), [id])

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
        <div className="bg-black/40 fixed inset-0 flex items-center justify-center z-[100]" onClick={closeModal}>
            <main
                role="dialog"
                aria-modal="true"
                className="max-h-[90vh] overflow-y-auto bg-white w-11/12 max-w-5xl h-auto flex flex-col rounded-2xl p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex justify-between items-start gap-4 border-b border-zinc-200 pb-4">
                    <div className="flex-1">
                        <p className="font-bold md:text-2xl text-xl text-blue-950 text-left leading-tight mb-2">{course.title}</p>
                        <span className="text-sm text-blue-800/80">{course.date} • {course.courseLocation}</span>
                        
                        {/* Tags no modal */}
                        {course.tags && course.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {course.tags.map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={closeModal}
                        className="rounded-full border border-transparent p-1 text-zinc-600 hover:text-red-500 hover:border-red-200 transition-colors"
                        aria-label="Fechar detalhes do minicurso"
                    >
                        <MdOutlineClose size={26} />
                    </button>
                </header>
                <section className="flex gap-8 lg:flex-row flex-col pt-6">
                    <div className="flex flex-2 flex-col text-left max-w-xl gap-4">
                        <p className="text-zinc-700 leading-relaxed">{course.description}</p>
                        <div>
                            <p className="font-semibold md:text-lg text-base text-blue-900">Pré-requisitos</p>
                            <span className="text-zinc-700 md:text-base text-sm leading-relaxed">{prerequisites}</span>
                        </div>
                        <a
                            onClick={closeModal}
                            href="#instructions"
                            className="inline-flex items-center justify-center gap-2 mt-4 bg-blue-600 px-6 py-2 rounded-full text-white font-semibold transition-all hover:scale-105"
                        >
                            Inscrever-se
                        </a>
                    </div>
                    <div className="flex flex-col gap-6 flex-1 justify-center">
                        {instructors.map((instructor, index) => (
                            <article key={instructor.name ?? index} className="flex gap-4 items-start">
                                {renderAvatar(instructor)}
                                <div className="flex-1">
                                    <p className="text-left font-medium text-blue-950">{instructor.name}</p>
                                    {instructor.description && (
                                        <p className="pb-2 text-left text-zinc-700 text-sm leading-relaxed">{instructor.description}</p>
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