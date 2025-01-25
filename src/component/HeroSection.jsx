import "../style/Header.css"

const HeroSection = () => {
    return (
        <div className="hero flex w-full h-screen bg-black">
            
            {/* 1st */}
            <div className="h-screen w-1/2 bg-black">
                <div className="flex justify-center items-center h-full">
                    <h1 className="text-5xl text-white font-bold">Welcome to my portfolio</h1>
                </div>
            </div>

            {/* 2nd */}
            <div className="h-screen w-1/2 bg-beige">
                <div className="flex justify-center items-center h-full">
                    <img className="h-[50vh] w-[50vh] object-cover" src="../src/assets/IMG_3604.JPG" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;