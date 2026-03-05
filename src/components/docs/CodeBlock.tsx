'use client'

import { useState, useCallback } from 'react'

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export function CodeBlock({ children, language, title, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [children])

  const lines = children.split('\n')
  const hasTrailingNewline = children.endsWith('\n')
  const displayLines = hasTrailingNewline ? lines.slice(0, -1) : lines

  return (
    <div className="my-4 overflow-hidden rounded-lg bg-[#0a0a0a]">
      {title && (
        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
          <span className="text-sm text-gray-400 font-mono">{title}</span>
          {language && (
            <span className="text-xs text-gray-500 uppercase">{language}</span>
          )}
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 flex items-center gap-1.5 rounded bg-gray-800 px-2 py-1.5 text-xs text-gray-400 transition-colors hover:bg-gray-700 hover:text-gray-300"
          aria-label={copied ? 'Copiado' : 'Copiar código'}
        >
          {copied ? (
            <>
              <CheckIcon className="text-green-400" />
              <span className="text-green-400">Copiado</span>
            </>
          ) : (
            <>
              <CopyIcon />
              <span>Copiar</span>
            </>
          )}
        </button>
        <pre className="overflow-x-auto p-4 pr-24 text-sm">
          <code className="text-green-400 font-mono">
            {showLineNumbers ? (
              displayLines.map((line, index) => (
                <div key={index} className="flex">
                  <span className="mr-4 inline-block w-8 select-none text-right text-gray-600">
                    {index + 1}
                  </span>
                  <span>{line}</span>
                </div>
              ))
            ) : (
              children
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}
