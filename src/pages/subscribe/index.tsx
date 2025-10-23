import tela1 from '../../assets/Tela1.png';
import tela2 from '../../assets/Tela2.png';
import tela3 from '../../assets/Tela3.png';
import tela4 from '../../assets/Tela4.png';
import tela5 from '../../assets/Tela5.png';
import tela6 from '../../assets/Tela6.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState, useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

interface Steps {
    id: number;
    title: string;
    description: React.ReactNode;
    link?: { href: string, text: string };
    image?: string;
    imgClass?: string;
}

const steps: Steps[] = [
    {
        id: 1,
        title: "Entre no link e na sua conta gov.br",
        description: (
            <>
                Entre no Portal de Serviços Digitais e clique em{" "}
                '<span className="font-bold italic">
                    Realizar Inscrição em Cursos e Eventos de Extensão
                </span>'
                . Em seguida, faça login na sua conta gov.br.
                <p className="pt-3 text-zinc-800 font-bold">
                    Realizar Inscrição em Cursos e Eventos de Extensão  Entrar com gov.br
                </p>
            </>
        ),
        link: {
            href: "https://sigaa.ufersa.edu.br/sigaa/public/servicos_digitais/",
            text: "Clique aqui",
        },
        image: tela1,
        imgClass: 'w-138'
    },
    {
        id: 2,
        title: "Se inscreva no evento",
        description: (
            <>
                Clique em {' '}
                '<span className="font-bold italic">
                    Inscrições abertas
                </span>'.
                <p className="pt-3 text-zinc-800 font-bold">
                    Inscrições abertas
                </p>
            </>
        ),
        image: tela2,
        imgClass: 'w-218'
    },
    {
        id: 3,
        title: "Escolha a CAPCOM",
        description: (
            <>
                Clique em {' '}
                '<span className="font-bold italic">
                    Inscrever-se
                </span>', no icone de pessoa.
                <p className="pt-3 text-zinc-800 font-bold">
                    Inscrever-se
                </p>
            </>
        ),
        image: tela3,
        imgClass: 'w-218'
    },
    {
        id: 4,
        title: "Faça sua inscrição no evento",
        description: (
            <>
                Desça a página e insira em {' '}
                '<span className="font-bold italic">
                    Intituição
                </span>' a instituição a qual está vinculada e clique em
                '<span className="font-bold italic">
                    Confirmar Inscrição
                </span>'.
                <p className="pt-3 text-zinc-800 font-bold">
                    Confirmar Inscrição
                </p>
            </>
        ),
        image: tela4,
        imgClass: 'w-188'
    },
    {
        id: 5,
        title: "Aguarde",
        description: (
            <>
                Espere sua inscrição ser confirmada pelos coordenadores do evento!
            </>
        ),
    },
    {
        id: 6,
        title: "Faça sua inscrição no minicurso",
        description: (
            <>
                Com a sua inscrição confirmada, volte a página inicial, vá para a tela de {' '}
                '<span className="font-bold italic">
                    Inscrições abertas
                </span>'. Em seguida, clique em {' '}
                '<span className="font-bold italic">
                    Visualizar as mini atividades
                </span>'.
                <p className="pt-3 text-zinc-800 font-bold">
                    Página inicial  Inscrições abertas  Visualizar as mini atividades
                </p>
            </>
        ),
        image: tela5,
        imgClass: 'w-228'
    },
    {
        id: 7,
        title: "Escolha seu minicurso",
        description: (
            <>
                Escolha seu minicurso e clique em{' '}
                '<span className="font-bold italic">
                    Inscrever-se
                </span>'.
                <p className="pt-3 text-zinc-800 font-bold">
                    Inscrever-se
                </p>
            </>
        ),
        image: tela6,
        imgClass: 'w-158'
    },
    {
        id: 8,
        title: "Faça sua inscrição no minicurso",
        description: (
            <>
                Desça a página e insira em {' '}
                '<span className="font-bold italic">
                    Intituição
                </span>' a instituição a qual está vinculada e clique em
                '<span className="font-bold italic">
                    Confirmar Inscrição
                </span>'.
                <p className="pt-3 text-zinc-800 font-bold">
                    Confirmar Inscrição
                </p>
            </>
        ),
        image: tela4,
        imgClass: 'w-158'
    },
]

//Para expandir as imagens
export function Subscribe() {
    const [expandedImage, setExpandedImage] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (!expandedImage) {
            setIsClosing(false);
        }
    }, [expandedImage]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setExpandedImage(null);
        }, 300);
    };

    return (
    <section id='subscribe' className="bg-white py-16 md:py-20 w-full flex flex-col items-center justify-center px-4 border-b border-slate-200">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 mb-3">
                        Como me inscrevo?
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base">
                        Siga o passo a passo para garantir sua vaga
                    </p>
                </div>

                {/* Swiper Container */}
                <div className="relative bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-12 shadow-sm">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        speed={300}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="subscribe-swiper"
                    >
                        {steps.map((step) => (
                            <SwiperSlide key={step.id} className='pb-16'>
                                <div className="w-full max-w-4xl mx-auto">
                                    <div className="inline-block bg-blue-100 text-blue-600 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3">
                                        Passo {step.id} de {steps.length}
                                    </div>
                                    <h3 className='font-semibold text-lg sm:text-xl md:text-2xl text-slate-900 mb-3'>{step.title}</h3>
                                    {step.link && (
                                        <a
                                            className='inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base underline underline-offset-2 mb-3'
                                            href={step.link.href}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                        >
                                            {step.link.text}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                    <p className='text-sm sm:text-base text-slate-600 leading-relaxed'>{step.description}</p>
                                    {step.image && (
                                        <div className="flex justify-center mt-6 sm:mt-8">
                                            <img
                                                src={step.image}
                                                alt={`Passo ${step.id}`}
                                                className="cursor-pointer rounded-xl shadow-md hover:shadow-xl transition-all max-w-full h-auto"
                                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                                                onClick={() => step.image && setExpandedImage(step.image)}
                                            />
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Botões de Navegação Customizados */}
                    <div
                        className="swiper-button-prev-custom group absolute top-[40%] sm:top-1/2 left-1 sm:left-4 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full cursor-pointer transition-all duration-300 shadow-md"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div
                        className="swiper-button-next-custom group absolute top-[40%] sm:top-1/2 right-1 sm:right-4 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full cursor-pointer transition-all duration-300 shadow-md"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {expandedImage && (
                <div
                    className={`fixed inset-0 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'} bg-black bg-opacity-90 flex items-center justify-center z-50 p-4`}
                    onClick={handleClose}
                >
                    <div className="relative max-w-full max-h-full" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
                            onClick={handleClose}
                        >
                            ×
                        </button>
                        <img
                            className={`max-w-full max-h-[85vh] object-contain rounded-lg shadow-xl ${isClosing ? 'animate-scale-out' : 'animate-scale-in'}`}
                            src={expandedImage}
                            alt="Imagem ampliada"
                        />
                    </div>
                </div>
            )}

            <style >{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
                
                @keyframes scaleIn {
                    from { 
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    to { 
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                
                @keyframes scaleOut {
                    from { 
                        transform: scale(1);
                        opacity: 1;
                    }
                    to { 
                        transform: scale(0.8);
                        opacity: 0;
                    }
                }
                
                .animate-fade-in {
                    animation: fadeIn 0.3s ease forwards;
                }
                
                .animate-fade-out {
                    animation: fadeOut 0.3s ease forwards;
                }
                
                .animate-scale-in {
                    animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
                
                .animate-scale-out {
                    animation: scaleOut 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
                }
            `}</style>
        </section>
    )
}