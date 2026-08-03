import { CHECKLIST_ITEMS } from "./data";

export default function GuiaChecklist() {
  return (
    <section id="checklist" className="py-16" style={{ background: "var(--section-alt)" }} aria-labelledby="checklist-h2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="checklist-h2" className="text-2xl md:text-3xl font-black mb-6" style={{ color: "var(--primary)" }}>
          Antes de comenzar, verifique esto
        </h2>
        <ul className="grid gap-2.5">
          {CHECKLIST_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm rounded-lg px-3.5 py-3 bg-white border border-l-[3px]"
              style={{ borderColor: "var(--border-light)", borderLeftColor: "var(--accent-green)", color: "var(--text-body)" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-shrink-0 rounded-full p-0.5 text-white mt-0.5"
                style={{ background: "var(--accent-green)" }}
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
