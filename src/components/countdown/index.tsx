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
      // Data do evento: 23/10/2025 às 8h da manhã
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
    <section className="relative bg-white py-16 md:py-20 border-b border-slate-200 overflow-hidden">
      {/* Background pattern sutil */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(226, 232, 240, .3) 25%, rgba(226, 232, 240, .3) 26%, transparent 27%, transparent 74%, rgba(226, 232, 240, .3) 75%, rgba(226, 232, 240, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(226, 232, 240, .3) 25%, rgba(226, 232, 240, .3) 26%, transparent 27%, transparent 74%, rgba(226, 232, 240, .3) 75%, rgba(226, 232, 240, .3) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header minimalista */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-base sm:text-lg md:text-xl uppercase tracking-wider text-blue-600 font-medium mb-4 md:mb-6">
            23 e 24 de Outubro, 2025
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extralight text-slate-900">
            O evento começa em
          </h2>
        </div>

        {/* Countdown minimalista - todos na mesma linha */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl sm:text-5xl md:text-7xl font-extralight text-slate-900 mb-1 sm:mb-2 tabular-nums">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-slate-500 font-medium">
              Dias
            </div>
          </div>

          <div className="text-2xl sm:text-3xl md:text-5xl font-light text-slate-300 mb-6">:</div>

          <div className="text-center">
            <div className="text-3xl sm:text-5xl md:text-7xl font-light text-slate-900 mb-1 sm:mb-2 tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-slate-500 font-medium">
              Horas
            </div>
          </div>

          <div className="text-2xl sm:text-3xl md:text-5xl font-light text-slate-300 mb-6">:</div>

          <div className="text-center">
            <div className="text-3xl sm:text-5xl md:text-7xl font-light text-slate-900 mb-1 sm:mb-2 tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-slate-500 font-medium">
              Minutos
            </div>
          </div>

          <div className="text-2xl sm:text-3xl md:text-5xl font-light text-slate-300 mb-6">:</div>

          <div className="text-center">
            <div className="text-3xl sm:text-5xl md:text-7xl font-light text-slate-900 mb-1 sm:mb-2 tabular-nums">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-slate-500 font-medium">
              Segundos
            </div>
          </div>
        </div>

        {/* CTA minimalista */}
        <div className="text-center px-4">
          <a
            href="https://sigaa.ufersa.edu.br/sigaa/public/servicos_digitais/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto max-w-sm"
          >
            Garantir minha vaga
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-xs sm:text-sm text-slate-500 mt-4">
            Vagas limitadas • Inscrições até 22 de Outubro
          </p>
        </div>
      </div>
    </section>
  );
}
