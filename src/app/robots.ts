import type { MetadataRoute } from "next";
import { AI_CRAWLERS } from "@/lib/robots";

export const dynamic = "force-static";

/**
 * Search engines are allowed in so they can read the pages' "noindex" tag (see src/lib/robots.ts);
 * AI crawlers are refused everywhere.
 * Crawlers only read robots.txt at the root of a host, so it relies on the custom domain
 * (https://design-system.takere.com.br/robots.txt); under <owner>.github.io/<repo>/ only the meta tags apply.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_CRAWLERS, disallow: "/" },
      { userAgent: "*", allow: "/" },
    ],
  };
}
