"use client";

import Image from "next/image";

const statusItems = [
  { label: "Documento",      sub: "INE · vigente",            delay: "0.2s" },
  { label: "Biometría",      sub: "Coincidencia 98.4%",       delay: "0.5s" },
  { label: "Prueba de vida", sub: "iBeta L1 · sin spoofing",  delay: "0.8s" },
];

export default function KycBiometricAnimation() {
  return (
    <>
      <style>{`
        @keyframes kycScan {
          0%   { top: 2%;  opacity: 0;   }
          5%   { opacity: 0.9; }
          92%  { opacity: 0.7; }
          100% { top: 95%; opacity: 0;   }
        }
        @keyframes kycSlideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes kycPulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(45,182,193,0); }
          50%      { box-shadow: 0 0 0 10px rgba(45,182,193,0.10); }
        }
        @keyframes kycBadgeFade {
          0%, 70% { opacity: 0; transform: translateY(4px); }
          100%    { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="flex justify-center lg:justify-end">
        <div
          className="w-full max-w-[340px] rounded-3xl p-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(45,182,193,0.20)",
            backdropFilter: "blur(24px)",
            animation: "kycPulseGlow 4s ease-in-out infinite",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between mb-5 pb-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(45,182,193,0.15)" }}
              >
                <svg className="w-4 h-4" style={{ color: "#2DB6C1" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-white">Verificación KYC</div>
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>escáner biométrico</div>
              </div>
            </div>
            <div
              className="flex items-center gap-1.5 text-[10px] font-semibold px-2 py-1 rounded-full"
              style={{ background: "rgba(42,215,150,0.12)", color: "#2AD796", border: "1px solid rgba(42,215,150,0.20)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#2AD796", animation: "kycPulseGlow 1.5s ease-in-out infinite" }}
              />
              En vivo
            </div>
          </div>

          {/* ── Image area with scan line overlay ── */}
          <div className="relative rounded-2xl overflow-hidden mb-5">
            <Image
              src="/images/kyc-face-scan.jpg"
              alt="Biometric face scan KYC"
              width={500}
              height={500}
              className="w-full h-auto block"
            />

            {/* Scan line over the image */}
            <div
              className="absolute left-0 right-0 h-[2px] pointer-events-none z-10"
              style={{
                background: "linear-gradient(to right, transparent 5%, #2DB6C1 40%, rgba(42,215,150,0.9) 60%, transparent 95%)",
                animation: "kycScan 3s ease-in-out infinite",
                boxShadow: "0 0 12px 3px rgba(45,182,193,0.50)",
              }}
            />

            {/* Match score badge */}
            <div
              className="absolute top-3 right-3 z-10 text-[10px] font-bold px-2 py-1 rounded-lg"
              style={{
                background: "rgba(14,17,51,0.75)",
                color: "#2DB6C1",
                border: "1px solid rgba(45,182,193,0.30)",
                backdropFilter: "blur(8px)",
                animation: "kycBadgeFade 3s 1s ease both",
              }}
            >
              Match 98.4%
            </div>
          </div>

          {/* Status rows */}
          <div className="space-y-2.5 mb-4">
            {statusItems.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3"
                style={{ animation: `kycSlideIn 0.5s ${s.delay} ease both` }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #2DB6C1, #2AD796)" }}
                >
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-white">{s.label}</span>
                  <span className="text-[10px] ml-2" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div
            className="rounded-xl px-4 py-2.5 flex items-center gap-3"
            style={{
              background: "rgba(42,215,150,0.08)",
              border: "1px solid rgba(42,215,150,0.18)",
              animation: "kycSlideIn 0.5s 1.2s ease both",
            }}
          >
            <span className="text-base">✅</span>
            <div>
              <div className="text-xs font-bold" style={{ color: "#2AD796" }}>Identidad verificada</div>
              <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                24 seg. · Expediente #JK-2026-00471
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
