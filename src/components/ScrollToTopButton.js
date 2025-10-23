import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/ScrollToTopButton.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button after scrolling 300px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll smoothly to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp className="arrow-icon" />
                </div>
            )}
        </>
    );
};

export default ScrollToTopButton;
