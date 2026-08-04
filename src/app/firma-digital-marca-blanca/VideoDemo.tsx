"use client";

import { useState } from "react";

const YOUTUBE_VIDEO_ID = "7zNt72K-1z8";

export default function VideoDemo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ background: "#000", paddingBottom: "56.25%", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="Mira cómo personalizar tu experiencia de firma en JAAK"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label="Reproducir video: mira cómo personalizar tu experiencia de firma"
        >
          <span
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(7,16,32,0.15), rgba(7,16,32,0.55))" }}
            aria-hidden="true"
          />
          <span
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ background: "#1ECAD3", boxShadow: "0 0 40px rgba(30,202,211,0.4)" }}
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8 ml-1" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
