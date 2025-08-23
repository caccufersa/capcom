import capcomLogo from '../../../assets/capcom-logo.png';

export function Header() {
    return (
        <header className="z-50 fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 max-w-5xl mx-auto flex items-center justify-center rounded-full bg-white md:h-16 h-12 border-2 border-zinc-300 shadow-md">
            <nav className="flex md:justify-between md:gap-0 gap-4 justify-center items-center w-full px-12">
                <a href="#welcome">
                    <img src={capcomLogo} alt="Logo capcom" className="md:w-24 w-12" />
                </a>
                <div className='flex gap-2 md:gap-16 sm:gap-8'>
                    <a href="#infos" className="font-medium text-zince-700 md:text-lg text-base transition-all hover:scale-105 hover:text-blue-700">Sobre</a>
                    <a href="#minicourse" className="font-medium text-zince-700 md:text-lg text-base transition-all hover:scale-105 hover:text-blue-700">Minicursos</a>
                    <a href="#instructions" className="font-medium text-zince-700 md:text-lg text-base transition-all hover:scale-105 hover:text-blue-700">Inscrições</a>
                    <a href="#instructor" className="font-medium text-zince-700 md:text-lg text-base transition-all hover:scale-105 hover:text-blue-700">Instrutores</a>
                    <a href="#faq" className="font-medium text-zince-700 md:text-lg text-base transition-all hover:scale-105 hover:text-blue-700">FAQ</a>
                </div>
            </nav>
        </header>
    )
}