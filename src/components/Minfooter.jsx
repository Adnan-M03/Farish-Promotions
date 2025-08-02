import smalllogo from "../assets/images/smalllogo.png"
import logo from "../assets/images/logowriting2.png"
import tg from "../assets/images/social/Vector(2).svg"
import phone from "../assets/images/social/Vector.svg"
import mail from "../assets/images/social/mail.svg"
import ig from "../assets/images/social/Logo Instagram.svg"


function Minfooter() {
    return (
        <>
            <div id="map" className="map">
                <p className="map-bar sm">Come to our Location</p>
                {/* <p>
                    <strong>Address:</strong> <br /> Bole Edna Mall,Gulf Aziz Building, no.203 <br />
                    <strong>Office Hours:</strong> <br /> Mon - Fri: 9:00 AM - 5:00 PM EAT
                </p> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.750994939534!2d38.78250907367282!3d8.995045289522306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84fdf566b8a9%3A0x3cfc05836ed024a4!2zR3VsZiBBeml6IEJ1aWxkaW5nIHwgQm9sZSBNZWRoYW5pYWxlbSB8IOGMjuGIjeGNjSDhiqDhi7LhiLUg4YiF4YqV4Y2DIHwg4Ymm4YiMIOGImOGLteGIg-GKkuGKoOGIiOGInQ!5e0!3m2!1sen!2set!4v1751134433234!5m2!1sen!2set"
                    height="300px"
                    style={{
                        border: 0,
                        width: "100vw"
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen="">
                </iframe>
            </div>


            <div className="footer-grid">
                <div className="first">
                    <div className="footlogo">
                        <img src={smalllogo} alt="" />
                        <img src={logo} alt="" />

                        <p className="xm" >Farish Promotion was born from a passion for seeing brands truly shine online. Our dedicated team is here to craft creative, results-driven strategies that help you connect and grow.</p>
                    </div>
                    <div className="socials">
                        <a href="https://t.me/ibrahimfarisss" target="_blank" rel="noopener noreferrer">
                            <img src={tg} alt="" />
                        </a>
                        <a href="tel:+251944565300">
                            <img src={phone} alt="" />
                        </a>
                        <a href="#contact">
                            <img src={mail} alt="" />
                        </a>
                        <a href="https://www.instagram.com/farishpromotions/" target="_blank" rel="noopener noreferrer">
                            <img src={ig} alt="" />
                        </a>
                    </div>
                </div>
                <div className="second">
                    <div className="company">
                        <p className="title sm">Company</p>
                        <a href="#about">About Us</a>
                        <a href="#service">Services</a>
                        <a href="">FAQs</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="address">
                        <p className="title sm">Our Address</p>
                        <p className="xm" ><span>Office Hours:<br /> Mon - Fri: 9:00 AM - 5:00 PM EAT </span>Bole Edna Mall,<br />Gulf Aziz Building,<br /> no.203</p>
                    </div>
                </div>
                <div className="terms">
                    <p className="sm">© 2025 Farish Promotions. All rights reserved.</p>
                    <p className="xm">Terms of Service</p>
                    <p className="xm">Privacy Policy</p>
                    <p className="xm">Cookie Policy</p>
                </div>
            </div>
        </>
    )
}
// footlogo display flex horizontal
export default Minfooter;