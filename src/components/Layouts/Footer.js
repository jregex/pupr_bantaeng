import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className="bg-dark py-12 lg:py-16">
            <div className="container">
                <div className="w-full px-4 flex flex-col items-center text-center mb-4">
                    <Image
                        src={require('assets/img/footer-logo.png')}
                        className="w-[100px] mb-2"
                    />
                    <h5 className="text-gray-100 text-sm lg:text-md">
                        &copy; copyright {new Date().getFullYear()} develop with{' '}
                        <FontAwesomeIcon
                            icon={faFire}
                            size="24"
                            className="text-primary"
                        />{' '}
                        by
                        <a
                            href="https://github.com/jregex"
                            target="_blank"
                            className="text-primary hover:text-slate-600"
                            rel="noreferrer">
                            &nbsp;Jregex
                        </a>
                    </h5>
                </div>
                <div className="w-full px-4 flex flex-wrap">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <a className="text-sm text-white hover:text-primary cursor-pointer">
                            Contact
                        </a>
                        <br />
                        <a className="text-sm text-white hover:text-primary cursor-pointer">
                            About
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
