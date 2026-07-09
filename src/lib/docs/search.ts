import { Index } from 'flexsearch'

export interface SearchDoc {
  title: string
  description: string
  url: string
  category: string
  text: string
}

export interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

let searchIndex: Index | null = null
let docsCache: SearchDoc[] = []

export function initSearchIndex(docs: SearchDoc[]): void {
  if (searchIndex) return

  searchIndex = new Index({
    tokenize: 'forward',
    cache: true,
  })

  docsCache = docs
  docsCache.forEach((doc, id) => {
    searchIndex!.add(id, `${doc.title} ${doc.description} ${doc.text}`)
  })
}

export function search(query: string): SearchResult[] {
  if (!searchIndex || !query || query.length < 2) return []

  const results = searchIndex.search(query, { limit: 10 })

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
