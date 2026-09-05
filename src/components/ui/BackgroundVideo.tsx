"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

const VIDEO_URL = "https://stream.mux.com/S3aG3sFrnrwkF3NiIIM8nSbrtXfn8q3WMj014XYn02YWA.m3u8";

export function BackgroundVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls: Hls | null = null;

        if (Hls.isSupported()) {
            hls = new Hls({
                startLevel: -1, // Use auto-quality start level
                capLevelToPlayerSize: true, // Optimizes bandwidth based on player size
                debug: false // turn on if needed, but keeping false prevents console spam
            });

            // Comprehensive error handling for recovery
            hls.on(Hls.Events.ERROR, function (event, data) {
                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            if (process.env.NODE_ENV === 'development') {
                                console.error("HLS: fatal network error encountered, try to recover");
                            }
                            hls?.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            if (process.env.NODE_ENV === 'development') {
                                console.error("HLS: fatal media error encountered, try to recover");
                            }
                            hls?.recoverMediaError();
                            break;
                        default:
                            if (process.env.NODE_ENV === 'development') {
                                console.error("HLS: fatal unrecoverable error encountered", data);
                            }
                            hls?.destroy();
                            break;
                    }
                }
            });

            hls.loadSource(VIDEO_URL);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch(e => {
                    if (process.env.NODE_ENV === 'development') {
                        console.warn("Autoplay was prevented:", e);
                    }
                });
            });

        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            // Native fallback (Safari usually)
            video.src = VIDEO_URL;
            video.addEventListener('loadedmetadata', () => {
                video.play().catch(e => {
                    if (process.env.NODE_ENV === 'development') {
                        console.warn("Autoplay was prevented:", e);
                    }
                });
            });
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#080B0A]">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
            />

            {/* Very subtle noise overlay for the video itself */}
            <div
                className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Extremely subtle 20% black wash to guarantee text reads, plus light emerald radial hint */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 100%, rgba(53, 208, 127, 0.06) 0%, transparent 50%)' }} />
        </div>
    );
}
