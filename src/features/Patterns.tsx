"use client";

import { Button } from "@heroui/react";
import { ArrowLeftIcon, PencilSimpleIcon, PlusIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { DocPage, Section } from "@/components/docs/DocPage";
import { Preview } from "@/components/docs/Preview";
import { EmptyState } from "@/components/takere/EmptyState";
import { PageHero } from "@/components/takere/PageHero";
import { StatusPill } from "@/components/takere/StatusPill";

export function Patterns() {
  const t = useTranslations("patterns");

  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <Section id="page-hero" title={t("hero.title")} description={t("hero.description")}>
        <Preview
          className="bg-takere-canvas"
          code={`<PageHero
  eyebrow="Pacientes"
  title="Plano de cuidados para estomias"
  leading={<Button isIconOnly variant="ghost" aria-label="Voltar"><ArrowLeftIcon /></Button>}
  aside={<Button><PlusIcon /> Novo bloco</Button>}
/>`}
        >
          <PageHero
            eyebrow={t("hero.eyebrow")}
            title={t("hero.example")}
            leading={
              <Button isIconOnly variant="ghost" aria-label={t("hero.back")}>
                <ArrowLeftIcon size={20} weight="bold" />
              </Button>
            }
            aside={
              <>
                <StatusPill tone="success">{t("hero.status")}</StatusPill>
                <Button isIconOnly variant="tertiary" aria-label={t("hero.edit")}><PencilSimpleIcon size={18} weight="bold" /></Button>
                <Button><PlusIcon size={18} weight="bold" />{t("hero.add")}</Button>
              </>
            }
          />
        </Preview>
      </Section>

      <Section id="empty" title={t("empty.title")} description={t("empty.description")}>
        <Preview
          className="block bg-takere-canvas"
          code={`<EmptyState
  title="Nenhum paciente ainda"
  description="Cadastre o primeiro paciente para começar."
  action={<Button><PlusIcon /> Novo paciente</Button>}
/>`}
        >
          <EmptyState
            title={t("empty.example")}
            description={t("empty.body")}
            action={<Button><PlusIcon size={18} weight="bold" />{t("empty.action")}</Button>}
          />
        </Preview>
      </Section>

      <Section id="responsive" title={t("responsive.title")} description={t("responsive.description")}>
        <ul className="grid gap-3 text-[14px] sm:grid-cols-2">
          {(["r1", "r2", "r3", "r4"] as const).map((k) => (
            <li key={k} className="rounded-control border border-takere-border bg-takere-surface px-4 py-3 text-takere-text">{t(`responsive.${k}`)}</li>
          ))}
        </ul>
      </Section>
    </DocPage>
  );
}
