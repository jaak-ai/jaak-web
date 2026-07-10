import Image from "next/image";

export default function KYCSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6">
              Automatiza tu proceso KYC (Conoce a Tu Cliente) y asegúrate que tus clientes sean quien dicen ser
            </h2>
            <p className="text-lg text-[#53535B]">
              Combina biometría facial, liveness pasivo, OCR y consulta en listas negras, validando la identidad de usuarios segundos, ayudando al cumplimiento regulatorio con menor fricción, aumentando la conversión y disminuyendo el abandono
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/jaak-face-recognition.png"
              alt="JAAK Face Recognition"
              width={500}
              height={400}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
