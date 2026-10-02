import { Link } from 'react-router-dom';
import capcomLogo from '../../../assets/logoCAPCOM26.svg';
import { BiPhotoAlbum } from 'react-icons/bi';
export function Header() {
    return (
        <header className="z-50 fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 max-w-5xl mx-auto flex items-center justify-center rounded-full bg-white h-12 sm:h-14 border border-slate-200 shadow-sm">
            <nav className="flex md:justify-between md:gap-0 gap-3 justify-center items-center w-full px-4 sm:px-6 md:px-10">
                <a href="/#welcome" className="flex-shrink-0">
                    <img src={capcomLogo} alt="Logo capcom" className="w-20 md:w-36" loading="lazy" decoding="async" />
                </a>
                <div className='flex gap-2 sm:gap-3 md:gap-12'>
                    <a href="/#cronograma" className="font-medium text-slate-700 text-xs sm:text-sm md:text-base transition-all hover:text-[#3D568F]">Cronograma</a>
                    <a href="/#minicursos" className="font-medium text-slate-700 text-xs sm:text-sm md:text-base transition-all hover:text-[#3D568F] whitespace-nowrap">Minicursos</a>
                    <a href="/#maratona" className="font-medium text-slate-700 text-xs sm:text-sm md:text-base transition-all hover:text-[#3D568F]">Maratona</a>
                    <a href="/#subscribe" className="font-medium text-slate-700 text-xs sm:text-sm md:text-base transition-all hover:text-[#3D568F] hidden sm:inline">Inscrições</a>
                    <a href="/#faq" className="font-medium text-slate-700 text-xs sm:text-sm md:text-base transition-all hover:text-[#3D568F]">FAQ</a>
                    <Link to="/galeria" className="font-medium text-slate-700 text-xs sm:text-sm md:text-base transition-all hover:text-[#3D568F]"><BiPhotoAlbum className="inline mr-1" />Galeria</Link>
                </div>
            </nav>
        </header>
    )
} 