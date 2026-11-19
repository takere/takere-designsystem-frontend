import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-20 text-center">
      <p className="text-[56px] font-bold text-takere-primary">404</p>
      <h1 className="text-[22px] font-bold text-takere-heading">{t("title")}</h1>
      <p className="mt-2 text-takere-muted">{t("description")}</p>
      <Link href="/" className="mt-6 rounded-control bg-takere-primary px-5 py-2.5 font-semibold text-white hover:bg-takere-primary-hover">
        {t("back")}
      </Link>
    </div>
  );
}
