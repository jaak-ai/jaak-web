import Link from "next/link";

export default function InePrivacy() {
  return (
    <section className="py-14 bg-white border-t border-gray-100" aria-labelledby="ine-privacy-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="ine-privacy-heading" className="text-lg font-black text-[#02132D] mb-3">
          Valida con propósito y dentro de tu proceso autorizado
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          Las validaciones de identidad deben ejecutarse dentro de procesos que cuenten con las autorizaciones,
          avisos y bases legales aplicables para el tratamiento de los datos correspondientes.
        </p>
        <Link href="/seguridad" className="text-sm font-semibold text-[#1ECAD3] hover:text-[#17b5bd] underline underline-offset-2">
          Conocer seguridad y privacidad →
        </Link>
      </div>
    </section>
  );
}
