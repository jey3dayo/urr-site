import { ultraRssReaderPublicPaths } from "../data/ultra-rss-reader";

const siteOrigin = import.meta.env.PUBLIC_SITE_ORIGIN ?? "https://apps.jey3dayo.net";

const pages = ["/", ...ultraRssReaderPublicPaths];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((path) => {
    return `  <url><loc>${new URL(path, siteOrigin).toString()}</loc></url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
