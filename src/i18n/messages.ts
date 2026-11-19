/**
 * Site texts live in src/i18n/<locale>/<namespace>.json, one file per namespace
 * (same layout as takere-backend). The file name is the namespace: `pt/colors.json`
 * holds what `useTranslations("colors")` reads.
 */

import type { AppLocale } from "./routing";

/** Message types come from the Portuguese files (the default locale). */
export type Messages = {
  site: typeof import("./pt/site.json");
  nav: typeof import("./pt/nav.json");
  theme: typeof import("./pt/theme.json");
  locale: typeof import("./pt/locale.json");
  common: typeof import("./pt/common.json");
  notFound: typeof import("./pt/notFound.json");
  overview: typeof import("./pt/overview.json");
  colors: typeof import("./pt/colors.json");
  typography: typeof import("./pt/typography.json");
  spacing: typeof import("./pt/spacing.json");
  brand: typeof import("./pt/brand.json");
  icons: typeof import("./pt/icons.json");
  buttons: typeof import("./pt/buttons.json");
  cards: typeof import("./pt/cards.json");
  forms: typeof import("./pt/forms.json");
  feedback: typeof import("./pt/feedback.json");
  patterns: typeof import("./pt/patterns.json");
};

type Namespace = keyof Messages;

const NAMESPACES = [
  "site",
  "nav",
  "theme",
  "locale",
  "common",
  "notFound",
  "overview",
  "colors",
  "typography",
  "spacing",
  "brand",
  "icons",
  "buttons",
  "cards",
  "forms",
  "feedback",
  "patterns",
] as const satisfies readonly Namespace[];

// Fails the type check when a namespace is in `Messages` but missing from `NAMESPACES`.
const allNamespacesListed: Exclude<Namespace, (typeof NAMESPACES)[number]> extends never ? true : false = true;
void allNamespacesListed;

export async function loadMessages(locale: AppLocale): Promise<Messages> {
  const entries = await Promise.all(
    NAMESPACES.map(async (namespace) => [namespace, (await import(`./${locale}/${namespace}.json`)).default] as const),
  );
  return Object.fromEntries(entries) as Messages;
}
