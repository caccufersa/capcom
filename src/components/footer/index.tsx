import epcLogo from '../../assets/epcLogo.png';
import caccLogo from '../../assets/_Centro Acadêmico de Ciência da Computação.png';
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

export function Footer() {
    return (
        <footer className="bg-gradient-to-l from-blue-900 to-blue-500 flex justify-between w-full lg:h-58 h-128 px-12 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] lg:flex-row flex-col">
            <div className='flex flex-1 items-center justify-center gap-6'>
                <img src={epcLogo} alt="Logo Escola Piloto de Computação" className='lg:w-20 w-12 rounded-full' />
                <img src={caccLogo} alt="Logo Centro Acadêmico de Ciência da Computação" className='lg:w-30 w-22' />
            </div>
            <div className='flex flex-col flex-1 items-center justify-center'>
                <h3 className='text-white font-medium md:text-xl text-lg'>Contato</h3>
                <div className='flex flex-col gap-2'>
                    <a
                        href='https://mail.google.com/mail/?view=cm&fs=1&to=escolapilotodecomputacao@gmail.com&su=Assunto&body=Mensagem'
                        target='_blank'
                        className='text-white flex items-center gap-2 md:text-base text-sm'>
                        <MdOutlineMail color='#fff' className='md:text-2xl text-xl' />
                        escolapilotodecomputacao@gmail.com
                    </a>
                    <a
                        href='https://www.instagram.com/epc_ufersa/'
                        target='_blank'
                        className='text-white flex items-center gap-2 md:text-base text-sm'>
                        <FaInstagram color='#fff' className='md:text-2xl text-xl' />
                        @epc_ufersa
                    </a>
                    <a
                        href='https://mail.google.com/mail/?view=cm&fs=1&to=caccufersa@gmail.com&su=Assunto&body=Mensagem'
                        target='_blank'
                        className='text-white flex items-center gap-2 md:text-base text-sm'>
                        <MdOutlineMail color='#fff' className='md:text-2xl text-xl' />
                        caccufersa@gmail.com
                    </a>
                    <a
                        href='https://www.instagram.com/cacc.ufersa/'
                        target='_blank'
                        className='text-white flex items-center gap-2 md:text-base text-sm'>
                        <FaInstagram color='#fff' className='md:text-2xl text-xl' />
                        @cacc.ufersa
                    </a>
                </div>
            </div>
            <div className='flex flex-col items-center flex-1 justify-center gap-2'>
                <h3 className='text-white font-medium md:text-xl text-lg'>Localização</h3>
                <GrMapLocation color='#fff' className='md:text-2xl text-xl' />
                <p className='text-white flex items-center gap-2 max-w-96 text-center md:text-base text-sm'>
                    R. Francisco Mota, 572 - Pres. Costa e Silva, Mossoró - RN | CEP: 59.625-900, +55 84 3317-8200
                    CNPJ: 24.529.265/0001-40
                </p>
            </div>
        </footer>
    )
}