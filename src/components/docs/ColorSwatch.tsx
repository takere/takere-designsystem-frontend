"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import type { ColorToken } from "@/lib/tokens";
import { CopyButton } from "./CopyButton";

export function ColorSwatch({ token }: { token: ColorToken }) {
  const t = useTranslations("colors.tokens");
  const { resolvedTheme } = useTheme();
  const value = resolvedTheme === "dark" ? token.dark : token.light;

  return (
    <div className="overflow-hidden rounded-card border border-takere-border bg-takere-surface shadow-card">
      <div className="h-20 border-b border-takere-border" style={{ background: `var(${token.cssVar})` }} />
      <div className="flex items-start justify-between gap-2 p-3.5">
        <div className="min-w-0">
          <p className="text-[14px] font-semibold text-takere-heading">{t(`${token.id}.name`)}</p>
          <p className="mt-0.5 text-[12.5px] leading-snug text-takere-muted">{t(`${token.id}.usage`)}</p>
          <p className="mt-2 truncate font-mono text-[11.5px] text-takere-gray">{token.cssVar}</p>
          <p className="truncate font-mono text-[11.5px] text-takere-gray" suppressHydrationWarning>{value}</p>
        </div>
        <CopyButton value={value} className="-mt-1 -mr-1 shrink-0 text-takere-caption" />
      </div>
    </div>
  );
}
