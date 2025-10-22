import ufersa from '../../assets/patrocinadores/ufersa.webp';
import ccen from '../../assets/patrocinadores/ccen.webp';
import proec from '../../assets/patrocinadores/proec.webp';
import prograd from '../../assets/patrocinadores/prograd.webp';
import eldorado from '../../assets/patrocinadores/eldorado.webp';
import fgd from '../../assets/patrocinadores/fgd.webp';
import ibm from '../../assets/patrocinadores/IBM.webp';
import sbc from '../../assets/patrocinadores/sbc.webp';
import uern from '../../assets/patrocinadores/uern.webp';

const sponsors = [
    {
        name: 'UFERSA',
        logo: ufersa,
        description: 'Universidade Federal Rural do Semi-Árido'
    },
    {
        name: 'CCEN',
        logo: ccen,
        description: 'Centro de Ciências Exatas e Naturais'
    },
    {
        name: 'PROEC',
        logo: proec,
        description: 'Pró-Reitoria de Extensão e Cultura'
    },
    {
        name: 'PROGRAD',
        logo: prograd,
        description: 'Pró-Reitoria de Graduação'
    },
    {
        name: 'Instituto Eldorado',
        logo: eldorado,
        description: 'Centro de Pesquisa e Inovação'
    },
    {
        name: 'FGD',
        logo: fgd,
        description: 'Fundação Guimarães Duque'
    },
    {
        name: 'IBM',
        logo: ibm,
        description: 'International Business Machines'
    },
    {
        name: 'SBC',
        logo: sbc,
        description: 'Sociedade Brasileira de Computação'
    },
    {
        name: 'UERN',
        logo: uern,
        description: 'Universidade do Estado do Rio Grande do Norte'
    }
];

export function Sponsors() {
    return (
        <section className="relative bg-white py-16 md:py-20 px-4 border-b border-slate-200 overflow-hidden">
            {/* Background pattern muito sutil */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(45deg, #f1f5f9 25%, transparent 25%), linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f1f5f9 75%), linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}></div>
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 mb-3">
                        Apoio e Realização
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base">
                        Instituições que tornam este evento possível
                    </p>
                </div>

                {/* Sponsors Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.name}
                            className="bg-white rounded-xl p-6 flex flex-col items-center justify-center border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="w-full h-20 object-contain mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                            <p className="text-xs text-center text-slate-500 leading-tight">
                                {sponsor.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
