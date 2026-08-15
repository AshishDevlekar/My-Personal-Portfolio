import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface-alt pt-28 pb-14 md:pt-32 md:pb-16">
      <div className="absolute inset-0 grid-accent [mask-image:radial-gradient(ellipse_65%_65%_at_50%_25%,black,transparent)]" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          {/* Left: intro */}
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-amber uppercase mb-5 font-semibold">
              {profile.title} — {profile.company}
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-fg leading-[1.02]">
              {profile.name}
            </h1>
            <p className="font-display text-xl md:text-2xl text-accent mt-5 max-w-lg">
              {profile.tagline}
            </p>
            <p className="text-fg-soft mt-6 max-w-md leading-relaxed">
  {profile.heroIntro}
</p>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 bg-amber text-ink font-mono text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:bg-amber/90 transition-colors focus-ring font-semibold"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-edge text-fg font-mono text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:border-accent hover:text-accent transition-colors focus-ring"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right: photo with dimension ticks + title block */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[320px] aspect-[4/5]">
              {/* tick marks */}
              <svg
                className="absolute -left-5 top-0 h-full w-5 text-accent hidden sm:block"
                viewBox="0 0 20 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="14" y1="0" x2="14" y2="100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="8" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="0.5" />
                <line x1="8" y1="100" x2="14" y2="100" stroke="currentColor" strokeWidth="0.5" />
              </svg>

              <div className="relative w-full h-full bg-surface border-2 border-accent/40 flex items-center justify-center overflow-hidden">
                <img
                  src="/My-Personal-Portfolio/images/portrait.jpg"
                  alt="Ashish Devlekar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <span
                  className="font-display text-7xl text-accent/40 absolute inset-0 items-center justify-center"
                  style={{ display: "none" }}
                >
                  AD
                </span>
              </div>
            </div>

            {/* title block */}
            <div className="mt-6 border border-edge max-w-[320px] mx-auto bg-surface/60 backdrop-blur-sm">
              <div className="grid grid-cols-2 divide-x divide-edge border-b border-edge">
                <div className="p-3">
                  <p className="font-mono text-[10px] text-fg-soft uppercase tracking-widest">Name</p>
                  <p className="font-mono text-xs text-fg mt-0.5">{profile.name}</p>
                </div>
                <div className="p-3">
                  <p className="font-mono text-[10px] text-fg-soft uppercase tracking-widest">Role</p>
                  <p className="font-mono text-xs text-fg mt-0.5">Full-Stack + AI</p>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-edge">
                <div className="p-3">
                  <p className="font-mono text-[10px] text-fg-soft uppercase tracking-widest">Based</p>
                  <p className="font-mono text-xs text-fg mt-0.5">{profile.location}</p>
                </div>
                <div className="p-3">
                  <p className="font-mono text-[10px] text-fg-soft uppercase tracking-widest">Status</p>
                  <p className="font-mono text-xs text-fg mt-0.5">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
