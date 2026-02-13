"use client";

import { useEffect, useState } from "react";

const startDate = new Date("2016-08-29T08:30:00");

export default function CountingDate() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let totalSeconds = Math.floor((now.getTime() - startDate.getTime()) / 1000);

      const years = Math.floor(totalSeconds / (365.25 * 24 * 3600));
      totalSeconds -= Math.floor(years * 365.25 * 24 * 3600);

      const months = Math.floor(totalSeconds / (30.44 * 24 * 3600));
      totalSeconds -= Math.floor(months * 30.44 * 24 * 3600);

      const days = Math.floor(totalSeconds / (24 * 3600));
      totalSeconds -= days * 24 * 3600;

      const hours = Math.floor(totalSeconds / 3600);
      totalSeconds -= hours * 3600;

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds - minutes * 60;

      // Build formatted string
      const parts = [];
      if (years) parts.push(`${years} Year${years > 1 ? "s" : ""}`);
      if (months) parts.push(`${months} Month${months > 1 ? "s" : ""}`);
      if (days) parts.push(`${days} Day${days > 1 ? "s" : ""}`);
      if (hours) parts.push(`${hours} Hour${hours > 1 ? "s" : ""}`);
      if (minutes) parts.push(`${minutes} Minute${minutes > 1 ? "s" : ""}`);
      parts.push(`${seconds} Second${seconds > 1 ? "s" : ""}`);

      // Join with commas, last one with &
      let formatted = parts.join(", ");
      const lastComma = formatted.lastIndexOf(",");
      if (lastComma !== -1) {
        formatted = formatted.slice(0, lastComma) + " &" + formatted.slice(lastComma + 1);
      }

      setTimeString(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
        <div className="text-center font-sand mt-20 p-4">
            <h1 className="p-1 md:h-24 text-5xl md:text-7xl font-romantic font-semibold text-gradient-header mb-4">Our Love Timeline</h1>
            <p className="text-lg md:text-2xl text-black/70 font-medium mb-2 md:mb-4">We've been together for amazing ...</p>
            <p className="mt-2 text-xl md:text-3xl font-semibold text-gradient-love mb-2 md:mb-4">{timeString}</p>
            <p className="text-lg md:text-2xl text-black/70 font-medium">and still counting ...</p>
        </div>
  );
}
