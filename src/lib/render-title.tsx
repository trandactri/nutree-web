import { ReactNode } from 'react';

/**
 * Renders a title template like "How {Nutree} works" with
 * {Nutree} wrapped in a gradient-text span.
 */
export function renderTitle(template: string): ReactNode {
  const parts = template.split('{Nutree}');
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <span className="gradient-text">Nutree</span>}
    </span>
  ));
}
