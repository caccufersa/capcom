import tela1 from '../../assets/Tela1.png';
import tela2 from '../../assets/Tela2.png';
import tela3 from '../../assets/Tela3.png';
import tela4 from '../../assets/Tela4.png';
import tela5 from '../../assets/Tela5.png';
import tela6 from '../../assets/Tela6.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from 'react'; 

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
            href: "https://sigaa.ufersa.edu.br/sigaa/public/servicos_digitais/  ",
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
export function Instructions() {
    const [expandedImage, setExpandedImage] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);

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
        <section id='instructions' className="min-h-screen bg-blue-300/20 w-full flex flex-col items-center justify-center py-22 px-8">
            <h2 className="font-bold pb-4 text-blue-900 md:text-3xl text-2xl">Como me inscrevo?</h2>
            <div className="bg-gray-300/50 w-full max-w-7xl rounded-xl flex items-center justify-center pt-12 md:px-8 px-0 shadow-md">
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    modules={[Navigation, Pagination]}
                >
                    {steps.map((step) => (
                        <SwiperSlide key={step.id} className='md:px-18 px-12 pb-8'>
                            <div className="w-full max-w-6xl">
                                <span className='text-blue-600'>Passo {step.id}</span>
                                <p className='font-bold md:text-2xl text-xl pb-1'>{step.title}</p>
                                {step.link && (
                                    <a
                                        className='text-blue-800 underline'
                                        href={step.link.href}
                                        target='_blank'
                                    >{step.link.text}</a>
                                )}
                                <p className='pt-4 text-zinc-800'>{step.description}</p>
                                {step.image && (
                                    <div className="flex justify-center mt-6">
                                        <img
                                            src={step.image}
                                            alt={`Step ${step.id}`}
                                            className={`cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-all ${step.imgClass || 'w-full max-w-2xl'}`}
                                            onClick={() => step.image && setExpandedImage(step.image)}
                                        />
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
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