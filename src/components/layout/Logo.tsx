import Image from "next/image";
import { asset } from "@/lib/asset";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Logo({ onNavigate }: { onNavigate?: () => void }) {
  const t = useTranslations("site");
  return (
    <Link href="/" onClick={onNavigate} className="flex min-w-0 items-center gap-2.5 rounded-control outline-none focus-visible:ring-2 focus-visible:ring-takere-primary">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-[12px] bg-white shadow-card ring-1 ring-takere-border">
        <Image src={asset("/brand/logo-app.png")} alt="" width={28} height={22} priority />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block text-[15px] font-bold tracking-[0.08em] text-takere-heading">TAKERE</span>
        <span className="block truncate text-[11px] font-medium uppercase tracking-[0.12em] text-takere-primary">
          {t("tagline")}
        </span>
      </span>
    </Link>
  );
}
