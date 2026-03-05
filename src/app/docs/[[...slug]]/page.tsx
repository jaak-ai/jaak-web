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

  // Build breadcrumb from slug
  const breadcrumbs = [{ title: 'Docs', href: '/docs' }]
  if (resolvedParams.slug && resolvedParams.slug.length > 0) {
    let currentPath = '/docs'
    for (const segment of resolvedParams.slug) {
      currentPath += `/${segment}`
      const segmentDoc = allDocs.find((d) => d.url === currentPath)
      breadcrumbs.push({
        title: segmentDoc?.title || segment.replace(/-/g, ' '),
        href: currentPath,
      })
    }
  }

  return (
    <div className="flex px-8 py-10">
      {/* Main content */}
      <article className="flex-1 min-w-0 max-w-3xl">
        {/* Breadcrumb */}
        {breadcrumbs.length > 1 && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {index > 0 && (
                  <svg
                    className="h-4 w-4 text-gray-400"
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
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-900 font-medium">{crumb.title}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#0066ff] transition-colors">
                    {crumb.title}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Category badge */}
        {doc.category && (
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            {doc.category}
          </span>
        )}

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <MDXContent code={doc.body.code} />
        </div>

        {/* Prev/Next navigation */}
        <nav className="mt-16 flex items-center justify-between border-t border-gray-200 pt-8">
          {prev ? (
            <Link
              href={prev.href || '#'}
              className="group flex flex-col items-start"
            >
              <span className="mb-1 text-sm text-gray-500 group-hover:text-[#0066ff] transition-colors">
                Anterior
              </span>
              <span className="flex items-center gap-2 font-semibold text-gray-900 group-hover:text-[#0066ff] transition-colors">
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
              className="group flex flex-col items-end"
            >
              <span className="mb-1 text-sm text-gray-500 group-hover:text-[#0066ff] transition-colors">
                Siguiente
              </span>
              <span className="flex items-center gap-2 font-semibold text-gray-900 group-hover:text-[#0066ff] transition-colors">
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

      {/* Table of Contents */}
      <TableOfContents />
    </div>
  )
}
