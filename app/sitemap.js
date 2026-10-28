import PropertyData from "./JsonData/properties";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lyres.fr";
export default function sitemap() {
  const pages = ["", "/expertises", "/realisations", "/a-propos", "/contact", ...PropertyData.map((p) => `/realisations/${p.id}`)];
  return pages.map((p) => ({ url: base + p, lastModified: new Date(), priority: p === "" ? 1 : 0.7 }));
}
