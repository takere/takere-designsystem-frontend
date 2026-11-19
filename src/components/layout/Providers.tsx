"use client";

import { Toast } from "@heroui/react";
import { I18nProvider as AriaI18nProvider } from "@react-aria/i18n";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function Providers({ localeTag, children }: { localeTag: string; children: ReactNode }) {
  return (
    // `class` + `data-theme`: both selectors are understood by HeroUI and by tokens.css.
    <ThemeProvider
      attribute={["class", "data-theme"]}
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      storageKey="takere-ds-theme"
    >
      <AriaI18nProvider locale={localeTag}>
        {children}
        <Toast.Provider placement="bottom" />
      </AriaI18nProvider>
    </ThemeProvider>
  );
}
