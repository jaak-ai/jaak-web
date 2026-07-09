export default function SocialProof() {
  return (
    <section className="py-12 bg-[#f9fafb] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-black text-[#0E1133]">+500K</div>
            <div className="text-[#6b7280] text-sm">verificaciones procesadas</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#e5e7eb]"></div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-[#0E1133]">Fintech</div>
            <div className="text-[#6b7280] text-sm">servicios financieros y regulados</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#e5e7eb]"></div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-[#0E1133]">LATAM + EU</div>
            <div className="text-[#6b7280] text-sm">operación productiva</div>
          </div>
        </div>
      </div>
    </section>
  );
}
