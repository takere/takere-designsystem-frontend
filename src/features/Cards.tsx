"use client";

import { Button, Separator } from "@heroui/react";
import { ArrowSquareOutIcon, DropIcon, PencilSimpleIcon, PillIcon, TrashIcon, UsersIcon, WarningIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { DocPage, Guidelines, Section } from "@/components/docs/DocPage";
import { Preview } from "@/components/docs/Preview";
import { CareItemIcon } from "@/components/takere/CareItemIcon";
import { StatCard } from "@/components/takere/StatCard";
import { StatusPill } from "@/components/takere/StatusPill";
import { TakereCard } from "@/components/takere/TakereCard";

export function Cards() {
  const t = useTranslations("cards");
  const tc = useTranslations("common");

  const items = [
    { id: "medication", Icon: PillIcon, color: "var(--takere-danger)" },
    { id: "water", Icon: DropIcon, color: "var(--takere-info)" },
  ] as const;

  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <Section id="basic" title={t("basic.title")} description={t("basic.description")}>
        <Preview
          className="bg-takere-canvas"
          code={`<TakereCard title="Adesão da semana" aside={<StatusPill tone="success">Em dia</StatusPill>}>
  <p className="text-[14px] text-takere-muted">…</p>
</TakereCard>`}
        >
          <TakereCard title={t("basic.cardTitle")} aside={<StatusPill tone="success">{t("basic.onTrack")}</StatusPill>} className="w-full max-w-md">
            <p className="text-[14px] leading-relaxed text-takere-muted">{t("basic.body")}</p>
          </TakereCard>
        </Preview>
      </Section>

      <Section id="care-block" title={t("careBlock.title")} description={t("careBlock.description")}>
        <Preview
          className="bg-takere-canvas"
          code={`<TakereCard title="Bloco das 07:00">
  <div className="flex items-center gap-3">
    <CareItemIcon icon={PillIcon} color="var(--takere-danger)" />
    <span className="flex-1 text-[14px] font-medium">Medicamento</span>
    <Button isIconOnly size="sm" variant="tertiary" aria-label="Editar">…</Button>
  </div>
</TakereCard>`}
        >
          <TakereCard title={t("careBlock.cardTitle")} className="w-full max-w-md">
            {items.map(({ id, Icon, color }, index) => (
              <Fragment key={id}>
                {index > 0 ? <Separator className="my-3" /> : null}
                <div className="flex items-center gap-3">
                  <CareItemIcon icon={Icon} color={color} />
                  <span className="min-w-0 flex-1 truncate text-[14px] font-medium text-takere-text">{t(`careBlock.items.${id}`)}</span>
                  <div className="flex gap-1.5">
                    <Button isIconOnly size="sm" variant="tertiary" aria-label={t("careBlock.open")}><ArrowSquareOutIcon size={16} weight="bold" /></Button>
                    <Button isIconOnly size="sm" variant="tertiary" aria-label={t("careBlock.edit")}><PencilSimpleIcon size={16} weight="bold" /></Button>
                    <Button isIconOnly size="sm" variant="tertiary" aria-label={t("careBlock.delete")}><TrashIcon size={16} weight="bold" /></Button>
                  </div>
                </div>
              </Fragment>
            ))}
          </TakereCard>
        </Preview>
      </Section>

      <Section id="stat" title={t("stat.title")} description={t("stat.description")}>
        <Preview
          className="bg-takere-canvas"
          code={`<StatCard label="Pacientes ativos" value="128" trend="+12% no mês" icon={UsersIcon} />`}
        >
          <div className="flex w-full flex-wrap gap-4">
            <StatCard label={t("stat.patients")} value="128" trend={t("stat.trend")} icon={UsersIcon} />
            <StatCard label={t("stat.adherence")} value="87%" icon={CheckCircleIcon} tone="info" />
            <StatCard label={t("stat.alerts")} value="5" icon={WarningIcon} tone="warning" />
          </div>
        </Preview>
      </Section>

      <Section id="interactive" title={t("interactive.title")} description={t("interactive.description")}>
        <Preview className="bg-takere-canvas" code={`<TakereCard interactive title="…">…</TakereCard>`}>
          <TakereCard interactive title={t("interactive.cardTitle")} className="w-full max-w-sm cursor-pointer">
            <p className="text-[14px] text-takere-muted">{t("interactive.body")}</p>
          </TakereCard>
        </Preview>
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
