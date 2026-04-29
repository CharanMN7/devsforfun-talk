"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Item = { number: number; title: string };

export function NotesNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.number ?? 1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry whose top is closest to (but not past) the sticky nav.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) {
          const id = (visible.target as HTMLElement).id;
          const m = id.match(/^slide-(\d+)$/);
          if (m) setActive(Number(m[1]));
        }
      },
      {
        // Fire when a card crosses just below the sticky nav.
        rootMargin: "-72px 0px -55% 0px",
        threshold: 0,
      },
    );

    items.forEach((it) => {
      const el = document.getElementById(`slide-${it.number}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const idx = items.findIndex((it) => it.number === active);
  const prev = items[idx - 1];
  const next = items[idx + 1];

  const jumpTo = (n: number) => {
    const el = document.getElementById(`slide-${n}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#slide-${n}`);
    }
  };

  return (
    <nav className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-2xl items-center gap-2 px-4 py-3 sm:px-6">
        <button
          type="button"
          aria-label="Previous slide"
          disabled={!prev}
          onClick={() => prev && jumpTo(prev.number)}
          className="grid size-11 place-items-center rounded-md border border-border bg-card text-foreground transition hover:bg-muted disabled:opacity-40"
        >
          <ChevronLeft strokeWidth={1.5} className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          disabled={!next}
          onClick={() => next && jumpTo(next.number)}
          className="grid size-11 place-items-center rounded-md border border-border bg-card text-foreground transition hover:bg-muted disabled:opacity-40"
        >
          <ChevronRight strokeWidth={1.5} className="size-5" />
        </button>
        <select
          aria-label="Jump to slide"
          value={active}
          onChange={(e) => jumpTo(Number(e.target.value))}
          className="ml-auto min-h-11 min-w-0 max-w-[60%] truncate rounded-md border border-border bg-card px-3 text-sm font-medium text-foreground"
        >
          {items.map((it) => (
            <option key={it.number} value={it.number}>
              {it.number}. {it.title}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}
