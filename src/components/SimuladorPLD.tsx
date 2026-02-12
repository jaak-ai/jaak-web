"use client";

import { useState } from "react";

interface Actividad {
  id: string;
  fraccion: string;
  nombre: string;
  identificacionUMA: number | null;
  avisoUMA: number | null;
  siempreIdentificar: boolean;
  avisoTexto?: string;
}

const UMA_2026 = 117.31;

const actividades: Actividad[] = [
  { id: "juegos", fraccion: "I", nombre: "Juegos con apuesta, concursos y sorteos", identificacionUMA: 325, avisoUMA: 645, siempreIdentificar: false },
  { id: "tarjetas-credito", fraccion: "II", nombre: "Tarjetas de credito o servicios", identificacionUMA: 805, avisoUMA: 1285, siempreIdentificar: false },
  { id: "tarjetas-prepagadas", fraccion: "II", nombre: "Tarjetas prepagadas", identificacionUMA: 645, avisoUMA: 645, siempreIdentificar: false },
  { id: "vales-monederos", fraccion: "II", nombre: "Vales y monederos electronicos", identificacionUMA: 645, avisoUMA: 645, siempreIdentificar: false },
  { id: "cheques-viajero", fraccion: "III", nombre: "Cheques de viajero", identificacionUMA: null, avisoUMA: 645, siempreIdentificar: true },
  { id: "prestamos", fraccion: "IV", nombre: "Prestamos o creditos", identificacionUMA: null, avisoUMA: 1605, siempreIdentificar: true },
  { id: "inmuebles", fraccion: "V", nombre: "Comercializacion de bienes inmuebles", identificacionUMA: null, avisoUMA: 8025, siempreIdentificar: true },
  { id: "desarrollo-inmobiliario", fraccion: "V Bis", nombre: "Desarrollo inmobiliario", identificacionUMA: null, avisoUMA: 8025, siempreIdentificar: true },
  { id: "piedras-metales", fraccion: "VI", nombre: "Piedras y metales preciosos", identificacionUMA: 805, avisoUMA: 1605, siempreIdentificar: false },
  { id: "obras-arte", fraccion: "VII", nombre: "Obras de arte", identificacionUMA: 2410, avisoUMA: 4815, siempreIdentificar: false },
  { id: "vehiculos", fraccion: "VIII", nombre: "Vehiculos", identificacionUMA: 3210, avisoUMA: 6420, siempreIdentificar: false },
  { id: "blindaje", fraccion: "IX", nombre: "Blindaje", identificacionUMA: 2410, avisoUMA: 4815, siempreIdentificar: false },
  { id: "traslado-custodia", fraccion: "X", nombre: "Traslado y custodia de valores", identificacionUMA: null, avisoUMA: 3210, siempreIdentificar: true },
  { id: "donativos", fraccion: "XIII", nombre: "Donativos", identificacionUMA: 1605, avisoUMA: 3210, siempreIdentificar: false },
  { id: "arrendamiento", fraccion: "XV", nombre: "Arrendamiento (uso y goce)", identificacionUMA: 1605, avisoUMA: 3210, siempreIdentificar: false },
  { id: "activos-virtuales", fraccion: "XVI", nombre: "Activos virtuales", identificacionUMA: null, avisoUMA: 210, siempreIdentificar: true },
];

