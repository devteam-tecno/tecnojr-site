/**
 * Skip Link Component
 *
 * Provides a keyboard-accessible link that allows users to skip
 * repetitive navigation and jump directly to main content.
 *
 * WCAG 2.4.1 (Bypass Blocks) - Level A
 *
 * Usage: Place at the very beginning of the layout, before header.
 */

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:rounded-md focus:bg-tecno-purple-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-tecno-purple-300 focus:ring-offset-2 focus:ring-offset-tecno-black-800"
    >
      Pular para o conteúdo principal
    </a>
  );
}
