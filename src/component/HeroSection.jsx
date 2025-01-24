import "../style/Header.css"

const HeroSection = () => {
    return (
        <div className="hero w-full h-screen bg-black">
                {/* 1st */}
                <div className="h-screen w-1/2 bg-beige">
                        <div className="flex justify-center items-center h-full">
                            <img className="h-[40vh] w-[40vh] object-cover" src="../src/assets/IMG_3604.JPG" alt="" />
                        </div>
                </div>
                {/* 2nd */}
                <div className="h-screen w-1/2 bg-black">
                   
                </div>
        </div>
    )
}

export default HeroSection;