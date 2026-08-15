export default function SectionHeading({ title, note }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
      <div>
        <span className="block w-10 h-[3px] bg-amber mb-3" />
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-fg">
          {title}
        </h2>
      </div>
      {note && (
        <p className="hidden md:block font-mono text-xs text-fg-soft max-w-[220px] text-right leading-relaxed">
          {note}
        </p>
      )}
    </div>
  );
}
