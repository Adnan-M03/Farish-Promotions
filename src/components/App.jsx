import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Service from "./Service";
import About from "./About";
import WhySection from "./WhySection";
import Contact from "./Contact";
import Minfooter from "./Minfooter";

import { useState, useEffect } from "react";
import bigLogo from "../assets/images/biglogo.png";
import aboutme from "../assets/images/aboutme.png";

import "./css/index.css"

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const totalImages = 2; // Number of critical images

    const handleImageLoad = () => {
        setImagesLoaded(prev => {
            const newCount = prev + 1;
            if (newCount >= totalImages) {
                setIsLoading(false);
            }
            return newCount;
        });
    };

    // Fallback timeout
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 5000); // 5 second fallback

        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <div className="appContainer" style={{
                display: isLoading ? "none" : "block"
            }}>
                <Header />
                <Main>
                    <Service />
                    <About />
                    <WhySection />
                </Main>
                <Footer>
                    <Contact />
                    <Minfooter />
                </Footer>
            </div>

            {/* Preload critical images */}
            <img
                src={bigLogo}
                alt=""
                style={{ display: 'none' }}
                onLoad={handleImageLoad}
            />
            <img
                src={aboutme}
                alt=""
                style={{ display: 'none' }}
                onLoad={handleImageLoad}
            />

            {isLoading && (
                <div className="spinner">
                    <div className="loader"></div>
                    <p>Loading...</p>
                </div>
            )}
        </>
    );
}

export default App;
