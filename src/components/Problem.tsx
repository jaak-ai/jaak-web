import Link from "next/link";

export default function Problem() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-6">
            Lleva la seguridad de tu empresa al siguiente nivel
          </h2>
          <p className="text-xl md:text-2xl text-[#2DB6C1] font-semibold mb-6">
            El fraude digital está en rápido crecimiento y podría duplicarse en los próximos años.
          </p>
          <p className="text-lg text-[#53535B] mb-10 max-w-3xl mx-auto">
            Los deepfakes y la suplantación de identidad están transformando la manera en que operan los fraudes en línea. Sin una detección temprana, identidades de alto riesgo pueden comprometer tu operación y reputación. Implementa JAAK, una solución que te mantenga seguro sin afectar la experiencia de tus clientes.
          </p>
          <Link href="#contacto" className="btn-primary text-lg">
            Contacta con un experto
          </Link>
        </div>
      </div>
    </section>
  );
}
