import type { Metadata } from "next";

/**
 * The design system is internal documentation: it must not show up in search engines or feed AI models.
 * Two layers:
 * - <meta name="robots"> (this file): search engines may crawl the pages, but only so they can read
 *   "noindex" and drop them. Blocking them in robots.txt instead would hide that tag, and a blocked
 *   URL can still be indexed from links on other sites.
 * - robots.txt (src/app/robots.ts): AI crawlers, which don't honor "noindex", are refused entirely.
 */
export const NO_INDEX_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: false,
  noarchive: true,
  nosnippet: true,
  noimageindex: true,
  nocache: true,
  googleBot: { index: false, follow: false, noimageindex: true, "max-snippet": 0, "max-image-preview": "none" },
};

/** Opt-out directives read by some AI crawlers and image scrapers (not part of the robots standard). */
export const NO_AI_META: Metadata["other"] = { robots: "noai, noimageai" };

/** robots.txt user agents of AI crawlers (training, AI search and AI assistants). */
export const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  "CCBot",
  "PerplexityBot",
  "Perplexity-User",
  "Bytespider",
  "Amazonbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "FacebookBot",
  "cohere-ai",
  "cohere-training-data-crawler",
  "MistralAI-User",
  "DuckAssistBot",
  "YouBot",
  "Diffbot",
  "ImagesiftBot",
  "Omgilibot",
  "Timpibot",
  "AI2Bot",
  "PanguBot",
];
