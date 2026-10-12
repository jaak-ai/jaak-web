import Image from "next/image";
import type { ReactNode } from "react";

export const ARTICLE_COLUMNS = "flex flex-col lg:flex-row gap-14";
export const ARTICLE_SIDEBAR = "hidden lg:block w-52 shrink-0";

export type ArticleImageDimensions = Readonly<{ width: number; height: number }>;

export function ArticleHeaderFrame({
  aligned,
  className = "",
  children,
}: Readonly<{ aligned: boolean; className?: string; children: ReactNode }>) {
  const width = aligned ? "max-w-6xl" : "max-w-3xl";

  return (
    <div className={`${width} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {aligned ? (
        <div className={ARTICLE_COLUMNS}>
          <div className="min-w-0 flex-1">{children}</div>
          <div className={ARTICLE_SIDEBAR} aria-hidden="true" />
        </div>
      ) : children}
    </div>
  );
}

function getCoverSizes({ width = 824 }: Partial<ArticleImageDimensions> = {}) {
  return `(min-width: 1152px) ${Math.min(width, 824)}px, (min-width: 1024px) min(${width}px, calc(100vw - 328px)), (min-width: 640px) min(${width}px, calc(100vw - 48px)), calc(100vw - 32px)`;
}

export function ArticleCover({
  src,
  alt,
  dimensions,
  aligned,
}: Readonly<{ src: string; alt: string; dimensions?: ArticleImageDimensions; aligned: boolean }>) {
  return (
    <ArticleHeaderFrame aligned={aligned} className="-mt-2 mb-0">
      <div
        className="rounded-2xl overflow-hidden mx-auto"
        style={{
          maxWidth: dimensions?.width,
          boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={dimensions?.width ?? 1200}
          height={dimensions?.height ?? 630}
          className="w-full h-auto"
          sizes={aligned ? getCoverSizes(dimensions) : undefined}
          priority
        />
      </div>
    </ArticleHeaderFrame>
  );
}
