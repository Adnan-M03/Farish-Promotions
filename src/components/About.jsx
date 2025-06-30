function About(){
    return (
        <>
            <div className="aboutSection">
                <h2>About Us</h2>
                <p>At the heart of our agency is a commitment to helping businesses thrive in the dynamic digital landscape. We believe in a proactive, results-oriented approach to social media and digital marketing</p>
                <button>Schedule Now</button>
            </div>
        </>
    )
}


export default About;


/*      TAILWIND OPTION
<div className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-start px-xxl py-xxl"
                 style={{backgroundImage: "url('../src/assets/images/aboutme.png')"}}>
                { Dark overlay }
                <div className="absolute inset-0 bg-near-black bg-opacity-70"></div>
                
                { Content }
                <h2 className="relative z-10 text-left mb-md text-3xl text-white">About Us</h2>
                <p className="relative z-10 text-left mb-lg text-lg text-gray-50 max-w-2xl">
                    At the heart of our agency is a commitment to helping businesses thrive in the dynamic digital landscape. We believe in a proactive, results-oriented approach to social media and digital marketing
                </p>
                <button className="relative z-10 self-center bg-orange-primary hover:bg-orange-dark text-white border-none px-lg py-sm text-base rounded cursor-pointer transition-colors duration-200">
                    Schedule Now
                </button>
            </div>
*/