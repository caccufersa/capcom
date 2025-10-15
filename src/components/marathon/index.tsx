import { SiCplusplus, SiPython } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { LuArrowUpRight, LuClock, LuFileText } from "react-icons/lu";
import marathonImg1 from '../../assets/marathon-1.jpg';
import marathonImg2 from '../../assets/marathon-2.jpg';

const registrationFormUrl = "https://forms.gle/inscricao-capcom-maratona";
const editalUrl = "#"; // Substituir pelo link do edital quando disponível

export function ProgrammingMarathon() {
  return (
    <section
      id="marathon"
      className="relative bg-white py-16 md:py-20 px-4 border-b border-slate-200"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Competição clássica
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Maratona de Programação
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            4 horas de desafios. 3 linguagens. Questões que testam lógica, estruturas de dados e clareza de código.
          </p>
        </div>

        {/* Grid com Imagens e Info */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Imagens das Edições Passadas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img 
                src={marathonImg2} 
                alt="Maratona CAPCOM - Foto em grupo" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img 
                src={marathonImg1} 
                alt="Maratona CAPCOM - Competidores" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-slate-900 mb-2">
                <LuClock size={20} />
                <span className="font-semibold text-lg">4 horas</span>
              </div>
              <p className="text-sm text-slate-600">Disputa contínua com checkpoints cronometrados</p>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Linguagens aceitas</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium">
                <SiCplusplus className="text-blue-600" size={18} />
                C++
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium">
                <DiJava className="text-blue-600" size={18} />
                Java
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium">
                <SiPython className="text-blue-600" size={18} />
                Python
              </span>
            </div>

            <div className="space-y-4 text-sm text-slate-600 mb-6">
              <div className="flex gap-3">
                <span className="text-slate-400 font-mono">01</span>
                <div>
                  <p className="font-medium text-slate-900">Aquecimento</p>
                  <p>Questões curtas de sintaxe e operações básicas</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-slate-400 font-mono">02</span>
                <div>
                  <p className="font-medium text-slate-900">Algoritmos</p>
                  <p>Busca, ordenação, grafos e programação dinâmica</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-slate-400 font-mono">03</span>
                <div>
                  <p className="font-medium text-slate-900">Desafio final</p>
                  <p>Caso aplicado com requisitos complexos</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-300">
              <p className="text-xs text-slate-500 leading-relaxed">
                Equipes de até 3 pessoas. Suporte acadêmico garantido durante toda a competição.
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all hover:scale-[1.02]"
          >
            Inscrever equipe
            <LuArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href={editalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-base bg-white hover:border-slate-300 hover:shadow-md transition-all"
          >
            <LuFileText className="w-5 h-5" />
            Ver edital
          </a>
        </div>
      </div>
    </section>
  );
}
