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
const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
);
const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);
// CloseIcon was unused; removed to silence linter warning.

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
    const baseFontSize = Math.max(12, Math.min(14, window.innerWidth / 80)); // Ajuste responsivo do tamanho da fonte
    let columns = Math.floor(canvas.width / baseFontSize);
    // Distribuição mais uniforme das gotas para garantir loop contínuo
    let drops: number[] = Array(columns).fill(0).map(() => Math.random() * -canvas.height);
    let running = true;
    
    function loop() {
      if (!running || !ctx || !canvas) return;
      // Fade mais suave para melhorar o efeito de loop
      ctx.fillStyle = 'rgba(255,255,255,0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const fontSize = baseFontSize;
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const char = characters[Math.floor(Math.random() * characters.length)];
        
        // Cores mais vibrantes para melhor visibilidade
        ctx.fillStyle = 'rgba(37, 99, 235, 0.9)';
        ctx.fillText(char, x, y);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
        ctx.fillText(char, x, y - fontSize * 0.6);
        
        // Melhoria no loop: reinicia as gotas de forma mais consistente
        if (y > canvas.height + fontSize) {
          // Probabilidade variável para criar um efeito mais natural
          if (Math.random() > 0.985) {
            drops[i] = 0;
          } else {
            // Reinicia em posições negativas para criar um fluxo contínuo
            drops[i] = -5 - Math.random() * 15;
          }
        }
        
        // Velocidade variável para um efeito mais natural
        const speed = 0.3 + Math.random() * 0.4;
        drops[i] += speed;
      }
      requestAnimationFrame(loop);
    }
    
    loop();
    
    const onResize = () => {
      resize();
      // Recalcula o tamanho da fonte baseado na largura da tela
      const newBaseFontSize = Math.max(12, Math.min(14, window.innerWidth / 80));
      columns = Math.floor(canvas.width / newBaseFontSize);
      // Preserva as gotas existentes quando possível para manter a continuidade
      const oldDrops = [...drops];
      drops = Array(columns).fill(0).map((_, i) => 
        i < oldDrops.length ? oldDrops[i] : Math.random() * -canvas.height
      );
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
      className="relative bg-white py-12 md:py-20 px-3 sm:px-4 border-b border-slate-200 overflow-hidden"
    >
      <style>{`
      @keyframes blink {
        from, to { opacity: 1; }
        50% { opacity: 0; }
      }
      .animate-blink-cursor {
        animation: blink 1s step-end infinite;
      }
      @media (max-width: 640px) {
        .responsive-text {
          font-size: clamp(2.5rem, 8vw, 3.5rem);
        }
        .responsive-subtitle {
          font-size: clamp(1rem, 4vw, 1.125rem);
        }
      }
    `}</style>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-50 z-0"
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block font-mono px-4 py-2 rounded-md bg-slate-100 text-slate-500 text-sm tracking-wider uppercase mb-6 animate-fade-in-down">
          // Inicie o desafio
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 sm:mb-8 tracking-tighter leading-none animate-fade-in-up responsive-text">
            <span className="block bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
              MARATONA
            </span>
            <span className="text-slate-800 flex items-center justify-center">
              DE PROGRAMAÇÃO
              <span className="ml-2 inline-block w-2 sm:w-3 md:w-4 h-10 sm:h-14 md:h-20 bg-slate-800 animate-blink-cursor"></span>
            </span>
          </h2>

          <p className="text-slate-700 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed responsive-subtitle font-bold">
            A maratona de programação reúne <span className="font-bold text-blue-700">equipes de até três alunos</span> que,
            em cerca de <span className="font-bold text-blue-700">três horas</span>, resolvem problemas de lógica e algoritmos usando linguagens como
            <span className="font-bold text-blue-700"> C, C++, Java, Kotlin e Python</span>.
            As soluções são <span className="font-bold text-green-700">avaliadas automaticamente</span> quanto à correção e eficiência,
            com pontuação baseada em acertos e tempo total.
            Vence a equipe que resolve <span className="font-bold text-slate-900">mais problemas no menor tempo</span>, considerando penalidades por erros.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* ================================================================== */}
          {/* ======================= GALERIA MELHORADA ======================== */}
          {/* ================================================================== */}
          <div className="bg-gray-200 border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 p-2 font-sans flex flex-col group">
  {/* Área da Imagem Principal */}
  <div className="flex-grow flex items-center justify-center p-4 relative bg-black border-2 border-t-gray-400 border-l-gray-400 border-b-gray-100 border-r-gray-100 min-h-[16rem] sm:min-h-[20rem]">
    {/* A imagem não tem mais cantos arredondados */}
    <img
      key={currentIndex} // Mantido para re-render
      src={images[currentIndex]}
      alt={`Foto ${currentIndex + 1} da Maratona`}
      className="max-h-[20rem] sm:max-h-[24rem] max-w-full object-contain cursor-pointer"
      onClick={() => setLightboxIndex(currentIndex)}
    />
    
    {/* Setas de navegação com estilo de botão clássico.
      - Sempre visíveis, sem 'group-hover'.
      - Bordas 'outset' para parecerem botões físicos.
      - Efeito 'active' para simular o clique.
      - NOTA: Os componentes ChevronLeftIcon e ChevronRightIcon precisam aceitar a prop 'className'.
    */}
    <button
      aria-label="Imagem anterior"
      onClick={() => goTo((currentIndex - 1 + images.length) % images.length)}
      className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 text-black border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 z-10 p-2 active:border-t-gray-400 active:border-l-gray-400 active:border-b-gray-100 active:border-r-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <ChevronLeftIcon className="w-6 h-6" />
    </button>
    <button
      aria-label="Próxima imagem"
      onClick={() => goTo((currentIndex + 1) % images.length)}
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-black border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 z-10 p-2 active:border-t-gray-400 active:border-l-gray-400 active:border-b-gray-100 active:border-r-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <ChevronRightIcon className="w-6 h-6" />
    </button>
  </div>
  
  {/* Container das Thumbnails.
    - Separado por uma borda "inset" para parecer uma seção diferente.
  */}
  <div className="w-full flex justify-center gap-2 sm:gap-3 p-2 border-t-2 border-t-gray-400 border-l-gray-400">
    {images.map((src, i) => (
      <button
        key={i}
        aria-label={`Ver imagem ${i + 1}`}
        onClick={() => goTo(i)}
        className={`relative w-16 h-12 overflow-hidden bg-black p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
          ${i === currentIndex
            // O thumbnail ativo tem uma borda "inset", como se estivesse pressionado.
            ? 'border-2 border-t-blue-700 border-l-blue-700 border-b-blue-300 border-r-blue-300'
            // O inativo tem uma borda "outset" sutil.
            : 'border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400'
          }`}
      >
        <img src={src} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
      </button>
    ))}
  </div>
