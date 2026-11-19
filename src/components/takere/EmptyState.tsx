import Image from "next/image";
import { asset } from "@/lib/asset";
import type { ReactNode } from "react";

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center rounded-card border border-dashed border-takere-light bg-takere-surface px-6 py-10 text-center">
      <span className="mb-4 flex size-16 items-center justify-center rounded-full bg-takere-primary-soft">
        <Image src={asset("/brand/logo-app.png")} alt="" width={40} height={31} />
      </span>
      <p className="text-[16px] font-semibold text-takere-heading">{title}</p>
      <p className="mt-1 max-w-sm text-[14px] text-takere-muted">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
