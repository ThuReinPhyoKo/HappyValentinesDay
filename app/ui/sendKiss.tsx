"use client"
import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react"

interface FlyingKiss {
    id: number,
    x: number,
    y: number,
}

export default function SendKiss() {
    const [ kisses, setKisses ] = useState<FlyingKiss[]>([])
    const [ kissCount, setKissCount ] = useState(0)

    const sendKiss = () => {
        const newKiss: FlyingKiss = {
            id: Date.now(),
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
    };

    setKisses((prev) => [...prev, newKiss]);
    setKissCount((prev) => prev + 1);

    // Remove kiss after animation
    setTimeout(() => {
      setKisses((prev) => prev.filter((k) => k.id !== newKiss.id));
    }, 1000);
  };

    return (
        <section className="w-full min-h-screen flex flex-col items-center -mt-px border-0 bg-[linear-gradient(to_top,#bb377d,#dfd3dd)]">
            <Image src="/png/kiss1.png" width="250" height="250" alt="kiss" />
            <h1 className="p-1 h-24 text-4xl md:text-7xl font-romantic font-semibold text-gradient-reason">Send Me Kisses!</h1>
            <p className="font-sand font-semibold text-lg md:text-xl text-gradient-reason mb-4">How many kisses will you send me today?</p>

            <div className="relative mb-4">
                <button
                  onClick={sendKiss}
                  className="relative cursor-pointer bg-[linear-gradient(to_right,#CB356B,#BD3F32)] w-40 h-40 rounded-full shadow-heart hover:scale-110 active:scale-95 transition-transform duration-200 flex flex-col items-center justify-center gap-2 overflow-visible"
                >
                  <Heart className="w-16 h-16 fill-current animate-pulse-heart" />
                  <span className="font-medium text-xl font-sand tracking-widest">Kiss!</span>

                  {/* Flying kisses */}
                  {kisses.map((kiss) => (
                    <Image
                      key={kiss.id}
                      src='/svg/lip.svg'
                      width="40"
                      height="40"
                      alt="lip"
                      className="absolute animate-kiss-fly pointer-events-none"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(-50%, -50%)`,
                      }}
                    />
                  ))}
                </button>
            </div>
            
            {/* KissCount */}
            <div className="rounded-2xl mb-4 flex items-center gap-2.5 shadow-lg bg-[linear-gradient(to_right,#CB356B,#BD3F32)] px-8 py-4 shadow-love">
                <p className="font-sand text-lg font-medium">
                  You've sent
                  <span className="font-sand text-3xl mx-2">
                    {kissCount}
                  </span>
                  {kissCount === 1 ? "kiss" : "kisses"}!
                </p>
                <Image src="/svg/sparklingHeart.svg" alt="heart" width="30" height="30" />
            </div>
                
            {/* Fun Message */}
            {kissCount > 0 && (
                <div className="text-center font-sand text-lg font-medium">
                  {kissCount < 5 && (
                    <p>Just getting started!</p>
                  )}
                  {kissCount >= 5 && kissCount < 20 && (
                    <p>Aww, you're so sweet!</p>
                  )}
                  {kissCount >= 20 && kissCount < 50 && (
                    <p>Ahhh, so many kisses! I'm blushing!</p>
                  )}
                  {kissCount >= 50 && kissCount < 100 && (
                    <p>You really love me, don't you?</p>
                  )}
                  {kissCount >= 100 && (
                    <p className="animate-pulse-heart">
                      OVER 100 KISSES?! You're amazing! I love you!
                    </p>
                  )}
                </div>
            )}

            <div className="relative w-full h-full">
              {kissCount > 0 && kissCount >= 100 && (
                  <Image className="absolute bottom-2/6 right-1/5 rounded-full object-contain" src="/png/100kiss.png" width="250" height="250" alt="cute-cartoon" />
              )}
            </div>
        </section>
    )
}