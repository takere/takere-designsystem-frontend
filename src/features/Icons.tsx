"use client";

import {
  BellIcon, CalendarBlankIcon, ChartLineUpIcon, ChatCircleIcon, CheckIcon, ClipboardTextIcon, DropIcon, FirstAidKitIcon,
  GearIcon, HeartIcon, HouseIcon, ImageIcon, MagnifyingGlassIcon, PencilSimpleIcon, PillIcon, PlusIcon, ScalesIcon,
  SignOutIcon, TrashIcon, UserIcon, UsersIcon, WarningIcon, type Icon, type IconWeight,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DocPage, Guidelines, Section } from "@/components/docs/DocPage";
import { CareItemIcon } from "@/components/takere/CareItemIcon";

const COMMON: [string, Icon][] = [
  ["House", HouseIcon], ["User", UserIcon], ["Users", UsersIcon], ["ClipboardText", ClipboardTextIcon], ["CalendarBlank", CalendarBlankIcon],
  ["Bell", BellIcon], ["ChatCircle", ChatCircleIcon], ["ChartLineUp", ChartLineUpIcon], ["MagnifyingGlass", MagnifyingGlassIcon], ["Plus", PlusIcon],
  ["PencilSimple", PencilSimpleIcon], ["Trash", TrashIcon], ["Check", CheckIcon], ["Warning", WarningIcon], ["Gear", GearIcon], ["SignOut", SignOutIcon],
];

const WEIGHTS = ["regular", "bold", "fill", "duotone"] as const satisfies readonly IconWeight[];
const SIZES = [16, 20, 24, 32] as const;

const CARE: { id: "medication" | "water" | "weight" | "photo" | "habit" | "dressing"; Icon: Icon; color: string }[] = [
  { id: "medication", Icon: PillIcon, color: "var(--takere-danger)" },
  { id: "water", Icon: DropIcon, color: "var(--takere-info)" },
  { id: "weight", Icon: ScalesIcon, color: "var(--takere-purple)" },
  { id: "photo", Icon: ImageIcon, color: "var(--takere-caption)" },
  { id: "habit", Icon: HeartIcon, color: "var(--takere-habit)" },
  { id: "dressing", Icon: FirstAidKitIcon, color: "var(--takere-warning)" },
];

export function Icons() {
  const t = useTranslations("icons");
  const tc = useTranslations("common");

  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <Section id="library" title={t("library.title")} description={t("library.description")}>
        <div className="grid grid-cols-3 gap-2 min-[480px]:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {COMMON.map(([name, IconCmp]) => (
            <div key={name} className="flex flex-col items-center gap-2 rounded-control border border-takere-border bg-takere-surface px-1 py-4 text-center">
              <IconCmp size={24} className="text-takere-text" />
              <span className="w-full truncate px-1 text-[11px] text-takere-muted">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="weights" title={t("weights.title")} description={t("weights.description")}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {WEIGHTS.map((w) => (
            <div key={w} className="flex flex-col items-center gap-3 rounded-card border border-takere-border bg-takere-surface p-5">
              <HeartIcon size={32} weight={w} className="text-takere-primary" />
              <span className="font-mono text-[12px] text-takere-text">{w}</span>
              <span className="text-center text-[12px] text-takere-muted">{t(`weights.items.${w}`)}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sizes" title={t("sizes.title")}>
        <div className="flex flex-wrap items-end gap-8 rounded-card border border-takere-border bg-takere-surface p-6">
          {SIZES.map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <BellIcon size={s} weight="bold" className="text-takere-heading" />
              <span className="font-mono text-[12px] text-takere-gray">{s}px</span>
              <span className="text-[11px] text-takere-muted">{t(`sizes.items.${s}`)}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="care" title={t("care.title")} description={t("care.description")}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {CARE.map(({ id, Icon: IconCmp, color }) => (
            <div key={id} className="flex items-center gap-3 rounded-control border border-takere-border bg-takere-surface p-3">
              <CareItemIcon icon={IconCmp} color={color} />
              <span className="text-[14px] font-medium text-takere-text">{t(`care.items.${id}`)}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="usage" title={t("usage.title")}>
        <CodeBlock
          code={`import { BellIcon } from "@phosphor-icons/react";
// Server Components: import from "@phosphor-icons/react/dist/ssr"

<Button isIconOnly variant="ghost" aria-label="Notificações">
  <BellIcon size={20} weight="bold" />
</Button>`}
        />
      </Section>

      <Section id="guidelines" title={tc("guidelines")}>
        <Guidelines
          doLabel={tc("do")}
          dontLabel={tc("dont")}
          dos={[t("guidelines.do1"), t("guidelines.do2")]}
          donts={[t("guidelines.dont1"), t("guidelines.dont2")]}
        />
      </Section>
    </DocPage>
  );
}
