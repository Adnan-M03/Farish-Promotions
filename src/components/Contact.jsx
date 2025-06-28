 function Contact (){
    return(
            <>
                <div className="contact-grid">
                    <div className="contact-contacts">
                        <h2>Get in Touch</h2>
                        <p>To begin your journey with Farish Promotions, simply send your email or get in touch, and we will be delighted to assist you.</p>
                    
                        <div className="email">
                            <img src="../src/assets/images/smallemail.svg" alt="" />
                            <p>farishpromotions@gmail.com</p>
                        </div>
                        <div className="phone">
                            <img src="../src/assets/images/smallPhone-call 1.svg" alt="" />
                            <p>0943072972 / 092575528</p>
                        </div>
                        <div className="location">
                            <img src="../src/assets/images/smallLocation 1.svg" alt="" />
                            <p>Bole Edna Mall Gulf Aziz Building no.203</p>
                        </div>
                    </div>
                    <form action="">
                        <div className="texts">
                            <h2>Let’s discuss the idea</h2>
                            <p>Your next big idea starts with a simple email.</p>
                        </div>
                        <div className="input">
                            <input type="email" placeholder="Your email" />
                            <input type="submit" />
                        </div>
                    </form>
                    <div className="map">
                        <p>
                            <strong>Address:</strong> <br /> Bole Edna Mall,Gulf Aziz Building, no.203 <br />
                            <strong>Office Hours:</strong> <br /> Bole Edna Mall,Gulf Aziz Building, no.203
                        </p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.750994939534!2d38.78250907367282!3d8.995045289522306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84fdf566b8a9%3A0x3cfc05836ed024a4!2zR3VsZiBBeml6IEJ1aWxkaW5nIHwgQm9sZSBNZWRoYW5pYWxlbSB8IOGMjuGIjeGNjSDhiqDhi7LhiLUg4YiF4YqV4Y2DIHwg4Ymm4YiMIOGImOGLteGIg-GKkuGKoOGIiOGInQ!5e0!3m2!1sen!2set!4v1751134433234!5m2!1sen!2set" 
                                width="600" 
                                height="450" 
                                style={{border:0}}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen="">
                            </iframe>
                    </div>
                </div>
            </>
    )

 }

 export default Contact;