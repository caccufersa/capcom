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
        <section id="minicourse" className="relative bg-white py-16 md:py-20 pb-24 md:pb-20 flex items-center justify-center flex-col text-center w-full px-4 border-b border-slate-200 overflow-hidden">
            {/* Background decorativo sutil */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl"></div>
            </div>
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                        Minicursos em Destaque
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                        Escolha entre 10 minicursos ministrados por especialistas e aprimore suas habilidades
                    </p>
                </div>

                {/* Filter Buttons - Design mais elegante */}
                <div className="inline-flex items-center justify-center gap-2 mb-8 md:mb-12 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                    {FILTERS.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => setFilter(value)}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all
                            ${filter === value 
                                ? 'bg-slate-900 text-white shadow-md' 
                                : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
                        <SwiperSlide key={item.id} className="pb-12 px-1">
                            <article 
                                className="group relative bg-white rounded-2xl h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer border border-slate-200/60 hover:border-blue-300" 
                                style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
                                onClick={() => handleOpenModal(item.id)}
                            >
                                {/* Card Header Minimalista */}
                                <div className="relative bg-gradient-to-b from-slate-50/50 to-white px-5 sm:px-6 pt-5 sm:pt-6 pb-4">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="font-medium">{item.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-slate-500">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="truncate max-w-[80px]">{item.courseLocation}</span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="font-semibold text-base sm:text-lg text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                    
                                    {/* Tags Minimalistas */}
                                    {item.tags && item.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.tags.slice(0, 3).map((tag, index) => (
                                                <span 
                                                    key={index}
                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/50"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {item.tags.length > 3 && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-medium text-slate-500">
                                                    +{item.tags.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                                
                                {/* Card Body */}
                                <div className="px-5 sm:px-6 py-4">
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">{item.description}</p>
                                    
                                    {/* Instructor Info com Foto */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            {item.instructor1.img ? (
                                                <img 
                                                    src={item.instructor1.img} 
                                                    alt={item.instructor1.name}
                                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                                                />
                                            ) : (
                                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-white shadow-sm">
                                                    <span className="text-xs font-semibold text-blue-700">
                                                        {item.instructor1.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex flex-col">
                                                <span className="text-xs text-slate-500 font-medium">Ministrante</span>
                                                <span className="text-xs sm:text-sm text-slate-900 font-semibold leading-tight">{item.instructor1.name.split(' ').slice(0, 2).join(' ')}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors group-hover:gap-2">
                                            Ver mais
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
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