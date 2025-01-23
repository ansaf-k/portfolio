import { Link } from "react-router"
import "../style/Header.css"

const Navbar = () => {

    return (
        <>
            <div className="fixed top-0 w-full">
                <nav className="main bg-black text-darkbrown w-100 px-4 py-1 md:px-auto">
                    <div className=" text-xl md:h-16 h-28 mx-auto md:px-2 md:py-0.5 container flex items-start justify-between flex-wrap md:flex-nowrap">
                        <div className="md:order-1">
                            <Link className="text-orange hover:text-beige" to={'/'}>a</Link>
                            <Link className="text-orange hover:text-beige" to={'/'}>n</Link>
                            <Link className="text-orange hover:text-beige" to={'/'}>s</Link>
                            <Link className="text-orange hover:text-beige" to={'/'}>a</Link>
                            <Link className="text-orange hover:text-beige" to={'/'}>f</Link>
                        </div>
                        <div className=" order-2 md:order-2">
                            <button className="text-beige rounded-xl flex items-center gap-2">
                                <p>web developer</p>
                            </button>
                        </div>
                        <div className="text-beige order-3 w-full md:w-auto md:order-3">
                            <ul className="text-darkbrown flex">
                                <li className="md:px-1 md:py-1 flex hover:text-orange duration-300 transition-all"><Link to={'#'}>work</Link></li> <span>/</span>
                                <li className="md:px-1 md:py-1 hover:text-orange duration-300 transition-all"><Link to={'#'}>about</Link></li> <br /> <span>/</span>
                                <li className="md:px-1 md:py-1 hover:text-orange duration-300 transition-all"><Link to={'#'}>contact</Link></li>
                            </ul>
                        </div>
                        <div className="order-3 md:order-4">
                            <button className="px-2 py-1 text-beige rounded-xl flex items-center gap-2">
                                <Link to={'/linked'}>
                                    <i className='hover:text-orange duration-300 transition-all hover:scale-125 ease-in-out bx bxl-linkedin-square'></i>
                                </Link>
                                <Link to={'/github'}>
                                    <i className='hover:text-orange duration-300 transition-all hover:scale-125 ease-in-out bx bxl-github' ></i>
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