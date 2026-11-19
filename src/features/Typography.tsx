"use client";

import { useTranslations } from "next-intl";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DocPage, Guidelines, Section } from "@/components/docs/DocPage";
import { TYPE_SCALE } from "@/lib/tokens";

const WEIGHTS = [400, 500, 600, 700] as const;

export function Typography() {
  const t = useTranslations("typography");
  const tc = useTranslations("common");

  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <Section id="family" title={t("family.title")} description={t("family.description")}>
        <div className="rounded-card border border-takere-border bg-takere-surface p-6 shadow-card sm:p-8">
          <p className="text-[56px] leading-none font-bold text-takere-heading sm:text-[72px]">Aa</p>
          <p className="mt-4 text-[18px] text-takere-text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p className="text-[18px] text-takere-text">abcdefghijklmnopqrstuvwxyz · 0123456789 · ãçéõñ</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {WEIGHTS.map((w) => (
              <div key={w} className="rounded-control bg-takere-canvas p-3">
                <p className="text-[22px] text-takere-heading" style={{ fontWeight: w }}>Takere</p>
                <p className="font-mono text-[12px] text-takere-muted">{w} · {t(`weights.${w}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="scale" title={t("scale.title")} description={t("scale.description")}>
        <div className="divide-y divide-takere-border overflow-hidden rounded-card border border-takere-border bg-takere-surface shadow-card">
          {TYPE_SCALE.map((item) => (
            <div key={item.id} className="grid gap-2 p-5 md:grid-cols-[200px_1fr] md:items-center md:gap-6">
              <div>
                <p className="text-[13px] font-semibold text-takere-heading">{t(`scale.items.${item.id}`)}</p>
                <p className="font-mono text-[11.5px] text-takere-gray">{item.spec}</p>
              </div>
              <p className={`min-w-0 break-words text-takere-text ${item.className}`}>{t("sample")}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="usage" title={t("usage.title")}>
        <CodeBlock
          code={`<span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-takere-primary">Pacientes</span>
<h1 className="text-[26px] font-bold tracking-[-0.02em] text-takere-text">Plano de cuidados</h1>
<p className="text-[14px] text-takere-muted">Atualizado há 5 minutos</p>`}
        />
      </Section>

      <Section id="guidelines" title={tc("guidelines")}>
        <Guidelines
          doLabel={tc("do")}
          dontLabel={tc("dont")}
          dos={[t("guidelines.do1"), t("guidelines.do2"), t("guidelines.do3")]}
          donts={[t("guidelines.dont1"), t("guidelines.dont2"), t("guidelines.dont3")]}
        />
      </Section>
    </DocPage>
  );
}
