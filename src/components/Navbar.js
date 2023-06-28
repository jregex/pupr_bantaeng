import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { hoverDropdown } from './hoverDropdown'
import { useRouter } from 'next/router'
function Navbar({ showMenu, active }) {
    const router = useRouter()
    const path = router.pathname
    const subpath = path.split('/')[1]
    const aktif = 'text-primary font-bold lg:scale-125'
    const nonaktif = 'text-gray-600 font-semibold'
    const listItem = [
        { text: 'Informasi', target: '#informasi' },
        { text: 'Peraturan', target: '#peraturan' },
        { text: 'Galeri', target: '#galeri' },
        { text: 'Kontak', target: '#kontak' },
    ]
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const dropdownRef = useRef(null)
    const dropdownRef2 = useRef(null)
    function handleDropdown() {
        setOpen(false)
    }
    function handleDropdown2() {
        setOpen2(false)
    }

    hoverDropdown(dropdownRef, handleDropdown)
    hoverDropdown(dropdownRef2, handleDropdown2)
    return (
        <>
            <button
                onClick={showMenu}
                id="humberger"
                name="hamburger"
                className="absolute right-2 cursor-pointer lg:hidden text-3xl text-slate-400 hover:text-primary flex items-center justify-center transition duration-200 ease-in-out">
                {active ? (
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-slate-400 hover:text-primary"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="text-slate-400 hover:text-primary"
                    />
                )}
            </button>
            <nav
                className={` shadow-2xl bg-white shadow rounded-xl right-0 w-full z-30 top-full lg:block lg:static lg:max-w-full lg:bg-transparent lg:shadow-none ${
                    active ? 'hidden' : 'absolute'
                }`}>
                <ul className="block lg:flex">
                    <li className="group py-2 px-full hover:cursor-pointer">
                        <Link
                            className={`text-sm mx-8 flex py-2 px-2 lg:px-0 lg:py-0 group-hover:text-primary group-hover:bg-slate-100 lg:group-hover:bg-transparent lg:group-hover:scale-125 lg:group-hover:transition lg:group-hover:ease-in-out lg:group-hover:duration-500 ${
                                path === '/' ? aktif : nonaktif
                            }`}
                            href="/">
                            Beranda
                        </Link>
                    </li>
                    <li
                        className="group py-2 px-full hover:cursor-pointer"
                        ref={dropdownRef}>
                        <a
                            className={`text-sm mx-8 flex py-2 px-2 lg:px-0 lg:py-0 group-hover:text-primary group-hover:bg-slate-100 lg:group-hover:bg-transparent lg:group-hover:scale-125 lg:group-hover:transition lg:group-hover:ease-in-out lg:group-hover:duration-500 ${
                                subpath === 'profil' ? aktif : nonaktif
                            }`}
                            href="#"
                            onMouseOver={() => setOpen(true)}
                            onClick={() => setOpen(true)}>
                            Profil
                        </a>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1 }}
                            className={`${
                                open ? '' : 'hidden'
                            } z-10 bg-white divide-y divide-gray-100 rounded-lg lg:shadow-lg relative w-full lg:w-60 lg:absolute`}>
                            <ul className="py-4 text-sm font-semibold px-2 text-gray-600 ml-6 lg:ml-0">
                                <li className="hover:bg-gray-100 hover:text-primary hover:cursor-pointer">
                                    <Link
                                        href="/profil/sejarah"
                                        className="block px-4 py-3">
                                        Sejarah lembaga
                                    </Link>
                                </li>
                                <li className="hover:bg-gray-100 hover:text-primary hover:cursor-pointer">
                                    <Link
                                        href="/profil/visimisi"
                                        className="block px-4 py-3">
                                        Visi misi
                                    </Link>
                                </li>
                                <li className="hover:bg-gray-100 hover:text-primary hover:cursor-pointer">
                                    <a
                                        href="/profil/tupoksi"
                                        className="block px-4 py-3">
                                        Tugas pokok dan fungsi
                                    </a>
                                </li>
                                <li className="hover:bg-gray-100 hover:text-primary hover:cursor-pointer">
                                    <Link
                                        href="/profil/struktur"
                                        className="block px-4 py-3">
                                        Struktur organisasi
                                    </Link>
                                </li>
                                <li className="hover:bg-gray-100 hover:text-primary hover:cursor-pointer">
                                    <Link href="#" className="block px-4 py-3">
                                        Sumber daya manusia
                                    </Link>
                                </li>
                                <li className="hover:bg-gray-100 hover:text-primary hover:cursor-pointer">
                                    <Link href="/" className="block px-4 py-3">
                                        Peta dan denah
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    </li>
                    <li
                        className="group py-2 px-full hover:cursor-pointer"
                        ref={dropdownRef2}>
                        <a
                            className={`text-sm mx-8 flex py-2 px-2 lg:px-0 lg:py-0 group-hover:text-primary group-hover:bg-slate-100 lg:group-hover:bg-transparent lg:group-hover:scale-125 lg:group-hover:transition lg:group-hover:ease-in-out lg:group-hover:duration-500 ${
                                subpath === 'infopublik' ? aktif : nonaktif
                            }`}
                            href="#"
                            onMouseOver={() => setOpen2(true)}
                            onClick={() => setOpen2(true)}>
                            Informasi publik
                        </a>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1 }}
                            className={`${
                                open2 ? '' : 'hidden'
                            } z-10 bg-white divide-y divide-gray-100 rounded-lg lg:shadow-lg relative w-full lg:w-60 lg:absolute`}>
                            <ul className="py-4 text-sm font-semibold px-2 text-gray-600 ml-6 lg:ml-0">
                                <li className="hover:bg-gray-100 hover:text-primary hover:cursor-pointer">
                                    <Link
                                        href="/infopublik/infografisjalan"
                                        className="block px-4 py-3">
                                        Infografis jalan
                                    </Link>
                                </li>
                                <li className="hover:bg-gray-100 hover:text-primary hover:cursor-pointer">
                                    <Link href="#" className="block px-4 py-3">
                                        Infografis pegawai
                                    </Link>
                                </li>
                                <li className="hover:bg-gray-100 hover:text-primary hover:cursor-pointer">
                                    <Link href="#" className="block px-4 py-3">
                                        Data & laporan
                                    </Link>
                                </li>
                                <li className="hover:bg-gray-100 hover:text-primary hover:cursor-pointer">
                                    <Link href="#" className="block px-4 py-3">
                                        Peta RTRW
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    </li>
                    {listItem.map(({ text, target }) => (
                        <li
                            key={text}
                            className="group py-2 px-full hover:cursor-pointer">
                            <Link
                                className="text-sm font-semibold text-gray-600 mx-8 flex py-2 px-2 lg:px-0 lg:py-0 group-hover:text-primary group-hover:bg-slate-100 lg:group-hover:bg-transparent lg:group-hover:scale-125 lg:group-hover:transition lg:group-hover:ease-in-out lg:group-hover:duration-500"
                                href={target}>
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
