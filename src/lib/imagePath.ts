export function imagePath(src: string) {
  if (src.startsWith('http')) return src
  const base = import.meta.env.BASE_URL
  const clean = src.startsWith('/') ? src.slice(1) : src
  return `${base}${clean}`
}
