import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Video Background */}
      <video
        playsInline
        autoPlay
        preload="auto"
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/jaak-kyc-video.mp4" type="video/webm" />
        <source src="/images/jaak-kyc-video.mp4" type="video/mp4" />
        <source src="/images/jaak-kyc-video.mp4" type="video/ogg" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80 z-[1]"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
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
              <Link href="#contacto" className="btn-blue text-lg">
                Agendar una demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
