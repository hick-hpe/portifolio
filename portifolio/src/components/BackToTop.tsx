import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    position: fixed;
    aspect-ratio: 1 / 1;
    height: 50px;
    right: 30px;
    bottom: 30px;
    background-color: #fff;
    border: none;
    border-radius: 20%;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 1000;
    transition: opacity 0.3s ease, transform 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }

    &.hidden {
        opacity: 0;
        pointer-events: none;
    }

    &.visible {
        opacity: 1;
    }
`;

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const MIN_SCROLL_TO_VISIBLE = 400;

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > MIN_SCROLL_TO_VISIBLE) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            if (lastScrollY) 1;

            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button
            id="back-to-top"
            className={`btn ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <i className="bi bi-arrow-up text-dark"></i>
        </Button>
    );
};

export default BackToTop;
