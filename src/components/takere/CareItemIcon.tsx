import type { Icon } from "@phosphor-icons/react";

/** Rounded colored tile used for care-plan item types (medication, water, photo…). */
export function CareItemIcon({ icon: IconCmp, color, label }: { icon: Icon; color: string; label?: string }) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className="flex size-10 shrink-0 items-center justify-center rounded-[10px] text-white"
      style={{ background: color }}
    >
      <IconCmp size={22} weight="fill" />
    </span>
  );
}
