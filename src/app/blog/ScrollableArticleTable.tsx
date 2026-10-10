"use client";

import { useId, useRef } from "react";

interface ScrollableArticleTableProps {
  label: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
}

export default function ScrollableArticleTable({ label, headers, rows }: Readonly<ScrollableArticleTableProps>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const id = useId();

  function scroll(direction: number) {
    const container = scrollRef.current;
    if (container) container.scrollBy({ left: direction * container.clientWidth });
  }

  return (
    <section aria-label={label} className="my-8 max-w-full">
      <div id={id} ref={scrollRef} data-table-scroll className="max-w-full overflow-x-auto rounded-lg border border-white/10">
        <table className="w-full min-w-[640px] text-sm text-left">
          <thead><tr>{headers.map(header => <th key={header} scope="col" className="p-4 border-b">{header}</th>)}</tr></thead>
          <tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell, index) => <td key={headers[index]} className="p-4 border-b align-top">{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-wrap gap-3">
        <button type="button" aria-controls={id} aria-label={`${label}: desplazar a la izquierda`} onClick={() => scroll(-1)} className="text-[#1ECAD3] rounded-lg border border-current px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-[#1ECAD3]">← Izquierda</button>
        <button type="button" aria-controls={id} aria-label={`${label}: desplazar a la derecha`} onClick={() => scroll(1)} className="text-[#1ECAD3] rounded-lg border border-current px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-[#1ECAD3]">Derecha →</button>
      </div>
    </section>
  );
}
