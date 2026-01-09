import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[90vh] flex items-center relative overflow-hidden" style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight mb-6">
              Soluciones de seguridad con{" "}
              <span className="text-[#2DB6C1]">biometría</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#53535B] mb-4 font-medium">
              Valida identidades reales en segundos con Inteligencia Artificial
            </p>
            <p className="text-lg text-[#696969] mb-10">
              Verificación de identidad con IA, precisa y segura para tu onboarding KYC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contacto" className="btn-cyan text-lg">
                Agendar una demo
              </Link>
            </div>
          </div>

          {/* Video */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                playsInline
                autoPlay
                preload="auto"
                loop
                muted
                className="w-full h-auto"
              >
                <source src="/images/jaak-kyc-video.mp4" type="video/webm" />
                <source src="/images/jaak-kyc-video.mp4" type="video/mp4" />
                <source src="/images/jaak-kyc-video.mp4" type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
