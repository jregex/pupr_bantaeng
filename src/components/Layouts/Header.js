import { useEffect, useState } from 'react'
import NavMobile from '../NavMobile'

function Header() {
    const [isi, setIsi] = useState('')
    const [active, setActive] = useState(true)
    const showMenu = () => {
        setActive(!active)
    }
    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 40) {
            setIsi('navbar-fix')
        } else {
            setIsi('absolute bg-transparent')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={`${isi} top-0 left-0 w-full flex items-center z-10`}>
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a
                            href="#home"
                            className="font-bold text-xl text-primary block py-6 lg:text-xl">
                            DPUPR Bantaeng
                        </a>
                    </div>
                    <div className="px-4 flex items-center">
                        <NavMobile active={active} showMenu={showMenu} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
