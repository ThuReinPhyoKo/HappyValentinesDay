"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";

const reasons = [
  { svg: "/svg/reason1.svg", text: "How you always listen to my random stuffs." },
  { svg: "/svg/reason2.svg", text: "The deep conversations we share." },
  { svg: "/svg/reason3.svg", text: "I love how you've been my constant for so many years." },
  { svg: "/svg/reason4.svg", text: "I love how you believe in me, even when I doubt myself." },
  { svg: "/svg/reason5.svg", text: "I love how you laugh at my stupid jokes." },
  { svg: "/svg/reason6.svg", text: "I love the way you get angry for me (you're my Supergirl!)." },
  { svg: "/svg/reason7.svg", text: "The cute way you sing along to songs." },
  { svg: "/svg/reason8.svg", text: "I love the future I see when I think of you." },
  { svg: "/svg/reason9.svg", text: "I love that you're my best friend, not just my girlfriend." },
  { svg: "/svg/reason10.svg", text: "I love you… simply because you're you." },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Manual autoplay
  const autoplayInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // start paused

  // Dots
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Update selected dot
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Arrow handlers
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  // Manual autoplay start/stop
  const startAutoplay = () => {
    if (!emblaApi) return;
    if (autoplayInterval.current) return; // already running
    autoplayInterval.current = setInterval(() => emblaApi.scrollNext(), 2500);
    setIsPlaying(true);
  };

  const stopAutoplay = () => {
    if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    autoplayInterval.current = null;
    setIsPlaying(false);
  };

  const toggleAutoplay = () => {
    if (isPlaying) stopAutoplay();
    else startAutoplay();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => stopAutoplay();
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto font-sand">
      {/* Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="min-w-full relative cursor-grab rounded-2xl p-5 mx-2 h-72 flex flex-col justify-center items-center bg-gray-100"
            >
              <Image className="mb-4" src={reason.svg} width={150} height={150} alt="svg" />
              <p className="text-black/80 text-center text-lg md:text-xl leading-relaxed">{reason.text}</p>
              <p className="text-gray-400 p-4 absolute top-1.5 left-1.5 text-3xl font-bold"># {i + 1}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows, dots, and autoplay button */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2 md:gap-4 mt-4">
          <button onClick={scrollPrev} className="group cursor-pointer p-2 rounded-full border hover:bg-gray-100 transition">
            <ChevronLeft className="group-hover:text-pink-600" />
          </button>
          <button onClick={scrollNext} className="group cursor-pointer p-2 rounded-full border hover:bg-gray-100 transition">
            <ChevronRight className="group-hover:text-pink-600" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex flex-col">
          <div className="flex justify-center gap-1 md:gap-2 mt-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 md:w-3 md:h-3 cursor-pointer rounded-full transition ${
                  index === selectedIndex ? "bg-pink-400" : "bg-gray-100 hover:bg-pink-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Autoplay Button */}
        <button
          onClick={toggleAutoplay}
          className="w-28 mt-4 px-4 py-2 rounded-full border border-white cursor-pointer hover:bg-gray-100 hover:text-pink-400 font-medium"
        >
          {isPlaying ? (
            <span className="flex items-center justify-center gap-0.5">Pause <Pause className="w-4.5 h-4.5"/></span> 
          ) : (
            <span className="flex items-center justify-center gap-0.5">Play <Play className="w-4.5 h-4.5"/></span> 
          )}
        </button>
      </div>
    </div>
  );
}
