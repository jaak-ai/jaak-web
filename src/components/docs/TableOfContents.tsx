'use client'

import { useEffect, useState } from 'react'

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
    const extractedHeadings: Heading[] = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: element.tagName === 'H2' ? 2 : 3,
    }))

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
    <nav className="w-56 flex-shrink-0 hidden xl:block">
      <div className="sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto">
        <p className="mb-4 text-sm font-semibold text-gray-900">
          En esta pagina
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
                    ? 'font-medium text-[#0066ff]'
                    : 'text-gray-600 hover:text-[#0066ff]'
                  }
                `}
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
