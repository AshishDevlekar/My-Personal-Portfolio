import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";
import DimensionMetric from "./DimensionMetric";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 border-t border-edge bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading title="Experience" />

        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start mb-14">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-2xl font-semibold text-fg">
                {experience.role}
              </h3>
            </div>
            <p className="text-accent font-medium mt-1">{experience.company}</p>
            <p className="font-mono text-xs text-fg-soft mt-1">{experience.period}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
  {experience.stack.map((s) => (
    <span
      key={s}
      className="font-mono text-[11px] uppercase tracking-wide border border-edge px-2.5 py-1 text-fg font-medium"
    >
      {s}
    </span>
  ))}
</div>
        </div>

        <div className="border-l-2 border-blueprint pl-6 md:pl-8 mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
            {experience.project}
          </p>
          <p className="text-fg-soft leading-relaxed max-w-3xl">{experience.summary}</p>
        </div>

        {/* metric callouts — signature element */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-16 pb-16 border-b border-edge">
          {experience.metrics.map((m) => (
            <DimensionMetric key={m.label} value={m.value} label={m.label} />
          ))}
        </div>

        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-5">
          {experience.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-fg-soft leading-relaxed">
              <span className="font-mono text-xs text-accent mt-1.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
