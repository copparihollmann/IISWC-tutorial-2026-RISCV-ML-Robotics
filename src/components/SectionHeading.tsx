import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
  inverse?: boolean;
  compact?: boolean;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  inverse = false,
  compact = false,
}: SectionHeadingProps) {
  return (
    <header className={`section-heading${inverse ? " section-heading--inverse" : ""}${compact ? " section-heading--compact" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <div className="section-heading__description">{description}</div> : null}
    </header>
  );
}
