const methodColors: Record<string, string> = {
  GET: 'bg-green-100 text-green-700',
  POST: 'bg-blue-100 text-blue-700',
  PUT: 'bg-yellow-100 text-yellow-700',
  PATCH: 'bg-orange-100 text-orange-700',
  DELETE: 'bg-red-100 text-red-700',
}

interface HttpMethodProps {
  method: string
}

export function HttpMethod({ method }: HttpMethodProps) {
  const upperMethod = method.toUpperCase()
  const colorClasses = methodColors[upperMethod] || 'bg-gray-100 text-gray-700'

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide ${colorClasses}`}
    >
      {upperMethod}
    </span>
  )
}
