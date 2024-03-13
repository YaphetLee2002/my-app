"use client";
import {useEffect, useRef} from "react";
import {Play} from "lucide-react"

function VedioPlay() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handlePlay = () => {
        if (videoRef.current !== null) {
            videoRef.current.play();
        }
        if (buttonRef.current !== null) {
            buttonRef.current.style.display = 'none';
        }
    };

    useEffect(() => {
        if (videoRef.current !== null) {
            videoRef.current.style.opacity = '0';
            videoRef.current.addEventListener('play', () => {
                if (overlayRef.current !== null) {
                    overlayRef.current.style.display = 'none';
                }
                if (videoRef.current !== null) {
                    videoRef.current.style.opacity = '1';
                }
            });
        }
    }, []);

    return (
        <div className="relative">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                style={{borderRadius: '0.5rem'}}
                src="/temp.mp4"
                controls
            />
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-transparent"
            />
            <button ref={buttonRef} onClick={handlePlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4">
                <Play size={16}/>
            </button>
        </div>
    );
}

export default VedioPlay;
