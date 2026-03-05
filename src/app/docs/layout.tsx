import { Sidebar } from '@/components/docs/Sidebar'
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

          {/* Center: Search placeholder */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <button
              className="flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:bg-gray-100"
              type="button"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Buscar en la documentacion...</span>
              <kbd className="ml-auto hidden rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 sm:block">
                Ctrl K
              </kbd>
            </button>
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
    </div>
  )
}
