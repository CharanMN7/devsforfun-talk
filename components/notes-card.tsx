import type { Slide } from "@/lib/slides";

export function NotesCard({ slide }: { slide: Slide }) {
  const paragraphs = slide.notes.split(/\n\s*\n/);

  return (
    <article
      id={`slide-${slide.number}`}
      className="border-t border-border py-8 first:border-t-0 sm:py-10"
    >
      <header className="mb-5">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
          Slide {slide.number} · {slide.segment}
        </p>
        <h2 className="mt-1 text-xl font-semibold leading-tight sm:text-2xl">
          {slide.title}
        </h2>
      </header>

      <details className="mb-6 rounded-lg border border-border bg-muted">
        <summary className="cursor-pointer select-none px-4 py-3 text-sm font-medium text-foreground">
          On screen
        </summary>
        <ul className="space-y-1.5 px-4 pb-4 text-sm text-muted-foreground">
          {slide.onScreenText.map((line, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden>·</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </details>

      <div className="space-y-4 text-base leading-relaxed text-foreground sm:text-lg sm:leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i} className="whitespace-pre-wrap">
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}