</div>

{/* Lightbox (Tela Cheia) Estilo Anos 90 COM CORREÇÃO */}
{lightboxIndex !== null && createPortal(
  // O fundo agora é um cinza opaco, sem blur ou transparência.
  <div className="fixed inset-0 z-[2147483646] flex items-center justify-center bg-gray-800/75" onClick={() => setLightboxIndex(null)}>
    
    {/* A "janela" da imagem, com fundo cinza e bordas 'outset' */}
    <div 
        className="bg-gray-200 border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 p-2 relative"
        onClick={(e) => e.stopPropagation()}
    >
        {/* Barra de Título Falsa - um toque clássico! */}
        <div className="bg-blue-800 text-white font-bold p-1 mb-2 flex justify-between items-center">
            <span>Visualizador de Imagem</span>
            <button
                className="bg-gray-200 text-black border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 w-5 h-5 flex items-center justify-center font-mono active:border-t-gray-400 active:border-l-gray-400 active:border-b-gray-100 active:border-r-gray-100"
                onClick={() => setLightboxIndex(null)}
                aria-label="Fechar imagem"
            >
                X
            </button>
        </div>
        
        {/* Imagem e Navegação */}
        <div className="relative">
            <img
              src={images[lightboxIndex]}
              alt={`Foto ${lightboxIndex + 1} da Maratona`}
              className="max-h-[80vh] max-w-[90vw] object-contain border-2 border-t-gray-400 border-l-gray-400 border-b-gray-100 border-r-gray-100"
            />
        </div>
        
        {/* Barra de Status com contador e botões */}
        <div className="mt-2 pt-2 border-t-2 border-t-gray-400 flex justify-between items-center">
            <span className="text-sm text-black px-2">Imagem {lightboxIndex + 1} de {images.length}</span>
            <div className="flex gap-2">
                <button
                     className="bg-gray-200 text-black border-2 px-4 py-1 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 active:border-t-gray-400 active:border-l-gray-400 active:border-b-gray-100 active:border-r-gray-100"
                     onClick={(e) => {
                       e.stopPropagation();
                       // CORREÇÃO: Adicionada verificação de 'null'
                       setLightboxIndex(prev => {
                         if (prev === null) return null;
                         return (prev - 1 + images.length) % images.length;
                       });
                     }}
                >
                    &lt; Anterior
                </button>
                 <button
                     className="bg-gray-200 text-black border-2 px-4 py-1 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 active:border-t-gray-400 active:border-l-gray-400 active:border-b-gray-100 active:border-r-gray-100"
                     onClick={(e) => {
                       e.stopPropagation();
                       // CORREÇÃO: Adicionada verificação de 'null'
                       setLightboxIndex(prev => {
                         if (prev === null) return null;
                         return (prev + 1) % images.length;
                       });
                     }}
                >
                    Próxima &gt;
                </button>
            </div>
        </div>
    </div>
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
          <div className="bg-gray-200 rounded-none border-2 border-l-gray-400 border-t-gray-400 border-r-gray-100 border-b-gray-100 p-6 font-sans">
  <h3 className="text-lg font-bold text-black mb-4">Linguagens Aceitas</h3>
  <div className="flex flex-wrap gap-3">
    {/* Botão "outset" clássico */}
    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-none border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 bg-gray-200 text-black text-sm font-medium hover:bg-gray-100 active:border-t-gray-400 active:border-l-gray-400 active:border-b-gray-100 active:border-r-gray-100">
      <SiC className="text-blue-600" size={18} /> C
    </span>
    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-none border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 bg-gray-200 text-black text-sm font-medium hover:bg-gray-100 active:border-t-gray-400 active:border-l-gray-400 active:border-b-gray-100 active:border-r-gray-100">
      <SiCplusplus className="text-blue-600" size={18} /> C++
    </span>
    {/* Usei vermelho pro Java, mais clássico */}
    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-none border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 bg-gray-200 text-black text-sm font-medium hover:bg-gray-100 active:border-t-gray-400 active:border-l-gray-400 active:border-b-gray-100 active:border-r-gray-100">
      <DiJava className="text-red-600" size={18} /> Java
    </span>
    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-none border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 bg-gray-200 text-black text-sm font-medium hover:bg-gray-100 active:border-t-gray-400 active:border-l-gray-400 active:border-b-gray-100 active:border-r-gray-100">
      <SiKotlin className="text-purple-600" size={18} /> Kotlin
    </span>
    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-none border-2 border-t-gray-100 border-l-gray-100 border-b-gray-400 border-r-gray-400 bg-gray-200 text-black text-sm font-medium hover:bg-gray-100 active:border-t-gray-400 active:border-l-gray-400 active:border-b-gray-100 active:border-r-gray-100">
      <SiPython className="text-yellow-500" size={18} /> Python
    </span>
  </div>

            <div className="mt-6 mb-6 pb-6 border-b border-slate-200 md:mt-10">
              <h4 className="text-base font-semibold text-blue-600 mb-4">Cronograma da competição</h4>
              <ul className="divide-y divide-slate-100">
                <li className="flex items-start gap-4 py-3">
                  <time className="flex-shrink-0 w-32 text-sm text-slate-600 font-mono">13:00 — 13:45</time>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">Cadastro de equipes e aquecimento</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-3">
                  <time className="flex-shrink-0 w-32 text-sm text-slate-600 font-mono">14:00 — 17:00</time>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">Competição</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-3">
                  <time className="flex-shrink-0 w-32 text-sm text-slate-600 font-mono">17:00 — 17:30</time>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">Premiação</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4 text-sm text-slate-600 mb-6">
              <div className="flex gap-3"><span className="text-slate-400 font-mono">01</span><div><p className="font-medium text-blue-600">Avaliação automática</p><p className="text-black font-bold">Soluções testadas quanto à correção e eficiência</p></div></div>
              <div className="flex gap-3"><span className="text-slate-400 font-mono">02</span><div><p className="font-medium text-blue-600">Pontuação</p><p className="text-black font-bold">Baseada em acertos, tempo total e penalidades por erros</p></div></div>
              <div className="flex gap-3"><span className="text-slate-400 font-mono">03</span><div><p className="font-medium text-blue-600">Vitória</p><p className="text-black font-bold">Equipe que resolve mais problemas no menor tempo</p></div></div>
            </div>

            <div className="mb-6 pt-6 border-t border-slate-200">
              <h4 className="text-base font-semibold text-blue-600 mb-3">Restrições</h4>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3"><LuBan className="text-red-500 mt-1 flex-shrink-0" size={16} /><span className="text-black font-bold">Não é permitido o uso de material digital ou acesso à internet.</span></div>
                <div className="flex items-start gap-3"><LuBan className="text-red-500 mt-1 flex-shrink-0" size={16} /><span className="text-black font-bold">Não é permitido portar aparelhos eletrônicos (celulares, smart watches, fones de ouvido, etc.).</span></div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-300">
              <p className="text-xs text-black font-bold leading-relaxed">Equipes de até 3 alunos. Problemas de lógica e algoritmos com diferentes níveis de dificuldade.</p>
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
            className="
    inline-flex items-center justify-center gap-2
    bg-slate-300 text-slate-900 font-semibold 
    px-6 py-3
    border-2 border-solid
    border-t-slate-100 border-l-slate-100
    border-b-slate-500 border-r-slate-500
    active:border-t-slate-500 active:border-l-slate-500
    active:border-b-slate-100 active:border-r-slate-100
    transition-none
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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