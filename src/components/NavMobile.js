function NavMobile({ showMenu, active }) {
    let listItem = [
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
                    <svg
                        role="img"
                        className="fill-current"
                        width={30}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Microsoft</title>
                        <path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="fill-current"
                        width={36}>
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                )}
            </button>
            <nav
                className={` shadow-lg bg-white/90 shadow-slate-300 right-0 max-w-[400px] w-full top-full lg:block lg:static lg:max-w-full lg:bg-transparent lg:shadow-none ${
                    active ? 'hidden' : 'absolute'
                }`}>
                <ul className="block lg:flex">
                    {listItem.map(({ text, target }) => (
                        <li
                            key={text}
                            className="group py-2 px-full hover:cursor-pointer">
                            <a
                                className="text-lg text-dark mx-8 flex group-hover:text-primary"
                                href={target}>
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default NavMobile
