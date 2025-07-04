import "./css/header.css"

function Header() {
    return (
        <>
            <header>
                <nav>
                    <div className="head-logo">
                        <img src="../src/assets/images/smalllogo.png" alt="Small logo on the navigation bar" />
                        <p id="p" className="lg" >FARISH PROMOTIONS</p>
                    </div>
                    <div className="head-nav">
                        <a href="#service">Our Services</a>
                        <a href="#about">About Us</a>
                        <a href="#contact"><button>Work With Us</button></a>

                    </div>
                </nav>
                <div className="head-section">
                    <div className="head-texts">
                        <h1>Unlock your brands digital potential</h1>
                        <p className="lg" >Transforming online presence into tangible growth and measurable success</p>
                        <a href="#contact"><button>Work With Us</button></a>


                    </div>
                    <img src="../src/assets/images/biglogo.png" alt="" />
                </div>
            </header>
        </>
        // <Nav>
        // <Hero> two columbs
    );
}

export default Header;