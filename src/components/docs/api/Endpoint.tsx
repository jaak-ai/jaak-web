import { HttpMethod } from './HttpMethod'

interface EndpointProps {
  method: string
  path: string
  description?: string
  auth?: 'bearer' | 'none' | 'api-key'
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={16}
      height={16}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  )
}

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={16}
      height={16}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
      />
    </svg>
  )
}

const authLabels: Record<string, string> = {
  bearer: 'Bearer Token',
  'api-key': 'API Key',
}

export function Endpoint({ method, path, description, auth = 'bearer' }: EndpointProps) {
  const requiresAuth = auth !== 'none'

  return (
    <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
      <div className="flex flex-wrap items-center gap-3">
        <HttpMethod method={method} />
        <code className="text-sm font-mono text-gray-900 bg-white px-2 py-1 rounded border border-gray-200">
          {path}
        </code>
        {requiresAuth && (
          <span
            className="inline-flex items-center gap-1 text-xs text-gray-500"
            title={authLabels[auth] || 'Requiere autenticación'}
          >
            {auth === 'api-key' ? (
              <KeyIcon className="text-gray-400" />
            ) : (
              <LockIcon className="text-gray-400" />
            )}
            <span className="hidden sm:inline">{authLabels[auth]}</span>
          </span>
        )}
      </div>
      {description && (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      )}
    </div>
  )
}
