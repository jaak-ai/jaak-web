"use client";

export default function CasesTable() {
  const cases = [
    { id: "KYC-001", name: "Juan Pérez", type: "KYC", status: "Verificado", risk: "Bajo", date: "2026-07-09" },
    { id: "KYC-002", name: "María López", type: "KYC", status: "En revisión", risk: "Medio", date: "2026-07-08" },
    { id: "SIGN-045", name: "Contrato ABC", type: "Firma", status: "Firmado", risk: "Bajo", date: "2026-07-07" },
    { id: "AML-012", name: "Carlos Gómez", type: "AML", status: "Alerta", risk: "Alto", date: "2026-07-09" },
  ];

  const statusColor = {
    "Verificado": "text-[#2AD796]",
    "En revisión": "text-[#EA8C30]",
    "Firmado": "text-[#2DB6C1]",
    "Alerta": "text-[#EF4444]",
  };

  const riskColor = {
    "Bajo": "bg-[#2AD79620] text-[#2AD796]",
    "Medio": "bg-[#EA8C3020] text-[#EA8C30]",
    "Alto": "bg-[#EF444420] text-[#EF4444]",
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
            <th className="px-6 py-4 text-left font-600 text-[#64748B]">ID</th>
            <th className="px-6 py-4 text-left font-600 text-[#64748B]">Nombre</th>
            <th className="px-6 py-4 text-left font-600 text-[#64748B]">Tipo</th>
            <th className="px-6 py-4 text-left font-600 text-[#64748B]">Estado</th>
            <th className="px-6 py-4 text-left font-600 text-[#64748B]">Riesgo</th>
            <th className="px-6 py-4 text-left font-600 text-[#64748B]">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c, i) => (
            <tr key={i} className="border-b border-[#E2E8F0] hover:bg-[#FAFAFA] transition-colors">
              <td className="px-6 py-4 font-500 text-[#212A45]">{c.id}</td>
              <td className="px-6 py-4 text-[#64748B]">{c.name}</td>
              <td className="px-6 py-4 text-[#64748B]">{c.type}</td>
              <td className={`px-6 py-4 font-600 ${statusColor[c.status as keyof typeof statusColor]}`}>{c.status}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-600 ${riskColor[c.risk as keyof typeof riskColor]}`}>
                  {c.risk}
                </span>
              </td>
              <td className="px-6 py-4 text-[#94A3B8]">{c.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
