import "../style/Header.css"

const HeroSection = () => {
    return (
        <div className="hero h-screen bg-beige flex flex-col justify-end items-center relative">
            {/* name section */}
            <div className="w-full flex justify-center items-center">
                <div className="hero-sub flex flex-col absolute bottom-0">
                    <p className="pl-2 text-gray flex justify-start items-start text-[20px] font-medium">muhammed</p>
                    <h1 className="text-olive font-medium text-[100px] sm:text-[250px] lg:text-[300px]">ANSAF</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;