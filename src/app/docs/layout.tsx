import { Sidebar } from '@/components/docs/Sidebar'
import { SearchModal } from '@/components/docs/SearchModal'
import { SearchButton } from '@/components/docs/SearchButton'
import { docsConfig } from '@/lib/docs/config'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: docsConfig.title,
    template: `%s | ${docsConfig.title}`,
  },
  description: docsConfig.description,
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-gray-200 bg-white">
        <div className="flex h-full items-center justify-between px-6">
          {/* Left side: Logo and Docs link */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/jaak-logo-azul.png"
                alt="JAAK"
                width={100}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <div className="h-6 w-px bg-gray-200" />
            <Link
              href="/docs"
              className="text-sm font-semibold text-gray-900 hover:text-[#0066ff] transition-colors"
            >
              Documentacion
            </Link>
          </div>

          {/* Center: Search button */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchButton />
          </div>

          {/* Right side: CTAs */}
          <div className="flex items-center gap-4">
            <Link
              href="https://platform.jaak.ai"
              className="hidden sm:block text-sm font-medium text-gray-700 hover:text-[#0066ff] transition-colors"
            >
              Iniciar sesion
            </Link>
            <Link
              href="/contacto"
              className="rounded-lg bg-[#0066ff] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0052cc]"
            >
              Contactar
            </Link>
          </div>
        </div>
      </header>

      {/* Main layout with sidebar */}
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Search modal */}
      <SearchModal />
    </div>
  )
}
