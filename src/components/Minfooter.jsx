
function Minfooter(){
    return(
        <>
            <div className="map">
                {/* <p>
                    <strong>Address:</strong> <br /> Bole Edna Mall,Gulf Aziz Building, no.203 <br />
                    <strong>Office Hours:</strong> <br /> Mon - Fri: 9:00 AM - 5:00 PM EAT
                </p> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.750994939534!2d38.78250907367282!3d8.995045289522306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84fdf566b8a9%3A0x3cfc05836ed024a4!2zR3VsZiBBeml6IEJ1aWxkaW5nIHwgQm9sZSBNZWRoYW5pYWxlbSB8IOGMjuGIjeGNjSDhiqDhi7LhiLUg4YiF4YqV4Y2DIHwg4Ymm4YiMIOGImOGLteGIg-GKkuGKoOGIiOGInQ!5e0!3m2!1sen!2set!4v1751134433234!5m2!1sen!2set" 
                    height="300px" 
                    style={{border:0,
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
                        <img src="../src/assets/images/smalllogo.png" alt="" />
                        <img src="../src/assets/images/logowriting2.png" alt="" />
                        <p>Farish Promotion was born from a passion for seeing brands truly shine online. Our dedicated team is here to craft creative, results-driven strategies that help you connect and grow.</p>

                    </div>
                    <div className="socials">
                        <a href="">
                            <img src="../src/assets/images/social/Vector(2).svg" alt="" />
                        </a>
                        <a href="">
                            <img src="../src/assets/images/social/Vector.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="../src/assets/images/social/mail.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="../src/assets/images/social/Logo Instagram.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="second">
                    <div className="company">
                        <p className="title">Company</p>
                        <a href="">About Us</a>
                        <a href="">Services</a>
                        <a href="">FAQs</a>
                        <a href="">Contact Us</a>
                    </div>
                    <div className="address">
                        <p className="title">Our Address</p>
                        <p>Office Hours: Mon - Fri: 9:00 AM - 5:00 PM EAT <br /> Bole Edna Mall,Gulf Aziz Building, no.203 <br />0944565300</p>
                    </div>
                </div>
                <div className="terms">
                    <p>© 2025 Farish Promotions. All rights reserved.</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </>
    )
}
// footlogo display flex horizontal
export default Minfooter;