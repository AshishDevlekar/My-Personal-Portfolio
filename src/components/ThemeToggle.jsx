import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Check } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setTheme(stored === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const apply = (next) => {
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change theme"
        aria-expanded={open}
        className="flex items-center justify-center w-9 h-9 border border-edge text-fg-soft hover:text-accent hover:border-accent transition-colors focus-ring"
      >
        {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-surface border border-edge shadow-lg z-50">
          <button
            onClick={() => apply("light")}
            className="w-full flex items-center justify-between gap-2 px-3 py-2.5 font-mono text-xs uppercase tracking-wide text-fg-soft hover:text-accent hover:bg-surface-alt transition-colors"
          >
            <span className="flex items-center gap-2">
              <Sun size={13} /> Light
            </span>
            {theme === "light" && <Check size={13} />}
          </button>
          <button
            onClick={() => apply("dark")}
            className="w-full flex items-center justify-between gap-2 px-3 py-2.5 font-mono text-xs uppercase tracking-wide text-fg-soft hover:text-accent hover:bg-surface-alt transition-colors border-t border-edge"
          >
            <span className="flex items-center gap-2">
              <Moon size={13} /> Dark
            </span>
            {theme === "dark" && <Check size={13} />}
          </button>
        </div>
      )}
    </div>
  );
}
