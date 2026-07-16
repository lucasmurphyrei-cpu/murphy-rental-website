type EmblemMarkProps = {
  /** Rendered size in px (square). Defaults to 36. */
  size?: number;
  /** Unique prefix — prevents SVG gradient id collisions when several marks render on one page. */
  id: string;
  className?: string;
  title?: string;
};

/**
 * Murphy Rental Property Management logo mark — the "M" rooflines with a glowing
 * doorway and figure stepping in. Simplified variant, tuned for small sizes
 * (navbar, footer). Matches the favicon and email branding.
 */
export function EmblemMark({
  size = 36,
  id,
  className,
  title = "Murphy Rental Property Management",
}: EmblemMarkProps) {
  const doorId = `${id}-door`;
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={doorId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF0C4" />
          <stop offset="100%" stopColor="#E0A93E" />
        </linearGradient>
      </defs>
      <circle cx="120" cy="120" r="110" fill="#1B2A4A" stroke="#D4A853" strokeWidth="8" />
      <path
        d="M 66 174 L 66 102 L 100 72 L 120 92 L 140 72 L 174 102 L 174 174"
        fill="none"
        stroke="#F4F5F8"
        strokeWidth="13"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M 102 174 L 102 130 Q 102 114 120 114 Q 138 114 138 130 L 138 174 Z"
        fill={`url(#${doorId})`}
      />
      <g fill="#1B2A4A">
        <circle cx="120" cy="133" r="7" />
        <path d="M 112 174 L 112 148 Q 120 139 128 148 L 128 174 Z" />
      </g>
    </svg>
  );
}
