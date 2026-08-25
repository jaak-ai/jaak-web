'use client'

import { useEffect, useState } from 'react'
import { headingId } from './headingId'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

    const elements = article.querySelectorAll('h2, h3')
    const ids = new Map<string, number>()
    const extractedHeadings: Heading[] = Array.from(elements).map((element) => {
      const text = element.textContent || ''
      const baseId = element.id || headingId(text)
      const occurrence = ids.get(baseId) || 0
      ids.set(baseId, occurrence + 1)
      const id = occurrence === 0 ? baseId : `${baseId}-${occurrence + 1}`
      element.id = id

      return {
        id,
        text,
        level: element.tagName === 'H2' ? 2 : 3,
      }
    })

    setHeadings(extractedHeadings)
  }, [])

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className="docs-toc w-56 flex-shrink-0 hidden xl:block">
      <div className="docs-toc__inner sticky overflow-y-auto">
        <p className="docs-toc__title mb-4 text-sm font-semibold">
          En esta página
        </p>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? 'pl-3' : ''}
            >
              <a
                href={`#${heading.id}`}
                className={`
                  block py-1 transition-colors
                  ${activeId === heading.id
                    ? 'docs-toc__link--active'
                    : 'docs-toc__link'
                  }
                `}
                style={{
                  color: activeId === heading.id
                    ? 'var(--docs-link)'
                    : 'var(--docs-muted)',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(heading.id)
                  if (element) {
                    const yOffset = -100
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: 'smooth' })
                  }
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
