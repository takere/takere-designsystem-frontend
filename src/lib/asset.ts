/** The site's path prefix (e.g. "/takere-designsystem-frontend" on GitHub Pages), "" otherwise. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prefixes a file from public/ with the base path. next/link adds it on its own, but next/image
 * and plain <a href> / <img src> don't: asset("/brand/logo.png").
 */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
