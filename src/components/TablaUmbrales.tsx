"use client";

import { useState } from "react";

const umbralData = [
  { fraccion: "I", actividad: "Juegos con apuesta, concursos y sorteos", idUMA: "325", idMXN: "$38,125.75", avUMA: "645", avMXN: "$75,664.95", siempre: false },
  { fraccion: "II", actividad: "Tarjetas de credito o servicios", idUMA: "805", idMXN: "$94,434.55", avUMA: "1,285", avMXN: "$150,743.35", siempre: false },
  { fraccion: "II", actividad: "Tarjetas prepagadas", idUMA: "645", idMXN: "$75,664.95", avUMA: "645", avMXN: "$75,664.95", siempre: false },
  { fraccion: "II", actividad: "Vales y monederos electronicos", idUMA: "645", idMXN: "$75,664.95", avUMA: "645", avMXN: "$75,664.95", siempre: false },
  { fraccion: "III", actividad: "Cheques de viajero", idUMA: "---", idMXN: "Siempre", avUMA: "645", avMXN: "$75,664.95", siempre: true },
  { fraccion: "IV", actividad: "Prestamos o creditos", idUMA: "---", idMXN: "Siempre", avUMA: "1,605", avMXN: "$188,282.55", siempre: true },
  { fraccion: "V", actividad: "Comercializacion de bienes inmuebles", idUMA: "---", idMXN: "Siempre", avUMA: "8,025", avMXN: "$941,412.75", siempre: true },
  { fraccion: "V Bis", actividad: "Desarrollo inmobiliario", idUMA: "---", idMXN: "Siempre", avUMA: "8,025", avMXN: "$941,412.75", siempre: true },
  { fraccion: "VI", actividad: "Piedras y metales preciosos", idUMA: "805", idMXN: "$94,434.55", avUMA: "1,605", avMXN: "$188,282.55", siempre: false },
  { fraccion: "VII", actividad: "Obras de arte", idUMA: "2,410", idMXN: "$282,717.10", avUMA: "4,815", avMXN: "$564,847.65", siempre: false },
  { fraccion: "VIII", actividad: "Vehiculos (terrestres, marinos, aereos)", idUMA: "3,210", idMXN: "$376,565.10", avUMA: "6,420", avMXN: "$753,130.20", siempre: false },
  { fraccion: "IX", actividad: "Blindaje (vehiculos y bienes inmuebles)", idUMA: "2,410", idMXN: "$282,717.10", avUMA: "4,815", avMXN: "$564,847.65", siempre: false },
  { fraccion: "X", actividad: "Traslado y custodia de valores", idUMA: "---", idMXN: "Siempre", avUMA: "3,210", avMXN: "$376,565.10", siempre: true },
  { fraccion: "XI", actividad: "Prestacion de servicios profesionales independientes", idUMA: "---", idMXN: "Siempre", avUMA: "---", avMXN: "Cuando se realice operacion financiera en nombre del cliente", siempre: true },
  { fraccion: "XII", actividad: "Fedatarios publicos - Inmuebles", idUMA: "---", idMXN: "Siempre", avUMA: "8,000", avMXN: "$938,480.00", siempre: true },
  { fraccion: "XII", actividad: "Fedatarios publicos - Fideicomisos", idUMA: "---", idMXN: "Siempre", avUMA: "4,000", avMXN: "$469,240.00", siempre: true },
  { fraccion: "XIII", actividad: "Donativos", idUMA: "1,605", idMXN: "$188,282.55", avUMA: "3,210", avMXN: "$376,565.10", siempre: false },
  { fraccion: "XIV", actividad: "Comercio exterior - Joyas (valor individual)", idUMA: "485", idMXN: "$56,895.35", avUMA: "4,815", avMXN: "$564,847.65", siempre: false },
  { fraccion: "XV", actividad: "Arrendamiento (uso y goce de inmuebles)", idUMA: "1,605", idMXN: "$188,282.55", avUMA: "3,210", avMXN: "$376,565.10", siempre: false },
  { fraccion: "XVI", actividad: "Activos virtuales - operacion del cliente", idUMA: "---", idMXN: "Siempre", avUMA: "210", avMXN: "$24,635.10", siempre: true },
  { fraccion: "XVI", actividad: "Activos virtuales - contraprestacion por servicios", idUMA: "---", idMXN: "Siempre", avUMA: "4", avMXN: "$469.24", siempre: true },
];

export default function TablaUmbrales() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0066ff]/10 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-900">Ver tabla completa de umbrales Art. 17 LFPIORPI (2026)</span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-4 text-center">
            Umbrales vigentes conforme al Articulo 17 de la LFPIORPI. Valores calculados con UMA 2026 = $117.31 MXN. Fuente: Diario Oficial de la Federacion.
          </p>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0066ff] text-white">
                    <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider">Fracc.</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider">Actividad vulnerable</th>
                    <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider">Identificacion (UMA)</th>
                    <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider">Identificacion (MXN)</th>
                    <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider">Aviso (UMA)</th>
                    <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider">Aviso (MXN)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {umbralData.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} ${item.siempre ? "font-medium" : ""}`}>
                      <td className="px-3 py-3 text-sm font-bold text-gray-900 whitespace-nowrap">{item.fraccion}</td>
                      <td className="px-3 py-3 text-sm text-gray-700">{item.actividad}</td>
                      <td className="px-3 py-3 text-sm text-right whitespace-nowrap">
                        {item.idUMA === "---" ? (
                          <span className="text-[#0066ff] font-semibold">---</span>
                        ) : (
                          <span className="text-gray-900">{item.idUMA}</span>
                        )}
                      </td>
                      <td className="px-3 py-3 text-sm text-right whitespace-nowrap">
                        {item.idMXN === "Siempre" ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[#0066ff]/10 text-[#0066ff]">Siempre</span>
                        ) : (
                          <span className="text-gray-900 font-medium">{item.idMXN}</span>
                        )}
                      </td>
                      <td className="px-3 py-3 text-sm text-right whitespace-nowrap">
                        {item.avUMA === "---" ? (
                          <span className="text-gray-400">---</span>
                        ) : (
                          <span className="text-gray-900">{item.avUMA}</span>
                        )}
                      </td>
                      <td className="px-3 py-3 text-sm text-right">
                        <span className={`${item.avMXN.length > 20 ? "text-xs" : "text-sm"} text-gray-900 font-medium`}>{item.avMXN}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <strong>Valor UMA 2026:</strong> $117.31 MXN diarios | Fuente: Portal de Prevencion de Lavado de Dinero, reforma DOF 16/07/2025
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
