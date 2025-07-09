import { useState } from "react";

import email from "../assets/images/smallemail.svg"
import ph from "../assets/images/smallPhone-call 1.svg"
import loc from "../assets/images/smallLocation 1.svg"

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
                <div class="custom-shape-divider-top-1751704221">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <h2>Get in Touch</h2>
                <p className="md">To begin your journey with Farish Promotions, simply send your email or use the contacts below, and we will be delighted to assist you.</p>
                <div className="contact-contacts">
                    <a href="#contact">
                        <div className="email">
                            <img src={email} alt="" />
                            <p className="xs">farishpromotions@gmail.com</p>
                        </div>
                    </a>
                    <a href="tel:+251944565300">
                        <div className="phone">
                            <img src={ph} alt="" />
                            <p className="xs">0944565300 / 0990280671</p>
                        </div>
                    </a>
                    <a href="#map">
                        <div className="location">
                            <img src={loc} alt="" />
                            <p className="xs">Bole Edna Mall Gulf Aziz Building no.203</p>
                        </div>
                    </a>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    {showThanks ? (
                        <div className="thank-you-message">
                            <h2>Thank you!</h2>
                            <p className="sm status">{statusMessage}</p>
                        </div>
                    ) : (
                        <>
                            <div className="texts">
                                <h2>Let's discuss the idea</h2>
                                <p className="sm status">{statusMessage}</p>
                            </div>
                            <div className="input">
                                <input className="fs-input" id="email" name="email" type="email" placeholder="Your email" required />
                                <button style={{ background: "var(--color-near-black)", cursor: "pointer" }} className="fs-button" type="submit">Send</button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </>
    );
}

export default Contact;