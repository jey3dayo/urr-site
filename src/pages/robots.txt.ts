const siteOrigin = import.meta.env.PUBLIC_SITE_ORIGIN ?? "https://apps.jey3dayo.net";

export function GET() {
  const sitemapUrl = new URL("/sitemap.xml", siteOrigin).toString();
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
