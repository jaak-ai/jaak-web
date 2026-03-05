import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    category: {
      type: 'enum',
      options: ['guia', 'concepto', 'api', 'sdk', 'recurso'],
      default: 'guia'
    },
    order: { type: 'number', default: 999 },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => {
        const path = doc._raw.flattenedPath.replace(/^docs\/?/, '')
        // Handle index.mdx at root as 'index' for matching
        return path === '' ? 'index' : path
      },
    },
    url: {
      type: 'string',
      resolve: (doc) => {
        const path = doc._raw.flattenedPath.replace(/^docs\/?/, '')
        return path === '' ? '/docs' : `/docs/${path}`
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
})
