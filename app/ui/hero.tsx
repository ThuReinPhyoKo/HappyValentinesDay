import { Heart } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center bg-[linear-gradient(to_left,#BA5370,#F4E2D8)] overflow-hidden z-50">
      
        {/* Hearts */}
        <div className="absolute top-10 left-10 animate-bounce-soft">
          <Heart className="w-8 h-8 text-primary fill-rose-600 opacity-50 stroke-0" />
        </div>
        <div className="absolute top-20 right-20 animate-bounce-soft" style={{ animationDelay: "0.5s" }}>
          <Heart className="w-6 h-6 text-love-rose fill-pink-300 opacity-80 stroke-0" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce-soft" style={{ animationDelay: "1s" }}>
          <Heart className="w-10 h-10 text-accent fill-rose-400 opacity-70 stroke-0" />
        </div>
        <div className="absolute top-30 left-45 animate-bounce-soft">
          <Heart className="w-8 h-8 text-primary fill-rose-600 opacity-50 stroke-0" />
        </div>
        <div className="absolute top-5 right-50 animate-bounce-soft" style={{ animationDelay: "0.5s" }}>
          <Heart className="w-6 h-6 text-love-rose fill-pink-400 opacity-70 stroke-0" />
        </div>
        <div className="absolute bottom-50 right-60 animate-bounce-soft" style={{ animationDelay: "1s" }}>
          <Heart className="w-10 h-10 text-accent fill-rose-300 opacity-70 stroke-0" />
        </div><div className="absolute bottom-10 left-60 animate-bounce-soft" style={{ animationDelay: "1s" }}>
          <Heart className="w-10 h-10 text-accent fill-rose-400 opacity-70 stroke-0" />
        </div>
      
      {/* Image & Texts */}
      <Image className="object-contain mt-5" src="/png/hero-image.png" width="200" height="200" alt="hero-image" />

      <h1 className="font-romantic text-5xl md:text-7xl lg:text-8xl text-gradient-header mb-6">Happy Valentine's Day</h1>
      <p className="font-romantic text-2xl md:text-4xl text-gradient-love mb-4">My Dearest Love</p>
      <p className="text-lg md:text-xl text-black/60 text-center max-w-2xl mb-4 font-quicksand">
        Every moment with you feels like magic. This little website is my way of 
        showing you how much you mean to me. Scroll down to see more surprises! 💝
      </p>

      {/* Button */}
      <div className="flex justify-center gap-4">
        <a 
          href="#timeline" 
          className=" border border-black/10 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        >
          <Heart className="w-5 h-5 fill-white" />
          Scroll Down
        </a>
      </div>

      {/* Decorative Wave - set height to remove the thin line*/}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="block w-full h-28" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="#fffcdc"
          />
        </svg>
      </div>

    </section>
  );
}