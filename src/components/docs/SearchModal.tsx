'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { search, initSearchIndex, type SearchResult } from '@/lib/docs/search'

const categoryLabels: Record<string, string> = {
  guia: 'Guia',
  concepto: 'Concepto',
  api: 'API',
  sdk: 'SDK',
  recurso: 'Recurso',
}

const categoryColors: Record<string, string> = {
  guia: 'bg-blue-100 text-blue-700',
  concepto: 'bg-purple-100 text-purple-700',
  api: 'bg-green-100 text-green-700',
  sdk: 'bg-orange-100 text-orange-700',
  recurso: 'bg-gray-100 text-gray-700',
}

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Initialize search index on mount
  useEffect(() => {
    initSearchIndex()
  }, [])

  // Keyboard shortcut: Cmd+K / Ctrl+K to open, Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Search as user types
  useEffect(() => {
    if (query.length > 1) {
      const searchResults = search(query)
      setResults(searchResults)
      setSelectedIndex(0)
    } else {
      setResults([])
    }
  }, [query])

  // Handle result selection
  const handleSelect = useCallback(
    (url: string) => {
      router.push(url)
      setIsOpen(false)
      setQuery('')
      setResults([])
    },
    [router]
  )

  // Keyboard navigation within results
  const handleKeyDownInModal = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => Math.max(prev - 1, 0))
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault()
        handleSelect(results[selectedIndex].url)
      }
    },
    [results, selectedIndex, handleSelect]
  )

  // Close modal when clicking overlay
  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }, [])

  // Expose open function for external trigger (header button)
  useEffect(() => {
    const openSearch = () => setIsOpen(true)
    window.addEventListener('open-docs-search', openSearch)
    return () => window.removeEventListener('open-docs-search', openSearch)
  }, [])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 pt-20"
      onClick={handleOverlayClick}
    >
      <div className="w-full max-w-xl rounded-xl bg-white shadow-2xl">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
          <svg
            className="h-5 w-5 text-gray-400"
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
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDownInModal}
            placeholder="Buscar en la documentacion..."
            className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 outline-none"
          />
          <kbd className="hidden rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500 sm:block">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {query.length > 1 && results.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              No se encontraron resultados para "{query}"
            </div>
          )}

          {results.length > 0 && (
            <ul className="py-2">
              {results.map((result, index) => (
                <li key={result.url}>
                  <button
                    onClick={() => handleSelect(result.url)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors ${
                      selectedIndex === index
                        ? 'bg-[#0066ff]/5'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {/* Document icon */}
                    <svg
                      className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                        selectedIndex === index
                          ? 'text-[#0066ff]'
                          : 'text-gray-400'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-medium ${
                            selectedIndex === index
                              ? 'text-[#0066ff]'
                              : 'text-gray-900'
                          }`}
                        >
                          {result.title}
                        </span>
                        <span
                          className={`rounded px-1.5 py-0.5 text-xs font-medium ${
                            categoryColors[result.category] ||
                            'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {categoryLabels[result.category] || result.category}
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-sm text-gray-500">
                        {result.description}
                      </p>
                    </div>

                    {/* Arrow indicator for selected */}
                    {selectedIndex === index && (
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0066ff]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {query.length < 2 && (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              Escribe al menos 2 caracteres para buscar
            </div>
          )}
        </div>

        {/* Footer with keyboard hints */}
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-2 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-gray-100 px-1.5 py-0.5 font-mono">
                ↑
              </kbd>
              <kbd className="rounded bg-gray-100 px-1.5 py-0.5 font-mono">
                ↓
              </kbd>
              <span className="ml-1">navegar</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-gray-100 px-1.5 py-0.5 font-mono">
                ↵
              </kbd>
              <span className="ml-1">seleccionar</span>
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="rounded bg-gray-100 px-1.5 py-0.5 font-mono">
              esc
            </kbd>
            <span className="ml-1">cerrar</span>
          </span>
        </div>
      </div>
    </div>
  )
}
