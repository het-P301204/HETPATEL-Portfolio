"use client";

import { useTheme } from "@/lib/theme";

/**
 * Two states, stated plainly. The marker is the accent of the theme you would
 * be switching *to*, so the control shows its own consequence.
 */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "LIGHT" : "DARK";

  return (
    <button
      type="button"
      className="theme-toggle t-mono"
      onClick={toggle}
      data-cursor="link"
      data-theme-state={theme}
      aria-label={`Switch to ${next.toLowerCase()} mode`}
    >
      <span className="theme-toggle__dot" aria-hidden="true" />
      <span className="theme-toggle__label">{next}</span>
    </button>
  );
}
