import { allDocs } from 'contentlayer2/generated'
import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/docs/MDXContent'
import { TableOfContents } from '@/components/docs/TableOfContents'
import { findPrevNext } from '@/lib/docs/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug?: string[] }>
}

function getDocFromParams(slug?: string[]) {
  const slugPath = slug?.join('/') || ''
  const doc = allDocs.find(
    (doc) => doc.slug === slugPath || (doc.slug === 'index' && slugPath === '')
  )
  return doc
}

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc.slug === 'index' ? [] : doc.slug.split('/'),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const doc = getDocFromParams(resolvedParams.slug)

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    // Páginas unlisted: accesibles solo por enlace, nunca indexadas
    ...(doc.unlisted ? { robots: { index: false, follow: false } } : {}),
  }
}

export default async function DocPage({ params }: PageProps) {
  const resolvedParams = await params
  const doc = getDocFromParams(resolvedParams.slug)

  if (!doc) {
    notFound()
  }

  const slugPath = resolvedParams.slug?.join('/') || ''
  const { prev, next } = findPrevNext(slugPath)

  const isAlnitakDoc = slugPath === 'alnitak' || slugPath.startsWith('alnitak/')

  return (
    <div className="docs-page docs-page--centered docs-page--reading-grid px-8 py-10">
      <article className="docs-article min-w-0">
        {isAlnitakDoc && (
          <header className="docs-document-header">
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
          </header>
        )}

        <div className="docs-prose prose prose-gray max-w-4xl">
          <MDXContent code={doc.body.code} />
        </div>

        <nav className="docs-pagination mt-16 flex items-center justify-between pt-8">
          {prev ? (
            <Link
              href={prev.href || '#'}
              className="docs-pagination__link group flex flex-col items-start"
            >
              <span className="docs-pagination__label mb-1 text-sm transition-colors">
                Anterior
              </span>
              <span className="docs-pagination__title flex items-center gap-2 font-semibold transition-colors">
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={next.href || '#'}
              className="docs-pagination__link group flex flex-col items-end"
            >
              <span className="docs-pagination__label mb-1 text-sm transition-colors">
                Siguiente
              </span>
              <span className="docs-pagination__title flex items-center gap-2 font-semibold transition-colors">
                {next.title}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>

      <TableOfContents />
    </div>
  )
}
