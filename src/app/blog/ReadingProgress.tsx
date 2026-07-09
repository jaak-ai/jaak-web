"use client";
import { useState, useEffect } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[60] w-full"
      style={{ height: "2px", background: "rgba(30,202,211,0.12)" }}
      aria-hidden="true"
    >
      <div
        className="h-full transition-all duration-75"
        style={{ width: `${progress}%`, background: "#2DB6C1" }}
      />
    </div>
  );
}
