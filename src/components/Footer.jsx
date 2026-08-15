import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-edge py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <a
          href="#top"
          className="font-mono text-[11px] uppercase tracking-widest text-fg-soft hover:text-accent transition-colors focus-ring rounded-sm"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
