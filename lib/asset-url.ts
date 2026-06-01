export function assetUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_URL ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
