"use client";

import React, { type ReactNode, type ComponentType } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiUsers, FiCode } from "react-icons/fi";
import { PiChalkboardTeacher } from "react-icons/pi";
import imgNicolas from "../../assets/instrutores/nicolasAndre.jpeg";
import imgKatia from "../../assets/instrutores/katia-cilene.jpeg"
import imgFabio from "../../assets/instrutores/fabio-francisco.jpeg"
import imgMilton from "../../assets/instrutores/francisco-milton.jpeg"

const FloatingDataBackground = () => {
    const NUM_NODES = 30;
    const nodes = Array.from({ length: NUM_NODES }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${6 + Math.random() * 14}px`,
        translateZ: `${-100 - Math.random() * 400}px`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${15 + Math.random() * 15}s`,
        moveX: `${Math.random() > 0.5 ? '' : '-'}${Math.random() * 30}px`,
        moveY: `${Math.random() > 0.5 ? '' : '-'}${Math.random() * 30}px`,
    }));

    return (
        <div
            className="absolute inset-0 z-10 overflow-hidden bg-gradient-to-b from-white to-blue-50"
            style={{ perspective: '1000px' }}
        >
            <style>{`
                @keyframes float-node {
                    0% { transform: translate3d(0, 0, var(--start-z)) scale(0.8); opacity: 0; }
                    20%, 80% { opacity: 0.7; transform: translate3d(var(--move-x), var(--move-y), var(--start-z)) scale(1); }
                    100% { transform: translate3d(calc(var(--move-x) * 2), calc(var(--move-y) * 2), var(--start-z)) scale(0.8); opacity: 0; }
                }
                .data-node {
                    position: absolute; border-radius: 50%;
                    background-color: rgba(96, 165, 250, 0.7);
                    box-shadow: 0 0 15px 5px rgba(147, 197, 253, 0.5);
                    opacity: 0; will-change: transform, opacity;
                    animation-name: float-node; animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite; transform-style: preserve-3d;
                }
            `}</style>
            {nodes.map(node => (
                <div
                    key={node.id}
                    className="data-node"
                    style={{
                        top: node.top, left: node.left, width: node.size, height: node.size,
                        animationDelay: node.animationDelay, animationDuration: node.animationDuration,
                        ['--start-z' as any]: node.translateZ, ['--move-x' as any]: node.moveX, ['--move-y' as any]: node.moveY,
                    }}
                />
            ))}
        </div>
    );
};

type ScheduleItem = {
    icon: ComponentType<any>;
    time: string;
    title: string;
    description: string;
    theme: string;
    image?: string;
};

const scheduleDay1: ScheduleItem[] = [
    { icon: FiUsers, time: "14h", title: "Abertura oficial e Palestra: \"20 anos de Ciência da Computação na UFERSA\"", description: "Apresentação da trajetória do curso, principais marcos, desafios, conquistas e contribuição para a formação de profissionais na região.", theme: "course"},
    { icon: FiCode, time: "15h", title: "Mesa \"20 anos de Computação: memórias, experiências e transformações\"", description: "Participação de professores, servidores e egressos do curso.", theme: "course" },
    { icon: FiCode, time: "16h", title: "Palestra \"O Impacto da Inteligência Artificial no Mercado de Trabalho\"", description: "Apresentação das principais áreas de atuação e das transformações do mercado de trabalho por Nhícolas André, Senior Director of Web Engineering Fueled.", theme: "course", image: imgNicolas  },
    { icon: FiCode, time: "16h40", title: "Momento de encerramento", description: "Momento de confraternização para os estudantes, professores, servidores e egressos.", theme: "course" }
];

const scheduleDay2: ScheduleItem[] = [
    
    { icon: FiUsers, time: "14h", title: "Palestra: \"Inovação: Da Pesquisa Científica à Startup\"", description: "Palestra com o Prof. Dr. Fabio Francisco da Costa Fontes sobre inovações na pesquisa científica à Startup.", theme: "course", image: imgFabio },
    { icon: FiCode, time: "15h", title: "Palestra: \"Desafios Digitais na Educação na Era da Inteligência Artificial\"", description: "Palestra com o Prof. Dr. Francisco Milton Mendes Neto sobre os desafios digitais enfrentados na educação na era da inteligência artificial.", theme: "course", image: imgMilton },
    { icon: FiCode, time: "16h", title: "Palestra: \"Educação Digital da Educação Básica e as oportunidades para os profissionais da Ciência da Computação\"", description: "Palestra com a Profª. Drª. Kátia Cilene da Silva Moura sobre educação digital e oportunidades para o profissional de Ciência da Computação.", theme: "course", image: imgKatia },
];

