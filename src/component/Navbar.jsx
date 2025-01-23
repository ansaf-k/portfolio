import { Link } from "react-router"
import "../style/Header.css"

const Navbar = () => {

    return (
        <>
            <div className="fixed top-0 w-full">
                <nav className="main bg-beige text-gray w-100 px-8 py-3 md:px-auto">
                    <div className="uppercase text-xl md:h-16 h-[10vh] mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                        <div className="md:order-1">
                            <Link className="hover:text-olive hover:text-2xl" to={'/'}>A</Link>
                            <Link className="hover:text-olive hover:text-2xl" to={'/'}>n</Link>
                            <Link className="hover:text-olive hover:text-2xl" to={'/'}>s</Link>
                            <Link className="hover:text-olive hover:text-2xl" to={'/'}>a</Link>
                            <Link className="hover:text-olive hover:text-2xl" to={'/'}>f</Link>
                        </div>
                        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                            <ul className="text-gray flex justify-stretch">
                                <li className="md:px-4 md:py-2 hover:text-olive duration-300 transition-all"><Link to={'#'}>Work</Link></li>
                                <li className="md:px-4 md:py-2 hover:text-olive duration-300 transition-all"><Link to={'#'}>About</Link></li>
                            </ul>
                        </div>
                        <div className="order-2 md:order-3">
                            <button className="px-4 py-2 text-gray-50 rounded-xl flex items-center gap-2">
                                <Link to={'/linked'}>
                                    <i className='hover:text-olive duration-300 transition-all hover:scale-125 ease-in-out bx bxl-linkedin-square'></i>
                                </Link>
                                <Link to={'/github'}>
                                    <i className='hover:text-olive duration-300 transition-all hover:scale-125 ease-in-out bx bxl-github' ></i>
                                </Link>
                            </button>
                        </div>
                    </div>
                </nav >
            </div >
        </>
    )
}

export default Navbar