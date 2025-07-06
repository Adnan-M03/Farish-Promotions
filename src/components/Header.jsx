import "./css/header.css";

import smallLogo from "../assets/images/smalllogo.png"
import bigLogo from "../assets/images/biglogo.png"

function Header() {

    return (
        <>
            <header>
                <nav>
                    <div className="head-logo">
                        <img src={smallLogo} alt="Small logo on the navigation bar" />
                        <p id="p" className="lg" >FARISH PROMOTIONS</p>
                    </div>
                    <div className="head-nav">
                        <a href="#service">Our Services</a>
                        <a href="#about">About Us</a>
                        <a href="#contact"><button className="btn" >Work With Us</button></a>

                    </div>
                </nav>
                <div className="head-section">
                    <div id="c" className="head-texts">
                        <h1>Unlock your brands digital potential</h1>
                        <p className="lg" >Transforming online presence into tangible growth and measurable success</p>
                        <a href="#contact"><button>Work With Us</button></a>


                    </div>
                    <img src={bigLogo} alt="" />
                </div>
            </header>
        </>
        // <Nav>
        // <Hero> two columbs
    );

}

export default Header;