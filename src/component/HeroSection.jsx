import "../style/Header.css"

const HeroSection = () => {
    return (
        <div className="hero h-[90vh] bg-black flex">
            {/* name section */}
            <div className="w-1/2 h-full flex justify-start items-center group">
                <div className="uppercase w-[50vw] flex flex-col pl-10">
                    <h1 className="name text-red font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                        Muhammed<br />Ansaf K
                    </h1>
                    <p className="text-gray text-2xl font-semibold">WEB DEVELOPER</p>
                </div>
            </div>

            {/* Image Section */}
            <div className="image w-1/2 h-[90vh] flex justify-center items-center content-center">
                <img
                    src="./src/assets/IMG_3604.JPG"
                    alt="Profile"
                    className="image h-[30vh] w-[30vh] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
            </div>
        </div>
    )
}

export default HeroSection;