import { FaGamepad, FaKeyboard, FaTrophy } from "react-icons/fa";
import { ChibiGame } from "../../components/chibi-game";

export function Game() {
    return (
        <section id="game" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24 px-4 border-y border-slate-700 overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
                        <FaGamepad className="text-purple-400" size={18} />
                        <span className="text-purple-300 text-sm font-semibold uppercase tracking-wider">Mini Game</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Code Runner
                    </h2>
                    <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Um jogo de plataforma desenvolvido especialmente para o CAPCOM. 
                        Teste suas habilidades, colete tokens e alcance o topo do ranking!
                    </p>
                </div>

                {/* Como Jogar */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <FaKeyboard className="text-blue-400" />
                            Como Jogar
                        </h3>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Controles */}
                            <div>
                                <h4 className="text-purple-400 font-semibold mb-3 text-sm uppercase tracking-wide">Controles</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <kbd className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-white font-mono text-sm min-w-[60px] text-center">
                                            ← →
                                        </kbd>
                                        <span className="text-slate-300 text-sm">Mover esquerda/direita</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <kbd className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-white font-mono text-sm min-w-[60px] text-center">
                                            SPACE
                                        </kbd>
                                        <span className="text-slate-300 text-sm">Pular</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <kbd className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-white font-mono text-sm min-w-[60px] text-center">
                                            R
                                        </kbd>
                                        <span className="text-slate-300 text-sm">Reiniciar fase</span>
                                    </div>
                                </div>
                            </div>

                            {/* Objetivo */}
                            <div>
                                <h4 className="text-purple-400 font-semibold mb-3 text-sm uppercase tracking-wide">Objetivo</h4>
                                <div className="space-y-2.5">
                                    <div className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                        <span className="text-slate-300 text-sm">Colete todos os tokens de código (moedas douradas)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                        <span className="text-slate-300 text-sm">Evite os obstáculos e inimigos</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                        <span className="text-slate-300 text-sm">Chegue ao portal para completar a fase</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                        <span className="text-slate-300 text-sm">Faça a melhor pontuação possível!</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dica */}
                        <div className="mt-6 pt-6 border-t border-slate-700">
                            <div className="flex items-start gap-3 bg-purple-500/10 border border-purple-500/30 rounded p-4">
                                <FaTrophy className="text-yellow-400 flex-shrink-0 mt-0.5" size={18} />
                                <div>
                                    <h5 className="text-white font-semibold text-sm mb-1">Dica Pro</h5>
                                    <p className="text-slate-300 text-sm">
                                        Sua melhor pontuação é salva automaticamente! Tente diferentes estratégias para maximizar seus pontos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* O Jogo */}
                <div className="mb-8">
                    <ChibiGame />
                </div>

                {/* Features do Jogo */}
                <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    <div className="bg-slate-800/30 backdrop-blur border border-slate-700 rounded-lg p-6 text-center hover:border-purple-500/50 transition-colors">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold mb-2">Física Realista</h4>
                        <p className="text-slate-400 text-sm">Mecânicas de plataforma suaves e responsivas</p>
                    </div>

                    <div className="bg-slate-800/30 backdrop-blur border border-slate-700 rounded-lg p-6 text-center hover:border-blue-500/50 transition-colors">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold mb-2">Sistema de Score</h4>
                        <p className="text-slate-400 text-sm">Ranking local com highscore salvo</p>
                    </div>

                    <div className="bg-slate-800/30 backdrop-blur border border-slate-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-colors">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold mb-2">Desafio Progressivo</h4>
                        <p className="text-slate-400 text-sm">Múltiplas fases com dificuldade crescente</p>
                    </div>
                </div>

                {/* Créditos */}
                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm">
                        🎮 Desenvolvido com <span className="text-red-400">♥</span> pela equipe CAPCOM usando Canvas 2D API
                    </p>
                </div>
            </div>
        </section>
    );
}
