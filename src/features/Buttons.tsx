"use client";

import { Button, Spinner } from "@heroui/react";
import { FloppyDiskIcon, PencilSimpleIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { DocPage, Guidelines, Section } from "@/components/docs/DocPage";
import { Preview } from "@/components/docs/Preview";

const VARIANTS = ["primary", "secondary", "tertiary", "outline", "ghost", "danger"] as const;

export function Buttons() {
  const t = useTranslations("buttons");
  const tc = useTranslations("common");
  const [saving, setSaving] = useState(false);

  const save = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <Section id="variants" title={t("variants.title")} description={t("variants.description")}>
        <Preview code={VARIANTS.map((v) => `<Button variant="${v}">${t(`variants.items.${v}.label`)}</Button>`).join("\n")}>
          {VARIANTS.map((v) => (
            <Button key={v} variant={v}>{t(`variants.items.${v}.label`)}</Button>
          ))}
        </Preview>
        <ul className="mt-4 grid gap-2 text-[14px] sm:grid-cols-2">
          {VARIANTS.map((v) => (
            <li key={v} className="rounded-control border border-takere-border bg-takere-surface px-4 py-3">
              <span className="font-mono text-[12.5px] font-semibold text-takere-primary-strong">{v}</span>
              <span className="mt-0.5 block text-takere-muted">{t(`variants.items.${v}.usage`)}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="sizes" title={t("sizes.title")}>
        <Preview code={`<Button size="sm">…</Button>\n<Button size="md">…</Button>\n<Button size="lg">…</Button>`}>
          <Button size="sm">{t("sizes.sm")}</Button>
          <Button size="md">{t("sizes.md")}</Button>
          <Button size="lg">{t("sizes.lg")}</Button>
        </Preview>
      </Section>

      <Section id="icons" title={t("icons.title")} description={t("icons.description")}>
        <Preview
          code={`<Button><PlusIcon size={18} weight="bold" /> Novo paciente</Button>

<Button isIconOnly variant="tertiary" aria-label="Editar">
  <PencilSimpleIcon size={18} weight="bold" />
</Button>`}
        >
          <Button><PlusIcon size={18} weight="bold" />{t("icons.newPatient")}</Button>
          <Button isIconOnly variant="tertiary" aria-label={t("icons.edit")}><PencilSimpleIcon size={18} weight="bold" /></Button>
          <Button isIconOnly variant="tertiary" aria-label={t("icons.delete")} className="text-takere-danger"><TrashIcon size={18} weight="bold" /></Button>
          <Button isIconOnly variant="primary" aria-label={t("icons.add")} className="rounded-full"><PlusIcon size={18} weight="bold" /></Button>
        </Preview>
      </Section>

      <Section id="states" title={t("states.title")} description={t("states.description")}>
        <Preview
          code={`<Button isPending={saving} onPress={save}>
  {saving ? <Spinner size="sm" color="current" /> : <FloppyDiskIcon size={18} />}
  Salvar
</Button>
<Button isDisabled>Indisponível</Button>`}
        >
          <Button isPending={saving} onPress={save}>
            {saving ? <Spinner size="sm" color="current" /> : <FloppyDiskIcon size={18} weight="bold" />}
            {saving ? t("states.saving") : t("states.save")}
          </Button>
          <Button isDisabled>{t("states.disabled")}</Button>
          <Button fullWidth variant="secondary" className="sm:hidden">{t("states.fullWidth")}</Button>
        </Preview>
      </Section>

      <Section id="guidelines" title={tc("guidelines")}>
        <Guidelines
          doLabel={tc("do")}
          dontLabel={tc("dont")}
          dos={[t("guidelines.do1"), t("guidelines.do2"), t("guidelines.do3")]}
          donts={[t("guidelines.dont1"), t("guidelines.dont2"), t("guidelines.dont3")]}
        />
      </Section>
    </DocPage>
  );
}
