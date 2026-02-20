"use client";

import { useState, useRef, useCallback } from "react";
import { TurnstileWidget, getUtmParams } from "./CloudflareTurnstile";
import { gtmEvent } from "./GoogleTagManager";

const API_ENDPOINT = "https://api-kairos.jaak.ai/api/v1/public/leads";

const UMA_2026 = 117.31;

interface Actividad {
  id: string;
  fraccion: string;
  nombre: string;
  identificacionUMA: number | null;
  avisoUMA: number | null;
  siempreIdentificar: boolean;
  avisoCondicional?: string;
  grupoEvidencia: string;
}

const actividades: Actividad[] = [
  { id: "juegos", fraccion: "I", nombre: "Juegos con apuesta, concursos o sorteos", identificacionUMA: 325, avisoUMA: 645, siempreIdentificar: false, grupoEvidencia: "estandar" },
  { id: "tarjetas-credito", fraccion: "II", nombre: "Tarjetas de credito (emision/comercializacion)", identificacionUMA: 805, avisoUMA: 1285, siempreIdentificar: false, grupoEvidencia: "estandar" },
  { id: "tarjetas-prepagadas", fraccion: "II", nombre: "Tarjetas de prepago (emision/comercializacion)", identificacionUMA: 645, avisoUMA: 645, siempreIdentificar: false, grupoEvidencia: "estandar" },
  { id: "vales-monederos", fraccion: "II", nombre: "Vales y monederos de consumo", identificacionUMA: 645, avisoUMA: 645, siempreIdentificar: false, grupoEvidencia: "estandar" },
  { id: "cheques-viajero", fraccion: "III", nombre: "Cheques de viajero (emision/operacion/venta)", identificacionUMA: null, avisoUMA: 645, siempreIdentificar: true, grupoEvidencia: "financiero" },
  { id: "prestamos", fraccion: "IV", nombre: "Prestamos y creditos (otorgamiento)", identificacionUMA: null, avisoUMA: 1605, siempreIdentificar: true, grupoEvidencia: "financiero" },
  { id: "inmuebles", fraccion: "V", nombre: "Compraventa de bienes inmuebles", identificacionUMA: null, avisoUMA: 8025, siempreIdentificar: true, grupoEvidencia: "inmuebles" },
  { id: "desarrollo-inmobiliario", fraccion: "V Bis", nombre: "Desarrollo inmobiliario y comercializacion", identificacionUMA: null, avisoUMA: 8025, siempreIdentificar: true, grupoEvidencia: "inmuebles" },
  { id: "piedras-metales", fraccion: "VI", nombre: "Joyeria, metales preciosos y piedras preciosas", identificacionUMA: 805, avisoUMA: 1605, siempreIdentificar: false, grupoEvidencia: "estandar" },
  { id: "obras-arte", fraccion: "VII", nombre: "Obras de arte (comercializacion/intermediacion)", identificacionUMA: 2410, avisoUMA: 4815, siempreIdentificar: false, grupoEvidencia: "estandar" },
  { id: "vehiculos", fraccion: "VIII", nombre: "Vehiculos (aereos, maritimos y terrestres)", identificacionUMA: 3210, avisoUMA: 6420, siempreIdentificar: false, grupoEvidencia: "estandar" },
  { id: "blindaje", fraccion: "IX", nombre: "Blindaje de vehiculos", identificacionUMA: 2410, avisoUMA: 4815, siempreIdentificar: false, grupoEvidencia: "estandar" },
  { id: "traslado-custodia", fraccion: "X", nombre: "Traslado y custodia de valores", identificacionUMA: null, avisoUMA: 3210, siempreIdentificar: true, grupoEvidencia: "traslado" },
  { id: "servicios-profesionales", fraccion: "XI", nombre: "Servicios profesionales independientes", identificacionUMA: null, avisoUMA: null, siempreIdentificar: true, avisoCondicional: "Cuando se realice operacion financiera en nombre del cliente", grupoEvidencia: "financiero" },
  { id: "fedatarios", fraccion: "XII", nombre: "Fedatarios publicos (notarios/corredores)", identificacionUMA: null, avisoUMA: null, siempreIdentificar: true, grupoEvidencia: "fedatarios" },
  { id: "donativos", fraccion: "XIII", nombre: "Donativos (recepcion)", identificacionUMA: 1605, avisoUMA: 3210, siempreIdentificar: false, grupoEvidencia: "estandar" },
  { id: "comercio-exterior", fraccion: "XIV", nombre: "Comercio exterior (agencias aduanales)", identificacionUMA: null, avisoUMA: null, siempreIdentificar: true, grupoEvidencia: "comercio-exterior" },
  { id: "arrendamiento", fraccion: "XV", nombre: "Arrendamiento de bienes inmuebles", identificacionUMA: 1605, avisoUMA: 3210, siempreIdentificar: false, grupoEvidencia: "estandar" },
  { id: "activos-virtuales", fraccion: "XVI", nombre: "Activos virtuales (intercambio/custodia/transferencia)", identificacionUMA: null, avisoUMA: 210, siempreIdentificar: true, grupoEvidencia: "activos-virtuales" },
];

