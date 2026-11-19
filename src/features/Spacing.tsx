"use client";

import { useTranslations } from "next-intl";
import { DocPage, Section } from "@/components/docs/DocPage";
import { RADII, SHADOWS, SPACING } from "@/lib/tokens";

const BREAKPOINTS = [
  { id: "sm", value: "640px" },
  { id: "md", value: "768px" },
  { id: "nav", value: "1024px" },
  { id: "xl", value: "1280px" },
] as const;

export function Spacing() {
  const t = useTranslations("spacing");

  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <Section id="scale" title={t("scale.title")} description={t("scale.description")}>
        <div className="flex flex-col gap-2 rounded-card border border-takere-border bg-takere-surface p-5 shadow-card">
          {SPACING.map((step) => (
            <div key={step} className="grid grid-cols-[64px_64px_1fr] items-center gap-3 text-[13px]">
              <span className="font-mono text-takere-text">{step}</span>
              <span className="font-mono text-takere-gray">{step * 4}px</span>
              <span className="h-3 rounded-sm bg-takere-primary" style={{ width: step * 4 * 2 }} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="radius" title={t("radius.title")} description={t("radius.description")}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {RADII.map((r) => (
            <div key={r.id} className="flex flex-col items-center gap-3 rounded-card border border-takere-border bg-takere-surface p-4 text-center">
              <span className="size-16 border-2 border-takere-primary bg-takere-primary-soft" style={{ borderRadius: r.value }} />
              <span className="text-[13px] font-semibold text-takere-heading">{t(`radius.items.${r.id}`)}</span>
              <span className="font-mono text-[11.5px] text-takere-gray">{r.value}</span>
              <span className="font-mono text-[11px] break-all text-takere-caption">{r.utility}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="elevation" title={t("elevation.title")} description={t("elevation.description")}>
        <div className="grid gap-6 bg-takere-canvas sm:grid-cols-2">
          {SHADOWS.map((s) => (
            <div key={s.id} className={`rounded-card border border-takere-border bg-takere-surface p-6 ${s.utility}`}>
              <p className="font-semibold text-takere-heading">{t(`elevation.items.${s.id}`)}</p>
              <p className="mt-1 font-mono text-[12px] text-takere-gray">{s.utility}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="breakpoints" title={t("breakpoints.title")} description={t("breakpoints.description")}>
        <div className="relative overflow-x-auto rounded-card border border-takere-border bg-takere-surface">
          <table className="w-full min-w-[360px] text-left text-[13.5px]">
            <tbody>
              {BREAKPOINTS.map((b) => (
                <tr key={b.id} className="border-b border-takere-border last:border-0">
                  <td className="px-4 py-3 font-mono font-semibold text-takere-primary-strong">{b.id}:</td>
                  <td className="px-4 py-3 font-mono text-takere-text">≥ {b.value}</td>
                  <td className="px-4 py-3 text-takere-muted">{t(`breakpoints.items.${b.id}`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </DocPage>
  );
}
