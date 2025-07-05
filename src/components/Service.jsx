import { useEffect } from "react";
import "./css/service.css";

import slash from "../assets/images/vectorUnderline.svg"
import SMM from "../assets/images/SMM 4.png"
import Targ from "../assets/images/Targ ads 2.png"
import Content from "../assets/images/Content 1.png"
import Influence from "../assets/images/Influence 1.png"

function Service() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.ScrollReveal) {
            const sr = window.ScrollReveal();

            // All cards start from the same center position
            const cards = ['.SMM', '.ADS', '.CC', '.IM'];

            cards.forEach((card, index) => {
                sr.reveal(card, {
                    delay: index * 150, // Staggered delay
                    distance: '0px',
                    origin: 'center',
                    duration: 1000,
                    easing: 'ease-out',
                    scale: 0.7,
                    opacity: 0,
                    // Each card moves to its final position
                    beforeReveal: (el) => {
                        // Add a class for custom CSS animation
                        el.classList.add('fan-out');
                    }
                });
            });
        }
    }, []);

    return (
        <>
            <div id="service" className="main-service-grid">
                <div className="custom-shape-divider-top-1751699986">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="title">
                    <h2>Our Expert <span>Services</span></h2>
                    <img src={slash} alt="" />
                </div>
                <div className="SMM">
                    <img src={SMM} alt="" />
                    <div className="text">
                        <h4>Social Media Management</h4>
                        <p className="xs" >From daily posting to community engagement and performance monitoring, we take the hassle out of managing your social media channels. We build a consistent, engaging online presence that fosters brand loyalty and expands your reach.</p>
                    </div>
                </div>
                <div className="ADS">
                    <img src={Targ} alt="" />
                    <div className="text">
                        <h4>Social Media Ads</h4>
                        <p className="xs">Stop guessing and start targeting. We design and execute precision-targeted social media advertising campaigns across key platforms, maximizing your budget to reach qualified leads and achieve your specific business objectives</p>
                    </div>
                </div>
                <div className="CC">
                    <img src={Content} alt="" />
                    <div className="text">
                        <h4>Content Creation</h4>
                        <p className="xs">Compelling content is the fuel for social media success. We craft captivating visuals, engaging captions, and valuable stories that resonate with your target audience, sparking conversations and driving action.</p>
                    </div>
                </div>
                <div className="IM">
                    <img src={Influence} alt="" />
                    <div className="text">
                        <h4>Influencer Marketing</h4>
                        <p className="xs">Leverage authentic voices to amplify your message. We identify the right influencers for your brand, develop strategic campaigns, and manage collaborations to expand your reach and build trust with new audiences</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;