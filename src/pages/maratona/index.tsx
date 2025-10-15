import { FaTrophy, FaUsers, FaCode, FaClock, FaChevronRight, FaExpand } from "react-icons/fa";
import Lanyard from "../../components/layard/layard";
import Terminal from "../../components/terminal";
import AnimatedContent from "../../components/animate";
import Iridescence from "./maratona";
import cardImage from "../../assets/maratona/card.png";
import marathon1 from "../../assets/maratona/63.jpg";
import marathon2 from "../../assets/maratona/67.jpg";
import { useState, useEffect } from "react";

export function Maratona() {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    // ESC key listener para fechar lightbox
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && lightboxImage) {
                setLightboxImage(null);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [lightboxImage]);

    return (
        <section id="maratona" className="relative bg-[#0d1117] py-12 md:py-16 px-4 border-y border-[#30363d] overflow-hidden">
            {/* Background Iridescence */}
            <div 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                style={{ 
                    zIndex: 0,
                    opacity: 0.25,
                    mixBlendMode: 'screen'
                }}
            >
                <Iridescence 
                    color={[0.5, 0.8, 1.0]}
                    speed={0.8}
                    amplitude={0.3}
                    mouseReact={true}
                />
            </div>
            
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Lightbox Modal - Minimalista */}
                {lightboxImage && (
                    <div 
                        className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 cursor-zoom-out"
                        onClick={() => setLightboxImage(null)}
                    >
                        {/* Botão ESC minimalista */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#161b22]/80 backdrop-blur border border-[#30363d] rounded-full px-4 py-2 flex items-center gap-2 pointer-events-none">
                            <span className="text-[#7d8590] text-xs font-mono">ESC</span>
                            <span className="text-[#30363d]">|</span>
                            <span className="text-[#7d8590] text-xs">Clique para fechar</span>
                        </div>

                        {/* Imagem */}
                        <div className="relative max-w-6xl max-h-[90vh] w-full cursor-default">
                            <img 
                                src={lightboxImage} 
                                alt="Maratona CAPCOM"
                                className="w-full h-full object-contain rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                            
                            {/* Indicador minimalista de navegação */}
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxImage(lightboxImage === marathon1 ? marathon2 : marathon1);
                                    }}
                                    className="bg-[#161b22]/80 backdrop-blur border border-[#30363d] hover:border-[#58a6ff] rounded-full w-8 h-8 flex items-center justify-center transition-colors group"
                                    title="Próxima imagem"
                                >
                                    <span className="text-[#7d8590] group-hover:text-[#58a6ff] text-xs">→</span>
                                </button>
                                <div className="flex gap-1.5">
                                    <div className={`w-2 h-2 rounded-full ${lightboxImage === marathon1 ? 'bg-[#58a6ff]' : 'bg-[#30363d]'}`}></div>
                                    <div className={`w-2 h-2 rounded-full ${lightboxImage === marathon2 ? 'bg-[#58a6ff]' : 'bg-[#30363d]'}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Hero Section */}
                <AnimatedContent distance={50} duration={0.8} threshold={0.1}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-full mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse"></span>
                            <span className="text-[#7d8590] text-xs font-medium">EVENTO AO VIVO</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e6edf3] mb-3">
                            Maratona de Programação
                        </h2>
                        
                        <p className="text-[#7d8590] max-w-xl mx-auto mb-6">
                            4 horas intensas. Resolva problemas em equipe e conquiste o pódio.
                        </p>

                        {/* Stats Inline */}
                        <div className="flex flex-wrap justify-center gap-3 text-xs">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-full">
                            <FaClock className="text-[#58a6ff]" size={12} />
                            <span className="text-[#e6edf3]">4 horas</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-full">
                            <FaUsers className="text-[#58a6ff]" size={12} />
                            <span className="text-[#e6edf3]">1-3 membros</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-full">
                            <FaTrophy className="text-[#ffa657]" size={12} />
                            <span className="text-[#e6edf3]">TOP 3</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-full">
                            <FaCode className="text-[#3fb950]" size={12} />
                            <span className="text-[#e6edf3]">C++ • Python • Java</span>
                        </div>
                    </div>
                    </div>
                </AnimatedContent>

                {/* Photo Gallery - Minimalista e Simples */}
                <AnimatedContent distance={60} duration={0.9} delay={0.1}>
                    <div className="mb-16">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-[#e6edf3] mb-2">Edições Anteriores</h3>
                        <p className="text-[#7d8590] text-sm">Veja como foi a experiência dos participantes</p>
                    </div>
                    
                    <div className="relative max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4">
                            <button
                                onClick={() => setLightboxImage(marathon1)}
                                className="group relative aspect-video rounded-lg overflow-hidden border-2 border-[#30363d] hover:border-[#58a6ff] transition-all cursor-pointer"
                            >
                                <img 
                                    src={marathon1} 
                                    alt="Maratona CAPCOM - Edição Anterior"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#161b22]/90 backdrop-blur px-4 py-2 rounded-full">
                                        <span className="text-white text-xs font-medium flex items-center gap-2">
                                            <FaExpand size={12} />
                                            Ver em tela cheia
                                        </span>
                                    </div>
                                </div>
                            </button>
                            
                            <button
                                onClick={() => setLightboxImage(marathon2)}
                                className="group relative aspect-video rounded-lg overflow-hidden border-2 border-[#30363d] hover:border-[#58a6ff] transition-all cursor-pointer"
                            >
                                <img 
                                    src={marathon2} 
                                    alt="Ambiente Competitivo CAPCOM"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#161b22]/90 backdrop-blur px-4 py-2 rounded-full">
                                        <span className="text-white text-xs font-medium flex items-center gap-2">
                                            <FaExpand size={12} />
                                            Ver em tela cheia
                                        </span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    </div>
                </AnimatedContent>

                {/* Como Funciona - Info Cards */}
                <AnimatedContent distance={60} duration={0.9} delay={0.15}>
                    <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-[#e6edf3] mb-2">Como Funciona</h3>
                        <p className="text-[#7d8590] text-sm">Três pilares para o sucesso na competição</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition-all hover:shadow-lg hover:shadow-[#58a6ff]/10">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#161b22] border border-[#30363d] rounded-lg mb-4">
                                <FaCode className="text-[#58a6ff]" size={20} />
                            </div>
                            <h3 className="text-[#e6edf3] font-semibold text-lg mb-2">Resolva Problemas</h3>
                            <p className="text-[#7d8590] text-sm leading-relaxed">
                                Desafios de algoritmos e estruturas de dados. Cada solução correta incrementa sua pontuação no ranking geral.
                            </p>
                        </div>

                        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition-all hover:shadow-lg hover:shadow-[#58a6ff]/10">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#161b22] border border-[#30363d] rounded-lg mb-4">
                                <FaUsers className="text-[#58a6ff]" size={20} />
                            </div>
                            <h3 className="text-[#e6edf3] font-semibold text-lg mb-2">Trabalhe em Equipe</h3>
                            <p className="text-[#7d8590] text-sm leading-relaxed">
                                Forme times de até 3 pessoas. Colaboração, comunicação e divisão inteligente de tarefas são essenciais.
                            </p>
                        </div>

                        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition-all hover:shadow-lg hover:shadow-[#58a6ff]/10">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#161b22] border border-[#30363d] rounded-lg mb-4">
                                <FaClock className="text-[#58a6ff]" size={20} />
                            </div>
                            <h3 className="text-[#e6edf3] font-semibold text-lg mb-2">Contra o Relógio</h3>
                            <p className="text-[#7d8590] text-sm leading-relaxed">
                                4 horas de competição intensa. Gerenciar bem o tempo e priorizar problemas define quem sobe ao pódio.
                            </p>
                        </div>
                    </div>
                    </div>
                </AnimatedContent>

                {/* Terminal + Schedule Grid */}
                <AnimatedContent distance={60} duration={0.9} delay={0.2}>
                    <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8 mb-16">
                    {/* Terminal Linux */}
                    <div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-[#e6edf3] mb-2">Explore os Detalhes</h3>
                            <p className="text-[#7d8590] text-sm">
                                Use o terminal para conhecer regras, problemas e cronograma. Digite <span className="text-[#3fb950] font-mono">help</span> para começar.
                            </p>
                        </div>
                        <div className="bg-[#0a0a0a] border border-[#2d2d2d] rounded-lg overflow-hidden shadow-2xl">
                            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-[#3d3d3d]">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                                </div>
                                <span className="text-[#b3b3b3] text-xs font-mono ml-2">
                                    participante@capcom:~$
                                </span>
                            </div>
                            <div className="p-4 min-h-[400px] max-h-[500px] overflow-auto">
                                <Terminal />
                            </div>
                        </div>
                    </div>

                    {/* Credencial - Call to Action Visual */}
                    <div>
                        <div className="bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#30363d] rounded-lg p-6 mb-6">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#ffa657]/10 border border-[#ffa657]/30 flex items-center justify-center flex-shrink-0">
                                    <FaTrophy className="text-[#ffa657]" size={16} />
                                </div>
                                <div>
                                    <h3 className="text-[#e6edf3] font-bold text-lg mb-1">Garanta sua Vaga!</h3>
                                    <p className="text-[#7d8590] text-sm">
                                        Ao se inscrever, você receberá sua credencial oficial para participar do evento.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[500px] bg-[#0d1117] border border-[#30363d] rounded-lg p-4 overflow-hidden">
                            <div className="absolute inset-0">
                                <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} fov={25} cardImage={cardImage} />
                            </div>
                            <div className="absolute top-4 left-4 right-4 bg-[#161b22]/95 backdrop-blur border border-[#30363d] rounded px-3 py-2 pointer-events-none z-10">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse"></span>
                                    <span className="text-[#e6edf3] text-xs font-medium">Credencial Interativa</span>
                                </div>
                            </div>
                            
                            {/* Badge Call to Action */}
                            <div className="absolute bottom-4 left-4 right-4 bg-[#238636]/90 backdrop-blur border border-[#2ea043] rounded px-4 py-3 pointer-events-none z-10">
                                <div className="text-center">
                                    <div className="text-white font-semibold text-sm mb-1">🎫 Sua credencial te espera!</div>
                                    <div className="text-white/80 text-xs">Inscreva-se e faça parte do evento</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </AnimatedContent>

                {/* Premiação */}
                <AnimatedContent distance={60} duration={0.9} delay={0.25}>
                    <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#e6edf3] mb-3">Premiação</h3>
                        <p className="text-[#7d8590] max-w-2xl mx-auto">
                            Reconhecimento e recompensas para as equipes de destaque
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {/* 1º Lugar */}
                        <div className="bg-gradient-to-br from-[#ffa657]/10 to-transparent border border-[#ffa657]/30 rounded-lg p-6 relative overflow-hidden group hover:border-[#ffa657]/50 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffa657]/5 rounded-full blur-3xl"></div>
                            <div className="relative">
                                <div className="text-5xl mb-3">🥇</div>
                                <div className="text-[#ffa657] font-mono text-sm font-bold mb-2">1º LUGAR</div>
                                <h4 className="text-[#e6edf3] font-bold text-lg mb-3">Campeões</h4>
                                <ul className="space-y-2 text-sm text-[#7d8590]">
                                    <li className="flex items-center gap-2">
                                        <FaTrophy className="text-[#ffa657]" size={12} />
                                        <span>Troféu de Campeão</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-3 h-3 text-[#ffa657]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Certificado Premium</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-3 h-3 text-[#ffa657]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Prêmios em dinheiro</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 2º Lugar */}
                        <div className="bg-gradient-to-br from-[#58a6ff]/10 to-transparent border border-[#58a6ff]/30 rounded-lg p-6 relative overflow-hidden group hover:border-[#58a6ff]/50 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#58a6ff]/5 rounded-full blur-3xl"></div>
                            <div className="relative">
                                <div className="text-5xl mb-3">🥈</div>
                                <div className="text-[#58a6ff] font-mono text-sm font-bold mb-2">2º LUGAR</div>
                                <h4 className="text-[#e6edf3] font-bold text-lg mb-3">Vice-Campeões</h4>
                                <ul className="space-y-2 text-sm text-[#7d8590]">
                                    <li className="flex items-center gap-2">
                                        <svg className="w-3 h-3 text-[#58a6ff]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Certificado de Destaque</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-3 h-3 text-[#58a6ff]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Prêmios especiais</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 3º Lugar */}
                        <div className="bg-gradient-to-br from-[#a371f7]/10 to-transparent border border-[#a371f7]/30 rounded-lg p-6 relative overflow-hidden group hover:border-[#a371f7]/50 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#a371f7]/5 rounded-full blur-3xl"></div>
                            <div className="relative">
                                <div className="text-5xl mb-3">🥉</div>
                                <div className="text-[#a371f7] font-mono text-sm font-bold mb-2">3º LUGAR</div>
                                <h4 className="text-[#e6edf3] font-bold text-lg mb-3">Destaque</h4>
                                <ul className="space-y-2 text-sm text-[#7d8590]">
                                    <li className="flex items-center gap-2">
                                        <svg className="w-3 h-3 text-[#a371f7]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Certificado de Participação</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-3 h-3 text-[#a371f7]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Brindes CAPCOM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-[#7d8590] text-sm">
                            🎖️ Todos os participantes recebem certificado digital de participação
                        </p>
                    </div>
                    </div>
                </AnimatedContent>

                {/* CTA Final */}
                <AnimatedContent distance={50} duration={0.8} delay={0.3}>
                    <div className="max-w-2xl mx-auto">
                    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-[#58a6ff]/10 border border-[#58a6ff]/30 flex items-center justify-center flex-shrink-0">
                                <FaTrophy className="text-[#58a6ff]" size={12} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[#e6edf3] font-semibold mb-1">Prepare-se para 2025</h3>
                                <p className="text-[#7d8590] text-sm mb-3">
                                    As inscrições serão abertas em breve. Aproveite para:
                                </p>
                                <div className="space-y-1.5 text-xs text-[#7d8590] mb-4">
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#3fb950]">✓</span>
                                        <span>Revisar algoritmos e estruturas</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#3fb950]">✓</span>
                                        <span>Formar sua equipe (até 3 membros)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#3fb950]">✓</span>
                                        <span>Estudar problemas anteriores</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <a 
                                href="#" 
                                className="group inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] border border-[#2ea043] text-white text-sm rounded transition-colors"
                            >
                                <span>Ver Edital</span>
                                <FaChevronRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>
                            <a 
                                href="#minicourse" 
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#0d1117] hover:bg-[#161b22] border border-[#30363d] text-[#7d8590] hover:text-[#e6edf3] text-sm rounded transition-colors"
                            >
                                <span>Ver Minicursos</span>
                            </a>
                        </div>
                    </div>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}
