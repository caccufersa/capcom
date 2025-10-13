import capcomLogo from '../../../assets/capcom-logo.png';

export function Header() {
    return (
        <header className="z-50 fixed top-11 sm:top-12 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 max-w-5xl mx-auto flex items-center justify-center rounded-full bg-white h-12 sm:h-14 border border-slate-200 shadow-sm">
            <nav className="flex md:justify-between md:gap-0 gap-3 justify-center items-center w-full px-4 sm:px-6 md:px-10">
                <a href="#welcome" className="flex-shrink-0">
                    <img src={capcomLogo} alt="Logo capcom" className="w-16 sm:w-18 md:w-20" />
                </a>
                <div className='flex gap-2 sm:gap-3 md:gap-12'>
                    <a href="#infos" className="font-medium text-slate-700 text-xs sm:text-sm md:text-base transition-all hover:text-blue-600">Sobre</a>
                    <a href="#minicourse" className="font-medium text-slate-700 text-xs sm:text-sm md:text-base transition-all hover:text-blue-600 whitespace-nowrap">Minicursos</a>
                    <a href="#instructions" className="font-medium text-slate-700 text-xs sm:text-sm md:text-base transition-all hover:text-blue-600 hidden sm:inline">Inscrições</a>
                    <a href="#faq" className="font-medium text-slate-700 text-xs sm:text-sm md:text-base transition-all hover:text-blue-600">FAQ</a>
                </div>
            </nav>
        </header>
    )
}