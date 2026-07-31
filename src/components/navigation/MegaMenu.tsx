import Link from "next/link";
import type { MegaMenuConfig, NavColumn, NavColumnLinks, NavLink } from "@/config/navigation";

const GRID_COLS: Record<number, string> = {
  4: "grid-cols-4",
  5: "grid-cols-5",
};

function NavIcon({ path }: { path: string }) {
  return (
    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066ff] transition-colors">
      <svg
        className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
      </svg>
    </div>
  );
}

function IconLink({ item }: { item: NavLink }) {
  if (!item.href) return null;
  return (
    <Link href={item.href} className="group block">
      <div className="flex items-start gap-4">
        {item.icon ? <NavIcon path={item.icon} /> : null}
        <div>
          <div className="text-[15px] font-semibold text-gray-900 group-hover:text-[#0066ff] transition-colors">
            {item.label}
          </div>
          {item.description ? (
            <div className="text-sm text-gray-500 mt-0.5">{item.description}</div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

function SubLinkGroup({ items }: { items: NavLink[] }) {
  return (
    <div className="ml-14 space-y-1.5">
      {items.map((item) =>
        item.href ? (
          <Link
            key={item.id}
            href={item.href}
            className="block text-sm text-gray-500 hover:text-[#0066ff] transition-colors"
          >
            {item.label}
          </Link>
        ) : null
      )}
    </div>
  );
}

/** Renderiza los enlaces de una columna agrupando en bloque los sub-links
 *  consecutivos sin icono (p. ej. las variantes de firma bajo "Firma
 *  electrónica"), igual que el markup original de Header.tsx. */
function LinksColumnBody({ column }: { column: NavColumnLinks }) {
  const visible = column.items.filter((item) => item.visibility.desktop);
  const result: Array<{ kind: "icon"; item: NavLink } | { kind: "group"; items: NavLink[] }> = [];
  let pending: NavLink[] = [];

  const flush = () => {
    if (pending.length > 0) {
      result.push({ kind: "group", items: pending });
      pending = [];
    }
  };

  for (const item of visible) {
    if (item.icon || item.description) {
      flush();
      result.push({ kind: "icon", item });
    } else {
      pending.push(item);
    }
  }
  flush();

  return (
    <div className="space-y-5">
      {result.map((entry, i) =>
        entry.kind === "icon" ? (
          <IconLink key={entry.item.id} item={entry.item} />
        ) : (
          <SubLinkGroup key={`group-${i}`} items={entry.items} />
        )
      )}
    </div>
  );
}

function Column({ column }: { column: NavColumn }) {
  if (column.type === "spacer") {
    return <div />;
  }

  if (column.type === "links") {
    return (
      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">
          {column.heading ?? <>&nbsp;</>}
        </h3>
        <LinksColumnBody column={column} />
      </div>
    );
  }

  if (column.type === "badges") {
    return (
      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">{column.heading}</h3>
        <div className="space-y-4">
          {column.items.map((badge) => (
            <div key={badge.name} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6-4a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{badge.name}</div>
                <div className="text-xs text-gray-500">{badge.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // checklist
  return (
    <div>
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">{column.heading}</h3>
      <div className="space-y-4">
        {column.items.map((line) => (
          <div key={line} className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MegaMenu({ menu, active }: { menu: MegaMenuConfig; active: boolean }) {
  const gridCols = GRID_COLS[menu.columns.length + (menu.cta ? 1 : 0)] ?? "grid-cols-4";

  return (
    <div className={`bg-white border-b border-gray-200 shadow-lg ${active ? "block" : "hidden"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className={`grid ${gridCols} gap-8`}>
          {menu.columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
          {menu.cta ? (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{menu.cta.heading}</h3>
              <p className="text-sm text-gray-500 mb-4">{menu.cta.description}</p>
              <Link
                href={menu.cta.ctaHref}
                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#0066ff] text-white font-semibold text-sm rounded-lg hover:bg-[#0052cc] transition-all"
              >
                {menu.cta.ctaLabel}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
