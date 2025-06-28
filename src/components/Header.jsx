import "./Header.css"

function Header() {
    return (
        <>
            <header>
                <nav>
                    <div className="head-logo">
                        <img src="../src/assets/images/smalllogo.png" alt="" width={120}/>
                        <p>Farish Promotions</p>
                    </div>
                    <div className="head-nav">
                        <p>Service</p>
                        <p>About Us</p>
                        <button>Work With Us</button>
                    </div>
                </nav>
                <div>
                    <div className="head-texts">
                        <h1>Unlock your brands digital potential</h1>
                        <p>Transforming online presence into tangible growth and measurable success</p>
                        <button>Work With Us</button>
                    </div>
                    <img src="../src/assets/images/biglogo.png" alt="" width={120}/>
                </div>
            </header>
        </>
        // <Nav>
        // <Hero> two columbs
    );
}

export default Header;