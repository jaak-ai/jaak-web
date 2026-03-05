'use client'

import { Index } from 'flexsearch'
import { allDocs, type Doc } from 'contentlayer2/generated'

export interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

let searchIndex: Index | null = null
let docsCache: Doc[] = []

export function initSearchIndex(): void {
  if (searchIndex) return

  searchIndex = new Index({
    tokenize: 'forward',
    cache: true,
  })

  docsCache = allDocs
  docsCache.forEach((doc, id) => {
    searchIndex!.add(id, `${doc.title} ${doc.description} ${doc.body.raw}`)
  })
}

export function search(query: string): SearchResult[] {
  if (!searchIndex) initSearchIndex()
  if (!query || query.length < 2) return []

  const results = searchIndex!.search(query, { limit: 10 })

  return results.map((id) => {
    const doc = docsCache[id as number]
    return {
      title: doc.title,
      description: doc.description,
      url: doc.url,
      category: doc.category,
    }
  })
}
