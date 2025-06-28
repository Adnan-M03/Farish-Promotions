import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Service from "./Service";
import About from "./About";
import WhySection from "./WhySection";
import Contact from "./Contact";
import Minfooter from "./Minfooter";



import "./index.css"

function App() {
    return (
        <>
            <Header/>
            <Main>
                <Service/>
                <About/>
                <WhySection/>
            </Main>
            <Footer>
                <Contact/>
                <Minfooter/>
            </Footer>
        </>
    );
}

export default App;