import Link from "next/link";

export default function AutoservicioPricingGrid() {
  return (
    <>
      {/* Fila 1: KYC, Firma Simple, Firma Digital con Validez NOM-151 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* Card 1: KYC */}
        <div className="border border-[#EEEEEE] rounded-2xl p-6 bg-[#FAFAFA]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-[#2DB6C1] rounded-lg flex items-center justify-center text-lg">
              👤
            </div>
            <div>
              <div className="font-bold text-[#212A45] text-lg">
                KYC · Verificación de Identidad
              </div>
              <div className="text-gray-400 text-sm">
                Liveness iBeta Level 1 · Sin NOM-151
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: "Cobre", qty: "5 verif", price: "$99", link: "https://platform.jaak.ai/#/onboarding/plans/cobre" },
              { name: "Bronce", qty: "50 verif", price: "$1,500", link: "https://platform.jaak.ai/#/onboarding/plans/bronce" },
              { name: "Plata", qty: "100 verif", price: "$2,800", link: "https://platform.jaak.ai/#/onboarding/plans/plata" },
              { name: "Oro", qty: "250 verif", price: "$6,625", link: "https://platform.jaak.ai/#/onboarding/plans/oro" },
              { name: "Platino", qty: "500 verif", price: "$12,500", link: "https://platform.jaak.ai/#/onboarding/plans/platino1" },
            ].map((plan) => (
              <div key={plan.name} className="flex items-center justify-between p-3 rounded-xl border border-[#EEEEEE] bg-white gap-2">
                <div>
                  <span className="font-semibold text-[#212A45] text-sm">{plan.name}</span>
                  <span className="text-gray-400 text-xs ml-1.5">{plan.qty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="font-bold text-[#212A45] text-sm">{plan.price}</div>
                    <div className="text-[10px] text-gray-400">+ IVA</div>
                  </div>
                  <Link href={plan.link} target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1.5 bg-[#2DB6C1] text-white rounded-lg font-semibold hover:bg-[#25969f] transition-all whitespace-nowrap">
                    Comprar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Firma Simple */}
        <div className="border border-[#EEEEEE] rounded-2xl p-6 bg-[#FAFAFA]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-[#6366f1] rounded-lg flex items-center justify-center text-lg">
              ✍️
            </div>
            <div>
              <div className="font-bold text-[#212A45] text-lg">Firma Simple</div>
              <div className="text-gray-400 text-sm">Firma electrónica básica sin NOM-151</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: "Cobre", qty: "10 firmas", price: "$49", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTU2Ljg0JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwU2ltcGxlJTIwQ29icmUlMjAxMCUyMiUyQyUyMnElMjIlM0ExMCU3RCU1RCU3RA%3D%3D" },
              { name: "Bronce", qty: "50 firmas", price: "$400", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTQ2NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyMFNpbXBsZSUyMEJyb25jZSUyMDUwJTIyJTJDJTIycSUyMiUzQTUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNGZhYTNhODg3MzU1MzNmMmJhMTYlMjIlN0QlNUQlN0Q=" },
              { name: "Plata", qty: "100 firmas", price: "$700", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTgxMiUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyMFNpbXBsZSUyMFBsYXRhJTIwMTAwJTIyJTJDJTIycSUyMiUzQTEwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDU0NDgzYTg4NzM1NTMzZjJiYTQ1JTIyJTdEJTVEJTdE" },
              { name: "Oro", qty: "250 firmas", price: "$1,500", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTE3NDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjBPcm8lMjAyNTAlMjIlMkMlMjJxJTIyJTNBMjUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNTUwOTNhODg3MzU1MzNmMmJhNGElMjIlN0QlNUQlN0Q=" },
              { name: "Platino", qty: "500 firmas", price: "$2,500", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTI5MDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjBQbGF0aW5vJTIwNTAwJTIyJTJDJTIycSUyMiUzQTUwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDU1OGEzYTg4NzM1NTMzZjJiYTRmJTIyJTdEJTVEJTdE" },
            ].map((plan) => (
              <div key={plan.name} className="flex items-center justify-between p-3 rounded-xl border border-[#EEEEEE] bg-white gap-2">
                <div>
                  <span className="font-semibold text-[#212A45] text-sm">{plan.name}</span>
                  <span className="text-gray-400 text-xs ml-1.5">{plan.qty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="font-bold text-[#212A45] text-sm">{plan.price}</div>
                    <div className="text-[10px] text-gray-400">+ IVA</div>
                  </div>
                  <Link href={plan.link} target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1.5 bg-[#6366f1] text-white rounded-lg font-semibold hover:bg-[#4f52c7] transition-all whitespace-nowrap">
                    Comprar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Firma Digital con Validez NOM-151 */}
        <div className="border border-[#EEEEEE] rounded-2xl p-6 bg-[#FAFAFA]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-[#0ea5e9] rounded-lg flex items-center justify-center text-lg">
              📜
            </div>
            <div>
              <div className="font-bold text-[#212A45] text-lg">Firma Digital con Validez NOM-151</div>
              <div className="text-gray-400 text-sm">Firma electrónica avanzada con validez legal NOM-151</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: "Cobre", qty: "5 firmas", price: "$99", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTExNC44NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMENvYnJlJTIwNSUyMiUyQyUyMnElMjIlM0E1JTJDJTIyaWQlMjIlM0ElMjI2OWNkNTYyMjNhODg3MzU1MzNmMmJhNTUlMjIlN0QlNUQlN0Q=" },
              { name: "Bronce", qty: "50 firmas", price: "$750", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTg3MCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMEJyb25jZSUyMDUwJTIyJTJDJTIycSUyMiUzQTUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNTY4MTNhODg3MzU1MzNmMmJhNWIlMjIlN0QlNUQlN0Q=" },
              { name: "Plata", qty: "100 firmas", price: "$1,400", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTE2MjQlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjBQbGF0YSUyMDEwMCUyMiUyQyUyMnElMjIlM0ExMDAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q1NmViM2E4ODczNTUzM2YyYmE2NCUyMiU3RCU1RCU3RA==" },
              { name: "Oro", qty: "250 firmas", price: "$3,250", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTM3NzAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjBPcm8lMjAyNTAlMjIlMkMlMjJxJTIyJTNBMjUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNWI4ODNhODg3MzU1MzNmMmJhNmYlMjIlN0QlNUQlN0Q=" },
              { name: "Platino", qty: "500 firmas", price: "$6,000", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTY5NjAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjBQbGF0aW5vJTIwNTAwJTIyJTJDJTIycSUyMiUzQTUwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDViZDIzYTg4NzM1NTMzZjJiYTc0JTIyJTdEJTVEJTdE" },
            ].map((plan) => (
              <div key={plan.name} className="flex items-center justify-between p-3 rounded-xl border border-[#EEEEEE] bg-white gap-2">
                <div>
                  <span className="font-semibold text-[#212A45] text-sm">{plan.name}</span>
                  <span className="text-gray-400 text-xs ml-1.5">{plan.qty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="font-bold text-[#212A45] text-sm">{plan.price}</div>
                    <div className="text-[10px] text-gray-400">+ IVA</div>
                  </div>
                  <Link href={plan.link} target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1.5 bg-[#0ea5e9] text-white rounded-lg font-semibold hover:bg-[#0284c7] transition-all whitespace-nowrap">
                    Comprar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Fila 2: NOM-151+BIO, NOM-151+KYC */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Card 4: Firma Digital con Validez NOM-151 con Tecnología Biométrica */}
        {(() => {
          const plans = [
            { name: "Cobre", qty: "5 sesiones", price: "$130", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMTUwLjglMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBCSU8lMjBDb2JyZSUyMDUlMjIlMkMlMjJxJTIyJTNBNSUyQyUyMmlkJTIyJTNBJTIyNjljZDVjYTYzYTg4NzM1NTMzZjJiYTc5JTIyJTdEJTVEJTdE" },
            { name: "Bronce", qty: "50 sesiones", price: "$1,500", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMTc0MCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEJJTyUyMEJyb25jZSUyMDUwJTIyJTJDJTIycSUyMiUzQTUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNWNmZDNhODg3MzU1MzNmMmJhN2UlMjIlN0QlNUQlN0Q=" },
            { name: "Plata", qty: "100 sesiones", price: "$2,700", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMzEzMiUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEJJTyUyMFBsYXRhJTIwMTAwJTIyJTJDJTIycSUyMiUzQTEwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDVkNDMzYTg4NzM1NTMzZjJiYTgzJTIyJTdEJTVEJTdE" },
            { name: "Oro", qty: "250 sesiones", price: "$6,625", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBNzY4NSUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEJJTyUyME9ybyUyMDI1MCUyMiUyQyUyMnElMjIlM0EyNTAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q1ZGE4M2E4ODczNTUzM2YyYmE5OSUyMiU3RCU1RCU3RA==" },
            { name: "Platino", qty: "500 sesiones", price: "$12,500", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMTQ1MDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBCSU8lMjBQbGF0aW5vJTIwNTAwJTIyJTJDJTIycSUyMiUzQTUwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDVkZmYzYTg4NzM1NTMzZjJiYWE3JTIyJTdEJTVEJTdE" },
          ];
          return (
            <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-sm overflow-hidden">
              <div className="p-6 pb-4" style={{ borderTop: "4px solid #8b5cf6" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">✍️</span>
                  <h3 className="font-bold text-[#212A45] text-lg leading-tight">
                    Firma Digital con Validez NOM-151<br />
                    <span className="text-[#8b5cf6]">con Tecnología Biométrica</span>
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  Firma electrónica avanzada con validez NOM-151 y validación biométrica del firmante.
                </p>
                <div className="space-y-2">
                  {plans.map((plan) => (
                    <div key={plan.name} className="flex items-center justify-between p-3 rounded-xl border border-[#EEEEEE] bg-white gap-2">
                      <div>
                        <span className="font-semibold text-[#212A45] text-sm">{plan.name}</span>
                        <span className="text-gray-400 text-xs ml-1.5">{plan.qty}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="font-bold text-[#212A45] text-sm">{plan.price}</div>
                          <div className="text-[10px] text-gray-400">+ IVA</div>
                        </div>
                        <Link href={plan.link} target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1.5 bg-[#8b5cf6] text-white rounded-lg font-semibold hover:bg-[#7c3aed] transition-all whitespace-nowrap">
                          Comprar
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Card 5: Firma Digital con Validez NOM-151 + KYC */}
        {(() => {
          const plans = [
            { name: "Cobre", qty: "5 sesiones", price: "$149", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTE3Mi44NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEtZQyUyMENvYnJlJTIwNSUyMiUyQyUyMnElMjIlM0E1JTJDJTIyaWQlMjIlM0ElMjI2OWNkNWY5ODNhODg3MzU1MzNmMmJhYjElMjIlN0QlNUQlN0Q=" },
            { name: "Bronce", qty: "50 sesiones", price: "$2,250", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTI2MTAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBLWUMlMjBCcm9uY2UlMjA1MCUyMiUyQyUyMnElMjIlM0E1MCUyQyUyMmlkJTIyJTNBJTIyNjljZDVmZDgzYTg4NzM1NTMzZjJiYWI2JTIyJTdEJTVEJTdE" },
            { name: "Plata", qty: "100 sesiones", price: "$4,200", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTQ4NzIlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBLWUMlMjBQbGF0YSUyMDEwMCUyMiUyQyUyMnElMjIlM0ExMDAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q2MDM0M2E4ODczNTUzM2YyYmFiYiUyMiU3RCU1RCU3RA==" },
            { name: "Oro", qty: "250 sesiones", price: "$9,875", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTExNDU1JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwS1lDJTIwT3JvJTIwMjUwJTIyJTJDJTIycSUyMiUzQTI1MCUyQyUyMmlkJTIyJTNBJTIyNjljZDYwYTYzYTg4NzM1NTMzZjJiYWMwJTIyJTdEJTVEJTdE" },
            { name: "Platino", qty: "500 sesiones", price: "$18,500", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTIxNDYwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwS1lDJTIwUGxhdGlubyUyMDUwMCUyMiUyQyUyMnElMjIlM0E1MDAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q2MGZmM2E4ODczNTUzM2YyYmFjNSUyMiU3RCU1RCU3RA==" },
          ];
          const features = [
            "Prueba de Vida Pasiva",
            "Validación facial 1:1",
            "OCR Fotográfico y Documental para ID",
            "Geolocalización",
            "Listas nominales INE/RENAPO",
            "Listas negras OFAC/Interpol/SAT",
          ];
          return (
            <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-sm overflow-hidden">
              <div className="p-6 pb-4" style={{ borderTop: "4px solid #f59e0b" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔐</span>
                  <h3 className="font-bold text-[#212A45] text-lg leading-tight">
                    Firma Digital con Validez NOM-151<br />
                    <span className="text-[#f59e0b]">+ KYC</span>
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mb-3">
                  La solución más completa: firma digital con validez NOM-151 con KYC biométrico y verificación de identidad.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {features.map((f) => (
                    <span key={f} className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2 py-0.5 font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {plans.map((plan) => (
                    <div key={plan.name} className="flex items-center justify-between p-3 rounded-xl border border-[#EEEEEE] bg-white gap-2">
                      <div>
                        <span className="font-semibold text-[#212A45] text-sm">{plan.name}</span>
                        <span className="text-gray-400 text-xs ml-1.5">{plan.qty}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="font-bold text-[#212A45] text-sm">{plan.price}</div>
                          <div className="text-[10px] text-gray-400">+ IVA</div>
                        </div>
                        <Link href={plan.link} target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1.5 bg-[#f59e0b] text-white rounded-lg font-semibold hover:bg-[#d97706] transition-all whitespace-nowrap">
                          Comprar
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>{/* end Fila 2 */}

      {/* Otros productos disponibles */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="font-bold text-[#212A45] text-xl">Otros productos disponibles</h3>
          <span className="text-xs bg-gray-100 text-gray-500 border border-gray-200 rounded-full px-3 py-1 font-medium">Próximamente</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Consulta INE */}
          {(() => {
            const plans = [
              { name: "Cobre", qty: "10 consultas", price: "$14" },
              { name: "Bronce", qty: "50 consultas", price: "$105" },
              { name: "Plata", qty: "100 consultas", price: "$200" },
              { name: "Oro", qty: "250 consultas", price: "$475" },
              { name: "Platino", qty: "500 consultas", price: "$900" },
            ];
            return (
              <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-sm overflow-hidden opacity-75">
                <div className="p-5 pb-4" style={{ borderTop: "4px solid #10b981" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🪪</span>
                    <h4 className="font-bold text-[#212A45] text-base">Consulta INE</h4>
                  </div>
                  <p className="text-gray-500 text-xs mb-4">Validación de credencial INE/IFE ante el padrón electoral del INE.</p>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <div key={plan.name} className="flex items-center justify-between p-2.5 rounded-lg border border-[#EEEEEE] bg-[#FAFAFA] gap-2">
                        <div>
                          <span className="font-semibold text-[#212A45] text-xs">{plan.name}</span>
                          <span className="text-gray-400 text-[10px] ml-1">{plan.qty}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-right">
                            <div className="font-bold text-[#212A45] text-xs">{plan.price}</div>
                            <div className="text-[9px] text-gray-400">+ IVA</div>
                          </div>
                          <button disabled className="text-[10px] px-2 py-1 bg-gray-200 text-gray-400 rounded-lg font-semibold cursor-not-allowed whitespace-nowrap">
                            Próximamente
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Consulta CURP */}
          {(() => {
            const plans = [
              { name: "Cobre", qty: "10 consultas", price: "$14" },
              { name: "Bronce", qty: "50 consultas", price: "$105" },
              { name: "Plata", qty: "100 consultas", price: "$200" },
              { name: "Oro", qty: "250 consultas", price: "$475" },
              { name: "Platino", qty: "500 consultas", price: "$900" },
            ];
            return (
              <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-sm overflow-hidden opacity-75">
                <div className="p-5 pb-4" style={{ borderTop: "4px solid #06b6d4" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">📋</span>
                    <h4 className="font-bold text-[#212A45] text-base">Consulta CURP</h4>
                  </div>
                  <p className="text-gray-500 text-xs mb-4">Validación de CURP ante el RENAPO con datos biográficos.</p>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <div key={plan.name} className="flex items-center justify-between p-2.5 rounded-lg border border-[#EEEEEE] bg-[#FAFAFA] gap-2">
                        <div>
                          <span className="font-semibold text-[#212A45] text-xs">{plan.name}</span>
                          <span className="text-gray-400 text-[10px] ml-1">{plan.qty}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-right">
                            <div className="font-bold text-[#212A45] text-xs">{plan.price}</div>
                            <div className="text-[9px] text-gray-400">+ IVA</div>
                          </div>
                          <button disabled className="text-[10px] px-2 py-1 bg-gray-200 text-gray-400 rounded-lg font-semibold cursor-not-allowed whitespace-nowrap">
                            Próximamente
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* OCR Fotográfico y Documental */}
          {(() => {
            const plans = [
              { name: "Cobre", qty: "210 tokens", price: "$99" },
              { name: "Bronce", qty: "2,100 tokens", price: "$1,500" },
              { name: "Plata", qty: "4,200 tokens", price: "$2,800" },
              { name: "Oro", qty: "10,500 tokens", price: "$6,625" },
              { name: "Platino", qty: "21,000 tokens", price: "$12,500" },
            ];
            return (
              <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-sm overflow-hidden opacity-75">
                <div className="p-5 pb-4" style={{ borderTop: "4px solid #f97316" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">📄</span>
                    <h4 className="font-bold text-[#212A45] text-base">OCR Fotográfico y Documental</h4>
                  </div>
                  <p className="text-gray-500 text-xs mb-1">Extracción de datos de documentos con IA. Se vende por tokens.</p>
                  <p className="text-[10px] text-gray-400 mb-4">1 doc genérico ≈ 1 token · 1 tabla ≈ 3 tokens · 1 doc complejo ≈ 5 tokens</p>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <div key={plan.name} className="flex items-center justify-between p-2.5 rounded-lg border border-[#EEEEEE] bg-[#FAFAFA] gap-2">
                        <div>
                          <span className="font-semibold text-[#212A45] text-xs">{plan.name}</span>
                          <span className="text-gray-400 text-[10px] ml-1">{plan.qty}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-right">
                            <div className="font-bold text-[#212A45] text-xs">{plan.price}</div>
                            <div className="text-[9px] text-gray-400">+ IVA</div>
                          </div>
                          <button disabled className="text-[10px] px-2 py-1 bg-gray-200 text-gray-400 rounded-lg font-semibold cursor-not-allowed whitespace-nowrap">
                            Próximamente
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* OCR para Identificación Oficial */}
          {(() => {
            const plans = [
              { name: "Cobre", qty: "210 tokens", price: "$99" },
              { name: "Bronce", qty: "2,100 tokens", price: "$1,500" },
              { name: "Plata", qty: "4,200 tokens", price: "$2,800" },
              { name: "Oro", qty: "10,500 tokens", price: "$6,625" },
              { name: "Platino", qty: "21,000 tokens", price: "$12,500" },
            ];
            return (
              <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-sm overflow-hidden opacity-75">
                <div className="p-5 pb-4" style={{ borderTop: "4px solid #ec4899" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🪪</span>
                    <h4 className="font-bold text-[#212A45] text-base">OCR para Identificación Oficial</h4>
                  </div>
                  <p className="text-gray-500 text-xs mb-1">Extracción de fotografía y datos de identificaciones oficiales. Se vende por tokens.</p>
                  <p className="text-[10px] text-gray-400 mb-4">6 tokens por documento procesado</p>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <div key={plan.name} className="flex items-center justify-between p-2.5 rounded-lg border border-[#EEEEEE] bg-[#FAFAFA] gap-2">
                        <div>
                          <span className="font-semibold text-[#212A45] text-xs">{plan.name}</span>
                          <span className="text-gray-400 text-[10px] ml-1">{plan.qty}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="text-right">
                            <div className="font-bold text-[#212A45] text-xs">{plan.price}</div>
                            <div className="text-[9px] text-gray-400">+ IVA</div>
                          </div>
                          <button disabled className="text-[10px] px-2 py-1 bg-gray-200 text-gray-400 rounded-lg font-semibold cursor-not-allowed whitespace-nowrap">
                            Próximamente
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </div>{/* end Otros productos */}

    </>
  );
}
