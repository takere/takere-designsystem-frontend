import type { ReactNode } from "react";

/** Page header used in every app screen (takere-hcp `PageHero`). */
export function PageHero({ eyebrow, title, leading, aside }: { eyebrow?: string; title: ReactNode; leading?: ReactNode; aside?: ReactNode }) {
  return (
    <header className="flex w-full flex-wrap items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-4">
        {leading}
        <div className="min-w-0">
          {eyebrow ? (
            <span className="mb-0.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-takere-primary">{eyebrow}</span>
          ) : null}
          <h3 className="m-0 truncate text-[22px] font-bold tracking-[-0.02em] text-takere-text sm:text-[26px]">{title}</h3>
        </div>
      </div>
      {aside ? <div className="flex flex-wrap items-center gap-3">{aside}</div> : null}
    </header>
  );
}
