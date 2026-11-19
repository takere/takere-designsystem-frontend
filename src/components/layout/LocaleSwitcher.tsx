"use client";

import { Button, Dropdown } from "@heroui/react";
import { CheckIcon, GlobeIcon } from "@phosphor-icons/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { getPathname, usePathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("locale");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // next-intl's router keeps the /pt prefix when switching to the default locale so its proxy can
  // redirect; a static host has no proxy, so navigate straight to the public URL ("/x", "/en/x").
  const change = (next: AppLocale) =>
    startTransition(() => router.replace(getPathname({ href: pathname, locale: next }), { scroll: false }));

  return (
    <Dropdown>
      <Button variant="ghost" aria-label={t("label")} isDisabled={isPending} className="gap-1.5 px-2.5 text-takere-muted">
        <GlobeIcon size={20} weight="bold" />
        <span className="text-[13px] font-semibold uppercase">{locale}</span>
      </Button>
      <Dropdown.Popover placement="bottom end" className="min-w-44">
        <Dropdown.Menu aria-label={t("label")} onAction={(key) => change(key as AppLocale)}>
          {routing.locales.map((code) => (
            <Dropdown.Item key={code} id={code} textValue={t(code)}>
              <span className="flex w-full items-center gap-2.5">
                <span className="w-6 text-[11px] font-bold uppercase text-takere-caption">{code}</span>
                <span lang={code} className="flex-1">{t(code)}</span>
                {code === locale ? <CheckIcon size={14} weight="bold" className="text-takere-primary" /> : null}
              </span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
