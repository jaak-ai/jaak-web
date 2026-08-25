import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const readSource = (path: string) =>
  readFileSync(resolve(process.cwd(), path), 'utf8')

describe('docs shell', () => {
  it('keeps a dedicated reading layout with persistent navigation', () => {
    const layout = readSource('src/app/docs/layout.tsx')
    const page = readSource('src/app/docs/[[...slug]]/page.tsx')
    const sidebar = readSource('src/components/docs/Sidebar.tsx')
    const toc = readSource('src/components/docs/TableOfContents.tsx')

    expect(layout).toContain('docs-shell')
    expect(page).toContain('docs-page--centered')
    expect(page).toContain('docs-page--reading-grid')
    expect(page).toContain('docs-article')
    expect(sidebar).toContain('docs-sidebar')
    expect(toc).toContain('docs-toc')
  })
})
