"use client";

import React, { type ReactNode, type ComponentType } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiUsers, FiCode } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiChalkboardTeacher, PiSpeakerSimpleHighLight } from "react-icons/pi";

// --- COMPONENTE DE BACKGROUND "FLOATING DATA NODES" ---
const FloatingDataBackground = () => {
    // ... (código do FloatingDataBackground - sem alterações) ...
    const NUM_NODES = 30;
    const nodes = Array.from({ length: NUM_NODES }).map((_, i) => ({ /* ... node data ... */
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
        <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-white to-blue-50"
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
// --- FIM DO COMPONENTE DE BACKGROUND ---


// --- 1. DADOS DO CRONOGRAMA ---
const scheduleDay1 = [
    { icon: PiChalkboardTeacher, time: "8h às 12h", title: "Minicursos", description: "Aprimore suas habilidades técnicas com nossos minicursos práticos.", theme: "course" },
    { icon: FiUsers, time: "13h às 13h45", title: "Credenciamento e Aquecimento", description: "Registro dos participantes e preparação para a maratona.", theme: "registration" },
    { icon: FiCode, time: "14h às 17h", title: "Maratona de Programação", description: "Desafie seus limites em nossa competição de programação em equipe.", theme: "marathon" },
    // Premiação removida
];

const scheduleDay2 = [
    { icon: PiSpeakerSimpleHighLight, time: "8h às 9h30", title: "Palestra SBC", description: "Uma visão sobre o futuro da computação com a Sociedade Brasileira de Computação.", theme: "talk" },
    { icon: IoGameControllerOutline, time: "9h30 às 12h", title: "GameJam", description: "Desafie-se a criar um jogo do zero em equipe! O tema surpresa será revelado na Segunda-feira (20/10). Vocês terão até a Sexta-feira para desenvolver o jogo, com avaliação final e a premiação ocorrendo neste bloco.", theme: "gamejam" },
    { icon: PiChalkboardTeacher, time: "14h às 18h", title: "Minicursos", description: "Mais uma rodada de minicursos para fechar o evento com chave de ouro.", theme: "course" }
];

// --- 2. COMPONENTES DE CARD PERSONALIZADOS (HOVERS REFINADOS) ---

// Tipos base
type CardProps = { time: string; title: string; description: string }
type EventCardProps = CardProps & { icon?: ComponentType<any> }

/** Card 1: Minicursos ("Blueprint") - Hover Refinado */
function CourseEventCard({ time, title, description }: EventCardProps) {
    const blueprintStyle = { /* ... */ };
     return (
        <div
            className="rounded-lg border-2 border-blue-600 bg-white p-5 shadow-lg relative
                       transition-all duration-300 ease-out // Transição suave
                       hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-0.5 hover:scale-[1.01]" // Efeitos de hover
        >
            <div className="absolute inset-0 opacity-50" style={blueprintStyle}></div>
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">{title}</h3>
                    <time className="block text-sm font-mono font-bold text-blue-700 bg-white px-3 py-1 border border-blue-200 rounded flex-shrink-0 ml-4">
                        {time}
                    </time>
                </div>
                <p className="text-slate-600 text-sm md:text-base mt-3">{description}</p>
            </div>
        </div>
    );
}

/** Card 2: Credenciamento ("Clipboard") - Hover Refinado */
function RegistrationEventCard({ time, title, description }: EventCardProps) {
    return (
        <div className="rounded-lg bg-gray-200 p-2 shadow-lg relative
                        transition-all duration-300 ease-out // Transição suave
                        hover:shadow-xl hover:shadow-slate-500/20 hover:-translate-y-0.5 hover:scale-[1.01]" // Efeitos de hover
        >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-700 border-2 border-slate-800 rounded-t-md">
                <div className="w-4 h-1.5 bg-slate-500 rounded-full mx-auto mt-1.5"></div>
            </div>
            <div className="bg-white rounded-sm p-4 pt-8 shadow-inner text-center">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm md:text-base mb-3">{description}</p>
                <time className="block text-sm font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 border border-slate-200 rounded w-fit mx-auto">
                    {time}
                </time>
            </div>
        </div>
    );
}

/** Card 3: Maratona ("Retrô 90s") - Hover Mantido */
function MarathonEventCard({ time, title, description }: CardProps) {
     return (
        <div className="bg-gray-200 rounded-none border-2 border-l-gray-400 border-t-gray-400 border-r-gray-100 border-b-gray-100 p-5 md:p-6 font-sans
                        transition-all duration-300 ease-out // Transição suave
                        hover:shadow-md" // Hover específico mantido
        >
            <time className="block text-sm font-bold text-blue-700 mb-1 font-mono">
                &gt; {time}
            </time>
            <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-mono uppercase">
                // {title}
            </h3>
            <p className="text-slate-800 text-sm md:text-base font-medium">{description}</p>
        </div>
    );
}

// Card 4: Premiação REMOVIDO

/** Card 5: Palestra ("Keynote Premium") - Hover Refinado */
function TalkEventCard({ time, title, description }: EventCardProps) {
     return (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl
                        transition-all duration-300 ease-out // Transição suave
                        hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-0.5 hover:scale-[1.01]" // Efeitos de hover
        >
             <div className="mb-4">
                 <h3 className="text-xl md:text-2xl font-black text-slate-900">{title}</h3>
                 <time className="block text-sm font-mono font-bold text-blue-600 text-right -mt-5">
                     {time}
                 </time>
             </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{description}</p>
        </div>
    );
}

/** Card 6: GameJam ("Chunky / Arcade") - Hover Mantido */
function GameJamEventCard({ time, title, description }: CardProps) {
     return (
        <div
            className="bg-white p-5 md:p-6 rounded-xl border-2 border-slate-900 text-center
                       transition-all duration-300 ease-out // Transição suave
                       hover:-translate-y-0.5 hover:-translate-x-0.5" // Hover específico mantido
            style={{ boxShadow: '6px 6px 0px rgba(37, 99, 235, 0.3)', fontFamily: 'sans-serif' }}
        >
            <time className="block text-sm font-bold text-blue-600 mb-1">{time}</time>
            <h3
                className="text-xl md:text-2xl font-black text-blue-600 mb-2 uppercase"
                style={{ fontFamily: '"Bungee", cursive', letterSpacing: '0.05em', textShadow: '2px 2px 0px #FFFFFF, 4px 4px 0px rgba(37, 99, 235, 0.2)' }}
            >{title}</h3>
            <p className="text-slate-700 text-sm md:text-base font-medium">{description}</p>
        </div>
    );
}

// --- 3. ROTEADOR DE CARDS E TIMELINE ---

/** Componente Roteador (SEM ÍCONES CENTRAIS - COM ANIMAÇÃO DE SCROLL) */
type TimelineItemProps = { item: { icon: ComponentType<any>; time: string; title: string; description: string; theme: string }; index: number }
function TimelineItem({ item, index }: TimelineItemProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const side = index % 2 === 0 ? 'right' : 'left';
    // const { icon: IconComponent, time, title, description, theme } = item; // IconComponent não é mais necessário aqui
    const { time, title, description, theme } = item;


    const cardLayout = side === 'left'
        ? "md:col-start-1 md:text-right"
        : "md:col-start-2 md:text-left";

    let CardComponent;
    switch(theme) {
        case "marathon":    CardComponent = <MarathonEventCard time={time} title={title} description={description} />; break;
        case "gamejam":     CardComponent = <GameJamEventCard time={time} title={title} description={description} />; break;
        // case "aviation_award": CardComponent = <AviationAwardEventCard time={time} title={title} description={description} icon={IconComponent} />; break; // REMOVIDO
        case "registration":CardComponent = <RegistrationEventCard time={time} title={title} description={description} />; break;
        case "talk":        CardComponent = <TalkEventCard time={time} title={title} description={description} />; break;
        case "course":      CardComponent = <CourseEventCard time={time} title={title} description={description} />; break;
        default:            CardComponent = <CourseEventCard time={time} title={title} description={description} />;
    }

    const connectorClasses = side === 'left'
        ? 'md:left-full md:-ml-px'
        : 'md:right-full md:-mr-px';

    return (
        <div ref={ref} className={`relative grid grid-cols-[1fr] md:grid-cols-2 items-start md:gap-x-8 group`}>
            <div className={`col-start-1 ${cardLayout} relative overflow-hidden`} >
                <div
                    className={`
                        absolute inset-0 z-10 transition-all duration-700 ease-out pointer-events-none
                        before:absolute before:inset-0 before:bg-rising-snow-pattern before:animate-rise-fade-out
                        ${inView ? 'opacity-0' : 'opacity-100'}
                    `}
                    style={
                        { ['--snow-color' as any]: 'rgba(255, 255, 255, 0.8)' } as React.CSSProperties
                    }
                ></div>
                <div className={`relative z-20 transition-all duration-500 ease-out delay-200
                                 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                 >
                    {CardComponent}
                 </div>
            </div>
             <div className={`
                    hidden md:block absolute top-6 h-px w-8 bg-slate-300
                    transition-all duration-500 ease-out delay-300
                    ${connectorClasses}
                    ${inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                    ${side === 'left' ? 'origin-right' : 'origin-left'}
                `}
                style={{top: '1.5rem'}}
             ></div>
        </div>
    );
}

/** Container da Linha do Tempo */
type TimelineContainerProps = { children?: ReactNode }
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

/** Divisor de Dias */
type DayDividerProps = { day: string; date: string }
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
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">{day}</p>
            </div>
            <div className="h-0.5 bg-slate-200 flex-grow"></div>
        </div>
    );
}

// --- 4. COMPONENTE PRINCIPAL DO CRONOGRAMA ---

export function Schedule() {
    const { ref: headerRef, inView: headerInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        // Fundo gradiente ESTÁTICO
        <section id="cronograma" className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-white to-blue-50">

             {/* Background Animado */}
             <FloatingDataBackground />

             {/* INÍCIO: CSS para as Animações dos CARDS */}
             <style>{`
                 /* Animação Scanline (Credenciamento) */
                 @keyframes scanline {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                 }
                 .animate-scanline {
                     animation: scanline 1.5s linear infinite;
                 }

                 /* ANIMAÇÃO: Rising Snow / Cloud Reveal */
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
            {/* FIM: CSS para Animações dos CARDS */}

            <div className="container mx-auto max-w-4xl relative z-10">

                <div
                    ref={headerRef}
                    className={`text-center mb-16 transition-opacity duration-700 ease-out ${headerInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <h2
                        className="font-['Poppins',_sans-serif] text-5xl sm:text-6xl font-black text-slate-900
                                   leading-tight drop-shadow-sm mb-4"
                    >
                        CRONOGRAMA <span className="block text-blue-600 font-medium text-2xl sm:text-3xl -mt-1 sm:-mt-2">DO EVENTO</span>
                    </h2>

                    <p className="font-sans text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Uma jornada de aprendizado e competição em dois dias intensos.
                    </p>
                </div>

                {/* --- Dia 1 --- */}
                <div className="mb-16">
                    <DayDivider day="Dia 1" date="23 de Outubro" />
                    <TimelineContainer>
                        {scheduleDay1.map((item, index) => (
                            <TimelineItem key={`${item.title}-d1-${index}`} item={item} index={index} />
                        ))}
                    </TimelineContainer>
                </div>

                {/* --- Dia 2 --- */}
                <div>
                    <DayDivider day="Dia 2" date="24 de Outubro" />
                    <TimelineContainer>
                        {scheduleDay2.map((item, index) => (
                            <TimelineItem key={`${item.title}-d2-${index}`} item={item} index={index} />
                        ))}
                    </TimelineContainer>
                </div>
            </div>
        </section>
    );
}

// Backwards-compatible export
export const Infos = Schedule;