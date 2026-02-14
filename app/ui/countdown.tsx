"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const anniversaryDate = new Date("2026-08-29T00:00:00");

export default function AnniversaryCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [hasCelebrated, setHasCelebrated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let diff = anniversaryDate.getTime() - now.getTime();

      if (diff <= 0) diff = 0;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      // 🎉 Confetti once at zero
      if (diff === 0 && !hasCelebrated) {
        realisticConfetti();
        setHasCelebrated(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hasCelebrated]);

  // ✅ Realistic Look Confetti
  function realisticConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        spread: 70,
        startVelocity: 30,
        gravity: 1,
        ticks: 200,
        origin: { x: Math.random(), y: 0 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }

  return (
    <div className="text-center font-sand mt-6 space-y-4">
      <h2 className="text-3xl md:text-5xl font-romantic text-gradient-header mb-5">
        10th Anniversary Countdown
      </h2>

      <div className="flex justify-center gap-6 md:gap-16 mt-4">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center gap-2.5 font-sand">
      <span className="text-4xl md:text-5xl text-gradient-time font-time font-bold text-black">
        {value}
      </span>
      <span className="text-base md:text-lg text-black font-semibold">{label}</span>
    </div>
  );
}