interface Resultado {
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
  siempreIdentificar: boolean;
  acumulado6Meses: number;
  acumuladoUMA: number;
  modalidadJAAK: string;
  verificacionesMensuales: number;
  verificacionesAnuales: number;
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

export default function SimuladorPLD() {
  const [actividadId, setActividadId] = useState("");
  const [montoOperacion, setMontoOperacion] = useState("");
  const [operacionesMensuales, setOperacionesMensuales] = useState("");
  const [acumula6Meses, setAcumula6Meses] = useState(false);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [errores, setErrores] = useState<string[]>([]);

  const calcular = () => {
    const nuevosErrores: string[] = [];

    if (!actividadId) nuevosErrores.push("Selecciona una actividad vulnerable.");
    const monto = parseFloat(montoOperacion.replace(/,/g, ""));
    if (!montoOperacion || isNaN(monto) || monto <= 0) nuevosErrores.push("Ingresa un monto valido mayor a $0.");
    const ops = parseInt(operacionesMensuales, 10);
    if (!operacionesMensuales || isNaN(ops) || ops <= 0) nuevosErrores.push("Ingresa un numero valido de operaciones.");

    if (nuevosErrores.length > 0) {
      setErrores(nuevosErrores);
      setResultado(null);
      return;
    }

    setErrores([]);

    const actividad = actividades.find((a) => a.id === actividadId);
    if (!actividad) return;

    const montoUMA = monto / UMA_2026;
    const acumulado6 = acumula6Meses ? monto * ops * 6 : monto;
    const acumuladoUMA = acumulado6 / UMA_2026;

    const umbralIdUMA = actividad.identificacionUMA;
    const umbralAvUMA = actividad.avisoUMA;

    let requiereIdentificacion = false;
    if (actividad.siempreIdentificar) {
      requiereIdentificacion = true;
    } else if (umbralIdUMA !== null) {
      requiereIdentificacion = montoUMA >= umbralIdUMA || (acumula6Meses && acumuladoUMA >= umbralIdUMA);
    }

    let requiereAviso = false;
    if (umbralAvUMA !== null) {
      requiereAviso = montoUMA >= umbralAvUMA || (acumula6Meses && acumuladoUMA >= umbralAvUMA);
    }

    // Activos virtuales: also check 4 UMA threshold for contraprestacion
    if (actividadId === "activos-virtuales" && montoUMA >= 4) {
      requiereAviso = true;
    }

    const verificacionesMensuales = ops;
    const verificacionesAnuales = ops * 12;

    let modalidadJAAK = "Autoservicio";
    if (verificacionesAnuales >= 500000) {
      modalidadJAAK = "Alianza Estrategica";
    } else if (verificacionesMensuales >= 1000) {
      modalidadJAAK = "Enterprise";
    }

    setResultado({
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
      siempreIdentificar: actividad.siempreIdentificar,
      acumulado6Meses: acumulado6,
      acumuladoUMA,
      modalidadJAAK,
      verificacionesMensuales,
      verificacionesAnuales,
    });
  };

  return (
    <div>
      {/* Simulator Form */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="space-y-5">
            <div>
              <label htmlFor="actividad" className="block text-sm font-semibold text-gray-900 mb-2">
                Actividad vulnerable
              </label>
              <select
                id="actividad"
                value={actividadId}
                onChange={(e) => setActividadId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
              >
                <option value="">Selecciona una actividad</option>
                {actividades.map((a) => (
                  <option key={a.id} value={a.id}>
                    Fracc. {a.fraccion} - {a.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="monto" className="block text-sm font-semibold text-gray-900 mb-2">
                Monto promedio por operacion (MXN)
              </label>
              <input
                id="monto"
                type="text"
                inputMode="decimal"
                value={montoOperacion}
                onChange={(e) => setMontoOperacion(e.target.value.replace(/[^0-9.,]/g, ""))}
                placeholder="Ej: 150,000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="operaciones" className="block text-sm font-semibold text-gray-900 mb-2">
                Numero de operaciones mensuales
              </label>
              <input
                id="operaciones"
                type="number"
                min="1"
                value={operacionesMensuales}
                onChange={(e) => setOperacionesMensuales(e.target.value)}
                placeholder="Ej: 50"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                id="acumulacion"
                type="checkbox"
                checked={acumula6Meses}
                onChange={(e) => setAcumula6Meses(e.target.checked)}
                className="w-5 h-5 text-[#0066ff] border-gray-300 rounded focus:ring-[#0066ff]"
              />
              <label htmlFor="acumulacion" className="text-sm text-gray-700">
                Evaluar acumulacion en 6 meses
              </label>
            </div>

            <button
              onClick={calcular}
              className="w-full px-6 py-3.5 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all text-base"
            >
              Calcular obligacion legal
            </button>
          </div>

          {errores.length > 0 && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-semibold text-sm mb-1">Corrige lo siguiente:</p>
              <ul className="text-red-700 text-sm space-y-1">
                {errores.map((err, i) => (
                  <li key={i}>- {err}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Results Panel */}
        <div>
          {!resultado ? (
            <div className="h-full flex items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-300 p-8">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500 font-medium">Selecciona una actividad y completa los campos para ver el resultado legal.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Legal Result */}
              <div className={`p-5 rounded-xl border-2 ${
                resultado.requiereAviso
                  ? "bg-red-50 border-red-300"
                  : resultado.requiereIdentificacion
                    ? "bg-amber-50 border-amber-300"
                    : "bg-green-50 border-green-300"
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    resultado.requiereAviso
                      ? "bg-red-100"
                      : resultado.requiereIdentificacion
                        ? "bg-amber-100"
                        : "bg-green-100"
                  }`}>
                    {resultado.requiereAviso ? (
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    ) : resultado.requiereIdentificacion ? (
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <h4 className={`text-lg font-bold ${
                    resultado.requiereAviso ? "text-red-900" : resultado.requiereIdentificacion ? "text-amber-900" : "text-green-900"
                  }`}>
                    {resultado.requiereAviso
                      ? "Requiere Identificacion + Aviso a UIF"
                      : resultado.requiereIdentificacion
                        ? "Requiere Identificacion del cliente"
                        : "No activa umbrales regulatorios"}
                  </h4>
                </div>
                <p className={`text-sm ${
                  resultado.requiereAviso ? "text-red-700" : resultado.requiereIdentificacion ? "text-amber-700" : "text-green-700"
                }`}>
                  Fracc. {resultado.fraccion} - {resultado.activaNombre}
                </p>
              </div>

              {/* Thresholds Applied */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Umbrales aplicados</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Tu operacion</span>
                    <span className="text-sm font-bold text-gray-900">{formatMXN(resultado.montoMXN)} ({resultado.montoUMA.toFixed(2)} UMA)</span>
                  </div>
                  {acumula6Meses && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Acumulado 6 meses</span>
                      <span className="text-sm font-bold text-gray-900">{formatMXN(resultado.acumulado6Meses)} ({resultado.acumuladoUMA.toFixed(2)} UMA)</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Umbral identificacion</span>
                    <span className="text-sm font-medium text-gray-900">
                      {resultado.siempreIdentificar
                        ? "Siempre"
                        : `${formatNumber(resultado.umbralIdentificacionUMA!)} UMA (${resultado.umbralIdentificacionMXN})`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Umbral aviso</span>
                    <span className="text-sm font-medium text-gray-900">
                      {resultado.umbralAvisoUMA !== null
                        ? `${formatNumber(resultado.umbralAvisoUMA)} UMA (${resultado.umbralAvisoMXN})`
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* JAAK Classifier */}
              <div className="bg-[#0a0a0a] rounded-xl p-5 text-white">
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-4">Modalidad JAAK recomendada</h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`px-4 py-2 rounded-lg font-bold text-sm ${
                    resultado.modalidadJAAK === "Alianza Estrategica"
                      ? "bg-[#0066ff] text-white"
                      : resultado.modalidadJAAK === "Enterprise"
                        ? "bg-[#00d4aa] text-gray-900"
                        : "bg-white/10 text-white"
                  }`}>
                    {resultado.modalidadJAAK}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/70">
                    <span>Verificaciones mensuales</span>
                    <span className="font-medium text-white">{formatNumber(resultado.verificacionesMensuales)}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Verificaciones anuales</span>
                    <span className="font-medium text-white">{formatNumber(resultado.verificacionesAnuales)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
