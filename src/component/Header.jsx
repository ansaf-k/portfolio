import { Link } from "react-router"
import "../style/hamburgermenu.css"

const Header = () => {

    return (
        <>
            <nav className="bg-gray-100 w-100 px-8 md:px-auto">
                <div className="uppercase md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="uppercase text-indigo-500 md:order-1">
                        <Link to={'/'}>Ansaf</Link>
                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex justify-between">
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to={'#'}>Work</Link></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to={'#'}>About</Link></li>
                        </ul>
                    </div>
                    <div className="order-2 md:order-3">
                        <button className="px-4 py-2 text-gray-50 rounded-xl flex items-center gap-2">
                            <Link to={'/linked'}>
                                <box-icon type='logo' name='linkedin-square' />
                            </Link>
                            <Link to={'/github'}>
                                <box-icon type='logo' name='github'></box-icon>
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header