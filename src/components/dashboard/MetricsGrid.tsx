"use client";

export default function MetricsGrid() {
  const metrics = [
    { label: "Casos activos", value: "1,247", change: "+12%", color: "teal" },
    { label: "Score fraude promedio", value: "2.3%", change: "-0.8%", color: "green" },
    { label: "Alertas PLD/AML", value: "34", change: "+3", color: "orange" },
    { label: "Compliance rate", value: "99.2%", change: "+0.1%", color: "blue" },
  ];

  const colorClasses = {
    teal: "bg-[#2DB6C1]",
    green: "bg-[#2AD796]",
    orange: "bg-[#EA8C30]",
    blue: "bg-[#3B82F6]",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <div key={m.label} className="bg-white border border-[#E2E8F0] rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-500 text-[#94A3B8] uppercase tracking-wide">{m.label}</p>
              <p className="text-3xl font-black text-[#212A45] mt-2">{m.value}</p>
            </div>
            <div className={`w-3 h-3 rounded-full ${colorClasses[m.color as keyof typeof colorClasses]}`} />
          </div>
          <p className="text-xs text-[#64748B] mt-4">{m.change} vs. semana anterior</p>
        </div>
      ))}
    </div>
  );
}
