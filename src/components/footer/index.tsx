import epcLogo from '../../assets/epcLogo.jpg';
import caccLogo from '../../assets/_Centro Acadêmico de Ciência da Computação.png';
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

export function Footer() {
    return (
        <footer className="bg-gradient-to-l from-blue-900 to-blue-500 flex justify-between w-full h-58 px-12 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className='flex flex-1 items-center justify-center gap-6'>
                <img src={epcLogo} alt="Logo Escola Piloto de Computação" className='w-32 rounded-full' />
                <img src={caccLogo} alt="Logo Centro Acadêmico de Ciência da Computação" className='w-32' />
            </div>
            <div className='flex flex-col flex-1 items-center justify-center'>
                <h3 className='text-white font-medium text-xl'>Contato</h3>
                <div className='flex flex-col gap-2'>
                    <p className='text-white flex items-center gap-2'>
                        <MdOutlineMail size={25} color='#fff' />
                        escolapilotodecomputacao@gmail.com
                    </p>
                    <p className='text-white flex items-center gap-2 '>
                        <FaInstagram size={25} color='#fff' />
                        @epc_ufersa
                    </p>
                    <p className='text-white flex items-center gap-2'>
                        <MdOutlineMail size={25} color='#fff' />
                        caccufersa@gmail.com
                    </p>
                    <p className='text-white flex items-center gap-2 '>
                        <FaInstagram size={25} color='#fff' />
                        @cacc.ufersa
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center flex-1 justify-center gap-2'>
                <h3 className='text-white font-medium text-xl'>Localização</h3>
                <GrMapLocation size={25} color='#fff' />
                <p className='text-white flex items-center gap-2 max-w-96 text-center'>
                    R. Francisco Mota, 572 - Pres. Costa e Silva, Mossoró - RN | CEP: 59.625-900, +55 84 3317-8200
                    CNPJ: 24.529.265/0001-40
                </p>
            </div>
        </footer>
    )
}