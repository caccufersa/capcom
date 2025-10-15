import { useEffect, useState } from 'react';
import { Header } from './header';
import { Hamburguer } from './hamburguer';

export function Nav() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {

        function handleResize() {
            if (window.innerWidth < 960) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return (
        <>
            {isMobile ?
                (<Hamburguer />)
                :
                (<Header />)
            }
        </>
    )
}