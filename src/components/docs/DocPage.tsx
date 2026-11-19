import type { ReactNode } from "react";

/** Page header in the same shape as the apps' PageHero (eyebrow + title). */
export function DocPage({
  eyebrow,
  title,
  intro,
  actions,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  /** Optional controls shown below the intro (e.g. downloads). */
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-5xl">
      <header className="mb-10">
        <span className="mb-1 block text-[12px] font-semibold uppercase tracking-[0.12em] text-takere-primary">{eyebrow}</span>
        <h1 className="text-[28px] font-bold tracking-[-0.02em] text-takere-heading sm:text-[34px]">{title}</h1>
        {intro ? <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-takere-muted sm:text-[16px]">{intro}</p> : null}
        {actions ? <div className="mt-5 flex flex-wrap gap-3">{actions}</div> : null}
      </header>
      <div className="flex flex-col gap-14">{children}</div>
    </article>
  );
}

export function Section({ id, title, description, children }: { id: string; title: string; description?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <h2 id={`${id}-title`} className="text-[20px] font-semibold tracking-[-0.01em] text-takere-heading">
        <a href={`#${id}`} className="group inline-flex items-center gap-2 outline-none focus-visible:underline">
          {title}
          <span aria-hidden className="text-takere-caption opacity-0 transition-opacity group-hover:opacity-100">#</span>
        </a>
      </h2>
      {description ? <p className="mt-1.5 max-w-3xl text-[14px] leading-relaxed text-takere-muted">{description}</p> : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

/** Do / Don't guidance cards. */
export function Guidelines({ doLabel, dontLabel, dos, donts }: { doLabel: string; dontLabel: string; dos: string[]; donts: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[
        { label: doLabel, items: dos, tone: "border-t-takere-success", mark: "✓", markClass: "text-takere-success" },
        { label: dontLabel, items: donts, tone: "border-t-takere-danger", mark: "✕", markClass: "text-takere-danger" },
      ].map((col) => (
        <div key={col.label} className={`rounded-card border border-t-4 border-takere-border bg-takere-surface p-5 shadow-card ${col.tone}`}>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-takere-heading">{col.label}</p>
          <ul className="flex flex-col gap-2 text-[14px] leading-relaxed">
            {col.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden className={`font-bold ${col.markClass}`}>{col.mark}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