interface FedatarioTipo {
  id: string;
  nombre: string;
  avisoUMA: number;
}

const tiposFedatario: FedatarioTipo[] = [
  { id: "inmuebles", nombre: "Transmision de propiedad de bienes inmuebles", avisoUMA: 8000 },
  { id: "fideicomisos", nombre: "Constitucion o cesion de derechos sobre fideicomisos", avisoUMA: 4000 },
  { id: "poderes", nombre: "Otorgamiento de poderes para actos de administracion o dominio", avisoUMA: 0 },
  { id: "otro", nombre: "Otro acto u operacion ante fedatario", avisoUMA: 0 },
];

type ResultadoLegal = "aviso-identificacion" | "solo-identificacion" | "siempre" | "no-obligado";

interface Resultado {
  tipo: ResultadoLegal;
  activaNombre: string;
  fraccion: string;
  montoMXN: number;
  montoUMA: number;
  requiereIdentificacion: boolean;
  requiereAviso: boolean;
  umbralIdentificacionUMA: number | null;
  umbralIdentificacionMXN: string;
  umbralAvisoUMA: number | null;
  umbralAvisoMXN: string;
  umbralAvisoTexto?: string;
  siempreIdentificar: boolean;
  acumulado6Meses: number;
  acumuladoUMA: number;
  usaAcumulacion: boolean;
  modalidadJAAK: string;
  subModalidad: string;
  verificacionesMensuales: number;
  verificacionesAnuales: number;
  grupoEvidencia: string;
}

function formatMXN(value: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("es-MX").format(value);
}

const evidenciaPorGrupo: Record<string, string[]> = {
  estandar: [
    "Identificacion oficial vigente (INE/IFE, pasaporte o cedula profesional)",
    "Comprobante de domicilio (no mayor a 3 meses)",
    "CURP",
    "RFC con homoclave",
    "Datos de contacto verificables (telefono y correo electronico)",
    "Identificacion del beneficiario controlador (si aplica persona moral)",
    "Declaracion de origen de recursos (si el monto supera umbral de aviso)",
  ],
  financiero: [
    "Identificacion oficial vigente",
    "Comprobante de domicilio (no mayor a 3 meses)",
    "CURP y RFC con homoclave",
    "Constancia de situacion fiscal",
    "Acta constitutiva (personas morales)",
    "Poder notarial del representante legal",
    "Identificacion del beneficiario controlador",
    "Perfil transaccional del cliente",
    "Declaracion de origen licito de recursos",
  ],
  inmuebles: [
    "Identificacion oficial vigente de comprador y vendedor",
    "Comprobante de domicilio de ambas partes",
    "CURP y RFC de ambas partes",
    "Avaluo del inmueble",
    "Escritura publica o contrato de promesa",
    "Constancia de no adeudo de predial",
    "Identificacion del beneficiario controlador",
    "Declaracion de procedencia de recursos",
    "Geolocalizacion y datos catastrales del inmueble",
  ],
  traslado: [
    "Identificacion oficial vigente del solicitante",
    "Razon social, RFC y domicilio de la empresa solicitante",
    "Descripcion de los bienes o valores a trasladar",
    "Ruta y destino del traslado",
    "Monto declarado de los valores (o declaracion de imposibilidad de determinar monto)",
    "Identificacion del beneficiario controlador",
  ],
  fedatarios: [
    "Identificacion oficial vigente de todos los comparecientes",
    "CURP y RFC de cada parte",
    "Comprobante de domicilio de cada parte",
    "Datos de la escritura o instrumento publico",
    "Identificacion del beneficiario controlador (si aplica)",
    "Avaluo (en transmision de inmuebles)",
    "Contrato de fideicomiso (en constitucion o cesion)",
    "Declaracion bajo protesta de decir verdad sobre origen de recursos",
  ],
  "comercio-exterior": [
    "Identificacion oficial vigente del importador/exportador",
    "RFC y domicilio fiscal",
    "Pedimento aduanal",
    "Factura comercial del bien",
    "Descripcion detallada de la mercancia",
    "Certificado de origen (si aplica)",
    "Valor declarado por pieza individual (joyeria/metales/piedras)",
  ],
  "activos-virtuales": [
    "Identificacion oficial vigente (verificacion biometrica recomendada)",
    "CURP y RFC",
    "Comprobante de domicilio",
    "Selfie o prueba de vida",
    "Direccion de wallet de origen y destino",
    "Declaracion del origen de los activos virtuales",
    "Perfil transaccional del usuario",
    "Identificacion del beneficiario controlador (si aplica persona moral)",
  ],
};

