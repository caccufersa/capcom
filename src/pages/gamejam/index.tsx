import { FaTrophy } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";
import Balatro from "./background";

export function GameJam() {
    return (
        <section id="gamejam" className="relative bg-white py-16 md:py-24 px-4 border-b border-slate-200 overflow-hidden">
            {/* Background animado */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Balatro
                    spinRotation={-1.5}
                    spinSpeed={4.0}
                    color1="#EC4899"
                    color2="#8B5CF6"
                    color3="#F59E0B"
                    contrast={2.5}
                    lighting={0.6}
                    spinAmount={0.35}
                    isRotate={true}
                    mouseInteraction={true}
                />
            </div>
            
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 text-pink-600">
                        <FaTrophy size={20} />
                        <span className="text-sm font-semibold uppercase tracking-wider">Competição</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Game Jam CAPCOM 2025
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                        48 horas de pura criatividade. Desenvolva, compete e conquiste seu lugar no pódio!
                    </p>
                </div>

                {/* Timeline - Cronograma */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Cronograma da Competição</h3>
                    
                    <div className="max-w-3xl mx-auto space-y-4">
                        {/* Fase 1 - Revelação do Tema */}
                        <div className="relative pl-8 pb-8 border-l-2 border-pink-200">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-pink-600 rotate-45 border-2 border-white"></div>
                            <div className="bg-slate-50 border-l-4 border-pink-600 p-6">
                                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                    <h4 className="text-lg font-bold text-slate-900">Revelação do Tema</h4>
                                    <span className="text-xs font-mono font-bold text-pink-600 bg-pink-100 px-3 py-1">
                                        20/10 · 12:00
                                    </span>
                                </div>
                                <p className="text-slate-600 text-sm">
                                    O tema da competição será revelado. A partir deste momento, a contagem das 48 horas começa.
                                </p>
                            </div>
                        </div>

                        {/* Fase 2 - Desenvolvimento */}
                        <div className="relative pl-8 pb-8 border-l-2 border-purple-200">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 rotate-45 border-2 border-white"></div>
                            <div className="bg-slate-50 border-l-4 border-purple-600 p-6">
                                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                    <h4 className="text-lg font-bold text-slate-900">Período de Desenvolvimento</h4>
                                    <span className="text-xs font-mono font-bold text-purple-600 bg-purple-100 px-3 py-1">
                                        48 HORAS
                                    </span>
                                </div>
                                <p className="text-slate-600 text-sm">
                                    Desenvolva seu jogo do zero. Trabalhe em equipe ou solo, use qualquer engine ou framework.
                                </p>
                            </div>
                        </div>

                        {/* Fase 3 - Submissão */}
                        <div className="relative pl-8 pb-8 border-l-2 border-orange-200">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-600 rotate-45 border-2 border-white"></div>
                            <div className="bg-slate-50 border-l-4 border-orange-600 p-6">
                                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                    <h4 className="text-lg font-bold text-slate-900">Prazo de Submissão</h4>
                                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-100 px-3 py-1">
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
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-500 rotate-45 border-2 border-white"></div>
                            <div className="bg-slate-50 border-l-4 border-yellow-500 p-6">
                                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                    <h4 className="text-lg font-bold text-slate-900">Apresentações e Premiação</h4>
                                    <span className="text-xs font-mono font-bold text-yellow-600 bg-yellow-100 px-3 py-1">
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
                <div className="bg-slate-900 p-6 sm:p-8 mb-12 text-white">
                    <h3 className="text-2xl font-bold mb-8 text-center">Como Funciona</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-pink-500 flex items-center justify-center font-mono font-bold text-sm">01</div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Forme sua equipe</h4>
                                <p className="text-slate-300 text-sm">Participe solo ou em equipe de até 3 pessoas</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-purple-500 flex items-center justify-center font-mono font-bold text-sm">02</div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Aguarde o tema</h4>
                                <p className="text-slate-300 text-sm">Revelação dia 20/10 às 12:00</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-orange-500 flex items-center justify-center font-mono font-bold text-sm">03</div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Desenvolva seu jogo</h4>
                                <p className="text-slate-300 text-sm">48 horas para criar algo incrível</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center font-mono font-bold text-sm">04</div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Publique no Itch.io</h4>
                                <p className="text-slate-300 text-sm">Envie até 23/10 às 12:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 border-slate-700 pt-6">
                        <div className="max-w-2xl mx-auto">
                            <p className="text-slate-300 text-sm leading-relaxed">
                                <span className="text-yellow-400 font-semibold">Regras importantes:</span> Todas as assets e código devem ser criados durante a competição. 
                                Engines, frameworks e bibliotecas públicas são permitidos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href="#" 
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 text-white font-semibold hover:bg-pink-700 transition-colors text-sm sm:text-base"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Baixar Edital Completo
                        </a>
                        <a 
                            href="https://itch.io/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm sm:text-base"
                        >
                            <SiItchdotio size={18} />
                            Acessar Itch.io
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
