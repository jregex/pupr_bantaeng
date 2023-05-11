import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
function NavMobile({ showMenu, active }) {
    const listItem = [
        { text: 'Home', target: '#home' },
        { text: 'Profile', target: '#profile' },
        { text: 'Public Information', target: '#public' },
        { text: 'Information', target: '#information' },
        { text: 'Rules', target: '#rules' },
        { text: 'Gallery', target: '#gallery' },
        { text: 'Contact', target: '#contact' },
    ]
    return (
        <>
            <button
                onClick={showMenu}
                id="humberger"
                name="hamburger"
                className="absolute right-4 cursor-pointer lg:hidden text-slate-400 hover:text-primary flex items-center justify-center transition duration-200 ease-in-out">
                {active ? (
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ fontSize: 36 }}
                        className="text-primay"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faTimes}
                        style={{ fontSize: 36 }}
                        className="text-primay"
                    />
                )}
            </button>
            <nav
                className={` shadow-2xl bg-white shadow rounded-xl right-0 max-w-[400px] w-full top-full lg:block lg:static lg:max-w-full lg:bg-transparent lg:shadow-none ${
                    active ? 'hidden' : 'absolute'
                }`}>
                <ul className="block lg:flex">
                    {listItem.map(({ text, target }) => (
                        <li
                            key={text}
                            className="group py-2 px-full hover:cursor-pointer">
                            <Link
                                className="text-lg text-dark mx-8 flex group-hover:text-primary lg:group-hover:scale-125 lg:group-hover:transition lg:group-hover:ease-in-out lg:group-hover:duration-500"
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

export default NavMobile
