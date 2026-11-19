"use client";

import { ArrowRightIcon, GlobeIcon, HandHeartIcon, MoonIcon, DeviceMobileIcon, EyeIcon, SparkleIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { useTranslations } from "next-intl";
import { DocPage, Section } from "@/components/docs/DocPage";
import { TakereCard } from "@/components/takere/TakereCard";
import { Link } from "@/i18n/navigation";
import { NAV, type NavItemKey } from "@/lib/nav";

const PRINCIPLES = [
  { id: "care", Icon: HandHeartIcon },
  { id: "clarity", Icon: EyeIcon },
  { id: "consistency", Icon: SparkleIcon },
] as const;

const FEATURES = [
  { id: "theme", Icon: MoonIcon },
  { id: "i18n", Icon: GlobeIcon },
  { id: "responsive", Icon: DeviceMobileIcon },
] as const;

export function Overview() {
  const t = useTranslations("overview");
  const tNav = useTranslations("nav");

  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <div className="relative overflow-hidden rounded-card bg-takere-navy px-6 py-10 text-white shadow-card sm:px-10">
        <div className="relative z-10 max-w-xl">
          <Image src={asset("/brand/logo.png")} alt="Takere" width={260} height={50} className="h-auto w-[200px] sm:w-[260px]" priority />
          <p className="mt-5 text-[15px] leading-relaxed text-white/80 sm:text-[16px]">{t("hero")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/foundations/colors" className="inline-flex items-center gap-2 rounded-[var(--field-radius)] bg-takere-primary px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-takere-primary-hover">
              {t("ctaFoundations")} <ArrowRightIcon size={16} weight="bold" />
            </Link>
            <Link href="/components/buttons" className="inline-flex items-center gap-2 rounded-[var(--field-radius)] bg-white/10 px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-white/20">
              {t("ctaComponents")}
            </Link>
          </div>
        </div>
        <Image src={asset("/brand/logo-app.png")} alt="" width={313} height={244} aria-hidden className="pointer-events-none absolute -right-10 -bottom-10 w-[240px] opacity-10 invert sm:w-[320px]" />
      </div>

      <Section id="principles" title={t("principles.title")}>
        <div className="grid gap-4 md:grid-cols-3">
          {PRINCIPLES.map(({ id, Icon }) => (
            <TakereCard key={id}>
              <span className="mb-3 flex size-11 items-center justify-center rounded-[14px] bg-takere-primary-soft text-takere-primary-strong">
                <Icon size={22} weight="duotone" />
              </span>
              <p className="text-[16px] font-semibold text-takere-heading">{t(`principles.${id}.title`)}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-takere-muted">{t(`principles.${id}.body`)}</p>
            </TakereCard>
          ))}
        </div>
      </Section>

      <Section id="explore" title={t("explore.title")} description={t("explore.description")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NAV.slice(1).flatMap((group) =>
            group.items.map((item) => (
              <Link key={item.key} href={item.href} className="group rounded-card outline-none focus-visible:ring-2 focus-visible:ring-takere-primary">
                <TakereCard interactive className="h-full">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-takere-caption">{tNav(`groups.${group.group}`)}</span>
                  <span className="mt-1 flex items-center justify-between text-[16px] font-semibold text-takere-heading">
                    {tNav(`items.${item.key}`)}
                    <ArrowRightIcon size={16} weight="bold" className="text-takere-primary transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="mt-1 text-[13.5px] leading-relaxed text-takere-muted">{t(`explore.items.${item.key as Exclude<NavItemKey, "overview">}`)}</span>
                </TakereCard>
              </Link>
            )),
          )}
        </div>
      </Section>

      <Section id="features" title={t("features.title")}>
        <div className="grid gap-4 md:grid-cols-3">
          {FEATURES.map(({ id, Icon }) => (
            <div key={id} className="flex gap-3 rounded-card border border-takere-border p-5">
              <Icon size={24} weight="duotone" className="shrink-0 text-takere-primary" />
              <div>
                <p className="font-semibold text-takere-heading">{t(`features.${id}.title`)}</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-takere-muted">{t(`features.${id}.body`)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="stack" title={t("stack.title")} description={t("stack.description")}>
        <div className="flex flex-wrap gap-2">
          {["Next.js 16", "React 19", "HeroUI v3", "Tailwind CSS v4", "next-intl", "next-themes", "Phosphor Icons", "Roboto"].map((item) => (
            <span key={item} className="rounded-full border border-takere-border bg-takere-surface px-3 py-1 text-[13px] font-medium text-takere-text">{item}</span>
          ))}
        </div>
      </Section>
    </DocPage>
  );
}
