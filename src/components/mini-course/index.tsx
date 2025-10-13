import { ListMinicourse } from "../../listMinicourse";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useMemo, useState } from "react";
import { InfosMinicouse } from "../infoMinicourse";

const FILTERS = [
    { label: "Quinta", value: "23/10" },
    { label: "Sexta", value: "24/10" },
    { label: "Todos", value: "Todos" },
];

export function Minicourse() {
    const [filter, setFilter] = useState<string>('Todos')
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

    const filteredCourses = useMemo(() => {
        if (filter === 'Todos') return ListMinicourse
        return ListMinicourse.filter((item) => item.date.includes(filter))
    }, [filter])

    function handleOpenModal(courseId: number) {
        setSelectedCourseId(courseId)
        setModalOpen(true)
    }

    function handleCloseModal() {
        setModalOpen(false)
        setSelectedCourseId(null)
    }

    return (
        <section id="minicourse" className="bg-white py-16 md:py-20 pb-24 md:pb-20 flex items-center justify-center flex-col text-center w-full px-4 border-b border-slate-200">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 mb-3">
                        Minicursos em Destaque
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Descubra alguns dos nossos minicursos mais populares e comece sua jornada de aprendizado
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-12 bg-slate-100 p-1.5 rounded-xl">
                    {FILTERS.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => setFilter(value)}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all border
                            ${filter === value 
                                ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                                : 'bg-transparent text-slate-700 border-transparent hover:bg-white'
                            }`}
                            aria-pressed={filter === value}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative w-full max-w-7xl py-6 pb-16 md:pb-6 px-2 sm:px-4 lg:px-16">
                {filteredCourses.length === 0 ? (
                    <p className="text-slate-600 text-sm sm:text-base">Nenhum minicurso encontrado para o dia selecionado.</p>
                ) : (
                <>
                    {/* Gradient indicators for more content */}
                    <div className="absolute left-0 top-0 bottom-16 md:bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden lg:block" />
                    <div className="absolute right-0 top-0 bottom-16 md:bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden lg:block" />
                    
                    <Swiper
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true
                        }}
                        navigation
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1180: { slidesPerView: 3 }
                        }}
                        className="minicourse-swiper"
                    >
                    {filteredCourses.map((item) => (
                        <SwiperSlide key={item.id} className="pb-12">
                            <article className="group border border-slate-200 bg-white rounded-xl h-full p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 text-left transition-all duration-200 shadow-sm hover:shadow-md hover:border-slate-300">
                                <header className="flex items-center justify-between text-xs sm:text-sm text-slate-600">
                                    <span className="font-medium">{item.date}</span>
                                    <span>{item.courseLocation}</span>
                                </header>
                                <h3 className="font-semibold text-base sm:text-lg md:text-xl text-slate-900 leading-snug">{item.title}</h3>
                                
                                {/* Tags */}
                                {item.tags && item.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {item.tags.map((tag, index) => (
                                            <span 
                                                key={index}
                                                className="inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200/50 transition-colors hover:border-blue-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                
                                <p className="text-slate-600 text-xs sm:text-sm md:text-base line-clamp-3">{item.description}</p>
                                <footer className="mt-auto flex items-center justify-between pt-2 border-t border-slate-100">
                                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{item.instructor1.name}</span>
                                    <button
                                        onClick={() => handleOpenModal(item.id)}
                                        className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors px-3 py-1.5 hover:bg-blue-50 rounded-lg"
                                        type="button"
                                    >
                                        Ver detalhes →
                                    </button>
                                </footer>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </>
                )}
            </div>
            {modalOpen && (
                <InfosMinicouse id={selectedCourseId} closeModal={handleCloseModal} />
            )}
        </section>
    )
}