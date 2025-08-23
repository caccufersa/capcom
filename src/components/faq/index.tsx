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
                    <p className="pb-4">Sim, as recomendações para quem não tem experiência são o minicurso de Robótica, linguagem R, Python Pandas, Teoria dos Números e PowerBI. Há mais recomendações ao apertar o botão 'Sou aluno de outro curso'.</p>
                </details>
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium">Posso ver algum minicurso ter os pré-requesitos necessários?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Sim, por sua conta e risco :{')'}</p>
                </details>
                <details className="w-full max-w-6xl border-b border-zinc-300">
                    <summary className="flex items-center justify-between pb-4 font-medium">
                        Onde serão os eventos?
                        <SlArrowDown size={15} />
                    </summary>
                    <p className="pb-4">Nos laboratórios do LCC</p>
                </details>
            </div>
        </section>
    )
}