"use client";

import { Tabs } from "@heroui/react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import { CodeBlock } from "./CodeBlock";

/** Live example + source, the basic unit of every component page. */
export function Preview({ code, children, className = "" }: { code: string; children: ReactNode; className?: string }) {
  const t = useTranslations("common");

  return (
    <div className="overflow-hidden rounded-card border border-takere-border bg-takere-surface shadow-card">
      <Tabs defaultSelectedKey="preview" className="w-full">
        <Tabs.ListContainer className="border-b border-takere-border px-3 pt-2">
          <Tabs.List aria-label={t("example")} className="w-fit min-w-0">
            <Tabs.Tab id="preview">
              {t("preview")}
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="code">
              {t("code")}
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel id="preview" className={`flex flex-wrap items-center gap-3 p-5 sm:p-8 ${className}`}>
          {children}
        </Tabs.Panel>
        <Tabs.Panel id="code" className="p-3">
          <CodeBlock code={code.trim()} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
