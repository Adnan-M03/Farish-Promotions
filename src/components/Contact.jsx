 function Contact (){
    return(
            <>
                <div className="contact-grid">
                    <h2>Get in Touch</h2>
                    <p>To begin your journey with Farish Promotions, simply send your email or get in touch, and we will be delighted to assist you.</p>
                    <div className="contact-contacts">
                        
                    
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
                    <p className="map-bar">Come to our Location</p>
                </div>
            </>
    )

 }

 export default Contact;