"use client";

import React, { useEffect, useState } from "react";

export function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = "hidden";

        // Loader minimum display time + animation timings
        // 0.0s - 0.4s: Container scale + fade in (whole logo)
        // 0.4s - 0.9s: Secondary reveal (wordmark mask/directional motion)
        // 0.9s - 1.4s: Hold
        // 1.4s - 2.0s: Exit transition
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
                setIsVisible(false);
                document.body.style.overflow = "";
            }, 600); // 0.6s exit animation duration
        }, 2400); // Minimum 3 second delay total with 0.6s exit

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "";
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#080B0A] transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExiting ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
                }`}
        >
            <style jsx>{`
                /* 0.0-0.4s: Whole preloader scale down & fade in slightly */
                .logo-container {
                    animation: containerReveal 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                    transform: scale(0.95);
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }

                @keyframes containerReveal {
                    0% {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .brand-icon-image {
                    height: 160px;
                    width: auto;
                    object-fit: contain;
                    display: block;
                }

                @media (min-width: 768px) {
                    .brand-icon-image {
                        height: 200px;
                    }
                }

                /* 0.4-0.9s: Reveal wordmark with absolute masking/translation */
                .wordmark-wrapper {
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }

                .brand-wordmark {
                    font-family: var(--font-sans, sans-serif);
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    font-size: 28px;
                    color: #F1F4F2;
                    animation: wordmarkReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
                    transform: translateX(-30px);
                    opacity: 0;
                }

                @keyframes wordmarkReveal {
                    0% {
                        transform: translateX(-30px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .logo-container, .brand-icon-image {
                        animation: none !important;
                        opacity: 1 !important;
                        transform: none !important;
                    }
                }
            `}</style>

            <div className="logo-container">
                <img src="/Logo_with_name-removebg-preview.svg" alt="XCECUTE Logo" className="brand-icon-image" />
            </div>
        </div>
    );
}
