export function assetUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_URL?.replace(/\/$/, "") ?? "";
  const normalized = path.replace(/^\//, "");

  if (base) return `${base}/${normalized}`;
  return `/${normalized}`;
}
