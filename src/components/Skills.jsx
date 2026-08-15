import { skills } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 border-t border-edge bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading title="Skills &amp; Tools" note="Legend of the stack used across projects." />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
          {skills.map((group) => (
            <div key={group.group}>
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4 pb-3 border-b border-edge">
                {group.group}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-fg text-sm">
                    <span className="w-1.5 h-1.5 bg-blueprint shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
