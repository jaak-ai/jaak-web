'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import { mdxComponents } from './MDXComponents'

interface MDXContentProps {
  code: string
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code)
  return <Component components={mdxComponents} />
}
