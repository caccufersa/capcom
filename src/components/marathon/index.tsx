import { SiCplusplus, SiPython, SiKotlin, SiC } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { LuBan } from "react-icons/lu";
import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from 'react-dom';
import { HiOutlineDownload } from 'react-icons/hi';
import marathonImg1 from '../../assets/marathon-1.jpg';
import marathonImg2 from '../../assets/marathon-2.jpg';
import marathonImg3 from '../../assets/marathon-3.jpg';
import marathonImg4 from '../../assets/marathon-4.jpg';
// Adicione mais imagens aqui, se tiver

const registrationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeupidu6ZA5RzJrF283cepiX-2GEDyaegrfKhTLvdJiFMZqSQ/viewform?usp=header";

// --- Ícones para uma UI mais consistente ---
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

export function ProgrammingMarathon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = [marathonImg1, marathonImg2, marathonImg3, marathonImg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setCurrentIndex(i);
  }, []);

  // Navegação por teclado no lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev === null ? null : (prev - 1 + images.length) % images.length));
      if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev === null ? null : (prev + 1) % images.length));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, images.length]);

  // Bloqueia scroll do body quando lightbox aberto
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = 'unset'; };
    }
  }, [lightboxIndex]);

  // --- Lógica do Canvas (Matrix Effect) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const section = document.getElementById('marathon');
    const resize = () => {
      const rect = section?.getBoundingClientRect();
      if (rect) {
        canvas.width = Math.max(300, Math.floor(rect.width));
        canvas.height = Math.max(200, Math.floor(rect.height));
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.6;
      }
    };
    resize();
    const characters = '01{}[]()<>/\\|~!@#$%^&*-=+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const baseFontSize = 14;
    let columns = Math.floor(canvas.width / baseFontSize);
    let drops: number[] = Array(columns).fill(0).map(() => Math.random() * -80);
    let running = true;
    function loop() {
      if (!running || !ctx || !canvas) return;
      ctx.fillStyle = 'rgba(255,255,255,0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const fontSize = baseFontSize;
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const char = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillStyle = 'rgba(37, 99, 235, 1)';
        ctx.fillText(char, x, y);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.fillText(char, x, y - fontSize * 0.6);
        if (y > canvas.height + fontSize && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i] += 0.28 + Math.random() * 0.5;
      }
      requestAnimationFrame(loop);
    }
    loop();
    const onResize = () => {
      resize();
      columns = Math.floor(canvas.width / baseFontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -50);
    };
    window.addEventListener('resize', onResize);
    return () => {
      running = false;
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      id="marathon"
      className="relative bg-white py-16 md:py-20 px-4 border-b border-slate-200 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-50 z-0"
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Competição clássica
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Maratona de Programação
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            A maratona de programação reúne equipes de até três alunos que, em cerca de três horas, resolvem problemas de lógica e algoritmos usando linguagens como C, C++, Java, Kotlin e Python. As soluções são avaliadas automaticamente quanto à correção e eficiência, com pontuação baseada em acertos e tempo total. Vence a equipe que resolve mais problemas no menor tempo, considerando penalidades por erros.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* ================================================================== */}
          {/* ======================= GALERIA MELHORADA ======================== */}
          {/* ================================================================== */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group flex flex-col bg-slate-50/50">
            {/* Imagem Principal */}
            <div className="flex-grow flex items-center justify-center p-4 relative min-h-[20rem]">
              <img
                key={currentIndex} // Força o re-render para a animação funcionar
                src={images[currentIndex]}
                alt={`Foto ${currentIndex + 1} da Maratona`}
                className="max-h-[24rem] max-w-full object-contain rounded-xl cursor-zoom-in animate-fade-in"
                onClick={() => setLightboxIndex(currentIndex)}
              />
              {/* Setas de navegação (aparecem no hover) */}
              <button
                aria-label="Imagem anterior"
                onClick={() => goTo((currentIndex - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full p-2.5 shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <ChevronLeftIcon />
              </button>
              <button
                aria-label="Próxima imagem"
                onClick={() => goTo((currentIndex + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full p-2.5 shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <ChevronRightIcon />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="w-full flex justify-center gap-3 p-4 bg-white/50 border-t border-slate-200">
              {images.map((src, i) => (
                <button
                  key={i}
                  aria-label={`Ver imagem ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
                    ${i === currentIndex 
                      ? 'border-blue-500 scale-110 shadow-lg' 
                      : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                >
                  <img src={src} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Lightbox (Tela Cheia) Modernizado */}
          {lightboxIndex !== null && createPortal(
            <div className="fixed inset-0 z-[2147483646] flex items-center justify-center animate-fade-in" onClick={() => setLightboxIndex(null)}>
              <div className="absolute inset-0 bg-black/92 backdrop-blur-md" />
              {/* Botão de fechar */}
              <button
                className="absolute top-4 right-4 text-white/90 hover:text-white transition-colors z-[2147483647] p-3 bg-black/20 rounded-md"
                onClick={() => setLightboxIndex(null)}
                aria-label="Fechar imagem"
              >
                <CloseIcon />
              </button>
              {/* Botão de navegação - Anterior */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors z-[2147483647] p-3 bg-black/20 rounded-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(prev => {
                    if (prev === null) return null;
                    return (prev - 1 + images.length) % images.length;
                  });
                }}
                aria-label="Imagem anterior"
              >
                <ChevronLeftIcon />
              </button>
              {/* Imagem em tela cheia */}
              <div className="relative z-[2147483647] flex flex-col items-center gap-4">
                <img
                  key={`lightbox-${lightboxIndex}`}
                  src={images[lightboxIndex]}
                  alt={`Foto ${lightboxIndex + 1} da Maratona`}
                  className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl animate-fade-in"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="text-white/80 font-medium">{lightboxIndex + 1} / {images.length}</div>
              </div>
              {/* Botão de navegação - Próxima */}
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors z-[2147483647] p-3 bg-black/20 rounded-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(prev => {
                    if (prev === null) return null;
                    return (prev + 1) % images.length;
                  });
                }}
                aria-label="Próxima imagem"
              >
                <ChevronRightIcon />
              </button>
            </div>,
            document.body
          )}
          {/* Adicionando keyframes para a animação */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.98); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fade-in {
              animation: fadeIn 0.4s ease-in-out;
            }
          `}</style>
          {/* ================================================================== */}
          {/* ===================== FIM DA GALERIA MELHORADA =================== */}
          {/* ================================================================== */}

          {/* Coluna de Informações (sem alterações) */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Linguagens aceitas</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium"><SiC className="text-blue-600" size={18} /> C</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium"><SiCplusplus className="text-blue-600" size={18} /> C++</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium"><DiJava className="text-blue-600" size={18} /> Java</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium"><SiKotlin className="text-blue-600" size={18} /> Kotlin</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium"><SiPython className="text-blue-600" size={18} /> Python</span>
            </div>

            <div className="mb-6 pb-6 border-b border-slate-200">
              <h4 className="text-base font-semibold text-slate-900 mb-3">Cronograma da competição</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3"><span className="text-blue-600 font-semibold min-w-[110px]">13h às 13h45</span> <span className="text-slate-600">Cadastro de equipes e aquecimento</span></div>
                <div className="flex items-start gap-3"><span className="text-blue-600 font-semibold min-w-[110px]">14h às 17h</span> <span className="text-slate-600">Competição</span></div>
                <div className="flex items-start gap-3"><span className="text-blue-600 font-semibold min-w-[110px]">17h às 17h30</span> <span className="text-slate-600">Premiação</span></div>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-600 mb-6">
              <div className="flex gap-3"><span className="text-slate-400 font-mono">01</span><div><p className="font-medium text-slate-900">Avaliação automática</p><p>Soluções testadas quanto à correção e eficiência</p></div></div>
              <div className="flex gap-3"><span className="text-slate-400 font-mono">02</span><div><p className="font-medium text-slate-900">Pontuação</p><p>Baseada em acertos, tempo total e penalidades por erros</p></div></div>
              <div className="flex gap-3"><span className="text-slate-400 font-mono">03</span><div><p className="font-medium text-slate-900">Vitória</p><p>Equipe que resolve mais problemas no menor tempo</p></div></div>
            </div>

            <div className="mb-6 pt-6 border-t border-slate-200">
              <h4 className="text-base font-semibold text-slate-900 mb-3">Restrições</h4>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3"><LuBan className="text-red-500 mt-1 flex-shrink-0" size={16} /><span>Não é permitido o uso de material digital ou acesso à internet.</span></div>
                <div className="flex items-start gap-3"><LuBan className="text-red-500 mt-1 flex-shrink-0" size={16} /><span>Não é permitido portar aparelhos eletrônicos (celulares, smart watches, fones de ouvido, etc.).</span></div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-300">
              <p className="text-xs text-slate-500 leading-relaxed">Equipes de até 3 alunos. Problemas de lógica e algoritmos com diferentes níveis de dificuldade.</p>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* ======================= BOTÃO MELHORADO ========================== */}
        {/* ================================================================== */}
        <div className="flex justify-center mt-8">
          <a
            href={registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base rounded-lg shadow-lg shadow-blue-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
            aria-label="Inscrever equipe na Maratona"
            title="Inscrever equipe"
          >
            <HiOutlineDownload className="w-5 h-5" aria-hidden="true" />
            Inscreva sua equipe
          </a>
        </div>
        {/* ================================================================== */}
        {/* ===================== FIM DO BOTÃO MELHORADO ===================== */}
        {/* ================================================================== */}
      </div>
    </section>
  );
}