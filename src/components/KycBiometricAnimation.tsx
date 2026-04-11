"use client";

const featureDots = [
  { top: "22%", left: "50%", delay: "0.0s" },  // frente
  { top: "38%", left: "33%", delay: "0.2s" },  // ojo izq
  { top: "38%", left: "67%", delay: "0.4s" },  // ojo der
  { top: "52%", left: "50%", delay: "0.6s" },  // nariz
  { top: "65%", left: "38%", delay: "0.8s" },  // comisura izq
  { top: "65%", left: "62%", delay: "1.0s" },  // comisura der
  { top: "30%", left: "22%", delay: "0.3s" },  // pómulo izq
  { top: "30%", left: "78%", delay: "0.5s" },  // pómulo der
  { top: "75%", left: "50%", delay: "1.2s" },  // mentón
];

const statusItems = [
  { label: "Documento",     sub: "INE · vigente",          delay: "0.2s" },
  { label: "Biometría",     sub: "Coincidencia 98.4%",     delay: "0.5s" },
  { label: "Prueba de vida", sub: "iBeta L1 · sin spoofing", delay: "0.8s" },
];

export default function KycBiometricAnimation() {
  return (
    <>
      <style>{`
        @keyframes kycSpinCW  { to { transform: rotate(360deg);  } }
        @keyframes kycSpinCCW { to { transform: rotate(-360deg); } }
        @keyframes kycScan {
          0%   { top: 8%;  opacity: 0;   }
          5%   { opacity: 0.8; }
          90%  { opacity: 0.6; }
          100% { top: 88%; opacity: 0;   }
        }
        @keyframes kycDot {
          0%, 100% { opacity: 0.25; transform: translate(-50%,-50%) scale(0.8); }
          50%      { opacity: 1;    transform: translate(-50%,-50%) scale(1.4); }
        }
        @keyframes kycSlideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        @keyframes kycDrawFace {
          from { stroke-dashoffset: 900; }
          to   { stroke-dashoffset: 0;   }
        }
        @keyframes kycPulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(45,182,193,0); }
          50%      { box-shadow: 0 0 0 8px rgba(45,182,193,0.12); }
        }
        @keyframes kycBadgeFade {
          0%, 80%  { opacity: 0; transform: translateY(4px); }
          100%     { opacity: 1; transform: translateY(0); }
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
                style={{ background: "#2AD796", animation: "kycDot 1.5s ease-in-out infinite" }}
              />
              En vivo
            </div>
          </div>

          {/* Biometric scan area */}
          <div className="relative w-48 h-48 mx-auto mb-6">

            {/* Outer ring — CW */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: "1.5px dashed rgba(45,182,193,0.35)",
                animation: "kycSpinCW 6s linear infinite",
              }}
            />

            {/* Inner ring — CCW */}
            <div
              className="absolute inset-3 rounded-full"
              style={{
                border: "1px dashed rgba(42,215,150,0.25)",
                animation: "kycSpinCCW 4s linear infinite",
              }}
            />

            {/* Corner brackets */}
            {[
              { top: 8, left: 8,  borderTop: "2px solid #2DB6C1", borderLeft: "2px solid #2DB6C1",  borderRadius: "4px 0 0 0" },
              { top: 8, right: 8, borderTop: "2px solid #2DB6C1", borderRight: "2px solid #2DB6C1", borderRadius: "0 4px 0 0" },
              { bottom: 8, left: 8,  borderBottom: "2px solid #2DB6C1", borderLeft: "2px solid #2DB6C1",  borderRadius: "0 0 0 4px" },
              { bottom: 8, right: 8, borderBottom: "2px solid #2DB6C1", borderRight: "2px solid #2DB6C1", borderRadius: "0 0 4px 0" },
            ].map((b, i) => (
              <div key={i} className="absolute w-5 h-5" style={{ ...b }} />
            ))}

            {/* SVG — face silhouette */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 192 192"
              fill="none"
            >
              {/* Head oval */}
              <ellipse
                cx="96" cy="88" rx="44" ry="56"
                stroke="rgba(45,182,193,0.45)"
                strokeWidth="1"
                strokeDasharray="900"
                style={{ animation: "kycDrawFace 2.5s ease forwards" }}
              />
              {/* Eyes */}
              <ellipse cx="80" cy="76" rx="6" ry="4" stroke="rgba(45,182,193,0.5)" strokeWidth="1"
                strokeDasharray="900" style={{ animation: "kycDrawFace 2.5s 0.3s ease both" }} />
              <ellipse cx="112" cy="76" rx="6" ry="4" stroke="rgba(45,182,193,0.5)" strokeWidth="1"
                strokeDasharray="900" style={{ animation: "kycDrawFace 2.5s 0.5s ease both" }} />
              {/* Nose */}
              <path d="M96 84 L91 100 Q96 103 101 100 Z"
                stroke="rgba(45,182,193,0.35)" strokeWidth="1" fill="none"
                strokeDasharray="900" style={{ animation: "kycDrawFace 2.5s 0.7s ease both" }} />
              {/* Mouth */}
              <path d="M83 112 Q96 120 109 112"
                stroke="rgba(45,182,193,0.45)" strokeWidth="1" fill="none"
                strokeDasharray="900" style={{ animation: "kycDrawFace 2.5s 0.9s ease both" }} />
            </svg>

            {/* Scan line */}
            <div
              className="absolute left-6 right-6 h-px pointer-events-none"
              style={{
                background: "linear-gradient(to right, transparent, #2DB6C1, rgba(42,215,150,0.8), transparent)",
                animation: "kycScan 3s ease-in-out infinite",
                boxShadow: "0 0 8px rgba(45,182,193,0.6)",
              }}
            />

            {/* Feature detection dots */}
            {featureDots.map((d, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  top: d.top,
                  left: d.left,
                  transform: "translate(-50%, -50%)",
                  background: "linear-gradient(135deg, #2DB6C1, #2AD796)",
                  boxShadow: "0 0 6px rgba(45,182,193,0.7)",
                  animation: `kycDot 2s ${d.delay} ease-in-out infinite`,
                }}
              />
            ))}

            {/* Match score badge */}
            <div
              className="absolute right-0 top-1/3 text-[9px] font-bold px-1.5 py-0.5 rounded"
              style={{
                background: "rgba(45,182,193,0.15)",
                color: "#2DB6C1",
                border: "1px solid rgba(45,182,193,0.25)",
                animation: "kycBadgeFade 3s 1.5s ease both",
              }}
            >
              98.4%
            </div>
          </div>

          {/* Status rows */}
          <div className="space-y-2.5">
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
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-white">{s.label}</span>
                  <span className="text-[10px] ml-2" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div
            className="mt-4 rounded-xl px-4 py-2.5 flex items-center gap-3"
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
