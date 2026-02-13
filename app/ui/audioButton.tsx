"use client"
import { useRef, useState } from "react";

export default function AudioWaveButton() {
    const [ isPlaying, setIsPlaying ] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const heights = ["h-[8px]", "h-[16px]", "h-[12px]", "h-[16px]", "h-[12px]", "h-[8px]"]

    const toggleAudio = async () => {
        if (!audioRef.current) return;

        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            await audioRef.current.play();
            setIsPlaying(true);
        }
    }

    return (
        <>
        
        {/* Audio */}
            <audio ref={audioRef} src="/audio/november.mp3" loop />

        {/* Clickable Wave */}
            <button
                onClick={toggleAudio}
                aria-label={ isPlaying ? "Pause music" : "Play music"}
                className={`fixed ${ isPlaying ? "audio-pulse" : "animate-pulse-heart"} cursor-pointer px-3 py-5 bottom-6 right-8 z-50 flex items-center gap-1 rounded-full bg-black/30 border border-white  shadow-lg`}
            >
                {[...Array(6)].map((_, i) => (
                    <span 
                        key={i}
                        className={`w-0.5 rounded-full bg-white ${isPlaying ? "playing-wave h-4" : `${heights[i]}`}`}
                        style={{ animationDelay: `${i * 0.15}s` }}
                    >
                    </span>
                ))}
            </button>
        </>
    )
}