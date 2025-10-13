import capcomLogo from '../../../assets/capcom-logo.png';

export function Header() {
    return (
        <header className="z-50 fixed top-12 sm:top-14 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 max-w-5xl mx-auto flex items-center justify-center rounded-full bg-white md:h-16 h-14 border-2 border-slate-200 shadow-md">
            <nav className="flex md:justify-between md:gap-0 gap-4 justify-center items-center w-full px-5 sm:px-8 md:px-12">
                <a href="#welcome" className="flex-shrink-0">
                    <img src={capcomLogo} alt="Logo capcom" className="md:w-24 w-20" />
                </a>
                <div className='flex gap-3 sm:gap-4 md:gap-16'>
                    <a href="#infos" className="font-medium text-slate-700 text-sm sm:text-base md:text-lg transition-all hover:text-blue-600">Sobre</a>
                    <a href="#minicourse" className="font-medium text-slate-700 text-sm sm:text-base md:text-lg transition-all hover:text-blue-600 whitespace-nowrap">Minicursos</a>
                    <a href="#instructions" className="font-medium text-slate-700 text-sm sm:text-base md:text-lg transition-all hover:text-blue-600 hidden sm:inline">Inscrições</a>
                    <a href="#faq" className="font-medium text-slate-700 text-sm sm:text-base md:text-lg transition-all hover:text-blue-600">FAQ</a>
                </div>
            </nav>
        </header>
    )
}