"use client";

import { Button, Checkbox, Description, FieldError, Input, Label, ListBox, Select, Switch, TextArea, TextField } from "@heroui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { DocPage, Guidelines, Section } from "@/components/docs/DocPage";
import { Preview } from "@/components/docs/Preview";
import { TakereCard } from "@/components/takere/TakereCard";

export function Forms() {
  const t = useTranslations("forms");
  const tc = useTranslations("common");
  const [email, setEmail] = useState("paciente@");
  const emailInvalid = email.length > 0 && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const frequencies = ["daily", "weekly", "monthly"] as const;

  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <Section id="text" title={t("text.title")} description={t("text.description")}>
        <Preview
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          code={`<TextField isRequired>
  <Label>Nome completo</Label>
  <Input placeholder="Maria da Silva" />
  <Description>Como aparece no documento.</Description>
</TextField>

<TextField value={email} onChange={setEmail} isInvalid={invalid}>
  <Label>E-mail</Label>
  <Input type="email" />
  <FieldError>Informe um e-mail válido.</FieldError>
</TextField>`}
        >
          <TextField isRequired className="w-full">
            <Label>{t("text.name")}</Label>
            <Input placeholder="Maria da Silva" />
            <Description>{t("text.nameHint")}</Description>
          </TextField>
          <TextField value={email} onChange={setEmail} isInvalid={emailInvalid} className="w-full">
            <Label>{t("text.email")}</Label>
            <Input type="email" />
            <FieldError>{t("text.emailError")}</FieldError>
          </TextField>
          <TextField className="w-full sm:col-span-2">
            <Label>{t("text.notes")}</Label>
            <TextArea rows={3} placeholder={t("text.notesPlaceholder")} />
          </TextField>
        </Preview>
      </Section>

      <Section id="select" title={t("select.title")}>
        <Preview
          className="block"
          code={`<Select placeholder="Selecione">
  <Label>Frequência</Label>
  <Select.Trigger>
    <Select.Value />
    <Select.Indicator />
  </Select.Trigger>
  <Select.Popover>
    <ListBox>
      <ListBox.Item id="daily" textValue="Diária">Diária</ListBox.Item>
    </ListBox>
  </Select.Popover>
</Select>`}
        >
          <Select placeholder={t("select.placeholder")} className="w-full max-w-xs">
            <Label>{t("select.label")}</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {frequencies.map((f) => (
                  <ListBox.Item key={f} id={f} textValue={t(`select.options.${f}`)}>
                    {t(`select.options.${f}`)}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </Preview>
      </Section>

      <Section id="choice" title={t("choice.title")} description={t("choice.description")}>
        <Preview
          className="flex-col items-start"
          code={`<Checkbox defaultSelected>
  <Checkbox.Control><Checkbox.Indicator /></Checkbox.Control>
  <Checkbox.Content><Label>Lembrete por push</Label></Checkbox.Content>
</Checkbox>

<Switch defaultSelected>
  <Switch.Content>
    <Switch.Control><Switch.Thumb /></Switch.Control>
    Notificações
  </Switch.Content>
</Switch>`}
        >
          <Checkbox defaultSelected>
            <Checkbox.Control><Checkbox.Indicator /></Checkbox.Control>
            <Checkbox.Content><Label>{t("choice.push")}</Label></Checkbox.Content>
          </Checkbox>
          <Checkbox>
            <Checkbox.Control><Checkbox.Indicator /></Checkbox.Control>
            <Checkbox.Content><Label>{t("choice.whatsapp")}</Label></Checkbox.Content>
          </Checkbox>
          <Switch defaultSelected>
            <Switch.Content className="text-[14px] font-medium text-takere-text">
              <Switch.Control><Switch.Thumb /></Switch.Control>
              {t("choice.notifications")}
            </Switch.Content>
          </Switch>
        </Preview>
      </Section>

      <Section id="layout" title={t("layout.title")} description={t("layout.description")}>
        <Preview className="block bg-takere-canvas" code={`<form className="grid grid-cols-1 gap-4 sm:grid-cols-2">…</form>`}>
          <TakereCard title={t("layout.cardTitle")} className="w-full">
            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <TextField isRequired><Label>{t("text.name")}</Label><Input /></TextField>
              <TextField><Label>{t("layout.phone")}</Label><Input type="tel" inputMode="tel" /></TextField>
              <div className="flex flex-col-reverse gap-2 sm:col-span-2 sm:flex-row sm:justify-end">
                <Button variant="tertiary" type="reset">{tc("cancel")}</Button>
                <Button type="submit">{tc("save")}</Button>
              </div>
            </form>
          </TakereCard>
        </Preview>
      </Section>

      <Section id="guidelines" title={tc("guidelines")}>
        <Guidelines
          doLabel={tc("do")}
          dontLabel={tc("dont")}
          dos={[t("guidelines.do1"), t("guidelines.do2"), t("guidelines.do3")]}
          donts={[t("guidelines.dont1"), t("guidelines.dont2")]}
        />
      </Section>
    </DocPage>
  );
}
