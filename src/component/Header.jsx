import { useState } from "react";
import { Link } from "react-router"
import { Spin as Hamburger } from 'hamburger-react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="text-indigo-500 md:order-1">
                        <Link to={'/'}>Ansaf</Link>
                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to={'#'}>Home</Link></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to={'#'}>Work</Link></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to={'#'}>About</Link></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to={'#'}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="order-2 md:order-3">
                        <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                            <div className="z-50">
                                <Hamburger toggled={isOpen} toggle={setIsOpen} />
                            </div>

                            {/* menu overlay */}
                            <div
                                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center text-white text-2xl space-y-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                                    } transition-transform duration-300 z-40`}
                            >
                                <a href="#work" onClick={toggleMenu} className="hover:text-red-500">
                                    Work
                                </a>
                                <a href="#about" onClick={toggleMenu} className="hover:text-red-500">
                                    About
                                </a>
                                <a href="#contact" onClick={toggleMenu} className="hover:text-red-500">
                                    Contact
                                </a>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header