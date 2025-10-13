import { SlArrowDown } from "react-icons/sl";
export function Faq() {
    return (
        <section id="faq" className="min-h-screen bg-blue-700/10 w-full flex flex-col items-center justify-center py-22 px-8">
            <h2 className="md:text-4xl text-2xl font-bold text-blue-900 pt-8 pb-2 mb-4">FAQ</h2>
            <div className="w-full max-w-7xl rounded-xl flex flex-col items-center justify-center p-8 bg-white border border-zinc-300 shadow-md py-12 gap-8">
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium" >Não estudo na UFERSA ou não sou do curso de computação, posso me inscrever no evento?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Com certeza! Só é necessária uma conta no <span className="italic font-medium">gov.br</span>. Um dos objetivos do evento é capacitar alunos que desconhecem da área da computação.</p>
                </details>
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium">Posso me inscrever em mais de um minicurso por dia?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Não, os minicursos são todos ministrados no mesmo horário em diferentes laboratórios espalhados pelo LCC.</p>
                </details>
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium">Preciso me inscrever no evento na página do SIGAA antes de me inscrever nos minicursos?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Sim, é necessário se inscrever no evento, esperar aprovação e em sequência se inscrever em cada minicurso desejado.</p>
                </details>
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium">Não sei programar, posso ver algum minicurso?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Sim, há cursos sem pré-requisitos que aborda conceitos básicos desde o início.</p>
                </details>
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium">Posso ver algum minicurso sem ter os pré-requisitos necessários?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Sim, por sua conta e risco :{')'}</p>
                </details>
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium">
                        Onde serão os eventos?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Nos laboratórios do LCC, manhã e tarde</p>
                </details>
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium">
                        Haverá certificado de participação?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Sim! Será emitido certificado digital para todos os participantes que cumprirem os requisitos mínimos de participação. O certificado será disponibilizado após o evento através da plataforma SIGAA.</p>
                </details>
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium">
                        Qual a carga horária dos minicursos?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Cada minicurso tem carga horária de 4 horas, distribuídas em um único dia (manhã ou tarde). É possível participar de até 2 minicursos durante o evento (um em cada dia).</p>
                </details>
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium">
                        Quais os critérios para receber o certificado?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Para receber o certificado é necessário ter pelo menos 75% de presença no(s) minicurso(s) em que se inscreveu. A presença será computada através de lista de frequência durante as atividades.</p>
                </details>
            </div>
        </section>
    )
}