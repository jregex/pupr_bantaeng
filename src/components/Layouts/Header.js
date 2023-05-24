import { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import ApplicationLogo from '../ApplicationLogo'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Header() {
    const [isi, setIsi] = useState('')
    const [active, setActive] = useState(true)
    const showMenu = () => {
        setActive(!active)
    }
    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 40) {
            setIsi('navbar-fix -px-2')
        } else {
            setIsi('absolute bg-white/60')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={`${isi} top-0 left-0 w-full flex items-center z-10`}>
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <motion.div
                        initial={{ opacity: 0, x: -500, y: 0 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        className="px-full">
                        <Link href="/">
                            <ApplicationLogo />
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 500, y: 0 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        className="px-4 flex items-center">
                        <Navbar active={active} showMenu={showMenu} />
                    </motion.div>
                </div>
            </div>
        </header>
    )
}

export default Header
