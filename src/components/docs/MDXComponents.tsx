import Link from 'next/link'
import type { MDXComponents } from 'mdx/types'
import { Callout } from './Callout'
import { CodeBlock } from './CodeBlock'
import { Tabs, CodeTabs } from './Tabs'
import { Endpoint, ParamsTable, ResponseSchema, HttpMethod } from './api'

export const mdxComponents: MDXComponents = {
  // Custom components for MDX
  Callout,
  CodeBlock,
  Tabs,
  CodeTabs,
  Endpoint,
  ParamsTable,
  ResponseSchema,
  HttpMethod,
  h1: ({ children }) => (
    <h1 className="mb-4 text-4xl font-black text-gray-900">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 scroll-mt-24">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900 scroll-mt-24">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#0066ff] hover:underline">
          {children}
        </a>
      )
    }
    return <Link href={href || '#'} className="text-[#0066ff] hover:underline">{children}</Link>
  },
  ul: ({ children }) => (
    <ul className="mb-4 list-disc pl-6 text-gray-600 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal pl-6 text-gray-600 space-y-2">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  code: ({ children, className }) => {
    if (!className) {
      return (
        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">
          {children}
        </code>
      )
    }
    return <code className={className}>{children}</code>
  },
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-[#0a0a0a] p-4 text-sm">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-4 border-[#0066ff] pl-4 italic text-gray-600">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-left font-semibold text-gray-900">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-gray-200 px-4 py-2 text-gray-600">{children}</td>
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
}
