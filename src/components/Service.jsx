import { useEffect, useState } from "react";
import "./css/service.css";

import slash from "../assets/images/vectorUnderline.svg";
import services from "./services.js";

function Service() {
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [scrollRevealInitialized, setScrollRevealInitialized] = useState(false);

    // Step 1: Wait for all service images to load
    useEffect(() => {
        const serviceImages = document.querySelectorAll('.service-card img');
        let loadedCount = 0;

        const handleImageLoad = () => {
            loadedCount++;
            setImagesLoaded(loadedCount);

            // When all images are loaded, start ScrollReveal
            if (loadedCount === serviceImages.length) {
                setTimeout(() => {
                    initializeScrollReveal();
                }, 500); // Small delay to ensure DOM is ready
            }
        };

        // Check if images are already loaded
        serviceImages.forEach(img => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener('load', handleImageLoad);
                img.addEventListener('error', handleImageLoad); // Count errors too
            }
        });

        // Fallback: if no images found, start ScrollReveal anyway
        if (serviceImages.length === 0) {
            setTimeout(() => {
                initializeScrollReveal();
            }, 1000);
        }
    }, []);

    // Step 2: Initialize ScrollReveal after images are loaded
    const initializeScrollReveal = () => {
        if (typeof window !== 'undefined' && window.ScrollReveal && !scrollRevealInitialized) {
            const sr = window.ScrollReveal();

            const cards = ['.SMM', '.CC', '.IM', '.WD', '.SD', '.AC'];

            cards.forEach((card, index) => {
                sr.reveal(card, {
                    delay: index * 150,
                    distance: '0px',
                    origin: 'center',
                    duration: 800,
                    easing: 'ease-out',
                    scale: 0.7,
                    opacity: 0,
                    beforeReveal: (el) => {
                        el.classList.add('fan-out');
                    }
                });
            });

            setScrollRevealInitialized(true);
            console.log('ScrollReveal initialized after images loaded');
        }
    };

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
                        <div key={index} className={`${card.class} service-card`}>
                            <img src={card.icon} alt={`Image of ${card.title} icon`} />
                            <div className="text">
                                <h4>{card.title}</h4>
                                <p className="xs">{card.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Service;