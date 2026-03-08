interface Param {
  name: string
  type: string
  required?: boolean
  description: string
  default?: string
}

interface ParamsTableProps {
  title?: string
  params: Param[]
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      width={16}
      height={16}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export function ParamsTable({ title, params }: ParamsTableProps) {
  if (params.length === 0) {
    return null
  }

  return (
    <div className="my-4">
      {title && (
        <h4 className="text-sm font-semibold text-gray-900 mb-2">{title}</h4>
      )}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Nombre
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Tipo
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Requerido
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Descripcion
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {params.map((param) => (
              <tr key={param.name}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <code className="text-sm font-mono text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                    {param.name}
                  </code>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="text-sm text-gray-700 font-mono">
                    {param.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  {param.required ? (
                    <CheckIcon className="inline-block text-green-500" />
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-gray-600">
                    {param.description}
                    {param.default !== undefined && (
                      <span className="ml-2 text-gray-400">
                        (default: <code className="text-xs bg-gray-100 px-1 rounded">{param.default}</code>)
                      </span>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