export default function SimuladorPLD() {
  const [actividadId, setActividadId] = useState("");
  const [montoOperacion, setMontoOperacion] = useState("");
  const [operacionesMensuales, setOperacionesMensuales] = useState("");
  const [tipoCalculo, setTipoCalculo] = useState<"individual" | "acumulado">("individual");
  const [trasladoPuedeDeterminarMonto, setTrasladoPuedeDeterminarMonto] = useState<"si" | "no" | "">("");
  const [activosVirtualesContraprestacion, setActivosVirtualesContraprestacion] = useState<"si" | "no" | "">("");
  const [montoContraprestacion, setMontoContraprestacion] = useState("");
  const [valorIndividualJoya, setValorIndividualJoya] = useState("");
  const [tipoFedatario, setTipoFedatario] = useState("");
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [errores, setErrores] = useState<string[]>([]);
  const [showFormulario, setShowFormulario] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const resultadoRef = useRef<HTMLDivElement>(null);

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const calcular = () => {
    const nuevosErrores: string[] = [];
    if (!actividadId) nuevosErrores.push("Seleccione una actividad vulnerable para continuar.");
    const monto = parseFloat(montoOperacion.replace(/,/g, ""));
    if (!montoOperacion || isNaN(monto) || monto <= 0) nuevosErrores.push("Ingrese un monto valido mayor a $0.00 MXN.");
    const ops = parseInt(operacionesMensuales, 10);
    if (!operacionesMensuales || isNaN(ops) || ops < 1) nuevosErrores.push("Ingrese al menos 1 operacion mensual.");
    if (actividadId === "traslado-custodia" && !trasladoPuedeDeterminarMonto) nuevosErrores.push("Indique si es posible determinar el monto de la operacion.");
    if (actividadId === "activos-virtuales" && !activosVirtualesContraprestacion) nuevosErrores.push("Indique si existe contraprestacion por servicio.");
    if (actividadId === "activos-virtuales" && activosVirtualesContraprestacion === "si") {
      const mc = parseFloat(montoContraprestacion.replace(/,/g, ""));
      if (!montoContraprestacion || isNaN(mc) || mc <= 0) nuevosErrores.push("Ingrese el monto de la contraprestacion en MXN.");
    }
    if (actividadId === "fedatarios" && !tipoFedatario) nuevosErrores.push("Seleccione el tipo de acto o instrumento.");

    if (nuevosErrores.length > 0) {
      setErrores(nuevosErrores);
      setResultado(null);
      return;
    }
    setErrores([]);

    const actividad = actividades.find((a) => a.id === actividadId);
    if (!actividad) return;

    const montoUMA = monto / UMA_2026;
    const usaAcumulacion = tipoCalculo === "acumulado";
    const acumulado6 = usaAcumulacion ? monto * ops * 6 : monto;
    const acumuladoUMA = acumulado6 / UMA_2026;

    let umbralIdUMA = actividad.identificacionUMA;
    let umbralAvUMA = actividad.avisoUMA;
    let avisoTexto = actividad.avisoCondicional;

    if (actividadId === "fedatarios") {
      const fed = tiposFedatario.find((f) => f.id === tipoFedatario);
      if (fed) {
        umbralAvUMA = fed.avisoUMA > 0 ? fed.avisoUMA : null;
        if (fed.avisoUMA === 0) avisoTexto = "Siempre que se formalice este tipo de acto";
      }
    }

    if (actividadId === "comercio-exterior") {
      const valorJoya = parseFloat(valorIndividualJoya.replace(/,/g, "")) || 0;
      const valorJoyaUMA = valorJoya / UMA_2026;
      umbralIdUMA = null;
      if (valorJoyaUMA >= 485) {
        umbralAvUMA = 4815;
      } else {
        umbralAvUMA = null;
        avisoTexto = "Siempre segun corresponda al tipo de mercancia";
      }
    }

    let requiereIdentificacion = false;
    if (actividad.siempreIdentificar) {
      requiereIdentificacion = true;
    } else if (umbralIdUMA !== null) {
      requiereIdentificacion = montoUMA >= umbralIdUMA || (usaAcumulacion && acumuladoUMA >= umbralIdUMA);
    }

    let requiereAviso = false;
    if (umbralAvUMA !== null && umbralAvUMA > 0) {
      requiereAviso = montoUMA >= umbralAvUMA || (usaAcumulacion && acumuladoUMA >= umbralAvUMA);
    }

    if (actividadId === "traslado-custodia" && trasladoPuedeDeterminarMonto === "no") {
      requiereAviso = true;
    }

    if (actividadId === "activos-virtuales" && activosVirtualesContraprestacion === "si") {
      const mc = parseFloat(montoContraprestacion.replace(/,/g, "")) || 0;
      if (mc / UMA_2026 >= 4) {
        requiereAviso = true;
      }
    }

    if (actividadId === "servicios-profesionales") {
      requiereAviso = true;
    }

    if (actividadId === "fedatarios") {
      const fed = tiposFedatario.find((f) => f.id === tipoFedatario);
      if (fed && fed.avisoUMA === 0) {
        requiereAviso = true;
      }
    }

    if (actividadId === "comercio-exterior" && !umbralAvUMA) {
      requiereAviso = true;
    }

    const verificacionesMes = ops;
    const verificacionesAnio = ops * 12;

    let modalidadJAAK = "Autoservicio";
    let subModalidad = "";
    if (verificacionesAnio >= 500000) {
      modalidadJAAK = "Alianza Estrategica";
      subModalidad = "";
    } else if (verificacionesMes >= 1000) {
      modalidadJAAK = "Enterprise";
      subModalidad = "";
    } else {
      if (verificacionesAnio <= 50) subModalidad = "Bronce";
      else if (verificacionesAnio <= 100) subModalidad = "Plata";
      else if (verificacionesAnio <= 500) subModalidad = "Oro";
      else subModalidad = "Pre-Enterprise";
    }

    let tipo: ResultadoLegal;
    if (actividad.siempreIdentificar && requiereAviso) tipo = "siempre";
    else if (actividad.siempreIdentificar && !requiereAviso) tipo = "siempre";
    else if (requiereAviso) tipo = "aviso-identificacion";
    else if (requiereIdentificacion) tipo = "solo-identificacion";
    else tipo = "no-obligado";

    setResultado({
      tipo,
      activaNombre: actividad.nombre,
      fraccion: actividad.fraccion,
      montoMXN: monto,
      montoUMA,
      requiereIdentificacion,
      requiereAviso,
      umbralIdentificacionUMA: umbralIdUMA,
      umbralIdentificacionMXN: umbralIdUMA !== null ? formatMXN(umbralIdUMA * UMA_2026) : "Siempre",
      umbralAvisoUMA: umbralAvUMA,
      umbralAvisoMXN: umbralAvUMA !== null ? formatMXN(umbralAvUMA * UMA_2026) : "N/A",
      umbralAvisoTexto: avisoTexto,
      siempreIdentificar: actividad.siempreIdentificar,
      acumulado6Meses: acumulado6,
      acumuladoUMA,
      usaAcumulacion,
      modalidadJAAK,
      subModalidad,
      verificacionesMensuales: verificacionesMes,
      verificacionesAnuales: verificacionesAnio,
      grupoEvidencia: actividad.grupoEvidencia,
    });

    setTimeout(() => {
      resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) return;

    setFormStatus("loading");
    const utmParams = getUtmParams();

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact_name: formData.name,
          email: formData.email,
          company_name: formData.company || "",
          phone: formData.phone,
          message: resultado
            ? `[Simulador PLD] Actividad: ${resultado.activaNombre} | Resultado: ${resultado.requiereAviso ? "Aviso + Identificacion" : resultado.requiereIdentificacion ? "Solo identificacion" : "No obligado"} | Volumen: ${resultado.verificacionesMensuales} verif/mes (${resultado.verificacionesAnuales}/año) | Modalidad: ${resultado.modalidadJAAK} | Monto: ${formatMXN(resultado.montoMXN)} (${resultado.montoUMA.toFixed(2)} UMA)`
            : "[Simulador PLD] Solicitud de sesion estrategica",
          country: "MX",
          turnstile_token: turnstileToken,
          utm_source: utmParams.utm_source,
          utm_medium: utmParams.utm_medium,
          utm_campaign: utmParams.utm_campaign,
        }),
      });
      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "" });
        setTurnstileToken(null);
        gtmEvent("generate_lead", { form_name: "simulador_pld" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const getResultadoColor = () => {
    if (!resultado) return { bg: "", border: "", text: "", icon: "", badge: "" };
    if (resultado.tipo === "siempre" && resultado.requiereAviso) return { bg: "bg-red-50", border: "border-red-300", text: "text-red-900", icon: "bg-red-100 text-red-600", badge: "bg-red-100 text-red-700" };
    if (resultado.tipo === "siempre") return { bg: "bg-red-50", border: "border-red-200", text: "text-red-900", icon: "bg-red-100 text-red-600", badge: "bg-red-100 text-red-700" };
    if (resultado.tipo === "aviso-identificacion") return { bg: "bg-red-50", border: "border-red-300", text: "text-red-900", icon: "bg-red-100 text-red-600", badge: "bg-red-100 text-red-700" };
    if (resultado.tipo === "solo-identificacion") return { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-900", icon: "bg-amber-100 text-amber-600", badge: "bg-amber-100 text-amber-700" };
    return { bg: "bg-green-50", border: "border-green-300", text: "text-green-900", icon: "bg-green-100 text-green-600", badge: "bg-green-100 text-green-700" };
  };

  const getResultadoTitulo = () => {
    if (!resultado) return "";
    if (resultado.tipo === "siempre" && resultado.requiereAviso) return "Esta actividad requiere identificacion en todos los casos y su operacion activa aviso a la UIF";
    if (resultado.tipo === "siempre") return "Esta actividad requiere identificacion en todos los casos";
    if (resultado.tipo === "aviso-identificacion") return "Su operacion activa obligacion de identificacion y aviso";
    if (resultado.tipo === "solo-identificacion") return "Su operacion requiere identificacion del cliente";
    return "Su operacion no activa umbrales de la LFPIORPI";
  };

  const getResultadoBadge = () => {
    if (!resultado) return "";
    if (resultado.tipo === "siempre" && resultado.requiereAviso) return "Obligacion permanente + Aviso a la UIF";
    if (resultado.tipo === "siempre") return "Obligacion permanente";
    if (resultado.tipo === "aviso-identificacion") return "Aviso a la UIF obligatorio";
    if (resultado.tipo === "solo-identificacion") return "Identificacion obligatoria";
    return "Sin obligacion regulatoria";
  };

  const getResultadoTexto = () => {
    if (!resultado) return "";
    const m = formatMXN(resultado.montoMXN);
    const u = resultado.montoUMA.toFixed(2);
    const act = resultado.activaNombre;

    if (resultado.tipo === "siempre" && resultado.requiereAviso) {
      return `Para ${act}, la LFPIORPI establece obligacion de identificacion del cliente independientemente del monto de la operacion. Adicionalmente, el monto de ${m} (${u} UMA) supera el umbral de aviso (${resultado.umbralAvisoUMA ? formatNumber(resultado.umbralAvisoUMA) + " UMA / " + resultado.umbralAvisoMXN : "condicionado"}), por lo que tambien debe presentar aviso a la UIF.`;
    }
    if (resultado.tipo === "siempre") {
      return `Para ${act}, la LFPIORPI establece obligacion de identificacion del cliente independientemente del monto de la operacion. El monto actual no activa el umbral de aviso a la UIF${resultado.umbralAvisoUMA ? " (" + formatNumber(resultado.umbralAvisoUMA) + " UMA / " + resultado.umbralAvisoMXN + ")" : ""}, pero si el de identificacion.`;
    }
    if (resultado.tipo === "aviso-identificacion") {
      return `El monto de ${m} (${u} UMA) supera el umbral de aviso para ${act}. Conforme al Art. 17 de la LFPIORPI, su organizacion debe integrar un expediente de identificacion del cliente y presentar aviso a la Unidad de Inteligencia Financiera (UIF).`;
    }
    if (resultado.tipo === "solo-identificacion") {
      return `El monto de ${m} (${u} UMA) supera el umbral de identificacion para ${act}, pero no alcanza el umbral de aviso. Debe integrar un expediente de identificacion del cliente conforme a la LFPIORPI. No requiere aviso a la UIF por esta operacion individual.`;
    }
    return `El monto de ${m} (${u} UMA) no supera los umbrales de identificacion${resultado.umbralIdentificacionUMA ? " (" + formatNumber(resultado.umbralIdentificacionUMA) + " UMA / " + resultado.umbralIdentificacionMXN + ")" : ""} ni de aviso${resultado.umbralAvisoUMA ? " (" + formatNumber(resultado.umbralAvisoUMA) + " UMA / " + resultado.umbralAvisoMXN + ")" : ""} para ${act}. No obstante, JAAK recomienda implementar medidas de identificacion como practica preventiva de cumplimiento. Los umbrales pueden alcanzarse por acumulacion en periodos de 6 meses.`;
  };

  const getModalidadTexto = () => {
    if (!resultado) return "";
    const vm = formatNumber(resultado.verificacionesMensuales);
    const va = formatNumber(resultado.verificacionesAnuales);
    if (resultado.modalidadJAAK === "Alianza Estrategica") {
      return `Su volumen estimado de ${va} verificaciones anuales y perfil de integracion lo posiciona para el programa de Alianza Estrategica de JAAK. Este modelo esta disenado para organizaciones que integran verificacion de identidad dentro de su propia plataforma o la ofrecen como servicio a terceros.`;
    }
    if (resultado.modalidadJAAK === "Enterprise") {
      return `Con un volumen estimado de ${vm} verificaciones mensuales (${va} al ano), su organizacion requiere la modalidad Enterprise de JAAK. Esto incluye integracion por API, soporte tecnico dedicado, SLAs personalizados y condiciones comerciales ajustadas a su volumen.`;
    }
    return `Con un volumen estimado de ${vm} verificaciones mensuales (${va} al ano), su organizacion se ubica en la modalidad de Autoservicio de JAAK. Puede iniciar de forma autonoma desde la plataforma, sin necesidad de integracion tecnica ni contrato Enterprise.`;
  };

  const getSubModalidadTexto = () => {
    if (!resultado || resultado.modalidadJAAK !== "Autoservicio") return "";
    switch (resultado.subModalidad) {
      case "Bronce": return "Volumen Bronce — Ideal para sujetos obligados con operaciones esporadicas que superan umbrales.";
      case "Plata": return "Volumen Plata — Para organizaciones con flujo constante pero moderado de clientes nuevos.";
      case "Oro": return "Volumen Oro — Volumen significativo. Considere Enterprise si proyecta crecimiento sostenido.";
      case "Pre-Enterprise": return "Su volumen se acerca al umbral Enterprise. Si proyecta crecimiento, le recomendamos evaluar un plan Enterprise para acceder a mejores condiciones y soporte dedicado.";
      default: return "";
    }
  };

  const colors = getResultadoColor();

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="space-y-5">
          <div>
            <label htmlFor="actividad" className="block text-sm font-semibold text-gray-900 mb-2">
              Actividad vulnerable *
            </label>
            <select
              id="actividad"
              value={actividadId}
              onChange={(e) => {
                setActividadId(e.target.value);
                setResultado(null);
                setTrasladoPuedeDeterminarMonto("");
                setActivosVirtualesContraprestacion("");
                setMontoContraprestacion("");
                setValorIndividualJoya("");
                setTipoFedatario("");
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
            >
              <option value="">Seleccione una actividad del Art. 17</option>
              {actividades.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.fraccion} · {a.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="monto" className="block text-sm font-semibold text-gray-900 mb-2">
              Monto promedio por operacion *
            </label>
            <div className="relative">
              <input
                id="monto"
                type="text"
                inputMode="decimal"
                value={montoOperacion}
                onChange={(e) => setMontoOperacion(e.target.value.replace(/[^0-9.,]/g, ""))}
                placeholder="$0.00"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#0066ff] focus:border-transparent pr-16"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">MXN</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Ingrese el monto en pesos mexicanos de una operacion tipica.</p>
          </div>

          <div>
            <label htmlFor="operaciones" className="block text-sm font-semibold text-gray-900 mb-2">
              Numero de operaciones mensuales *
            </label>
            <input
              id="operaciones"
              type="number"
              min="1"
              value={operacionesMensuales}
              onChange={(e) => setOperacionesMensuales(e.target.value)}
              placeholder="0"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Cantidad de operaciones que procesa su organizacion al mes.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Tipo de calculo</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tipoCalculo"
                  checked={tipoCalculo === "individual"}
                  onChange={() => setTipoCalculo("individual")}
                  className="w-4 h-4 text-[#0066ff] border-gray-300 focus:ring-[#0066ff]"
                />
                <span className="text-sm text-gray-700">Operacion individual</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tipoCalculo"
                  checked={tipoCalculo === "acumulado"}
                  onChange={() => setTipoCalculo("acumulado")}
                  className="w-4 h-4 text-[#0066ff] border-gray-300 focus:ring-[#0066ff]"
                />
                <span className="text-sm text-gray-700">Acumulado en 6 meses</span>
              </label>
            </div>
            {tipoCalculo === "acumulado" && (
              <p className="text-xs text-gray-500 mt-1">El Art. 17 contempla umbrales por operacion individual y por acumulado en periodos de 6 meses.</p>
            )}
          </div>

          {/* Conditional: Traslado y custodia */}
          {actividadId === "traslado-custodia" && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                ¿Es posible determinar el monto de la operacion? *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="trasladoMonto" checked={trasladoPuedeDeterminarMonto === "si"} onChange={() => setTrasladoPuedeDeterminarMonto("si")} className="w-4 h-4 text-[#0066ff]" />
                  <span className="text-sm text-gray-700">Si</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="trasladoMonto" checked={trasladoPuedeDeterminarMonto === "no"} onChange={() => setTrasladoPuedeDeterminarMonto("no")} className="w-4 h-4 text-[#0066ff]" />
                  <span className="text-sm text-gray-700">No</span>
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">Si no es posible determinar el monto, la LFPIORPI establece que el aviso a la UIF aplica en todos los casos.</p>
            </div>
          )}

          {/* Conditional: Activos virtuales */}
          {actividadId === "activos-virtuales" && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                ¿Existe contraprestacion por servicio de custodia o transferencia? *
              </label>
              <div className="flex gap-4 mb-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="avContraprestacion" checked={activosVirtualesContraprestacion === "si"} onChange={() => setActivosVirtualesContraprestacion("si")} className="w-4 h-4 text-[#0066ff]" />
                  <span className="text-sm text-gray-700">Si</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="avContraprestacion" checked={activosVirtualesContraprestacion === "no"} onChange={() => setActivosVirtualesContraprestacion("no")} className="w-4 h-4 text-[#0066ff]" />
                  <span className="text-sm text-gray-700">No</span>
                </label>
              </div>
              {activosVirtualesContraprestacion === "si" && (
                <div className="mt-3">
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Monto de la contraprestacion por servicio *</label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="decimal"
                      value={montoContraprestacion}
                      onChange={(e) => setMontoContraprestacion(e.target.value.replace(/[^0-9.,]/g, ""))}
                      placeholder="$0.00"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#0066ff] focus:border-transparent pr-16"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">MXN</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Si la contraprestacion es igual o superior a 4 UMA ({formatMXN(4 * UMA_2026)}), se activa aviso a la UIF independientemente del monto de operacion.</p>
                </div>
              )}
            </div>
          )}

          {/* Conditional: Fedatarios */}
          {actividadId === "fedatarios" && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Tipo de acto o instrumento *
              </label>
              <select
                value={tipoFedatario}
                onChange={(e) => setTipoFedatario(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
              >
                <option value="">Seleccione el tipo de acto</option>
                {tiposFedatario.map((f) => (
                  <option key={f.id} value={f.id}>{f.nombre}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">Cada tipo de acto tiene umbrales especificos conforme al Art. 17, fraccion XII.</p>
            </div>
          )}

          {/* Conditional: Comercio exterior */}
          {actividadId === "comercio-exterior" && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Valor individual de la pieza (joyeria / piedra / metal)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={valorIndividualJoya}
                  onChange={(e) => setValorIndividualJoya(e.target.value.replace(/[^0-9.,]/g, ""))}
                  placeholder="$0.00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#0066ff] focus:border-transparent pr-16"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">MXN</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Para operaciones de comercio exterior con joyeria, el umbral de identificacion es de 485 UMA por pieza individual ({formatMXN(485 * UMA_2026)}).</p>
            </div>
          )}

          <button
            onClick={calcular}
            className="w-full px-6 py-3.5 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all text-base"
          >
            Evaluar obligacion
          </button>
          <p className="text-xs text-gray-400 text-center">No almacenamos los datos ingresados. Este calculo es orientativo y no sustituye asesoria legal.</p>

          {errores.length > 0 && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-semibold text-sm mb-1">Complete los campos obligatorios:</p>
              <ul className="text-red-700 text-sm space-y-1">
                {errores.map((err, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    {err}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Results placeholder */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          {!resultado ? (
            <div className="h-full min-h-[400px] flex items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-300 p-8">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 font-medium mb-1">Resultado legal</p>
                <p className="text-gray-400 text-sm">Seleccione una actividad y complete los campos para ver su diagnostico regulatorio.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4" ref={resultadoRef}>
              {/* Block 1: Legal Result */}
              <div className={`p-5 rounded-xl border-2 ${colors.bg} ${colors.border}`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                    {resultado.requiereAviso ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    ) : resultado.requiereIdentificacion ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    )}
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-1 ${colors.badge}`}>{getResultadoBadge()}</span>
                    <h4 className={`text-base font-bold ${colors.text}`}>{getResultadoTitulo()}</h4>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${colors.text} opacity-80`}>{getResultadoTexto()}</p>
              </div>

              {/* Block 2: Thresholds */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Umbral regulatorio aplicable</h4>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Actividad</span>
                    <span className="text-sm font-medium text-gray-900 text-right max-w-[60%]">Fracc. {resultado.fraccion} — {resultado.activaNombre}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Monto de su operacion</span>
                    <span className="text-sm font-bold text-gray-900">{formatMXN(resultado.montoMXN)} ({resultado.montoUMA.toFixed(2)} UMA)</span>
                  </div>
                  {resultado.usaAcumulacion && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Acumulado 6 meses</span>
                      <span className="text-sm font-bold text-gray-900">{formatMXN(resultado.acumulado6Meses)} ({resultado.acumuladoUMA.toFixed(2)} UMA)</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Umbral de identificacion</span>
                    <span className="text-sm font-medium text-gray-900">
                      {resultado.siempreIdentificar ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Siempre</span>
                      ) : `${formatNumber(resultado.umbralIdentificacionUMA!)} UMA → ${resultado.umbralIdentificacionMXN}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Umbral de aviso a UIF</span>
                    <span className="text-sm font-medium text-gray-900">
                      {resultado.umbralAvisoTexto
                        ? <span className="text-xs text-right max-w-[55%] block">{resultado.umbralAvisoTexto}</span>
                        : resultado.umbralAvisoUMA !== null
                          ? `${formatNumber(resultado.umbralAvisoUMA)} UMA → ${resultado.umbralAvisoMXN}`
                          : "N/A"}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">UMA 2026: $117.31 MXN · Fuente: INEGI / Diario Oficial de la Federacion.</p>
              </div>

              {/* Block 3: Evidence Checklist */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Expediente de identificacion recomendado</h4>
                <ul className="space-y-2">
                  {evidenciaPorGrupo[resultado.grupoEvidencia]?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mt-3">Listado orientativo basado en las disposiciones de caracter general de la LFPIORPI. Los requisitos especificos pueden variar segun su sector.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Below the fold results — full width */}
      {resultado && (
        <div className="mt-8 space-y-6">
          {/* Block 4: Consumption Estimation */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Estimacion de verificaciones</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-black text-gray-900">{formatNumber(resultado.verificacionesMensuales)}</div>
                <div className="text-sm text-gray-600">verificaciones / mes</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-black text-gray-900">{formatNumber(resultado.verificacionesAnuales)}</div>
                <div className="text-sm text-gray-600">verificaciones / ano</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-black text-gray-900">{formatNumber(resultado.verificacionesMensuales * 2)}</div>
                <div className="text-sm text-gray-600">con beneficiario controlador</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-xs text-blue-800">Cada operacion que active umbrales de identificacion requiere al menos una verificacion de identidad. Para expedientes con beneficiario controlador, considere 2 verificaciones por operacion (titular + beneficiario).</p>
            </div>
          </div>

          {/* Block 5: Recommended Modality */}
          <div className="bg-[#0a0a0a] rounded-xl p-6 text-white">
            <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-4">Modalidad JAAK recomendada</h4>
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-4 py-2 rounded-lg font-bold text-sm ${
                resultado.modalidadJAAK === "Alianza Estrategica" ? "bg-[#2AD796] text-gray-900"
                : resultado.modalidadJAAK === "Enterprise" ? "bg-[#2DB6C1] text-gray-900"
                : "bg-[#0066ff] text-white"
              }`}>
                {resultado.modalidadJAAK}
              </span>
              {resultado.subModalidad && (
                <span className="text-xs text-white/40 bg-white/10 px-2 py-1 rounded-full">{resultado.subModalidad}</span>
              )}
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-3">{getModalidadTexto()}</p>
            {getSubModalidadTexto() && (
              <p className="text-white/50 text-xs italic">{getSubModalidadTexto()}</p>
            )}
          </div>

          {/* Block 6: PDF Summary */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Resumen de Expediente KYC</h4>
            <p className="text-sm text-gray-700 mb-4">Genere un documento PDF con el resumen regulatorio de esta consulta. El expediente incluira:</p>
            <ul className="space-y-2 mb-4">
              {[
                "Resultado legal de su operacion (obligacion de identificacion y/o aviso)",
                "Umbrales aplicables con equivalencia UMA/MXN",
                "Checklist de evidencia minima recomendada para su actividad",
                "Estimacion de volumen de verificaciones (mensual y anual)",
                "Modalidad JAAK sugerida",
                "Referencia normativa: Art. 17 LFPIORPI, fracciones aplicables",
                "Fecha de generacion y valor de UMA utilizado",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-all text-sm" disabled>
              Descargar resumen en PDF (proximamente)
            </button>
            <p className="text-xs text-gray-400 mt-2">Documento orientativo generado automaticamente. No constituye opinion legal ni dictamen de cumplimiento.</p>
          </div>

          {/* Block 7: CTA to form */}
          <div className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] rounded-xl p-6 text-white text-center">
            <h4 className="text-xl font-bold mb-2">¿Necesita implementar este expediente?</h4>
            <p className="text-white/80 text-sm mb-4">Agende una sesion estrategica con nuestro equipo de cumplimiento. En 15 minutos evaluamos como JAAK puede automatizar la integracion del expediente KYC para su actividad vulnerable.</p>
            <button
              onClick={() => {
                setShowFormulario(true);
                setTimeout(() => {
                  document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="px-6 py-3 bg-white text-[#0066ff] font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              Agendar sesion estrategica
            </button>
          </div>

          {/* Contact Form */}
          {showFormulario && (
            <div id="agendar" className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Agende su sesion estrategica de cumplimiento</h3>
              <p className="text-gray-600 mb-6">En 15 minutos evaluamos como JAAK puede automatizar el expediente KYC para su actividad vulnerable. Sin compromiso, sin costo.</p>

              {formStatus === "success" ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-green-800 font-semibold mb-1">Sesion agendada correctamente</p>
                  <p className="text-green-700 text-sm">Nuestro equipo de cumplimiento se comunicara con usted en las proximas 2 horas habiles para confirmar fecha y horario. Revise su bandeja de entrada.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Nombre y apellidos *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Maria Gonzalez Perez"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Correo electronico corporativo *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nombre@empresa.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Telefono de contacto *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+52 55 1234 5678"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Empresa u organizacion *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nombre de su empresa"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {resultado && (
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 font-medium mb-1">Datos del simulador (se enviaran automaticamente):</p>
                      <p className="text-xs text-gray-400">Actividad: {resultado.activaNombre} · Resultado: {getResultadoBadge()} · Volumen: {formatNumber(resultado.verificacionesMensuales)} verif/mes · Modalidad: {resultado.modalidadJAAK}</p>
                    </div>
                  )}

                  <TurnstileWidget
                    onVerify={handleTurnstileVerify}
                    onError={handleTurnstileError}
                    onExpire={handleTurnstileExpire}
                  />

                  <button
                    type="submit"
                    disabled={formStatus === "loading" || !turnstileToken}
                    className="w-full px-6 py-3.5 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === "loading" ? "Enviando..." : "Agendar sesion estrategica"}
                  </button>
                  <p className="text-xs text-gray-400 text-center">Sus datos se envian de forma segura. Recibira confirmacion por correo electronico en las proximas 2 horas habiles.</p>
                  {formStatus === "error" && (
                    <p className="text-red-600 text-sm text-center">No pudimos procesar su solicitud en este momento. Intente nuevamente o escribanos directamente a sales@jaak.ai.</p>
                  )}
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
