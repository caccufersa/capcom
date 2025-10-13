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
        <footer className="bg-gradient-to-l from-blue-900 to-blue-500 w-full py-12 px-4 sm:px-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-start justify-center lg:justify-evenly gap-10 lg:gap-12">
                    
                    {/* Logos */}
                    <div className='flex items-center justify-center gap-6 sm:gap-10 flex-shrink-0 lg:self-center'>    
                        <img src={epcLogo} alt="Logo Escola Piloto de Computação" className='w-20 sm:w-24 h-20 sm:h-24 object-contain rounded-full' />
                        <img src={caccLogo} alt="Logo Centro Acadêmico de Ciência da Computação" className='w-24 sm:w-32 h-auto object-contain' />
                    </div>
                    
                    {/* Contatos */}
                    <div className='flex flex-col items-center lg:items-start w-full lg:w-auto'>
                        <h3 className='text-white font-semibold text-lg md:text-xl mb-4'>Contatos</h3>
                        <div className='flex flex-col gap-3'>
                            <a
                                href='https://mail.google.com/mail/?view=cm&fs=1&to=escolapilotodecomputacao@gmail.com&su=Assunto&body=Mensagem'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white flex items-start gap-2 text-sm hover:text-blue-200 transition-colors'>
                                <MdOutlineMail className='text-xl flex-shrink-0 mt-0.5' />
                                <span className="break-words leading-relaxed">escolapilotodecomputacao@gmail.com</span>
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
                                className='text-white flex items-start gap-2 text-sm hover:text-blue-200 transition-colors'>
                                <MdOutlineMail className='text-xl flex-shrink-0 mt-0.5' />
                                <span className="break-words leading-relaxed">caccufersa@gmail.com</span>
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
                                <h3 className='text-white font-semibold text-lg md:text-xl'>Localização</h3>
                                <GrMapLocation className='text-xl text-white group-hover:scale-110 transition-transform' />
                            </div>
                            <p className='text-white text-xs sm:text-sm text-center lg:text-left leading-relaxed max-w-xs'>
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