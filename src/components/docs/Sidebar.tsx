'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { docsNavigation, type NavItem } from '@/lib/docs/navigation'

interface NavItemsProps {
  items: NavItem[]
  level?: number
}

function NavItems({ items, level = 0 }: NavItemsProps) {
  const pathname = usePathname()

  return (
    <ul className={level === 0 ? 'space-y-1' : 'mt-1 space-y-1'}>
      {items.map((item) => (
        <NavItemComponent
          key={item.title}
          item={item}
          level={level}
          pathname={pathname}
        />
      ))}
    </ul>
  )
}

interface NavItemComponentProps {
  item: NavItem
  level: number
  pathname: string
}

function NavItemComponent({ item, level, pathname }: NavItemComponentProps) {
  const isActive = item.href === pathname
  const hasChildren = item.items && item.items.length > 0
  const isChildActive = hasChildren && item.items?.some(
    (child) => child.href === pathname ||
    child.items?.some((grandchild) => grandchild.href === pathname)
  )

  const [isOpen, setIsOpen] = useState(isActive || isChildActive || level === 0)

  const paddingLeft = level === 0 ? 'pl-0' : level === 1 ? 'pl-3' : 'pl-6'

  if (hasChildren) {
    return (
      <li>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex w-full items-center justify-between py-1.5 text-sm font-medium transition-colors
            ${paddingLeft}
            ${isChildActive
              ? 'text-[#0066ff]'
              : 'text-gray-700 hover:text-[#0066ff]'
            }
          `}
        >
          <span>{item.title}</span>
          <svg
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
              isOpen ? 'rotate-90' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {isOpen && (
          <NavItems items={item.items!} level={level + 1} />
        )}
      </li>
    )
  }

  return (
    <li>
      <Link
        href={item.href!}
        className={`
          block py-1.5 text-sm transition-colors
          ${paddingLeft}
          ${isActive
            ? 'font-semibold text-[#0066ff]'
            : 'text-gray-600 hover:text-[#0066ff]'
          }
        `}
      >
        {item.title}
      </Link>
    </li>
  )
}

export function Sidebar() {
  return (
    <nav className="w-64 flex-shrink-0 border-r border-gray-200 bg-white hidden lg:block">
      <div className="sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto p-6">
        <NavItems items={docsNavigation} />
      </div>
    </nav>
  )
}
