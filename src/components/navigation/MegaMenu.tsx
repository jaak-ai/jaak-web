import Link from "next/link";
import { gtmEvent } from "@/components/GoogleTagManager";
import { isPublished } from "@/config/navigation";
import type { MegaMenuConfig, NavColumn, NavColumnLinks, NavLink } from "@/config/navigation";

const GRID_COLS: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

function trackLinkClick(menu: MegaMenuConfig, item: NavLink) {
  gtmEvent("nav_link_click", {
    menu: menu.id,
    item: item.id,
    label: item.label,
    page_path: window.location.pathname,
  });
}

function NavIcon({ path }: { path: string }) {
  return (
    <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066ff] transition-colors">
      <svg
        className="w-[18px] h-[18px] text-gray-900 group-hover:text-white transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
      </svg>
    </div>
  );
}

function IconLink({ menu, item }: { menu: MegaMenuConfig; item: NavLink }) {
  if (!item.href) return null;
  return (
    <Link href={item.href} className="group block" onClick={() => trackLinkClick(menu, item)}>
      <div className="flex items-start gap-3">
        {item.icon ? <NavIcon path={item.icon} /> : null}
        <div>
          <div className="text-sm font-semibold text-gray-900 group-hover:text-[#0066ff] transition-colors">
            {item.label}
          </div>
          {item.description ? (
            <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.description}</div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

function LinksColumnBody({ menu, column }: { menu: MegaMenuConfig; column: NavColumnLinks }) {
  const visible = column.items.filter((item) => item.visibility.desktop && isPublished(item));
  return (
    <div className="space-y-3.5">
      {visible.map((item) => (
        <IconLink key={item.id} menu={menu} item={item} />
      ))}
    </div>
  );
}

function Column({ menu, column }: { menu: MegaMenuConfig; column: NavColumn }) {
  if (column.type === "links") {
    if (!isPublished(column)) return null;
    return (
      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{column.heading ?? <>&nbsp;</>}</h3>
        <LinksColumnBody menu={menu} column={column} />
      </div>
    );
  }

  // checklist
  return (
    <div>
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{column.heading}</h3>
      <div className="space-y-3">
        {column.items.map((line) => (
          <div key={line} className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MegaMenu({ menu, active, id }: { menu: MegaMenuConfig; active: boolean; id: string }) {
  const visibleColumns = menu.columns.filter((c) => c.type !== "links" || isPublished(c));
  const gridCols = GRID_COLS[visibleColumns.length] ?? "grid-cols-4";

  return (
    <div
      id={id}
      role="region"
      aria-label={`${menu.triggerLabel} — más opciones`}
      className={`bg-white border-b border-gray-200 shadow-lg ${active ? "block" : "hidden"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid ${gridCols} gap-8`}>
          {visibleColumns.map((column) => (
            <Column key={column.id} menu={menu} column={column} />
          ))}
        </div>
      </div>
    </div>
  );
}
