import Link from "next/link";
import { NotesCard } from "@/components/notes-card";
import { NotesNav } from "@/components/notes-nav";
import { slides } from "@/lib/slides";

export const metadata = {
  title: "Speaker Notes — devsforfun talk",
};

export default function NotesPage() {
  const navItems = slides.map((s) => ({ number: s.number, title: s.title }));

  // Group slides by segment for visual section breaks.
  const segments: { name: string; slides: typeof slides }[] = [];
  for (const s of slides) {
    const last = segments[segments.length - 1];
    if (last && last.name === s.segment) {
      last.slides.push(s);
    } else {
      segments.push({ name: s.segment, slides: [s] });
    }
  }

  return (
    <>
      <NotesNav items={navItems} />
      <main className="mx-auto max-w-2xl px-4 pb-24 sm:px-6">
        <header className="py-8 sm:py-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
            Speaker notes
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
            AI Automation: From Hype to What You&apos;ll Actually Build
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            90 minutes · 33 slides ·{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-foreground">
              open the deck
            </Link>
          </p>
        </header>

        {segments.map((seg) => (
          <section key={seg.name}>
            <h2 className="mt-10 mb-2 border-b border-border pb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
              {seg.name}
            </h2>
            {seg.slides.map((s) => (
              <NotesCard key={s.number} slide={s} />
            ))}
          </section>
        ))}
      </main>
    </>
  );
}
