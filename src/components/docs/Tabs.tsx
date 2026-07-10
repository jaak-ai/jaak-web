'use client'

import { useState, ReactNode, useCallback } from 'react'
import { CodeBlock } from './CodeBlock'

interface Tab {
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultIndex?: number
}

export function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  if (tabs.length === 0) {
    return null
  }

  return (
    <div className="my-4 rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex border-b border-gray-200 bg-gray-50">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors ${
              activeIndex === index
                ? 'border-b-2 border-[#0066ff] text-[#0066ff] bg-white -mb-px'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
            aria-selected={activeIndex === index}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4" role="tabpanel">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  )
}

interface CodeTabsProps {
  children: Record<string, string>
  showLineNumbers?: boolean
}

export function CodeTabs({ children, showLineNumbers = false }: CodeTabsProps) {
  const languages = Object.keys(children)
  const [activeLanguage, setActiveLanguage] = useState(languages[0] || '')

  const handleTabClick = useCallback((language: string) => {
    setActiveLanguage(language)
  }, [])

  if (languages.length === 0) {
    return null
  }

  return (
    <div className="my-4 rounded-lg overflow-hidden bg-[#0a0a0a]">
      <div className="flex border-b border-gray-800 bg-[#111111]">
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => handleTabClick(language)}
            className={`px-4 py-2.5 text-sm font-mono transition-colors ${
              activeLanguage === language
                ? 'border-b-2 border-green-400 text-green-400 bg-[#0a0a0a] -mb-px'
                : 'text-gray-500 hover:text-gray-300 hover:bg-[#1a1a1a]'
            }`}
            aria-selected={activeLanguage === language}
            role="tab"
          >
            {language}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        <CodeBlock language={activeLanguage} showLineNumbers={showLineNumbers}>
          {children[activeLanguage] || ''}
        </CodeBlock>
      </div>
    </div>
  )
}
