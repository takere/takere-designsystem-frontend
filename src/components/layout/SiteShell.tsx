"use client";

import { Button, Drawer } from "@heroui/react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useState, type ReactNode } from "react";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export function SiteShell({ children }: { children: ReactNode }) {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <div className="min-h-dvh">
      <a
        href="#content"
        className="sr-only z-50 rounded-control bg-takere-primary px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t("skip")}
      </a>

      <header className="sticky top-0 z-30 border-b border-takere-border bg-takere-surface/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-1">
            <Button
              isIconOnly
              variant="ghost"
              aria-label={t("open")}
              onPress={() => setMenuOpen(true)}
              className="-ml-2 text-takere-text nav:hidden"
            >
              <ListIcon size={22} weight="bold" />
            </Button>
            <Logo />
          </div>
          <div className="flex items-center gap-1">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px]">
        <aside className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-takere-border px-3 py-8 nav:block">
          <NavLinks />
        </aside>
        <main id="content" className="min-w-0 flex-1 px-4 pt-8 pb-20 sm:px-8 lg:px-12">
          {children}
        </main>
      </div>

      <Drawer isOpen={menuOpen} onOpenChange={setMenuOpen}>
        <Drawer.Backdrop isDismissable className="nav:hidden">
          <Drawer.Content placement="left">
            <Drawer.Dialog
              aria-label={t("label")}
              className="flex h-full w-[min(300px,85vw)] flex-col overflow-y-auto bg-takere-surface p-0 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
            >
              <div className="flex items-center justify-between gap-2 border-b border-takere-border px-4 py-3">
                <Logo onNavigate={close} />
                <Button isIconOnly slot="close" variant="ghost" aria-label={t("close")} className="text-takere-muted">
                  <XIcon size={20} weight="bold" />
                </Button>
              </div>
              <div className="px-3 py-6">
                <NavLinks onNavigate={close} />
              </div>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
}
