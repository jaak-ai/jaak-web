'use client'

import { useCallback, useEffect, useState } from 'react'

export function SearchButton() {
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
  }, [])

  const handleClick = useCallback(() => {
    window.dispatchEvent(new CustomEvent('open-docs-search'))
  }, [])

  return (
    <button
      onClick={handleClick}
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
        {isMac ? '⌘' : 'Ctrl'} K
      </kbd>
    </button>
  )
}
