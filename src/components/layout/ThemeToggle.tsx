"use client";

import { Button, Dropdown } from "@heroui/react";
import { CheckIcon, DesktopIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const OPTIONS = [
  { id: "light", Icon: SunIcon },
  { id: "dark", Icon: MoonIcon },
  { id: "system", Icon: DesktopIcon },
] as const;

const noopSubscribe = () => () => undefined;

export function ThemeToggle() {
  const t = useTranslations("theme");
  const { theme, resolvedTheme, setTheme } = useTheme();
  // The stored theme is only known on the client; render a neutral icon on the server.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const CurrentIcon = mounted && resolvedTheme === "dark" ? MoonIcon : SunIcon;

  return (
    <Dropdown>
      <Button isIconOnly variant="ghost" aria-label={t("label")} className="text-takere-muted">
        <CurrentIcon size={20} weight="bold" />
      </Button>
      <Dropdown.Popover placement="bottom end" className="min-w-44">
        <Dropdown.Menu
          aria-label={t("label")}
          selectionMode="single"
          selectedKeys={mounted && theme ? [theme] : []}
          onAction={(key) => setTheme(String(key))}
        >
          {OPTIONS.map(({ id, Icon }) => (
            <Dropdown.Item key={id} id={id} textValue={t(id)}>
              <span className="flex w-full items-center gap-2.5">
                <Icon size={16} weight="bold" />
                <span className="flex-1">{t(id)}</span>
                {mounted && theme === id ? <CheckIcon size={14} weight="bold" className="text-takere-primary" /> : null}
              </span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
