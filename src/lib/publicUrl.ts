/**
 * Use for assets in public/ folder so they work on GitHub Pages (and any base path).
 * import.meta.env.BASE_URL is e.g. '/' in dev and '/1001smiles/' when base is set in Vite.
 */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
