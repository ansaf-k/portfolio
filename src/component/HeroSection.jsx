import Marquee from "react-fast-marquee";
import "../style/Header.css"

const HeroSection = () => {
    return (
        <div className="hero h-screen bg-black flex items-center justify-center">
            <div className="flex h-full justify-center">
                <Marquee pauseOnClick>
                    <img className="h-72 w-[27rem] hover:brightness-50 hover:w-[30rem] transition-all duration-300 border-x-2 border-black object-cover" src="./src/assets/IMG_3604.JPG" alt="" />
                    <img className="h-72 w-[27rem] hover:brightness-50 hover:w-[30rem] transition-all duration-300 border-x-2 border-black object-cover" src="./src/assets/IMG_0884.HEIC" alt="" />
                    <img className="h-72 w-[27rem] hover:brightness-50 hover:w-[30rem] transition-all duration-300 border-x-2 border-black object-cover" src="./src/assets/IMG_3604.JPG" alt="" />
                    <img className="h-72 w-[27rem] hover:brightness-50 hover:w-[30rem] transition-all duration-300 border-x-2 border-black object-cover" src="./src/assets/IMG_0884.HEIC" alt="" />
                    <img className="h-72 w-[27rem] hover:brightness-50 hover:w-[30rem] transition-all duration-300 border-x-2 border-black object-cover" src="./src/assets/IMG_3604.JPG" alt="" />
                    <img className="h-72 w-[27rem] hover:brightness-50 hover:w-[30rem] transition-all duration-300 border-x-2 border-black object-cover" src="./src/assets/IMG_0884.HEIC" alt="" />
                </Marquee>
            </div>
        </div>
    )
}

export default HeroSection;