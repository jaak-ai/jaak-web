import Image from "next/image";

export default function ComplianceEvidence() {
  const certifications = [
    { name: "ISO 27001", description: "Seguridad de la información", image: "/images/certifications/iso-27001.png" },
    { name: "ISO 9001", description: "Gestión de calidad", image: "/images/certifications/iso-9001.png" },
    { name: "iBeta", description: "Prueba de vida certificada", image: "/images/certifications/ibeta.png" },
    { name: "NIST FRVT", description: "Reconocimiento facial evaluado", image: "/images/certifications/nist.png" },
    { name: "IQNet", description: "Red internacional de certificación", image: "/images/certifications/iqnet.png" },
    { name: "Hecho en México", description: "Tecnología 100% mexicana", image: "/images/certifications/hecho-en-mexico.png" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Diseñado para entornos regulados.
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-4">
            No solo cumplimos. Puedes demostrar que cumples.
          </p>

          {/* Legal defense line */}
          <p className="text-lg text-[#0066ff] font-medium mb-10">
            Cada validación genera evidencia legal defendible, no solo registros técnicos.
          </p>

          {/* Principles List */}
          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-4 text-lg text-gray-700">
              <span className="w-2 h-2 bg-[#0066ff] rounded-full mt-3"></span>
              Evidencia auditable end-to-end
            </li>
            <li className="flex items-start gap-4 text-lg text-gray-700">
              <span className="w-2 h-2 bg-[#0066ff] rounded-full mt-3"></span>
              Trazabilidad completa de identidad y consentimiento
            </li>
            <li className="flex items-start gap-4 text-lg text-gray-700">
              <span className="w-2 h-2 bg-[#0066ff] rounded-full mt-3"></span>
              Control de accesos y segregación de funciones
            </li>
            <li className="flex items-start gap-4 text-lg text-gray-700">
              <span className="w-2 h-2 bg-[#0066ff] rounded-full mt-3"></span>
              Retención de información conforme a normativa
            </li>
          </ul>
        </div>

        {/* Certifications with logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-3 relative">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-semibold text-gray-900 text-sm">{cert.name}</div>
              <div className="text-gray-500 text-xs mt-1">{cert.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
