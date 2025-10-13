export default function DeadlineBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-white border-b border-slate-200 py-2 px-4">
      <div className="container mx-auto flex flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-sm">
        <span className="text-slate-600">
          Inscrições até <span className="font-semibold text-slate-900">20/10</span>
        </span>
        <span className="text-slate-300">•</span>
        <a 
          href="https://sigaa.ufersa.edu.br/sigaa/public/servicos_digitais/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2 transition-colors whitespace-nowrap"
        >
          Inscrever-se →
        </a>
      </div>
    </div>
  );
}
