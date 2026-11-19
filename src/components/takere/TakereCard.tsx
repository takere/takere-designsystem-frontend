"use client";

import { Card, cn } from "@heroui/react";
import type { ReactNode } from "react";

/** Surface card: 18px radius, hairline border, soft navy shadow (takere-hcp `Card`). */
export function TakereCard({
  title,
  aside,
  children,
  className,
  interactive,
}: {
  title?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Lifts on hover; use only when the whole card is clickable. */
  interactive?: boolean;
}) {
  return (
    <Card
      className={cn(
        "flex min-w-0 flex-col gap-0 rounded-card border border-takere-border bg-takere-surface px-6 pt-5 pb-6 shadow-card",
        interactive && "transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
    >
      {(title || aside) && (
        <Card.Header className="mb-[18px] flex flex-row flex-wrap items-center justify-between gap-3">
          {title ? (
            <Card.Title className="m-0 text-[16px] font-semibold tracking-[-0.01em] text-takere-text">{title}</Card.Title>
          ) : null}
          {aside}
        </Card.Header>
      )}
      {children}
    </Card>
  );
}
