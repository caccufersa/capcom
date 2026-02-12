import epcLogo from '../../assets/epcLogo.png';
import caccLogo from '../../assets/_Centro Acadêmico de Ciência da Computação.png';
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { MapModal, useMapModal } from "../../components/map-modal";

export function Footer() {
    const { isOpen, openMap, closeMap } = useMapModal();

    return (
        <>
        <footer className="relative w-full py-8 sm:py-12 px-4 sm:px-8">
            <div aria-hidden className="absolute inset-0 -z-10">
                <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0f1724] via-[#0b2440] to-[#0b2a55]"
                    style={{ boxShadow: 'inset 0 -20px 50px rgba(2,6,23,0.6)' }}
                />
                <div className="absolute top-0 left-0 w-full h-px bg-white/6" />
            </div>
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-evenly gap-8 sm:gap-10 lg:gap-12">
                    <div className='flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 flex-shrink-0 lg:self-center w-full lg:w-auto'>    
                        <img src={epcLogo} alt="Logo Escola Piloto de Computação" className='w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 object-contain rounded-full' />
                        <img src={caccLogo} alt="Logo Centro Acadêmico de Ciência da Computação" className='w-24 sm:w-28 lg:w-32 h-auto object-contain' />
                    </div>
                    
                    <div className='flex flex-col items-center lg:items-start w-full lg:w-auto px-4 sm:px-0'>
                        <h3 className='text-slate-100 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4'>Contatos</h3>
                        <div className='flex flex-col gap-2.5 sm:gap-3 w-full max-w-sm lg:max-w-none'>
                            <a
                                href='https://mail.google.com/mail/?view=cm&fs=1&to=escolapilotodecomputacao@gmail.com&su=Assunto&body=Mensagem'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-slate-100 flex items-start gap-2 text-xs sm:text-sm hover:text-slate-200 transition-colors'>
                                <MdOutlineMail className='text-lg sm:text-xl flex-shrink-0 mt-0.5' />
                                <span className="break-all sm:break-words leading-relaxed">escolapilotodecomputacao@gmail.com</span>
                            </a>
                            <a
                                href='https://www.instagram.com/epc_ufersa/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white flex items-center gap-2 text-xs sm:text-sm hover:text-blue-200 transition-colors'>
                                <FaInstagram className='text-lg sm:text-xl flex-shrink-0' />
                                @epc_ufersa
                            </a>
                            <a
                                href='https://mail.google.com/mail/?view=cm&fs=1&to=caccufersa@gmail.com&su=Assunto&body=Mensagem'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-slate-100 flex items-start gap-2 text-xs sm:text-sm hover:text-slate-200 transition-colors'>
                                <MdOutlineMail className='text-lg sm:text-xl flex-shrink-0 mt-0.5' />
                                <span className="break-all sm:break-words leading-relaxed">caccufersa@gmail.com</span>
                            </a>
                            <a
                                href='https://www.instagram.com/cacc.ufersa/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white flex items-center gap-2 text-xs sm:text-sm hover:text-blue-200 transition-colors'>
                                <FaInstagram className='text-lg sm:text-xl flex-shrink-0' />
                                @cacc.ufersa
                            </a>
                        </div>
                    </div>
                    
                    <div className='flex items-start justify-center w-full lg:w-auto px-4 sm:px-0'>
                        <button 
                            onClick={openMap}
                            className='flex flex-col items-center lg:items-start gap-2 sm:gap-3 cursor-pointer hover:opacity-90 transition-opacity group w-full max-w-sm lg:max-w-none'
                        >
                            <div className="flex items-center gap-2">
                                <h3 className='text-slate-100 font-semibold text-base sm:text-lg md:text-xl'>Localização</h3>
                                <GrMapLocation className='text-lg sm:text-xl text-slate-100 group-hover:scale-110 transition-transform' />
                            </div>
                            <p className='text-slate-200 text-xs sm:text-sm text-center lg:text-left leading-relaxed'>
                                R. Francisco Mota, 572 - Pres. Costa e Silva<br/>
                                Mossoró - RN | CEP: 59.625-900<br/>
                                +55 84 3317-8200 | CNPJ: 24.529.265/0001-40
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </footer>

        <MapModal isOpen={isOpen} onClose={closeMap} />
        </>
    )
}