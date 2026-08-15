import { profile } from "../data/content";

const LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "GitHub", value: "View profile →", href: 'https://github.com/AshishDevlekar' },
  { label: "LinkedIn", value: "View profile →", href: 'https://www.linkedin.com/in/ashish-devlekar/' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-surface-alt py-16 md:py-20">
      <div className="absolute inset-0 grid-accent [mask-image:radial-gradient(ellipse_65%_65%_at_50%_40%,black,transparent)]" />
      <div className="absolute -bottom-32 -left-24 w-[500px] h-[500px] bg-amber/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
          <div>
            <span className="block w-10 h-[3px] bg-amber mb-3" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-fg">
              Let's talk
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-14 items-start">
          <div>
            <p className="text-xl md:text-2xl font-display text-fg leading-snug max-w-lg">
              Open to full-stack and AI/ML roles — happy to talk about what I'm building,
              or what you're hiring for.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-amber text-ink font-mono text-xs tracking-[0.15em] uppercase px-6 py-3.5 mt-8 hover:bg-amber/90 transition-colors focus-ring font-semibold"
            >
              Say hello
            </a>
          </div>

          <div className="border border-edge bg-surface/60 backdrop-blur-sm">
            <p className="font-mono text-[11px] tracking-widest uppercase text-fg-soft px-5 py-3 border-b border-edge">
              Contact Block
            </p>
            <dl>
              {LINKS.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-5 py-3.5 ${
                    i !== LINKS.length - 1 ? "border-b border-edge" : ""
                  }`}
                >
                  <dt className="font-mono text-xs text-fg-soft uppercase tracking-wide">
                    {row.label}
                  </dt>
                  <dd>
                    <a
                      href={row.href}
                      className="font-mono text-xs text-accent hover:text-amber transition-colors focus-ring rounded-sm"
                    >
                      {row.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
