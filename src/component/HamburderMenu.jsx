import { useState } from "react";

const HamburderMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div
                className="w-8 h-8 flex flex-col justify-between cursor-pointer z-50"
                onClick={toggleMenu}
            >
                <div
                    className={`h-1 w-full bg-gray-800 rounded transition-transform duration-300 ${isOpen ? "transform translate-y-3 rotate-45" : ""
                        }`}
                ></div>
                <div
                    className={`h-1 w-full bg-gray-800 rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
                        }`}
                ></div>
                <div
                    className={`h-1 w-full bg-gray-800 rounded transition-transform duration-300 ${isOpen ? "transform -translate-y-3 -rotate-45" : ""
                        }`}
                ></div>
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
        </>
    )
}

export default HamburderMenu