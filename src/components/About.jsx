import { profile, education, certifications } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 border-t border-edge">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading title="About" />

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14">
          <div>
            <div className="border-l-2 border-blueprint pl-6 space-y-4">
  {profile.bio.map((paragraph, i) => (
    <p key={i} className="text-lg leading-relaxed text-fg">
      {paragraph}
    </p>
  ))}
</div>

            <div className="mt-10">
              <p className="font-mono text-[11px] tracking-widest text-fg-soft uppercase mb-3">
                Education
              </p>
              <p className="text-fg font-medium">{education.degree}</p>
              <p className="text-fg-soft text-sm mt-1">
                {education.school} · {education.period}
              </p>
            </div>

            <div className="mt-8">
              <p className="font-mono text-[11px] tracking-widest text-fg-soft uppercase mb-3">
                Certifications
              </p>
              <ul className="space-y-1.5">
                {certifications.map((c) => (
                  <li key={c.name} className="text-fg-soft text-sm">
                    <span className="text-fg">{c.name}</span> — {c.issuer}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* spec sheet */}
          <div className="border border-edge self-start">
            <p className="font-mono text-[11px] tracking-widest uppercase text-accent px-5 py-3 border-b-2 border-amber bg-surface-alt">
              Spec Sheet
            </p>
            <dl>
              {profile.meta.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-5 py-3.5 ${
                    i !== profile.meta.length - 1 ? "border-b border-edge" : ""
                  }`}
                >
                  <dt className="font-mono text-xs text-fg-soft uppercase tracking-wide">
                    {row.label}
                  </dt>
                  <dd className="font-mono text-xs text-fg">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