const scheduleDay3: ScheduleItem[] = [
    { icon: PiChalkboardTeacher, time: "13h", title: "Maratona de programação", description: "Ínicio da competição maratona de programação.", theme: "marathon" },
    { icon: PiChalkboardTeacher, time: "17h", title: "Premiação dos Ganhadores", description: "Premiação dos ganhadores da maratona e momento de encerramento", theme: "marathon" }
];

const days = [
    { day: "Dia 1 - auditório PROEC", date: "09 de Novembro - Computação: 20 anos de história e futuro", items: scheduleDay1 },
    { day: "Dia 2 - auditório PROEC", date: "10 de Novembro - Tecnologias Emergentes e Inovação", items: scheduleDay2 },
    { day: "Dia 3 - lab 7 LCC", date: "11 de Novembro - Maratona de Programação", items: scheduleDay3 },
];

type CardProps = { time: string; title: string; description: string, side?: 'left' | 'right' };
type EventCardProps = CardProps & { icon?: ComponentType<any>; image?: string;};

function CourseEventCard({ time, title, description, side, image }: EventCardProps) {
    const headerClass = side === 'left'
        ? "flex justify-between items-end mb-2 md:flex-row-reverse gap-2"
        : "flex justify-between items-end mb-2 gap-2";

    const timeMargin = side === 'left' ? "md:mr-4 ml-4 md:ml-0" : "ml-4";

    return (
        <div className="rounded-lg border-2 border-[#3D568F] bg-white p-5 shadow-lg relative
                        transition-all duration-300 ease-out
                        hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-0.5 hover:scale-[1.01]">
            <div className="relative z-10">
                <div className={headerClass}>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">{title}</h3>
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            className="w-10 h-10 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#3D568F] shadow-md flex-shrink-0"
                        />
                    )}
                    
                </div>

                <div className={headerClass}>
                    <p className="text-slate-600 text-sm md:text-base mt-3">{description}</p>
                    <time className={`block text-sm font-mono font-bold text-[#0E2251] bg-white px-3 py-1 border border-blue-200 rounded flex-shrink-0 ${timeMargin}`}>
                        {time}
                    </time>
                </div>
            </div>
        </div>
    );
}

function MarathonEventCard({ time, title, description }: CardProps) {
    return (
        <div
            className="bg-gray-200 rounded-none border-2 border-l-gray-400 border-t-gray-400 border-r-gray-100 border-b-gray-100 p-5 md:p-6 font-sans
                       transition-all duration-300 ease-out
                       hover:shadow-md"
        >
            <time className="block text-sm font-bold text-[#0E2251] mb-1 font-mono">
                &gt; {time}
            </time>
            <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-mono uppercase">
                {"// "}{title}
            </h3>
            <p className="text-slate-800 text-sm md:text-base font-medium">{description}</p>
        </div>
    );
}

function TalkEventCard({ time, title, description }: EventCardProps) {
    return (
        <div
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl
                       transition-all duration-300 ease-out
                       hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-0.5 hover:scale-[1.01]"
        >
            <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-black text-slate-900">{title}</h3>
                <time className="block text-sm font-mono font-bold text-[#3D568F] text-right -mt-5">
                    {time}
                </time>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{description}</p>
        </div>
    );
}

