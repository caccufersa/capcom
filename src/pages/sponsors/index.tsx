import ufersa from '../../assets/patrocinadores/ufersa.webp';
import ccen from '../../assets/patrocinadores/ccen.webp';
import proec from '../../assets/patrocinadores/proec.webp';
import prograd from '../../assets/patrocinadores/prograd.webp';
import eldorado from '../../assets/patrocinadores/eldorado.webp';
import ibm from '../../assets/patrocinadores/ibm.webp';
import fgd from '../../assets/patrocinadores/fgd.webp';

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
        name: 'El Dourado',
        logo: eldorado,
        description: 'Instituto El Dourado'
    },
    {
        name: 'IBM',
        logo: ibm,
        description: 'IBM'
    },
    {
        name: 'Fundação Guimarâes Duque',
        logo: fgd,
        description: 'FGD'
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
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Apoio e Realização
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base font-light">
                        Instituições que tornam este evento possível
                    </p>
                </div>

                {/* Sponsors Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
                    {sponsors.map((sponsor) => (
                        <div 
                            key={sponsor.name}
                            className="bg-white rounded-xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
                        >
                            <img 
                                src={sponsor.logo} 
                                alt={sponsor.name}
                                className="w-full h-16 sm:h-20 md:h-24 object-contain mb-2 sm:mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                            <p className="text-[10px] sm:text-xs text-center text-slate-500 leading-tight">
                                {sponsor.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
