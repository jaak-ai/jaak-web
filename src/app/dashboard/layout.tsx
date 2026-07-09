import Sidebar from "@/components/dashboard/Sidebar";

export const metadata = {
  title: "Dashboard Cumplimiento — JAAK",
  description: "Panel de control para oficiales de cumplimiento",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
