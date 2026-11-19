"use client";

import { Alert, Button, Chip, Skeleton, Spinner, toast } from "@heroui/react";
import { useTranslations } from "next-intl";
import { DocPage, Guidelines, Section } from "@/components/docs/DocPage";
import { Preview } from "@/components/docs/Preview";
import { StatusPill } from "@/components/takere/StatusPill";

const STATUSES = ["accent", "success", "warning", "danger", "default"] as const;
const CHIP_COLORS = ["accent", "success", "warning", "danger", "default"] as const;

export function Feedback() {
  const t = useTranslations("feedback");
  const tc = useTranslations("common");

  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <Section id="alerts" title={t("alerts.title")} description={t("alerts.description")}>
        <Preview
          className="flex-col items-stretch"
          code={`<Alert status="warning">
  <Alert.Indicator />
  <Alert.Content>
    <Alert.Title>Dose atrasada</Alert.Title>
    <Alert.Description>…</Alert.Description>
  </Alert.Content>
</Alert>`}
        >
          {STATUSES.map((s) => (
            <Alert key={s} status={s}>
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{t(`alerts.items.${s}.title`)}</Alert.Title>
                <Alert.Description>{t(`alerts.items.${s}.body`)}</Alert.Description>
              </Alert.Content>
            </Alert>
          ))}
        </Preview>
      </Section>

      <Section id="toasts" title={t("toasts.title")} description={t("toasts.description")}>
        <Preview
          code={`import { toast } from "@heroui/react";

toast.success("Salvo", { description: "Plano atualizado." });
toast.danger("Erro", { description: "Tente novamente." });`}
        >
          <Button variant="secondary" onPress={() => toast.success(t("toasts.success.title"), { description: t("toasts.success.body") })}>{t("toasts.success.button")}</Button>
          <Button variant="secondary" onPress={() => toast.warning(t("toasts.warning.title"), { description: t("toasts.warning.body") })}>{t("toasts.warning.button")}</Button>
          <Button variant="secondary" onPress={() => toast.danger(t("toasts.danger.title"), { description: t("toasts.danger.body") })}>{t("toasts.danger.button")}</Button>
          <Button variant="secondary" onPress={() => toast.info(t("toasts.info.title"), { description: t("toasts.info.body") })}>{t("toasts.info.button")}</Button>
        </Preview>
      </Section>

      <Section id="status" title={t("status.title")} description={t("status.description")}>
        <Preview code={`<StatusPill tone="success">Realizado</StatusPill>\n<StatusPill tone="warning">Pendente</StatusPill>\n<StatusPill tone="danger">Atrasado</StatusPill>`}>
          <StatusPill tone="success">{t("status.done")}</StatusPill>
          <StatusPill tone="warning">{t("status.pending")}</StatusPill>
          <StatusPill tone="danger">{t("status.late")}</StatusPill>
        </Preview>
      </Section>

      <Section id="chips" title={t("chips.title")}>
        <Preview code={CHIP_COLORS.map((c) => `<Chip color="${c}" variant="soft">…</Chip>`).join("\n")}>
          {CHIP_COLORS.map((c) => (
            <Chip key={c} color={c} variant="soft">{t(`chips.items.${c}`)}</Chip>
          ))}
        </Preview>
      </Section>

      <Section id="loading" title={t("loading.title")} description={t("loading.description")}>
        <Preview
          className="flex-col items-stretch"
          code={`<Skeleton className="h-4 w-2/3 rounded-lg" />\n<Spinner />`}
        >
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-[10px]" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-3.5 w-2/3 rounded-lg" />
              <Skeleton className="h-3 w-1/3 rounded-lg" />
            </div>
          </div>
          <div className="flex items-center gap-3 text-[14px] text-takere-muted">
            <Spinner /> {t("loading.label")}
          </div>
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
