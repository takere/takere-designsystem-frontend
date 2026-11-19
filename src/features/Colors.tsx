"use client";

import { Button } from "@heroui/react";
import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { ColorSwatch } from "@/components/docs/ColorSwatch";
import { CopyButton } from "@/components/docs/CopyButton";
import { DocPage, Guidelines, Section } from "@/components/docs/DocPage";
import { BRAND_PALETTE, COLOR_GROUPS } from "@/lib/tokens";

const HEROUI_BRIDGE = [
  ["--accent", "--takere-primary"],
  ["--background", "--takere-canvas"],
  ["--surface / --overlay", "--takere-surface"],
  ["--foreground", "--takere-text"],
  ["--muted", "--takere-muted"],
  ["--success", "--takere-success"],
  ["--warning", "--takere-warning"],
  ["--danger", "--takere-danger"],
  ["--field-background", "--takere-field"],
  ["--border / --separator", "--takere-border"],
  ["--focus", "--takere-primary"],
] as const;

const csvCell = (v: string) => (/[",\n;]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

export function Colors() {
  const t = useTranslations("colors");
  const tc = useTranslations("common");

  const downloadCsv = () => {
    const header = ["group", "token", "name", "css_variable", "tailwind", "light", "dark", "usage"];
    const rows = COLOR_GROUPS.flatMap((group) =>
      group.tokens.map((token) => [
        group.id,
        token.id,
        t(`tokens.${token.id}.name`),
        token.cssVar,
        token.utility ?? "",
        token.light,
        token.dark,
        t(`tokens.${token.id}.usage`),
      ]),
    );
    const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
    // BOM so Excel opens accented text as UTF-8.
    const url = URL.createObjectURL(new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "takere-colors.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DocPage
      eyebrow={t("eyebrow")}
      title={t("title")}
      intro={t("intro")}
      actions={
        <Button variant="secondary" onPress={downloadCsv}>
          <DownloadSimpleIcon size={16} weight="bold" /> {t("downloadCsv")}
        </Button>
      }
    >
      {COLOR_GROUPS.map((group) => (
        <Section key={group.id} id={group.id} title={t(`groups.${group.id}.title`)} description={t(`groups.${group.id}.description`)}>
          <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {group.tokens.map((token) => (
              <ColorSwatch key={token.id} token={token} />
            ))}
          </div>
        </Section>
      ))}

      <Section id="palette" title={t("palette.title")} description={t("palette.description")}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {BRAND_PALETTE.map((hex) => (
            <div key={hex} className="overflow-hidden rounded-card border border-takere-border bg-takere-surface">
              <div className="h-16" style={{ background: hex }} />
              <div className="flex items-center justify-between px-3 py-2">
                <span className="font-mono text-[12px] text-takere-text">{hex}</span>
                <CopyButton value={hex} className="text-takere-caption" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="heroui" title={t("heroui.title")} description={t("heroui.description")}>
        <div className="relative overflow-x-auto rounded-card border border-takere-border bg-takere-surface">
          <table className="w-full min-w-[420px] text-left text-[13.5px]">
            <thead className="border-b border-takere-border text-[12px] uppercase tracking-[0.08em] text-takere-caption">
              <tr>
                <th className="px-4 py-3 font-semibold">HeroUI</th>
                <th className="px-4 py-3 font-semibold">Takere</th>
                <th className="px-4 py-3 font-semibold"><span className="sr-only">{tc("preview")}</span></th>
              </tr>
            </thead>
            <tbody>
              {HEROUI_BRIDGE.map(([hero, takere]) => (
                <tr key={hero} className="border-b border-takere-border last:border-0">
                  <td className="px-4 py-2.5 font-mono text-takere-muted">{hero}</td>
                  <td className="px-4 py-2.5 font-mono text-takere-text">{takere}</td>
                  <td className="px-4 py-2.5"><span className="block size-5 rounded-md ring-1 ring-takere-border" style={{ background: `var(${takere})` }} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="usage" title={t("usage.title")} description={t("usage.description")}>
        <CodeBlock
          code={`<div className="bg-takere-surface text-takere-text border border-takere-border">
  <span className="text-takere-primary">…</span>
</div>

/* CSS */
.badge { background: var(--takere-primary-soft); color: var(--takere-primary-strong); }`}
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
