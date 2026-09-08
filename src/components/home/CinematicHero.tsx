"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MouseReactiveBackground } from "@/components/ui/MouseReactiveBackground";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const LINE1_TEXT = "BEST BRAINS";
const LINE2_TEXT = "AT YOUR SERVICE";
const TOTAL_CHARS = LINE1_TEXT.length + LINE2_TEXT.length;

function TextCaret({ visible, isStart = false, size = "large" }: { visible: boolean; isStart?: boolean; size?: "large" | "small" }) {
    return (
        <span
            aria-hidden="true"
            className="relative inline-block align-middle w-0 h-[0.75em] overflow-visible pointer-events-none select-none transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
        >
            <span
                className={`absolute top-0 h-full bg-[#10A882] rounded-full shadow-[0_0_12px_rgba(16,168,130,0.85)] ${size === "small" ? "w-[2px] sm:w-[3px]" : "w-[2.5px] sm:w-[4px]"
                    } ${isStart ? "-left-[1px] sm:-left-[2px]" : "left-[1.5px] sm:left-[2.5px]"
                    }`}
            />
        </span>
    );
}

export function CinematicHero() {
    const [hasStarted, setHasStarted] = useState(false);
    const [revealedCount, setRevealedCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [caretVisible, setCaretVisible] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [isDesktopHover, setIsDesktopHover] = useState(false);
    const [isMouseActive, setIsMouseActive] = useState(false);
    const headingRef = useRef<HTMLHeadingElement>(null);

    // Detect desktop pointer capability (hover: hover)
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDesktopHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
        }
    }, []);

    // Progressive cinematic reveal on direct page load
    useEffect(() => {
        let current = 0;
        let timeoutId: NodeJS.Timeout;
        let startTimeoutId: NodeJS.Timeout;

        const getDelayForNext = (idx: number) => {
            if (idx === 0) return 160; // pause after caret appears before first character
            if (idx === LINE1_TEXT.length) return 220; // breath between line 1 and line 2

            const isLine1 = idx < LINE1_TEXT.length;
            const text = isLine1 ? LINE1_TEXT : LINE2_TEXT;
            const charIdx = isLine1 ? idx : idx - LINE1_TEXT.length;
            const char = text[charIdx];
            const prevChar = text[charIdx - 1];

            if (char === " ") return 130; // subtle word gap pause
            if (prevChar === " ") return 90; // beginning of word
            // organic variation 60-80ms
            return 60 + ((idx * 17) % 22);
        };

        const revealNextChar = () => {
            current++;
            setRevealedCount(current);

            if (current < TOTAL_CHARS) {
                const nextDelay = getDelayForNext(current);
                timeoutId = setTimeout(revealNextChar, nextDelay);
            } else {
                setIsComplete(true);
                // Smoothly fade out caret after completion
                setTimeout(() => {
                    setCaretVisible(false);
                }, 400);
            }
        };

        // Load hero directly: caret appears at 200ms, then types progressively
        startTimeoutId = setTimeout(() => {
            setHasStarted(true);
            setCaretVisible(true);
            timeoutId = setTimeout(revealNextChar, getDelayForNext(0));
        }, 200);

        return () => {
            clearTimeout(startTimeoutId);
            clearTimeout(timeoutId);
        };
    }, []);

    // Subtle mouse tracking for post-reveal interaction
    const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
        if (!isComplete || !isDesktopHover) return;
        if (!headingRef.current) return;
        const rect = headingRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
        setIsMouseActive(true);
    };

    const handleMouseLeave = () => {
        setIsMouseActive(false);
    };

    return (
        <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 z-10 overflow-hidden shrink-0">
            <MouseReactiveBackground />

            <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-6 sm:gap-8 pt-12 sm:pt-20">

                {/* XCECUTE BRAND LOGO */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0 }}
                    className="flex items-center justify-center w-full -mb-6 sm:-mb-10 mt-4"
                >
                    <Image src="/Logo_with_name-removebg-preview.svg" alt="XCECUTE Logo" width={600} height={176} className="h-28 md:h-44 w-auto object-contain" priority />
                </motion.div>

                {/* PROGRESSIVE CINEMATIC TEXT REVEAL */}
                <motion.h1
                    ref={headingRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    aria-label="BEST BRAINS AT YOUR SERVICE"
                    className="font-premium max-w-5xl text-[#F1F4F2] select-none cursor-default"
                    style={{
                        textShadow: isComplete && isDesktopHover && isMouseActive
                            ? `${(mousePos.x - 50) * 0.08}px ${(mousePos.y - 50) * 0.06}px 32px rgba(16, 168, 130, 0.2)`
                            : undefined,
                        transition: "text-shadow 0.3s ease-out"
                    }}
                >
                    {/* Line 1: BEST BRAINS */}
                    <span className="block text-[38px] sm:text-[54px] md:text-[76px] lg:text-[92px] font-bold tracking-tight uppercase leading-[1.05]">
                        {LINE1_TEXT.split("").map((char, i) => {
                            const isRevealed = i < revealedCount;
                            const isCurrentActive = i === revealedCount - 1;
                            const isSpace = char === " ";

                            return (
                                <span key={`l1-${i}`} className="inline-block relative">
                                    {/* Caret before first character when typing begins */}
                                    {hasStarted && caretVisible && revealedCount === 0 && i === 0 && (
                                        <TextCaret visible={true} isStart={true} />
                                    )}

                                    <span
                                        className="inline-block transition-all duration-300"
                                        style={{
                                            opacity: isRevealed ? 1 : 0,
                                            transform: isRevealed ? "translateY(0)" : "translateY(4px)",
                                            filter: isRevealed ? "blur(0px)" : "blur(3px)",
                                            textShadow: isCurrentActive
                                                ? "0 0 16px rgba(16, 168, 130, 0.6), 0 0 30px rgba(16, 168, 130, 0.25)"
                                                : undefined,
                                            color: isComplete && isDesktopHover && isMouseActive
                                                ? "#FFFFFF"
                                                : "#F1F4F2",
                                            transition: isRevealed
                                                ? "opacity 0.25s ease-out, transform 0.25s ease-out, filter 0.25s ease-out, text-shadow 0.35s ease-out, color 0.3s ease-out"
                                                : "none"
                                        }}
                                    >
                                        {isSpace ? "\u00A0" : char}
                                    </span>

                                    {/* Caret moving after each typed letter in Line 1 */}
                                    {hasStarted && caretVisible && revealedCount > 0 && revealedCount <= LINE1_TEXT.length && i === revealedCount - 1 && (
                                        <TextCaret visible={true} />
                                    )}
                                </span>
                            );
                        })}
                    </span>

                    {/* Line 2: AT YOUR SERVICE (Reduced font size) */}
                    <span className="block text-[20px] sm:text-[28px] md:text-[38px] lg:text-[46px] font-semibold tracking-wide uppercase leading-snug mt-2 sm:mt-3 text-[#F1F4F2]/90">
                        {LINE2_TEXT.split("").map((char, i) => {
                            const globalIndex = LINE1_TEXT.length + i;
                            const isRevealed = globalIndex < revealedCount;
                            const isCurrentActive = globalIndex === revealedCount - 1;
                            const isSpace = char === " ";

                            return (
                                <span key={`l2-${i}`} className="inline-block relative">
                                    <span
                                        className="inline-block transition-all duration-300"
                                        style={{
                                            opacity: isRevealed ? 1 : 0,
                                            transform: isRevealed ? "translateY(0)" : "translateY(4px)",
                                            filter: isRevealed ? "blur(0px)" : "blur(3px)",
                                            textShadow: isCurrentActive
                                                ? "0 0 16px rgba(16, 168, 130, 0.6), 0 0 30px rgba(16, 168, 130, 0.25)"
                                                : undefined,
                                            color: isComplete && isDesktopHover && isMouseActive
                                                ? "#FFFFFF"
                                                : "#F1F4F2",
                                            transition: isRevealed
                                                ? "opacity 0.25s ease-out, transform 0.25s ease-out, filter 0.25s ease-out, text-shadow 0.35s ease-out, color 0.3s ease-out"
                                                : "none"
                                        }}
                                    >
                                        {isSpace ? "\u00A0" : char}
                                    </span>

                                    {/* Caret moving after each typed letter in Line 2 */}
                                    {hasStarted && caretVisible && revealedCount > LINE1_TEXT.length && globalIndex === revealedCount - 1 && (
                                        <TextCaret visible={true} size="small" />
                                    )}
                                </span>
                            );
                        })}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed mt-[-10px] md:mt-[-20px] font-sans"
                >
                    We turn ideas, problems, and possibilities into things that work.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-6 flex justify-center"
                >
                    <Link
                        href="/contact"
                        className="flex items-center gap-3 bg-transparent border border-white/30 hover:border-white hover:bg-white/10 px-8 py-3.5 rounded-full text-[14px] font-medium text-white shadow-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/15 group-hover:bg-white/20 transition-colors duration-300">
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
