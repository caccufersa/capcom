import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isEventPassed, setIsEventPassed] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Data do evento: 23/10/2025 às 08:00
      const eventDate = new Date('2025-10-23T08:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        setIsEventPassed(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isEventPassed) {
    return (
      <div className="bg-white py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-slate-900 mb-2">CAPCOM 2025 está acontecendo</h2>
          <p className="text-slate-600">Aproveite os minicursos e capacitações</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Elegant Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white text-xs font-medium mb-4 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            23 de Outubro, 2025 · 8:00
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-2">
            Faltam apenas
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto"></div>
        </div>

        {/* Minimal Countdown */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-10">
          {/* Dias */}
          <div className="group">
            <div className="relative">
              <div className="text-5xl sm:text-6xl md:text-7xl font-extralight text-slate-900 tabular-nums transition-all group-hover:scale-105">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-2 uppercase tracking-[0.2em] font-light text-center">
              Dias
            </div>
          </div>

          <div className="text-3xl sm:text-4xl md:text-5xl font-extralight text-slate-300 pb-6">:</div>

          {/* Horas */}
          <div className="group">
            <div className="relative">
              <div className="text-5xl sm:text-6xl md:text-7xl font-extralight text-slate-900 tabular-nums transition-all group-hover:scale-105">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-2 uppercase tracking-[0.2em] font-light text-center">
              Horas
            </div>
          </div>

          <div className="text-3xl sm:text-4xl md:text-5xl font-extralight text-slate-300 pb-6">:</div>

          {/* Minutos */}
          <div className="group">
            <div className="relative">
              <div className="text-5xl sm:text-6xl md:text-7xl font-extralight text-slate-900 tabular-nums transition-all group-hover:scale-105">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-2 uppercase tracking-[0.2em] font-light text-center">
              Min
            </div>
          </div>

          <div className="text-3xl sm:text-4xl md:text-5xl font-extralight text-slate-300 pb-6">:</div>

          {/* Segundos */}
          <div className="group">
            <div className="relative">
              <div className="text-5xl sm:text-6xl md:text-7xl font-extralight text-slate-900 tabular-nums transition-all group-hover:scale-105">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-2 uppercase tracking-[0.2em] font-light text-center">
              Seg
            </div>
          </div>
        </div>

        {/* Minimal CTA */}
        <div className="text-center space-y-4">
          <p className="text-slate-600 text-sm font-light">
            Vagas limitadas · Inscrições até 22 de Outubro
          </p>
          <a 
            href="https://sigaa.ufersa.edu.br/sigaa/public/servicos_digitais/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all hover:gap-3 group"
          >
            Garantir minha vaga
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
