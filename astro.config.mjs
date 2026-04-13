import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.PUBLIC_SITE_ORIGIN ?? "https://apps.jey3dayo.net",
  output: "static",
  trailingSlash: "never",
  compressHTML: true,
});
