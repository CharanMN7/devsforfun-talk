"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Slide } from "@/lib/slides";
import { cn } from "@/lib/cn";

type Props = {
  slides: Slide[];
};

function readHash(): number | null {
  if (typeof window === "undefined") return null;
  const m = window.location.hash.match(/^#(\d+)$/);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

export function Deck({ slides }: Props) {
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const numberBuffer = useRef("");
  const numberTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setIndex(clamped);
      if (typeof window !== "undefined") {
        const slideNumber = slides[clamped].number;
        const newHash = `#${slideNumber}`;
        if (window.location.hash !== newHash) {
          history.replaceState(null, "", newHash);
        }
      }
    },
    [total, slides],
  );

  // Init from URL hash, and respond to manual hash changes (e.g. browser back).
  useEffect(() => {
    const apply = () => {
      const n = readHash();
      if (n == null) return;
      const idx = slides.findIndex((s) => s.number === n);
      if (idx >= 0) setIndex(idx);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [slides]);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Ignore if user is typing in a form control.
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;

      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        goTo(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goTo(index - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      } else if (/^[0-9]$/.test(e.key)) {
        // Buffer digits for ~750ms so "12" jumps to slide 12, not 1 then 2.
        numberBuffer.current += e.key;
        if (numberTimer.current) clearTimeout(numberTimer.current);
        numberTimer.current = setTimeout(() => {
          const n = Number(numberBuffer.current);
          numberBuffer.current = "";
          const idx = slides.findIndex((s) => s.number === n);
          if (idx >= 0) goTo(idx);
        }, 750);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, goTo, slides]);

  const slide = slides[index];

  return (
    <main className="relative flex min-h-svh flex-col bg-background text-foreground">
      {/* Click zones — left third = prev, right two-thirds = next. */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute inset-y-0 left-0 z-10 w-1/3 cursor-w-resize bg-transparent focus:outline-none"
      />
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute inset-y-0 right-0 z-10 w-2/3 cursor-e-resize bg-transparent focus:outline-none"
      />

      {/* Slide body. */}
      <div
        key={slide.number}
        className={cn(
          "relative z-0 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16 sm:px-12 sm:py-20",
          "animate-[fadeIn_180ms_ease-out]",
        )}
      >
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
          {slide.segment}
        </p>
        <div className="flex-1">{slide.onScreen}</div>
      </div>

      {/* Footer chrome. */}
      <footer className="pointer-events-none relative z-20 flex items-center justify-between px-6 pb-6 text-xs text-muted-foreground sm:px-12 sm:text-sm">
        <span className="font-mono tabular-nums">
          {slide.number} / {total}
        </span>
        <Link
          href={`/notes#slide-${slide.number}`}
          target="_blank"
          rel="noopener"
          className="pointer-events-auto rounded-md border border-border bg-card px-3 py-1.5 font-medium text-foreground transition hover:bg-muted"
        >
          Notes →
        </Link>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
