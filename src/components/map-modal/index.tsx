import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MapModal({ isOpen, onClose }: MapModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">Localização do Evento</h3>
            <p className="text-sm text-slate-600 mt-1">Laboratório de Ciência da Computação - UFERSA</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Fechar mapa"
          >
            <IoClose size={24} className="text-slate-600" />
          </button>
        </div>

        {/* Mapa */}
        <div className="relative w-full h-[400px] sm:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1646587642877!2d-37.326613400000006!3d-5.206761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ba07ec488f7071%3A0x195359523efeb3d7!2sLCC!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa do LCC - UFERSA"
          />
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://www.google.com/maps/place/LCC/@-5.206761,-37.3266134,17z/data=!3m1!4b1!4m6!3m5!1s0x7ba07ec488f7071:0x195359523efeb3d7!8m2!3d-5.206761!4d-37.3240385!16s%2Fg%2F11vjgr9hny?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Abrir no Google Maps
            </a>
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              Fechar
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-3 text-center">
            Campus Central - UFERSA, Mossoró/RN
          </p>
        </div>
      </div>
    </div>
  );
}

export function useMapModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openMap = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsOpen(true);
  };

  const closeMap = () => {
    setIsOpen(false);
  };

  return { isOpen, openMap, closeMap };
}
