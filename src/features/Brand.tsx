"use client";

import { DownloadSimpleIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { useTranslations } from "next-intl";
import { DocPage, Guidelines, Section } from "@/components/docs/DocPage";

const ASSETS = [
  { id: "logoSlogan", src: asset("/brand/logo-slogan.png"), w: 1467, h: 408, bg: "bg-white" },
  { id: "logo", src: asset("/brand/logo.png"), w: 1467, h: 283, bg: "bg-[#001d4b]" },
  { id: "symbol", src: asset("/brand/logo-app.png"), w: 313, h: 244, bg: "bg-white" },
  { id: "appIcon", src: asset("/brand/icon-green.png"), w: 1000, h: 1000, bg: "bg-[#f4f6f8]" },
] as const;

const WALLPAPERS = [
  { id: "withLogo", src: asset("/brand/wallpaper.jpg") },
  { id: "background", src: asset("/brand/wallpaper-background.jpg") },
] as const;

export function Brand() {
  const t = useTranslations("brand");
  const tc = useTranslations("common");

  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <Section id="story" title={t("story.title")}>
        <div className="grid items-center gap-6 rounded-card border border-takere-border bg-takere-surface p-6 shadow-card md:grid-cols-[200px_1fr]">
          <div className="mx-auto flex size-40 items-center justify-center rounded-full bg-white ring-1 ring-takere-border">
            <Image src={asset("/brand/logo-app.png")} alt={t("assets.symbol")} width={120} height={94} />
          </div>
          <p className="text-[15px] leading-relaxed text-takere-text">{t("story.body")}</p>
        </div>
      </Section>

      <Section id="assets" title={t("assetsTitle")} description={t("assetsDescription")}>
        <div className="grid gap-4 sm:grid-cols-2">
          {ASSETS.map((a) => (
            <figure key={a.id} className="overflow-hidden rounded-card border border-takere-border bg-takere-surface shadow-card">
              <div className={`flex h-40 items-center justify-center p-6 ${a.bg}`}>
                <Image src={a.src} alt={t(`assets.${a.id}`)} width={a.w} height={a.h} className="max-h-full w-auto max-w-full object-contain" />
              </div>
              <figcaption className="flex items-center justify-between gap-2 border-t border-takere-border px-4 py-3">
                <span className="text-[14px] font-semibold text-takere-heading">{t(`assets.${a.id}`)}</span>
                <a href={a.src} download className="inline-flex items-center gap-1.5 rounded-control px-2 py-1 text-[13px] font-semibold text-takere-primary-strong hover:bg-takere-primary-soft">
                  <DownloadSimpleIcon size={16} weight="bold" /> PNG
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="wallpapers" title={t("wallpapers.title")} description={t("wallpapers.description")}>
        <div className="grid gap-4 sm:grid-cols-2">
          {WALLPAPERS.map((w) => (
            <figure key={w.id} className="overflow-hidden rounded-card border border-takere-border bg-takere-surface shadow-card">
              <Image src={w.src} alt={t(`wallpapers.${w.id}`)} width={960} height={540} className="aspect-video h-auto w-full object-cover" />
              <figcaption className="flex items-center justify-between gap-2 border-t border-takere-border px-4 py-3">
                <span className="text-[14px] font-semibold text-takere-heading">{t(`wallpapers.${w.id}`)}</span>
                <a href={w.src} download className="inline-flex items-center gap-1.5 rounded-control px-2 py-1 text-[13px] font-semibold text-takere-primary-strong hover:bg-takere-primary-soft">
                  <DownloadSimpleIcon size={16} weight="bold" /> JPG
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="clearspace" title={t("clearspace.title")} description={t("clearspace.description")}>
        <div className="flex justify-center rounded-card border border-takere-border bg-takere-surface p-6">
          <div className="relative border-2 border-dashed border-takere-primary/60 p-8 sm:p-12">
            <Image src={asset("/brand/logo.png")} alt="" width={1467} height={283} className="h-auto w-[220px] sm:w-[320px]" />
            <span className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-[11px] text-takere-primary-strong">x</span>
            <span className="absolute top-1/2 left-1 -translate-y-1/2 font-mono text-[11px] text-takere-primary-strong">x</span>
          </div>
        </div>
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
