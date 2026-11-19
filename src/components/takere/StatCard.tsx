import type { Icon } from "@phosphor-icons/react";
import { TakereCard } from "./TakereCard";

export function StatCard({ label, value, trend, icon: IconCmp, tone = "primary" }: { label: string; value: string; trend?: string; icon: Icon; tone?: "primary" | "warning" | "danger" | "info" }) {
  const tones = {
    primary: "bg-takere-primary-soft text-takere-primary-strong",
    warning: "bg-takere-warning/12 text-takere-warning",
    danger: "bg-takere-danger/12 text-takere-danger",
    info: "bg-takere-info/12 text-takere-info",
  } as const;

  return (
    <TakereCard className="min-w-[220px] flex-1 px-5 pt-5 pb-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[13px] font-medium text-takere-muted">{label}</p>
          <p className="mt-1 text-[28px] font-bold tracking-[-0.02em] text-takere-heading">{value}</p>
          {trend ? <p className="mt-1 text-[12px] font-semibold text-takere-success">{trend}</p> : null}
        </div>
        <span className={`flex size-11 items-center justify-center rounded-[14px] ${tones[tone]}`}>
          <IconCmp size={22} weight="duotone" />
        </span>
      </div>
    </TakereCard>
  );
}
