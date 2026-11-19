/**
 * Token metadata for the documentation pages. The values themselves live in
 * src/styles/tokens.css; `light`/`dark` here are only shown as labels (the swatches
 * render the live CSS variable, so they always match the active theme).
 * Descriptions come from messages under `colors.tokens.<id>`.
 */

import type { Messages } from "@/i18n/messages";

export type ColorTokenId = keyof Messages["colors"]["tokens"];

export type ColorToken = {
  id: ColorTokenId;
  /** CSS variable (without `var()`). */
  cssVar: string;
  /** Tailwind utility suffix, e.g. `takere-primary` → `bg-takere-primary`. */
  utility?: string;
  light: string;
  dark: string;
};

export type ColorGroup = {
  id: "brand" | "neutral" | "status" | "care";
  tokens: ColorToken[];
};

export const COLOR_GROUPS: ColorGroup[] = [
  {
    id: "brand",
    tokens: [
      { id: "primary", cssVar: "--takere-primary", utility: "takere-primary", light: "#0cb17b", dark: "#0cb17b" },
      { id: "primaryHover", cssVar: "--takere-primary-hover", utility: "takere-primary-hover", light: "#097551", dark: "#3fc79a" },
      { id: "primaryStrong", cssVar: "--takere-primary-strong", utility: "takere-primary-strong", light: "#0c8861", dark: "#3fc79a" },
      { id: "primarySoft", cssVar: "--takere-primary-soft", utility: "takere-primary-soft", light: "#e7f6f1", dark: "rgba(12,177,123,.14)" },
      { id: "navy", cssVar: "--takere-navy", utility: "takere-navy", light: "#001d4b", dark: "#0f2a57" },
      { id: "navyDark", cssVar: "--takere-navy-dark", utility: "takere-navy-dark", light: "#001639", dark: "#0a1222" },
      { id: "navyAccent", cssVar: "--takere-navy-accent", utility: "takere-navy-accent", light: "#00307c", dark: "#1d4c99" },
    ],
  },
  {
    id: "neutral",
    tokens: [
      { id: "canvas", cssVar: "--takere-canvas", utility: "takere-canvas", light: "#f4f6f8", dark: "#0a1222" },
      { id: "surface", cssVar: "--takere-surface", utility: "takere-surface", light: "#ffffff", dark: "#111c31" },
      { id: "field", cssVar: "--takere-field", utility: "takere-field", light: "#eef0f3", dark: "#1a2741" },
      { id: "text", cssVar: "--takere-text", utility: "takere-text", light: "#333333", dark: "#e6e9ef" },
      { id: "heading", cssVar: "--takere-heading", utility: "takere-heading", light: "#001d4b", dark: "#ffffff" },
      { id: "muted", cssVar: "--takere-muted", utility: "takere-muted", light: "#5b6b84", dark: "#a3b0c6" },
      { id: "gray", cssVar: "--takere-gray", utility: "takere-gray", light: "#777777", dark: "#9aa4b5" },
      { id: "caption", cssVar: "--takere-caption", utility: "takere-caption", light: "#aaaaaa", dark: "#7c879a" },
      { id: "border", cssVar: "--takere-border", utility: "takere-border", light: "rgba(0,29,75,.08)", dark: "rgba(255,255,255,.08)" },
    ],
  },
  {
    id: "status",
    tokens: [
      { id: "success", cssVar: "--takere-success", utility: "takere-success", light: "#0fab7a", dark: "#22c08d" },
      { id: "warning", cssVar: "--takere-warning", utility: "takere-warning", light: "#fd7e14", dark: "#ff9a45" },
      { id: "danger", cssVar: "--takere-danger", utility: "takere-danger", light: "#db594f", dark: "#f0766c" },
      { id: "info", cssVar: "--takere-info", utility: "takere-info", light: "#0d6efd", dark: "#5b9dff" },
    ],
  },
  {
    id: "care",
    tokens: [
      { id: "cold", cssVar: "--takere-cold", utility: "takere-cold", light: "#49a9ff", dark: "#7cc0ff" },
      { id: "habit", cssVar: "--takere-habit", utility: "takere-habit", light: "#6f42c1", dark: "#a283e0" },
      { id: "yogurt", cssVar: "--takere-yogurt", utility: "takere-yogurt", light: "#d63384", dark: "#ec6aaa" },
    ],
  },
];

/** Official palette from Design/Header/Paleta de cores Takere.jpg (print / brand material). */
export const BRAND_PALETTE = ["#0cb17b", "#11a978", "#011e4c", "#eeeeee"] as const;

export const RADII = [
  { id: "control", cssVar: "--takere-radius-control", utility: "rounded-control", value: "12px" },
  { id: "base", cssVar: "--radius", utility: "rounded-[var(--radius)]", value: "10px" },
  { id: "card", cssVar: "--takere-radius-card", utility: "rounded-card", value: "18px" },
  { id: "field", cssVar: "--field-radius", utility: "rounded-[var(--field-radius)]", value: "20px" },
  { id: "pill", cssVar: "", utility: "rounded-full", value: "9999px" },
] as const;

export const SHADOWS = [
  { id: "card", utility: "shadow-card" },
  { id: "cardHover", utility: "shadow-card-hover" },
] as const;

export const SPACING = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16] as const;

export const TYPE_SCALE = [
  { id: "display", className: "text-[32px] font-bold tracking-[-0.02em] sm:text-[40px]", spec: "40/32 px · 700 · -0.02em" },
  { id: "pageTitle", className: "text-[26px] font-bold tracking-[-0.02em]", spec: "26 px · 700 · -0.02em" },
  { id: "sectionTitle", className: "text-[20px] font-semibold tracking-[-0.01em]", spec: "20 px · 600 · -0.01em" },
  { id: "cardTitle", className: "text-[16px] font-semibold tracking-[-0.01em]", spec: "16 px · 600 · -0.01em" },
  { id: "body", className: "text-[14px]", spec: "14 px · 400" },
  { id: "small", className: "text-[13px] text-takere-muted", spec: "13 px · 400 · muted" },
  { id: "eyebrow", className: "text-[12px] font-semibold uppercase tracking-[0.12em] text-takere-primary", spec: "12 px · 600 · 0.12em · uppercase" },
  { id: "caption", className: "text-[11px] font-medium uppercase tracking-[0.08em] text-takere-caption", spec: "11 px · 500 · 0.08em · uppercase" },
] as const;
