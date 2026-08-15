export default function DimensionMetric({ value, label }) {
  return (
    <div className="min-w-[150px]">
      <svg
        viewBox="0 0 150 16"
        className="w-full h-4 text-accent"
        aria-hidden="true"
      >
        <line x1="0" y1="8" x2="150" y2="8" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="2" x2="0" y2="14" stroke="currentColor" strokeWidth="1" />
        <line x1="150" y1="2" x2="150" y2="14" stroke="currentColor" strokeWidth="1" />
      </svg>
      <p className="font-display text-3xl md:text-4xl font-semibold text-fg mt-2">
        {value}
      </p>
      <p className="font-mono text-[11px] tracking-wide text-fg-soft mt-1 uppercase">
        {label}
      </p>
    </div>
  );
}
