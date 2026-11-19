"use client";

import { cn } from "@heroui/react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { NAV } from "@/lib/nav";

export function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav aria-label={t("label")} className="flex flex-col gap-6">
      {NAV.map((group) => (
        <div key={group.group}>
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-takere-caption">
            {t(`groups.${group.group}`)}
          </p>
          <ul className="flex flex-col gap-0.5">
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center rounded-control px-3 py-2 text-[14px] font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-takere-primary",
                      active
                        ? "bg-takere-primary-soft text-takere-primary-strong"
                        : "text-takere-muted hover:bg-takere-track hover:text-takere-text",
                    )}
                  >
                    {t(`items.${item.key}`)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
