/** Site navigation. `key` is the message key under `nav.items`. */
export const NAV = [
  {
    group: "start",
    items: [{ key: "overview", href: "/" }],
  },
  {
    group: "foundations",
    items: [
      { key: "colors", href: "/foundations/colors" },
      { key: "typography", href: "/foundations/typography" },
      { key: "spacing", href: "/foundations/spacing" },
      { key: "brand", href: "/foundations/brand" },
      { key: "icons", href: "/foundations/icons" },
    ],
  },
  {
    group: "components",
    items: [
      { key: "buttons", href: "/components/buttons" },
      { key: "cards", href: "/components/cards" },
      { key: "forms", href: "/components/forms" },
      { key: "feedback", href: "/components/feedback" },
      { key: "patterns", href: "/components/patterns" },
    ],
  },
] as const;

export type NavGroupKey = (typeof NAV)[number]["group"];
export type NavItemKey = (typeof NAV)[number]["items"][number]["key"];
