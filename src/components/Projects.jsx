import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";

const CATEGORY_COLOR = {
  "LLM + RAG": "bg-amber",
  "AI + IoT": "bg-blueprint",
  "Computer Vision": "bg-blueprint-dark",
  "Full-Stack": "bg-amber",
};

function StatusDot({ status }) {
  const live = status === "Live";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-fg-soft">
      <span
        className={`w-1.5 h-1.5 rounded-full ${live ? "bg-blueprint" : "bg-amber"}`}
      />
      {status}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 border-t border-edge">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading title="Selected Projects" />

        <div className="grid md:grid-cols-2 gap-px bg-edge border border-edge">
          {projects.map((p) => (
            <article key={p.id} className="bg-surface flex flex-col">
              <div className={`h-1.5 ${CATEGORY_COLOR[p.tag] || "bg-blueprint"}`} />
              <div className="p-7 md:p-9 flex flex-col flex-1">
              <div className="flex items-start justify-end mb-5">
  <StatusDot status={p.status} />
</div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-fg-soft mb-2">
                {p.tag}
              </p>
              <h3 className="font-display text-2xl font-semibold text-fg">
                {p.name}
              </h3>
              <p className="text-accent text-sm mt-1 mb-4">{p.subtitle}</p>

              <p className="text-fg-soft leading-relaxed text-sm flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-wide text-fg-soft border border-edge px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 mt-auto pt-2">
                {p.links.live && (
                  <a
                    href={p.links.live}
                    className="font-mono text-xs uppercase tracking-widest text-fg hover:text-accent transition-colors focus-ring rounded-sm"
                  >
                    Live →
                  </a>
                )}
                {p.links.code && (
                  <a
                    href={p.links.code}
                    className="font-mono text-xs uppercase tracking-widest text-fg hover:text-accent transition-colors focus-ring rounded-sm"
                  >
                    Code →
                  </a>
                )}
                {!p.links.live && !p.links.code && (
                  <span className="font-mono text-xs uppercase tracking-widest text-fg-soft/60">
                    In progress
                  </span>
                )}
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
