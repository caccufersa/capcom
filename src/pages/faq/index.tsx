import { SlArrowDown } from "react-icons/sl";

export function Faq() {
    const faqs = [
        {
            question: "Não estudo na UFERSA ou não sou do curso de computação, posso me inscrever no evento?",
            answer: "Com certeza! Só é necessária uma conta no gov.br. Um dos objetivos do evento é capacitar alunos que desconhecem a área da computação."
        },
        {
            question: "Posso me inscrever em mais de um minicurso por dia?",
            answer: "Não, os minicursos são todos ministrados no mesmo horário em diferentes laboratórios espalhados pelo LCC."
        },
        {
            question: "Preciso me inscrever no evento na página do SIGAA antes de me inscrever nos minicursos?",
            answer: "Sim, é necessário se inscrever no evento, esperar aprovação e, em seguida, se inscrever em cada minicurso desejado."
        },
        {
            question: "Não sei programar, posso ver algum minicurso?",
            answer: "Sim, há cursos sem pré-requisitos que abordam conceitos básicos desde o início."
        },
        {
            question: "Posso ver algum minicurso sem ter os pré-requisitos necessários?",
            answer: "Sim, por sua conta e risco :)"
        },
        {
            question: "Onde serão os eventos?",
            answer: "Nos laboratórios do LCC, manhã e tarde"
        },
        {
            question: "Haverá certificado de participação?",
            answer: "Sim! Será emitido certificado digital para todos os participantes que cumprirem os requisitos mínimos de participação. O certificado será disponibilizado após o evento através da plataforma SIGAA."
        },
        {
            question: "Qual a carga horária dos minicursos?",
            answer: "Cada minicurso tem carga horária de 4 horas, distribuídas em um único dia (manhã ou tarde). É possível participar de até 2 minicursos durante o evento (um em cada dia)."
        },
        {
            question: "Quais os critérios para receber o certificado?",
            answer: "Para receber o certificado é necessário ter pelo menos 75% de presença no(s) minicurso(s) em que se inscreveu. A presença será computada através de lista de frequência durante as atividades."
        }
    ];

    return (
        <section id="faq" className="relative bg-slate-50 py-16 md:py-20 px-4 border-b border-slate-200">
            {/* Detalhe visual discreto */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50"></div>
            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base font-light">
                        Encontre respostas para as principais dúvidas sobre o evento
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all overflow-hidden">
                            <summary className="flex items-center justify-between p-5 font-medium text-slate-900 cursor-pointer list-none">
                                <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                                <SlArrowDown className="text-slate-400 transition-transform group-open:rotate-180 flex-shrink-0" size={18} />
                            </summary>
                            <div className="px-5 pb-5 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}