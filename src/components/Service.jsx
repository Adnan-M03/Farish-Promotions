import { useEffect } from "react";
import "./css/service.css";

import slash from "../assets/images/vectorUnderline.svg";
import services from "./services.js";

function Service() {

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

                {services.map((card, index) => {
                    return (
                        <div key={index} className={card.class}>
                            <img src={card.icon} alt={`Image of ${card.title} icon`} />
                            <div className="text">
                                <h4>{card.title}</h4>
                                <p className="xs" >{card.description}</p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </>
    )
}/*
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
*/

export default Service;