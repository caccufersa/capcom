import { useEffect, useState } from 'react';

const BANNER_HEIGHT = 32;
const COLLAPSED_OFFSET = 6;
const HIDE_SCROLL_THRESHOLD = 88;

export default function DeadlineBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const applyOffset = (isVisible: boolean) => {
      const offsetValue = isVisible ? `${BANNER_HEIGHT}px` : `${COLLAPSED_OFFSET}px`;
      document.documentElement.style.setProperty('--banner-offset', offsetValue);
    };

    const handleScroll = () => {
      const shouldShow = window.scrollY < HIDE_SCROLL_THRESHOLD;
      applyOffset(shouldShow);
      setVisible(prev => (prev === shouldShow ? prev : shouldShow));
    };

    applyOffset(true);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.setProperty('--banner-offset', `${COLLAPSED_OFFSET}px`);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] border-b border-slate-200/70 bg-white/90 px-4 py-1 transition-all duration-200 ease-out backdrop-blur ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ minHeight: BANNER_HEIGHT }}
    >
      <div className="container mx-auto flex items-center justify-center gap-2 text-[11px] font-medium text-slate-600 sm:gap-3 sm:text-xs">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[11px] text-slate-500 shadow-sm ring-1 ring-slate-200/60">
          <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" />
          Prazo termina em 22/10
        </span>
        <span className="hidden text-slate-300 sm:block">•</span>
        <a
          href="https://sigaa.ufersa.edu.br/sigaa/public/servicos_digitais/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full bg-[#4285F4]/10 px-3 py-1 text-[11px] text-[#1a73e8] transition-colors hover:bg-[#4285F4]/20 sm:text-xs"
        >
          Inscrever-se agora
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}
