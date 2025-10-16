import { FaTrophy } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";
import Balatro from "./background";

export function GameJam() {
    return (
        <section id="gamejam" className="relative bg-white py-16 md:py-24 px-4 border-b border-slate-200 overflow-hidden">
            {/* Background animado */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <Balatro
                    spinRotation={-1.5}
                    spinSpeed={4.0}
                    color1="#2563EB"
                    color2="#3B82F6"
                    color3="#60A5FA"
                    contrast={3.0}
                    lighting={0.7}
                    spinAmount={0.35}
                    isRotate={true}
                    mouseInteraction={true}
                />
            </div>
            
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-600 text-white rounded-full">
                        <FaTrophy size={18} />
                        <span className="text-xs font-bold uppercase tracking-wider">Competição</span>
                    </div>
                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-blue-600 mb-4 uppercase tracking-wide" 
                        style={{ 
                            fontFamily: '"Bungee", cursive',
                            textShadow: '5px 5px 0px #FFFFFF, 10px 10px 0px rgba(37, 99, 235, 0.4)',
                            letterSpacing: '0.05em'
                        }}>
                        Game Jam
                    </h2>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 inline-block px-8 py-3 bg-white border-4 border-blue-600" 
                         style={{ fontFamily: '"Orbitron", sans-serif', boxShadow: '6px 6px 0px rgba(37, 99, 235, 0.3)', letterSpacing: '0.1em' }}>
                        CAPCOM 2025
                    </div>
                    <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-medium mt-6">
                        72 horas de pura criatividade. Desenvolva, compita e conquiste seu lugar no pódio!
                    </p>
                </div>

                {/* Timeline - Cronograma */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Cronograma da Competição</h3>
                    
                    <div className="max-w-3xl mx-auto space-y-4">
                        {/* Fase 1 - Revelação do Tema */}
                        <div className="relative pl-8 pb-8 border-l-2 border-slate-300">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rotate-45 border-2 border-white shadow-md"></div>
                            <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                    <h4 className="text-lg font-bold text-slate-900">Revelação do Tema</h4>
                                    <span className="text-xs font-mono font-bold text-white bg-blue-600 px-3 py-1.5 rounded">
                                        20/10 · 12:00
                                    </span>
                                </div>
                                <p className="text-slate-600 text-sm">
                                    O tema da competição será revelado. A partir deste momento, a contagem das 72 horas começa.
                                </p>
                            </div>
                        </div>

                        {/* Fase 2 - Desenvolvimento */}
                        <div className="relative pl-8 pb-8 border-l-2 border-slate-300">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rotate-45 border-2 border-white shadow-md"></div>
                            <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
                                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                    <h4 className="text-lg font-bold text-slate-900">Período de Desenvolvimento</h4>
                                    <span className="text-xs font-mono font-bold text-white bg-blue-500 px-3 py-1.5 rounded">
                                        72 HORAS
                                    </span>
                                </div>
                                <p className="text-slate-600 text-sm">
                                    Desenvolva seu jogo do zero. Trabalhe em equipe ou solo, use qualquer engine ou framework.
                                </p>
                            </div>
                        </div>

                        {/* Fase 3 - Submissão */}
                        <div className="relative pl-8 pb-8 border-l-2 border-slate-300">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-900 rotate-45 border-2 border-white shadow-md"></div>
                            <div className="bg-white border-l-4 border-slate-900 p-6 shadow-sm">
                                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                    <h4 className="text-lg font-bold text-slate-900">Prazo de Submissão</h4>
                                    <span className="text-xs font-mono font-bold text-white bg-slate-900 px-3 py-1.5 rounded">
                                        23/10 · 12:00
                                    </span>
                                </div>
                                <p className="text-slate-600 text-sm">
                                    Deadline final. Publique seu jogo no Itch.io e envie o link conforme instruções do edital.
                                </p>
                            </div>
                        </div>

                        {/* Fase 4 - Apresentações */}
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rotate-45 border-2 border-white shadow-md"></div>
                            <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                    <h4 className="text-lg font-bold text-slate-900">Apresentações e Premiação</h4>
                                    <span className="text-xs font-mono font-bold text-white bg-blue-600 px-3 py-1.5 rounded">
                                        24/10 · 8h-12h
                                    </span>
                                </div>
                                <p className="text-slate-600 text-sm">
                                    Apresente seu jogo para a banca avaliadora e comunidade. Os melhores serão premiados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regras da Competição */}
                <div className="bg-blue-600 p-8 sm:p-10 mb-12 text-white border-8 border-white shadow-xl" style={{ boxShadow: '0 0 0 4px #2563EB' }}>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-center" style={{ fontFamily: '"Bungee", cursive', letterSpacing: '0.05em' }}>Como Funciona</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-11 h-11 bg-white text-blue-600 flex items-center justify-center font-mono font-bold text-lg border-2 border-blue-800">01</div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold mb-1.5 text-white text-base">Forme sua equipe</h4>
                                <p className="text-blue-100 text-sm">Participe solo ou em equipe de até 3 pessoas</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-11 h-11 bg-white text-blue-600 flex items-center justify-center font-mono font-bold text-lg border-2 border-blue-800">02</div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold mb-1.5 text-white text-base">Aguarde o tema</h4>
                                <p className="text-blue-100 text-sm">Revelação dia 20/10 às 12:00</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-11 h-11 bg-white text-blue-600 flex items-center justify-center font-mono font-bold text-lg border-2 border-blue-800">03</div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold mb-1.5 text-white text-base">Desenvolva seu jogo</h4>
                                <p className="text-blue-100 text-sm">72 horas para criar algo incrível</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-11 h-11 bg-white text-blue-600 flex items-center justify-center font-mono font-bold text-lg border-2 border-blue-800">04</div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold mb-1.5 text-white text-base">Publique no Itch.io</h4>
                                <p className="text-blue-100 text-sm">Envie até 23/10 às 12:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-4 border-white pt-6">
                        <div className="max-w-2xl mx-auto bg-white text-slate-900 p-4 border-4 border-blue-800">
                            <p className="text-sm leading-relaxed">
                                <span className="font-bold">⚠️ Regras importantes:</span> Todas as assets e código devem ser criados durante a competição. 
                                Engines, frameworks e bibliotecas públicas são permitidos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href="https://drive.google.com/file/d/1AU2VeJT0sMCtYalhWsRcsvZ5srhGuEDO/view?usp=drive_link" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base rounded-lg shadow-lg shadow-blue-600/20"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Baixar Edital Completo
                        </a>
                        <a 
                            href="https://itch.io/jam/gamejam-capcom-i" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 text-slate-700 font-semibold hover:border-blue-400 hover:bg-blue-50 transition-colors text-sm sm:text-base rounded-lg"
                        >
                            <SiItchdotio size={18} />
                            Acessar Jam no Itch.io
                        </a>
                    </div>
                    <p className="mt-6 text-sm text-slate-500">
                        Dúvidas? Entre em contato com a organização do evento
                    </p>
                </div>
            </div>
        </section>
    );
}
