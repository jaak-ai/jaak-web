import { Sidebar } from '@/components/docs/Sidebar'
import { SearchModal } from '@/components/docs/SearchModal'
import { SearchButton } from '@/components/docs/SearchButton'
import { docsConfig } from '@/lib/docs/config'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import './docs.css'

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
    <div className="docs-shell min-h-screen">
      <header className="docs-header fixed top-0 left-0 right-0 z-50">
        <div className="docs-header__inner flex h-full items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <Link href="/" className="docs-header__logo flex items-center">
              <Image
                src="/images/logos/jaak-logo-azul.png"
                alt="JAAK"
                width={100}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <div className="docs-header__rule h-6 w-px" />
            <Link
              href="/docs"
              className="docs-header__section text-sm font-semibold transition-colors"
            >
              Documentación
            </Link>
          </div>

          <div className="docs-header__search hidden md:flex flex-1 max-w-md mx-8">
            <SearchButton />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://platform.jaak.ai"
              className="docs-header__login hidden sm:block text-sm font-medium transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/contacto"
              className="docs-header__cta px-4 py-2 text-sm font-semibold transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </header>

      <div className="docs-frame flex">
        <Sidebar />
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      <SearchModal />
    </div>
  )
}
