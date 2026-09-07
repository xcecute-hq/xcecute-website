"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isTouch, setIsTouch] = useState(true);
    const isVisibleRef = useRef(false);

    useEffect(() => {
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const updateMousePosition = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            if (!isVisibleRef.current) {
                isVisibleRef.current = true;
                setIsVisible(true);
            }

            const target = e.target as HTMLElement | null;
            if (target) {
                const clickable =
                    target.closest?.('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])') != null ||
                    (target instanceof Element && window.getComputedStyle(target).cursor === 'pointer');

                setIsHovering(Boolean(clickable));
            }
        };

        const handleMouseLeave = () => {
            isVisibleRef.current = false;
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            isVisibleRef.current = true;
            setIsVisible(true);
        };

        const handleMouseOut = (e: MouseEvent) => {
            if (!e.relatedTarget && !(e as unknown as { toElement?: Element }).toElement) {
                isVisibleRef.current = false;
                setIsVisible(false);
            }
        };

        const handleBlur = () => {
            isVisibleRef.current = false;
            setIsVisible(false);
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                isVisibleRef.current = false;
                setIsVisible(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);
        document.documentElement.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseout", handleMouseOut);
        window.addEventListener("blur", handleBlur);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("blur", handleBlur);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [cursorX, cursorY]);

    const springConfig = { damping: 28, stiffness: 500, mass: 0.1 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    if (isTouch) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[10000] hidden md:block">
            <AnimatePresence>
                {isVisible && (
                    !isHovering ? (
                        <motion.div
                            key="circle-cursor"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.15 }}
                            className="fixed top-0 left-0 w-4 h-4 bg-[#10A882] rounded-full drop-shadow-[0_0_8px_rgba(16,168,130,0.5)] mix-blend-difference"
                            style={{
                                x: cursorXSpring,
                                y: cursorYSpring,
                                translateX: "-50%",
                                translateY: "-50%"
                            }}
                        />
                    ) : (
                        <motion.div
                            key="arrow-cursor"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.15 }}
                            className="fixed top-0 left-0"
                            style={{
                                x: cursorX,
                                y: cursorY,
                                translateX: "-10%",
                                translateY: "-10%",
                                filter: "drop-shadow(0px 0px 8px rgba(16, 168, 130, 0.7))",
                            }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 2L20 10.5L11.5 12.5L8.5 21L4 2Z" fill="#10A882" />
                            </svg>
                        </motion.div>
                    )
                )}
            </AnimatePresence>
        </div>
    );
}
