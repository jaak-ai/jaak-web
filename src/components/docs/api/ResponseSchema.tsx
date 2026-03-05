'use client'

import { useState } from 'react'

interface SchemaProperty {
  name: string
  type: string
  description?: string
  properties?: SchemaProperty[]
}

interface ResponseSchemaProps {
  statusCode: number
  description: string
  schema?: SchemaProperty[]
  example?: object
}

function SchemaPropertyRow({
  property,
  depth = 0,
}: {
  property: SchemaProperty
  depth?: number
}) {
  const [isExpanded, setIsExpanded] = useState(true)
  const hasChildren = property.properties && property.properties.length > 0
  const paddingLeft = depth * 16

  return (
    <>
      <div
        className="flex items-start py-2 border-b border-gray-100 last:border-b-0"
        style={{ paddingLeft: `${paddingLeft + 8}px` }}
      >
        {hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mr-1 p-0.5 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label={isExpanded ? 'Colapsar' : 'Expandir'}
          >
            <svg
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <code className="text-sm font-mono text-blue-600">{property.name}</code>
            <span className="text-xs font-mono text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
              {property.type}
            </span>
          </div>
          {property.description && (
            <p className="text-xs text-gray-500 mt-0.5">{property.description}</p>
          )}
        </div>
      </div>
      {hasChildren && isExpanded && (
        <div>
          {property.properties!.map((child) => (
            <SchemaPropertyRow key={child.name} property={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </>
  )
}

export function ResponseSchema({
  statusCode,
  description,
  schema,
  example,
}: ResponseSchemaProps) {
  const [view, setView] = useState<'schema' | 'example'>('schema')
  const isSuccess = statusCode < 400
  const statusColorClasses = isSuccess
    ? 'bg-green-100 text-green-700'
    : 'bg-red-100 text-red-700'

  const hasSchema = schema && schema.length > 0
  const hasExample = example !== undefined

  return (
    <div className="my-4 rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between bg-gray-50 px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${statusColorClasses}`}
          >
            {statusCode}
          </span>
          <span className="text-sm text-gray-700">{description}</span>
        </div>
        {hasSchema && hasExample && (
          <div className="flex rounded-md shadow-sm">
            <button
              onClick={() => setView('schema')}
              className={`px-3 py-1 text-xs font-medium rounded-l-md border ${
                view === 'schema'
                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              Schema
            </button>
            <button
              onClick={() => setView('example')}
              className={`px-3 py-1 text-xs font-medium rounded-r-md border-t border-r border-b -ml-px ${
                view === 'example'
                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              Ejemplo
            </button>
          </div>
        )}
      </div>
      <div className="bg-white">
        {view === 'schema' && hasSchema && (
          <div className="p-2">
            {schema!.map((property) => (
              <SchemaPropertyRow key={property.name} property={property} />
            ))}
          </div>
        )}
        {view === 'example' && hasExample && (
          <pre className="p-4 text-sm font-mono text-gray-800 overflow-x-auto bg-gray-50">
            {JSON.stringify(example, null, 2)}
          </pre>
        )}
        {!hasSchema && !hasExample && (
          <div className="p-4 text-sm text-gray-500 italic">
            Sin cuerpo de respuesta
          </div>
        )}
        {view === 'schema' && !hasSchema && hasExample && (
          <pre className="p-4 text-sm font-mono text-gray-800 overflow-x-auto bg-gray-50">
            {JSON.stringify(example, null, 2)}
          </pre>
        )}
      </div>
    </div>
  )
}
