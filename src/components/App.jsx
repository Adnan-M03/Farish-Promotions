import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Service from "./Service";
import About from "./About";
import WhySection from "./WhySection";
import Contact from "./Contact";
import Minfooter from "./Minfooter";

import { useState, useEffect } from "react";

import "./css/index.css"

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoad = () => {
        setIsLoading(false);
        console.log(isLoading);
    }
    useEffect(() => {
        window.addEventListener("load", handleLoad);
        return () => {
            window.removeEventListener("load", handleLoad);
        }
    }, [])


    return (
        <>
            <div className="appContainer" style={{
                display: isLoading ? "hidden" : "visible"
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
            <div className="loader" style={{
                visibility: isLoading ? "visible" : "hidden"
            }} ></div>
        </>
    );
}

export default App;
