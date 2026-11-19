import { Chip } from "@heroui/react";
import { CheckIcon, ClockIcon, WarningIcon } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

export type StatusPillTone = "success" | "warning" | "danger";

const TONES: Record<StatusPillTone, { className: string; icon: ReactNode }> = {
  success: { className: "text-takere-success bg-takere-success/12", icon: <CheckIcon size={12} weight="bold" /> },
  warning: { className: "text-takere-warning bg-takere-warning/12", icon: <ClockIcon size={12} weight="bold" /> },
  danger: { className: "text-takere-danger bg-takere-danger/12", icon: <WarningIcon size={12} weight="bold" /> },
};

/** Status of a care-plan item: always icon + text, never color alone. */
export function StatusPill({ tone, children }: { tone: StatusPillTone; children: ReactNode }) {
  return (
    <Chip className={`justify-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap ${TONES[tone].className}`}>
      {TONES[tone].icon}
      {children}
    </Chip>
  );
}
