import { FiUsers, FiCalendar } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MapModal, useMapModal } from "../map-modal";

export function Infos() {
    const { isOpen, openMap, closeMap } = useMapModal();

    return (
        <section id="infos" className="bg-slate-50 py-16 md:py-20 px-4 border-b border-slate-200">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 mb-3">
                        Informações Importantes
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                        Tudo que você precisa saber sobre o evento
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Quando */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full mb-4">
                            <FiCalendar className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="font-semibold text-slate-900 text-lg md:text-xl mb-3">Quando</h3>
                        <div className="space-y-1 text-sm md:text-base text-slate-600">
                            <p className="font-medium text-slate-900">23 e 24 de Outubro</p>
                            <p>Manhã: 8h às 12h</p>
                            <p>Tarde: 14h às 18h</p>
                        </div>
                    </div>

                    {/* Onde */}
                    <button
                        onClick={openMap}
                        className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 text-center hover:shadow-lg hover:border-blue-300 transition-all group cursor-pointer"
                    >
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full mb-4 group-hover:bg-blue-100 transition-colors">
                            <GrLocation className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="font-semibold text-slate-900 text-lg md:text-xl mb-3">Onde</h3>
                        <div className="space-y-1 text-sm md:text-base text-slate-600">
                            <p className="font-medium text-slate-900">LCC - UFERSA</p>
                            <p>Campus Mossoró</p>
                            <p className="text-blue-600 text-xs mt-2 group-hover:underline">
                                Ver no mapa →
                            </p>
                        </div>
                    </button>

                    {/* Para quem */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 text-center hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full mb-4">
                            <FiUsers className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="font-semibold text-slate-900 text-lg md:text-xl mb-3">Para Quem</h3>
                        <div className="space-y-1 text-sm md:text-base text-slate-600">
                            <p>Estudantes e interessados</p>
                            <p>em Computação</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal do Mapa */}
            <MapModal isOpen={isOpen} onClose={closeMap} />
        </section>
    )
}