type TimelineItemProps = { item: ScheduleItem; index: number };
function TimelineItem({ item, index }: TimelineItemProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // index global: o lado continua alternando entre os dias
    const side = index % 2 === 0 ? 'right' : 'left';
    const { time, title, description, theme, image } = item;

    const cardLayout = side === 'left'
        ? "md:col-start-1 md:text-right"
        : "md:col-start-2 md:text-left";

    let CardComponent;
    switch (theme) {
        case "marathon": CardComponent = <MarathonEventCard time={time} title={title} description={description} side={side} />; break;
        case "talk": CardComponent = <TalkEventCard time={time} title={title} description={description} side={side} />; break;
        default: CardComponent = <CourseEventCard time={time} title={title} description={description} side={side} image={image} />;
    }

    const connectorClasses = side === 'left'
        ? 'md:left-full md:-ml-px'
        : 'md:right-full md:-mr-px';

    return (
        <div ref={ref} className="relative grid grid-cols-[1fr] md:grid-cols-2 items-start md:gap-x-8 group">
            <div className={`col-start-1 ${cardLayout} relative overflow-hidden`}>
                <div
                    className={`
                        absolute inset-0 z-10 transition-all duration-700 ease-out pointer-events-none
                        before:absolute before:inset-0 before:bg-rising-snow-pattern before:animate-rise-fade-out
                        ${inView ? 'opacity-0' : 'opacity-100'}
                    `}
                    style={{ ['--snow-color' as any]: 'rgba(255, 255, 255, 0.8)' } as React.CSSProperties}
                ></div>
                <div
                    className={`relative z-20 transition-all duration-500 ease-out delay-200
                                ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                    {CardComponent}
                </div>
            </div>
            <div
                className={`
                    hidden md:block absolute top-6 h-px w-8 bg-slate-300
                    transition-all duration-500 ease-out delay-300
                    ${connectorClasses}
                    ${inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                    ${side === 'left' ? 'origin-right' : 'origin-left'}
                `}
                style={{ top: '1.5rem' }}
            ></div>
        </div>
    );
}

type TimelineContainerProps = { children?: ReactNode };
function TimelineContainer({ children }: TimelineContainerProps) {
    return (
        <div className="relative flex flex-col space-y-8">
            <div className="absolute top-0 bottom-0 w-0.5 bg-slate-300
                            left-4 -translate-x-1/2
                            md:left-1/2 md:-translate-x-1/2">
            </div>
            {children}
        </div>
    );
}

type DayDividerProps = { day: string; date: string };
function DayDivider({ day, date }: DayDividerProps) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    return (
        <div
            ref={ref}
            className={`flex items-center justify-center my-10 md:my-12 transition-all duration-500 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="h-0.5 bg-slate-200 flex-grow"></div>
            <div className="mx-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900">{date}</h3>
                <p className="text-sm font-semibold text-[#3D568F] uppercase tracking-widest">{day}</p>
            </div>
            <div className="h-0.5 bg-slate-200 flex-grow"></div>
        </div>
    );
}

export function Schedule() {
    const { ref: headerRef, inView: headerInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    // offset de cada dia = quantidade de itens dos dias anteriores
    let offset = 0;
    const daysWithOffset = days.map((d) => {
        const current = { ...d, offset };
        offset += d.items.length;
        return current;
    });

    return (
        <section
            id="cronograma"
            className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-white to-blue-50"
        >
            <FloatingDataBackground />
            <style>{`
                @keyframes rise-fade-out {
                    0% { background-position: center bottom; opacity: 1; }
                    100% { background-position: center top; opacity: 0; }
                }
                .bg-rising-snow-pattern {
                    background-image:
                        radial-gradient(circle at 10% 90%, var(--snow-color) 2px, transparent 2px),
                        radial-gradient(circle at 30% 70%, var(--snow-color) 3px, transparent 3px),
                        radial-gradient(circle at 50% 85%, var(--snow-color) 2px, transparent 2px),
                        radial-gradient(circle at 70% 60%, var(--snow-color) 4px, transparent 4px),
                        radial-gradient(circle at 90% 75%, var(--snow-color) 3px, transparent 3px),
                        radial-gradient(circle at 20% 110%, var(--snow-color) 5px, transparent 5px),
                        radial-gradient(circle at 60% 120%, var(--snow-color) 4px, transparent 4px),
                        radial-gradient(circle at 85% 105%, var(--snow-color) 6px, transparent 6px);
                    background-size: 50px 100px;
                    background-repeat: repeat;
                }
                .animate-rise-fade-out {
                    animation: rise-fade-out 0.7s ease-out forwards;
                }
            `}</style>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Cabeçalho (usa headerRef e headerInView) */}
                <div
                    ref={headerRef}
                    className={`text-center mb-16 transition-opacity duration-700 ease-out ${headerInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <h2
                        className="font-['Poppins',_sans-serif] text-5xl sm:text-6xl font-black text-slate-900
                                   leading-tight drop-shadow-sm mb-4"
                    >
                        CRONOGRAMA{" "}
                        <span className="block text-[#3D568F] font-medium text-2xl sm:text-3xl -mt-1 sm:-mt-2">
                            DO EVENTO
                        </span>
                    </h2>

                    <p className="font-sans text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Uma jornada de aprendizado e competição em cinco dias intensos.
                    </p>
                </div>

                {/* Dias */}
                {daysWithOffset.map(({ day, date, items, offset }) => (
                    <div key={day} className="mb-16">
                        <DayDivider day={day} date={date} />
                        <TimelineContainer>
                            {items.map((item, index) => (
                                <TimelineItem
                                    key={`${item.title}-${day}-${index}`}
                                    item={item}
                                    index={offset + index}
                                />
                            ))}
                        </TimelineContainer>
                    </div>
                ))}
            </div>
        </section>
    );
}

export const Infos = Schedule;
