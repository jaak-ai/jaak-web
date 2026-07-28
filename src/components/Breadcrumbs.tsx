import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

/** Breadcrumb visible en HTML; el BreadcrumbList JSON-LD se genera aparte en cada page.tsx a partir de los mismos items. */
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="flex items-center flex-wrap gap-1.5 text-xs">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.name} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
            {item.href && !isLast ? (
              <Link href={item.href} className="opacity-60 hover:opacity-100 transition-opacity">
                {item.name}
              </Link>
            ) : (
              <span aria-current={isLast ? "page" : undefined} className={isLast ? "opacity-90 font-medium" : "opacity-60"}>
                {item.name}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
