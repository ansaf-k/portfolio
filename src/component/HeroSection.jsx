import "../style/Header.css"

const HeroSection = () => {
    return (
        <div className="hero h-[90vh] bg-black flex">
            {/* name section */}
            <div className="w-full flex justify-center content-center items-center group">
                <div className="flex flex-col">
                    <p className="pl-2 text-beige flex justify-start items-start text-xl font-medium">muhammed</p>
                    <h1 className="text-red font-medium text-9xl">ANSAF</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;