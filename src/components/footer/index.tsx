import epcLogo from '../../assets/epcLogo.png';
import caccLogo from '../../assets/_Centro Acadêmico de Ciência da Computação.png';
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { MapModal, useMapModal } from "../map-modal";

export function Footer() {
    const { isOpen, openMap, closeMap } = useMapModal();

    return (
        <>
        <footer className="relative w-full py-12 px-4 sm:px-8">
            {/* Refined minimal background: deeper gradient + subtle inset shadow + top divider */}
            <div aria-hidden className="absolute inset-0 -z-10">
                <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0f1724] via-[#0b2440] to-[#0b2a55]"
                    style={{ boxShadow: 'inset 0 -20px 50px rgba(2,6,23,0.6)' }}
                />
                {/* thin divider for separation */}
                <div className="absolute top-0 left-0 w-full h-px bg-white/6" />
            </div>
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-center lg:justify-evenly gap-10 lg:gap-12">
                    
                    {/* Logos */}
                    <div className='flex items-center justify-center gap-6 sm:gap-8 flex-shrink-0 lg:self-center'>    
                        <img src={epcLogo} alt="Logo Escola Piloto de Computação" className='w-20 sm:w-24 h-20 sm:h-24 object-contain rounded-full' />
                        <img src={caccLogo} alt="Logo Centro Acadêmico de Ciência da Computação" className='w-28 sm:w-32 h-auto object-contain' />
                    </div>
                    
                    {/* Contatos */}
                    <div className='flex flex-col items-center lg:items-start w-full lg:w-auto'>
                        <h3 className='text-slate-100 font-semibold text-lg md:text-xl mb-4'>Contatos</h3>
                        <div className='flex flex-col gap-3'>
                            <a
                                href='https://mail.google.com/mail/?view=cm&fs=1&to=escolapilotodecomputacao@gmail.com&su=Assunto&body=Mensagem'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-slate-100 flex items-start gap-2 text-sm hover:text-slate-200 transition-colors'>
                                <MdOutlineMail className='text-xl flex-shrink-0 mt-0.5' />
                                <span className="break-words leading-relaxed text-sm">escolapilotodecomputacao@gmail.com</span>
                            </a>
                            <a
                                href='https://www.instagram.com/epc_ufersa/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white flex items-center gap-2 text-sm hover:text-blue-200 transition-colors'>
                                <FaInstagram className='text-xl flex-shrink-0' />
                                @epc_ufersa
                            </a>
                            <a
                                href='https://mail.google.com/mail/?view=cm&fs=1&to=caccufersa@gmail.com&su=Assunto&body=Mensagem'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-slate-100 flex items-start gap-2 text-sm hover:text-slate-200 transition-colors'>
                                <MdOutlineMail className='text-xl flex-shrink-0 mt-0.5' />
                                <span className="break-words leading-relaxed text-sm">caccufersa@gmail.com</span>
                            </a>
                            <a
                                href='https://www.instagram.com/cacc.ufersa/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white flex items-center gap-2 text-sm hover:text-blue-200 transition-colors'>
                                <FaInstagram className='text-xl flex-shrink-0' />
                                @cacc.ufersa
                            </a>
                        </div>
                    </div>
                    
                    {/* Localização */}
                    <div className='flex items-start justify-center w-full lg:w-auto'>
                        <button 
                            onClick={openMap}
                            className='flex flex-col items-center lg:items-start gap-3 cursor-pointer hover:opacity-90 transition-opacity group'
                        >
                            <div className="flex items-center gap-2">
                                <h3 className='text-slate-100 font-semibold text-lg md:text-xl'>Localização</h3>
                                <GrMapLocation className='text-xl text-slate-100 group-hover:scale-110 transition-transform' />
                            </div>
                            <p className='text-slate-200 text-xs sm:text-sm text-center lg:text-left leading-relaxed max-w-xs'>
                                R. Francisco Mota, 572 - Pres. Costa e Silva<br/>
                                Mossoró - RN | CEP: 59.625-900<br/>
                                +55 84 3317-8200 | CNPJ: 24.529.265/0001-40
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </footer>

        {/* Modal do Mapa */}
        <MapModal isOpen={isOpen} onClose={closeMap} />
        </>
    )
}