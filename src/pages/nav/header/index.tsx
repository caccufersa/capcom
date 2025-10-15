import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import capcomLogo from '../../../assets/capcom-logo.png';

const NAV_LINKS = [
    { href: '#minicourse', label: 'Minicursos' },
    { href: '#maratona', label: 'Maratona' },
    { href: '#gamejam', label: 'GameJam' },
    { href: '#game', label: 'Jogo' },
    { href: '#faq', label: 'FAQ' }
];

type IndicatorState = {
    left: number;
    width: number;
    opacity: number;
};

export function Header() {
    const shellRef = useRef<HTMLDivElement | null>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [indicator, setIndicator] = useState<IndicatorState>({ left: 0, width: 0, opacity: 0 });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const updateIndicator = useCallback((index: number | null) => {
        const shell = shellRef.current;
        const link = index !== null ? linkRefs.current[index] : null;
        if (!shell || !link) {
            setIndicator(current => ({ ...current, opacity: 0 }));
            return;
        }

        const shellRect = shell.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();
        setIndicator({
            left: linkRect.left - shellRect.left,
            width: linkRect.width,
            opacity: 1
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (hoveredIndex === null) {
            setIndicator(current => ({ ...current, opacity: 0 }));
            return;
        }
        updateIndicator(hoveredIndex);
    }, [hoveredIndex, updateIndicator]);

    useEffect(() => {
        const handleResize = () => updateIndicator(hoveredIndex);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [hoveredIndex, updateIndicator]);

    const containerClasses = useMemo(
        () =>
            `relative flex items-center justify-between overflow-hidden rounded-full border border-slate-200/70 px-4 py-2.5 shadow-sm transition-all duration-300 ease-out sm:px-6` +
            (isScrolled ? ' bg-white/92 backdrop-blur-md' : ' bg-white/80 backdrop-blur') +
            (isScrolled ? ' shadow-[0_10px_30px_-20px_rgba(15,23,42,0.45)]' : ''),
        [isScrolled]
    );

    return (
        <header
            className="fixed left-0 right-0 z-50"
            style={{ top: 'var(--banner-offset, 28px)' }}
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div ref={shellRef} className={containerClasses}>
                    <a
                        href="#welcome"
                        className="flex items-center gap-2 rounded-full px-2 py-1 text-slate-700 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        <img
                            src={capcomLogo}
                            alt="CAPCOM 2025"
                            className="h-7 w-auto sm:h-8"
                            loading="lazy"
                        />
                        <span className="hidden text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 sm:block">
                            Edição 2025
                        </span>
                    </a>

                    <nav className="relative flex items-center gap-1.5" aria-label="Navegação principal">
                        <span
                            className="pointer-events-none absolute top-1 bottom-1 rounded-full bg-slate-100 transition-all duration-300 ease-out"
                            style={{
                                opacity: indicator.opacity,
                                transform: `translateX(${indicator.left}px)`,
                                width: `${indicator.width}px`
                            }}
                        />
                        {NAV_LINKS.map((link, index) => (
                            <a
                                key={link.href}
                                ref={element => {
                                    linkRefs.current[index] = element;
                                }}
                                href={link.href}
                                className="relative z-10 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(current => (current === index ? null : current))}
                                onFocus={() => setHoveredIndex(index)}
                                onBlur={() => setHoveredIndex(current => (current === index ? null : current))}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}