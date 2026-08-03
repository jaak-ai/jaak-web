import Image from "next/image";
import type { CaptureExample } from "./data";

function ExampleCard({ example, correct }: { example: CaptureExample; correct: boolean }) {
  return (
    <div
      className="rounded-xl overflow-hidden border-[1.5px] bg-white"
      style={{ borderColor: correct ? "color-mix(in srgb, var(--accent-green) 45%, white)" : "#EDD3C9" }}
    >
      <div className="relative aspect-video">
        <Image src={example.src} alt={example.alt} fill sizes="(max-width: 640px) 50vw, 220px" className="object-cover" />
        <span
          className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ background: correct ? "var(--accent-green)" : "#C05A3E" }}
          aria-hidden="true"
        >
          {correct ? "✓" : "✕"}
        </span>
      </div>
      <div className="p-3">
        <p className="text-sm font-bold" style={{ color: "var(--primary)" }}>{example.label}</p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{example.desc}</p>
      </div>
    </div>
  );
}

export default function CaptureCompare({
  correct,
  avoid,
}: {
  correct: CaptureExample[];
  avoid: CaptureExample[];
}) {
  return (
    <div className="mt-4">
      <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: "var(--accent-green)" }}>
        <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
        </svg>
        Correcto
      </p>
      <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {correct.map((ex) => (
          <ExampleCard key={ex.src} example={ex} correct />
        ))}
      </div>

      <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide mt-6 mb-2" style={{ color: "#C05A3E" }}>
        ✕ Evite
      </p>
      <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        {avoid.map((ex) => (
          <ExampleCard key={ex.src} example={ex} correct={false} />
        ))}
      </div>
    </div>
  );
}
