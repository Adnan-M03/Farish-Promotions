import { useState } from "react";

function Contact() {
    const [showThanks, setShowThanks] = useState(false);
    const [statusMessage, setStatusMessage] = useState("Your next big idea starts with a simple click.");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/mjkrkpkb", {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                setStatusMessage("Thank you for your interest! We've received your email and will be in touch within 1 business day to discuss your idea.");
                setShowThanks(true);
                e.target.reset();
            } else {
                setStatusMessage("Oops! Something went wrong. Refresh the page and try again");
            }
        } catch (error) {
            setStatusMessage("Error: " + error.message);
        }
    };

    return (
        <>
            <div id="contact" className="contact-grid">
                <h2>Get in Touch</h2>
                <p className="md">To begin your journey with Farish Promotions, simply send your email or get in touch, and we will be delighted to assist you.</p>
                <div className="contact-contacts">
                    <div className="email">
                        <img src="../src/assets/images/smallemail.svg" alt="" />
                        <p className="xs">farishpromotions@gmail.com</p>
                    </div>
                    <div className="phone">
                        <img src="../src/assets/images/smallPhone-call 1.svg" alt="" />
                        <p className="xs">0943072972 / 092575528</p>
                    </div>
                    <div className="location">
                        <img src="../src/assets/images/smallLocation 1.svg" alt="" />
                        <p className="xs">Bole Edna Mall Gulf Aziz Building no.203</p>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    {showThanks ? (
                        <div className="thank-you-message">
                            <h2>Thank you!</h2>
                            <p className="sm">{statusMessage}</p>
                        </div>
                    ) : (
                        <>
                            <div className="texts">
                                <h2>Let's discuss the idea</h2>
                                <p className="sm">{statusMessage}</p>
                            </div>
                            <div className="input">
                                <input className="fs-input" id="email" name="email" placeholder="Your email" required />
                                <button style={{ background: "var(--color-near-black)", cursor: "pointer" }} className="fs-button" type="submit">Send</button>
                            </div>
                        </>
                    )}
                </form>
                <p className="map-bar sm">Come to our Location</p>
            </div>
        </>
    );
}

export default Contact;