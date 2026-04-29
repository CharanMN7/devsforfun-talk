import type { ReactNode } from "react";

export type Slide = {
  number: number;
  segment: string;
  title: string;
  onScreen: ReactNode;
  /** A plain summary of the on-screen content for the notes page recap. */
  onScreenText: string[];
  /** Speaker notes — paragraphs separated by blank lines. */
  notes: string;
};

const Bullet = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-3">
    <span aria-hidden className="mt-3 inline-block h-1.5 w-1.5 shrink-0 rounded-sm bg-foreground" />
    <span>{children}</span>
  </li>
);

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-md border border-border bg-muted px-3 py-1 text-sm font-medium text-foreground">
    {children}
  </span>
);

const Code = ({ children }: { children: ReactNode }) => (
  <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">{children}</code>
);

const FlowArrow = () => (
  <span aria-hidden className="text-2xl text-muted-foreground">
    →
  </span>
);

export const slides: Slide[] = [
  {
    number: 1,
    segment: "Segment 1 — Opening",
    title: "AI Automation: From Hype to What You'll Actually Build",
    onScreenText: [
      "Title: AI Automation: From Hype to What You'll Actually Build",
      "Subtitle: 90 minutes · 2 projects · 0 budget",
      "Speaker name + devsforfun studio",
    ],
    onScreen: (
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          AI Automation
        </h1>
        <p className="mt-4 text-2xl text-muted-foreground sm:text-3xl md:text-4xl">
          From Hype to What You&apos;ll Actually Build
        </p>
        <p className="mt-12 text-lg text-foreground sm:text-xl">
          90 minutes &middot; 2 projects &middot; 0 budget
        </p>
        <p className="mt-2 text-base text-muted-foreground sm:text-lg">devsforfun studio</p>
      </div>
    ),
    notes:
      "Don't say anything yet. Let the title sit while the room settles. As soon as people are quiet, switch to slide 2 and start the live demo.",
  },
  {
    number: 2,
    segment: "Segment 1 — Opening",
    title: "Live demo (Comet / Perplexity)",
    onScreenText: [
      "Just the live browser window — Comet or Perplexity in a tab, big and visible.",
      "Slide is essentially a placeholder behind it.",
    ],
    onScreen: (
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Live demo</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Comet / Perplexity</h2>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          (Switch to the browser. This slide is a placeholder behind the live window.)
        </p>
      </div>
    ),
    notes: `Type the prompt live: "find me three software engineering internships in Visakhapatnam open right now and put the application links in a list." While it runs, ask the room: "Quick show of hands — who here has used ChatGPT?" (most hands). "Who has used something AI-powered that isn't a chatbot?" (very few). "Okay — keep that in mind." When the result comes back, read one out, click into the link to prove it's real, and turn back to the room.

Now introduce yourself in two lines: you run a one-person AI agency called devsforfun, you build automation for clients full-time, and you've been a self-taught builder for the last few years. No long backstory. Move on.`,
  },
  {
    number: 3,
    segment: "Segment 1 — Opening",
    title: "What we're doing today",
    onScreenText: [
      "Two projects you'll build (Email summariser · Resume scanner)",
      "One framework you'll learn (the four levels)",
      "One thing you'll walk away with: working tools you'll keep using",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">What we&apos;re doing today</h2>
        <ul className="mt-10 flex flex-col gap-5 text-lg sm:text-2xl">
          <Bullet>
            <span className="font-medium">Two projects you&apos;ll build</span>
            <span className="text-muted-foreground"> — email summariser &middot; resume scanner</span>
          </Bullet>
          <Bullet>
            <span className="font-medium">One framework you&apos;ll learn</span>
            <span className="text-muted-foreground"> — the four levels of AI automation</span>
          </Bullet>
          <Bullet>
            <span className="font-medium">One thing you&apos;ll walk away with</span>
            <span className="text-muted-foreground"> — working tools you&apos;ll keep using</span>
          </Bullet>
        </ul>
      </div>
    ),
    notes: `Tell them the deal up-front. Two projects, both useful, both free to keep running after the workshop. One mental model that will make the rest of the AI hype out there easier to read. By the end, two things on their phones or laptops that they didn't have when they walked in. No theory-heavy lectures, no math, no "intro to neural networks" — that's not what this is.

End with: "Before we build, let me show you the map. Because 'AI automation' is not one thing — it's four."`,
  },
  {
    number: 4,
    segment: "Segment 2 — The Map",
    title: "The four levels of AI automation",
    onScreenText: [
      "Big visual: four stacked levels, like game levels or building floors",
      "Level 1: Code · Level 2: Task · Level 3: Workflow · Level 4: Agent",
      "RPA shown off to the side as 'the older cousin'",
    ],
    onScreen: (
      <div className="w-full">
        <h2 className="text-center text-3xl font-bold sm:text-5xl">Four levels of AI automation</h2>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { n: 1, name: "Code", sub: "AI in your editor" },
            { n: 2, name: "Task", sub: "AI does one job" },
            { n: 3, name: "Workflow", sub: "AI inside a pipeline" },
            { n: 4, name: "Agent", sub: "AI runs the browser" },
          ].map((l) => (
            <div
              key={l.n}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
            >
              <span className="font-mono text-3xl text-muted-foreground">L{l.n}</span>
              <div>
                <p className="text-xl font-semibold">{l.name}</p>
                <p className="text-sm text-muted-foreground">{l.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          (And RPA — the older cousin, off to the side.)
        </p>
      </div>
    ),
    notes: `Set up the framework. Most people lump everything into "AI" or "automation," and that's why their understanding of it is fuzzy. There are actually four distinct categories, they each look different, they each use different tools, and they each lead to different careers. We'll spend a minute on each.`,
  },
  {
    number: 5,
    segment: "Segment 2 — The Map",
    title: "Level 1 — Code-level automation",
    onScreenText: [
      "AI writes code with you",
      "Tools: Cursor, Claude Code, Codex, Antigravity, GitHub Copilot",
      "One-liner: You're still the author. AI is the assistant that types.",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Level 1
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">AI writes code with you</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          <Pill>Cursor</Pill>
          <Pill>Claude Code</Pill>
          <Pill>Codex</Pill>
          <Pill>Antigravity</Pill>
          <Pill>GitHub Copilot</Pill>
        </div>
        <p className="mt-10 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
          You&apos;re still the author. AI is the assistant that types.
        </p>
      </div>
    ),
    notes: `This is the level most CS students hear about first. AI sitting next to you in your editor, finishing your sentences, suggesting whole functions, even writing entire features when you ask it to. Mention each tool briefly:

— Cursor is the most popular AI editor right now. Free hobby tier exists, but the real deal is Cursor for Students — one full year of Pro completely free with a .edu email. Most of your colleges' email domains will work. Claim it tonight.

— Claude Code runs in your terminal, very strong reasoning, but no free tier worth using.

— Codex is OpenAI's version, included in a limited way with ChatGPT Free and ChatGPT Go (the cheap Indian-market tier) right now — that may change.

— Antigravity is Google's new agentic IDE, free during preview, runs Gemini 3 Pro and Claude Sonnet for free. We'll be touching this lightly in Project B.

The mental model: at Level 1, the AI never leaves your editor. It doesn't talk to other apps, doesn't run on a schedule, doesn't make decisions on its own. It just helps you type faster.`,
  },
  {
    number: 6,
    segment: "Segment 2 — The Map",
    title: "Level 2 — Task-level automation",
    onScreenText: [
      "AI does one job well",
      "Examples: classify this email · summarise this PDF · score this candidate · extract data from this invoice",
      "One-liner: Input → AI → Output. No browser. No loop.",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Level 2
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">AI does one job well</h2>
        <ul className="mt-8 flex flex-col gap-3 text-lg sm:text-xl">
          <Bullet>Classify this email</Bullet>
          <Bullet>Summarise this PDF</Bullet>
          <Bullet>Score this candidate</Bullet>
          <Bullet>Extract data from this invoice</Bullet>
        </ul>
        <p className="mt-10 font-mono text-lg text-muted-foreground sm:text-xl">
          Input → AI → Output. No browser. No loop.
        </p>
      </div>
    ),
    notes: `Level 2 is when you give AI a specific, narrow job and it does that one thing reliably. You feed it something, it gives you something back, end of story. Most "AI features" you've seen inside apps you already use — Notion's AI summarise button, Gmail's smart replies, the AI features inside Photoshop — are Level 2.

This is the workhorse level. The vast majority of useful AI in production is just Level 2 done well. A scoring function. A classifier. An extractor. Boring, reliable, valuable. Project A and Project B are mostly Level 2 work, dressed up with a tiny bit of Level 3 around the edges.`,
  },
  {
    number: 7,
    segment: "Segment 2 — The Map",
    title: "Level 3 — Workflow-level automation",
    onScreenText: [
      "AI runs inside a pipeline",
      "Visual: Trigger → AI Step → Action",
      "Tools: n8n, Make.com, Zapier, Pipedream",
      "One-liner: The pattern most paid AI work follows in 2026.",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Level 3
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">AI runs inside a pipeline</h2>
        <div className="mt-10 flex flex-wrap items-center gap-4 text-lg sm:text-xl">
          <Pill>Trigger</Pill>
          <FlowArrow />
          <Pill>AI step</Pill>
          <FlowArrow />
          <Pill>Action</Pill>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          <Pill>n8n</Pill>
          <Pill>Make.com</Pill>
          <Pill>Zapier</Pill>
          <Pill>Pipedream</Pill>
        </div>
        <p className="mt-10 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
          The pattern most paid AI work follows in 2026.
        </p>
      </div>
    ),
    notes: `Level 3 is where you connect multiple steps. Something happens (a new email arrives, a form gets submitted, the clock hits 9 AM), an AI step does its task, the result gets sent somewhere or triggers another step. This is what tools like n8n, Make.com, Zapier, and Pipedream are for.

Be honest: this is the level where most paid AI freelance and agency work lives in India in 2026. When a small business says "we want to use AI to automate our customer onboarding," what they actually need is a Make scenario or an n8n workflow with three or four steps and an LLM call somewhere in the middle. That's it. That's the product. People are charging ₹30k–₹2L per project for that.

Project A is exactly this — a Level 3 workflow.`,
  },
  {
    number: 8,
    segment: "Segment 2 — The Map",
    title: "Level 4 — Agent-level automation",
    onScreenText: [
      "AI operates apps and browsers for you",
      "Tools: Comet, ChatGPT agent, Claude computer use, Manus, Browser-Use",
      "One-liner: Goal in English → AI decides what to do.",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Level 4
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">
          AI operates apps and browsers for you
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          <Pill>Comet</Pill>
          <Pill>ChatGPT agent</Pill>
          <Pill>Claude computer use</Pill>
          <Pill>Manus</Pill>
          <Pill>Browser-Use</Pill>
        </div>
        <p className="mt-10 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
          Goal in English → AI decides what to do.
        </p>
      </div>
    ),
    notes: `Level 4 is what you saw at the start with Comet. You give the AI a goal — "find me internships," "book me a flight under ₹10k," "fill out these 50 application forms with my resume" — and it goes off, opens a browser, clicks things, navigates, comes back with the answer or the action done.

Be honest about the state of it. Comet is genuinely useful and fully free now. ChatGPT agent mode works but only on paid tiers. Manus AI was acquired by Meta in late 2025; it's impressive in demos but still burns through credits and fails on complex tasks. Open-source agents like Browser-Use are real and runnable on your own laptop with a free Gemini key, but they break on sites with anti-bot protection.

The honest summary: Level 4 is the future, it's exciting, and you wouldn't put it in production for a paying client in 2026 because it's still too unreliable. It's at the "interesting demo" stage, not the "ship to customers" stage. That gap is closing fast though.`,
  },
  {
    number: 9,
    segment: "Segment 2 — The Map",
    title: "The older cousin: RPA",
    onScreenText: [
      "RPA — the boring billion-dollar cousin",
      "Tools: UiPath, Automation Anywhere, Power Automate",
      "RPA replays human clicks (rules) vs. AI agents reason about what to click (model)",
      "TCS · Infosys · Wipro hire RPA devs heavily",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">
          RPA — the boring billion-dollar cousin
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          <Pill>UiPath</Pill>
          <Pill>Automation Anywhere</Pill>
          <Pill>Power Automate</Pill>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              RPA
            </p>
            <p className="mt-2 text-lg">Replays human clicks (rules)</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              AI agents
            </p>
            <p className="mt-2 text-lg">Reason about what to click (model)</p>
          </div>
        </div>
        <p className="mt-8 text-base text-muted-foreground sm:text-lg">
          TCS &middot; Infosys &middot; Wipro hire RPA devs heavily.
        </p>
      </div>
    ),
    notes: `Quick segment. RPA — Robotic Process Automation — is the older industry that's been doing "click automation" for over a decade. UiPath, Automation Anywhere, Microsoft Power Automate. The way it works is brittle but predictable: somebody records a sequence of clicks in a software app, and the bot replays it. If a button moves, the bot breaks.

Why this matters specifically for this room: Indian IT services companies — TCS, Infosys, Wipro, Cognizant, HCLTech — hire RPA developers in huge volumes. Salaries at fresher level are modest (₹3.5–6 LPA) but it's a foot in the door, and UiPath has a free certification track anyone can finish in a couple of weekends. That cert on your resume during 2nd or 3rd year is one of the most concrete placement edges you can buy yourself, and it costs nothing.

The two paradigms — RPA's rule-based approach and modern AI agents' reasoning approach — are converging. UiPath now ships AI agents inside its platform. So learning RPA isn't a detour; it's the on-ramp to the AI-agent work.`,
  },
  {
    number: 10,
    segment: "Segment 2 — The Map",
    title: "Where we're going today",
    onScreenText: [
      "Project A → Level 3 (workflow)",
      "Project B → Level 2 (task)",
      "Plus: a little Level 1 in how we'll write the prompts",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">Where we&apos;re going today</h2>
        <ul className="mt-10 flex flex-col gap-5 text-lg sm:text-2xl">
          <Bullet>
            <span className="font-medium">Project A</span>
            <span className="text-muted-foreground"> → Level 3 (workflow)</span>
          </Bullet>
          <Bullet>
            <span className="font-medium">Project B</span>
            <span className="text-muted-foreground"> → Level 2 (task)</span>
          </Bullet>
          <Bullet>
            <span className="font-medium">Plus</span>
            <span className="text-muted-foreground">
              {" "}
              a little Level 1 in how we&apos;ll write the prompts
            </span>
          </Bullet>
        </ul>
      </div>
    ),
    notes: `So those are the four levels. Today we're going to build one Level 3 thing and one Level 2 thing, with a little Level 1 sprinkled in when we write our prompts. We won't touch Level 4 today because the free tools at that level are too unreliable for a workshop, but you'll know how to identify them when you encounter them.

Let's build.`,
  },
  {
    number: 11,
    segment: "Segment 3 — Project A: Email Summariser",
    title: "Project A: Email summariser bot",
    onScreenText: [
      "Project A: Email summariser bot",
      "Important emails → 2-line summary → straight to your phone",
      "Time: 30 minutes including setup",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Project A
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">Email summariser bot</h2>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
          Important emails → 2-line summary → straight to your phone.
        </p>
        <p className="mt-10 text-base text-muted-foreground sm:text-lg">
          30 minutes including setup.
        </p>
      </div>
    ),
    notes: `We're building a bot that watches your Gmail for important emails. Whenever a starred email comes in, it sends the body to Gemini, asks it to summarise in two lines and pull out any deadline, and pings the summary to your Telegram. End-to-end, the whole thing runs by itself once we've built it.

Why this is genuinely useful: every one of you has missed a placement notice, a fee deadline, or an internship reply that was buried in your inbox. This bot fixes that for the cost of zero rupees and 30 minutes of your time.`,
  },
  {
    number: 12,
    segment: "Segment 3 — Project A: Email Summariser",
    title: "The architecture",
    onScreenText: [
      "Gmail → Make → Gemini → Telegram",
      "4 services. 3 connections. That's the whole thing.",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">The architecture</h2>
        <div className="mt-12 flex flex-wrap items-center gap-4 text-lg sm:text-xl">
          <Pill>Gmail</Pill>
          <FlowArrow />
          <Pill>Make</Pill>
          <FlowArrow />
          <Pill>Gemini</Pill>
          <FlowArrow />
          <Pill>Telegram</Pill>
        </div>
        <p className="mt-12 text-lg text-muted-foreground sm:text-xl">
          4 services. 3 connections. That&apos;s the whole thing.
        </p>
      </div>
    ),
    notes: `Four services, three connections. Gmail is where the email comes from. Make.com is the orchestrator — it watches Gmail and runs the rest of the workflow. Gemini is the AI brain that does the summarisation. Telegram is where the summary lands so you see it on your phone.

Once we build this, we never have to touch it again. It runs forever in the background.`,
  },
  {
    number: 13,
    segment: "Segment 3 — Project A: Email Summariser",
    title: "What you'll need to set up",
    onScreenText: [
      "✅ Gmail account (you have this)",
      "✅ Telegram on your phone (install if you don't)",
      "🆕 Make.com account (we'll create now)",
      "🆕 Google AI Studio API key (we'll create now)",
      "🆕 Telegram bot via BotFather (we'll create now)",
      "⏱️ ~10 min for accounts, ~10 for the build",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">What you&apos;ll need</h2>
        <ul className="mt-10 flex flex-col gap-3 text-base sm:text-lg">
          <li className="flex gap-3">
            <span className="font-mono text-muted-foreground">[have]</span>
            <span>Gmail account</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-muted-foreground">[have]</span>
            <span>Telegram on your phone</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-muted-foreground">[new] </span>
            <span>Make.com account</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-muted-foreground">[new] </span>
            <span>Google AI Studio API key</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-muted-foreground">[new] </span>
            <span>Telegram bot via BotFather</span>
          </li>
        </ul>
        <p className="mt-10 text-base text-muted-foreground sm:text-lg">
          ~10 min for accounts &middot; ~10 for the build
        </p>
      </div>
    ),
    notes: `Three things to create. None of them require a credit card. None of them require a verification process longer than two minutes each.

I want to be honest with you: the next ten minutes are going to feel slow and tedious. You'll be creating accounts and copying credentials. This is the boring part of every automation project ever built. The reason it's worth doing carefully is that this same setup pattern — "get accounts, get API keys, paste them into your tool" — is exactly what you'll do for every future automation you build, including the ones people will pay you for. So the boredom is the actual learning. Bear with it.

Open three new browser tabs. We're going in order.`,
  },
  {
    number: 14,
    segment: "Segment 3 — Project A: Email Summariser",
    title: "Step 1 — Make.com signup",
    onScreenText: [
      "URL: make.com",
      "1. Click 'Get started free'",
      "2. Sign in with Google (fastest)",
      "3. Skip the onboarding wizard",
      "4. You're in. New scenario screen.",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Step 1
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">Make.com signup</h2>
        <p className="mt-4 font-mono text-lg text-muted-foreground sm:text-xl">make.com</p>
        <ol className="mt-10 flex flex-col gap-3 text-base sm:text-lg">
          <li>
            <span className="mr-3 font-mono text-muted-foreground">1.</span>Click &ldquo;Get started
            free&rdquo;
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">2.</span>Sign in with Google
            (fastest)
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">3.</span>Skip the onboarding
            wizard
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">4.</span>You&apos;re in. New
            scenario screen.
          </li>
        </ol>
      </div>
    ),
    notes: `Open make.com, click the green "Get started free" button. Sign in with your Google account — that's the fastest path, no email verification needed. Skip whatever onboarding wizard pops up; we'll build our scenario from scratch. You should land on a dashboard with a "Create a new scenario" button. Don't click it yet.

Make's free plan gives you 1,000 operations per month — that's plenty for this bot to run for a long time.`,
  },
  {
    number: 15,
    segment: "Segment 3 — Project A: Email Summariser",
    title: "Step 2 — Get your Gemini API key",
    onScreenText: [
      "URL: aistudio.google.com/apikey",
      "1. Sign in with Google",
      "2. Click 'Create API key'",
      "3. Choose 'Create API key in new project'",
      "4. Copy the key — paste it in a notes app, not anywhere public",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Step 2
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">Get your Gemini API key</h2>
        <p className="mt-4 font-mono text-base text-muted-foreground sm:text-lg">
          aistudio.google.com/apikey
        </p>
        <ol className="mt-10 flex flex-col gap-3 text-base sm:text-lg">
          <li>
            <span className="mr-3 font-mono text-muted-foreground">1.</span>Sign in with Google
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">2.</span>Click &ldquo;Create API
            key&rdquo;
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">3.</span>Choose &ldquo;Create API
            key in new project&rdquo;
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">4.</span>Copy the key — paste it
            in a notes app, not anywhere public
          </li>
        </ol>
      </div>
    ),
    notes: `New tab. Go to aistudio.google.com/apikey — that's the direct link to the API key page. Sign in with the same Google account. Click "Create API key", choose "Create API key in new project," and a long string of characters appears.

That string is your key. Treat it like a password. Don't paste it into a Discord chat, don't push it to a public GitHub repo, don't take a photo of your screen and send it to a friend. People who scrape GitHub for leaked API keys can rack up a Gemini bill on you in minutes. Copy it into your notes app for now — we'll use it in a few minutes.

Gemini's free tier gives us Gemini 2.5 Flash with very generous limits — way more than this bot will ever use.`,
  },
  {
    number: 16,
    segment: "Segment 3 — Project A: Email Summariser",
    title: "Step 3 — Create your Telegram bot",
    onScreenText: [
      "On your phone: open Telegram → search @BotFather",
      "1. Send /newbot",
      "2. Give it a name (e.g., 'My Email Summary')",
      "3. Give it a username ending in 'bot'",
      "4. Copy the token BotFather gives you",
      "5. Send any message to your new bot",
      "6. Visit api.telegram.org/bot<TOKEN>/getUpdates — find chat.id in the JSON",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Step 3
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">Create your Telegram bot</h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          On your phone: open Telegram → search <Code>@BotFather</Code>
        </p>
        <ol className="mt-8 flex flex-col gap-3 text-base sm:text-lg">
          <li>
            <span className="mr-3 font-mono text-muted-foreground">1.</span>Send <Code>/newbot</Code>
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">2.</span>Give it a name (e.g.
            &ldquo;My Email Summary&rdquo;)
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">3.</span>Give it a username
            ending in <Code>bot</Code>
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">4.</span>Copy the token BotFather
            gives you
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">5.</span>
            <strong>Send any message</strong> to your new bot
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">6.</span>Visit{" "}
            <Code>api.telegram.org/bot&lt;TOKEN&gt;/getUpdates</Code> — find <Code>chat.id</Code> in
            the JSON
          </li>
        </ol>
      </div>
    ),
    notes: `This step has the most fiddly bits. Open Telegram on your phone, search for @BotFather — that's a bot Telegram itself runs that creates other bots for you. Tap "Start." Send the message /newbot. It will ask for a display name (anything works) and a username (must be unique across all of Telegram and must end in the word "bot"). Once you give it a valid username, it will reply with a long token. Copy that token.

Now the trick that everyone forgets: you have to send your new bot a message yourself before you can use it. Tap the link BotFather gives you to your new bot, tap "Start," and send any text — say "hi". Without this step, the bot has no idea who you are and can't message you back.

Last bit: open your laptop browser and go to api.telegram.org/bot<YOUR_TOKEN>/getUpdates, replacing <YOUR_TOKEN> with the token you copied (keep the word bot in front of it — it's literally part of the URL). You'll see some JSON. Inside that JSON, find the field chat.id — it's a number. Copy that number too. We need both the token and the chat ID.

If your getUpdates response is empty {"ok":true,"result":[]}, that means you skipped the "send your bot a message" step. Go back and do it.`,
  },
  {
    number: 17,
    segment: "Segment 3 — Project A: Email Summariser",
    title: "Step 4 — Build the Make scenario",
    onScreenText: [
      "1. Gmail — Watch emails (filter: is:starred)",
      "2. HTTP — Make a request (POST to Gemini)",
      "3. Set Variable — extract summary from response",
      "4. Telegram Bot — Send a Message",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Step 4
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">Build the Make scenario</h2>
        <ol className="mt-10 flex flex-col gap-4 text-base sm:text-lg">
          <li className="flex gap-4 rounded-lg border border-border bg-card p-4">
            <span className="font-mono text-muted-foreground">1</span>
            <div>
              <p className="font-semibold">Gmail — Watch emails</p>
              <p className="text-sm text-muted-foreground">
                filter: <Code>is:starred</Code>
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-lg border border-border bg-card p-4">
            <span className="font-mono text-muted-foreground">2</span>
            <div>
              <p className="font-semibold">HTTP — Make a request</p>
              <p className="text-sm text-muted-foreground">POST to Gemini</p>
            </div>
          </li>
          <li className="flex gap-4 rounded-lg border border-border bg-card p-4">
            <span className="font-mono text-muted-foreground">3</span>
            <div>
              <p className="font-semibold">Set Variable</p>
              <p className="text-sm text-muted-foreground">
                extract <Code>summary</Code> from response
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-lg border border-border bg-card p-4">
            <span className="font-mono text-muted-foreground">4</span>
            <div>
              <p className="font-semibold">Telegram Bot — Send a Message</p>
            </div>
          </li>
        </ol>
      </div>
    ),
    notes: `Back in Make, click "Create a new scenario." You'll see an empty canvas with a giant + button. Click it.

Module 1 — Gmail "Watch emails": Search "Gmail" in the module list. Pick "Watch emails." It will ask you to connect your Gmail account — do the OAuth flow. Once connected, set the filter to "Starred" and "All folders." For the first run, set "Limit" to 1 — we just want to test on one email.

Module 2 — HTTP "Make a request": This is the one that calls Gemini. Add an HTTP module after Gmail. Set:
— URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=YOUR_GEMINI_KEY (paste your actual key in)
— Method: POST
— Headers: add one — Content-Type: application/json
— Body type: Raw
— Request content: this JSON (I'll show it on the next slide)

Module 3 — Set Variable: This grabs the summary text out of Gemini's response. We'll set it up together.

Module 4 — Telegram "Send a Message": Connect using your bot token, set the chat ID to the number you copied, and put the variable from module 3 as the message text.

Click "Run once" at the bottom-left. Star an email in your Gmail right now. Watch the modules light up green one by one. Check your phone. The summary should arrive within 30 seconds.`,
  },
  {
    number: 18,
    segment: "Segment 3 — Project A: Email Summariser",
    title: "The Gemini request body",
    onScreenText: ["A JSON body that prompts Gemini for a 2-line summary plus a deadline line."],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">The Gemini request body</h2>
        <pre className="mt-8 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs sm:p-6 sm:text-sm">
          {`{
  "contents": [{
    "parts": [{
      "text": "Summarise this email in 2 lines. Then on a new line write 'Deadline:' and any deadline you find, or 'No deadline' if there isn't one. Email body: {{1.text_plain}}"
    }]
  }]
}`}
        </pre>
      </div>
    ),
    notes: `This is the body that goes into the HTTP module. The {{1.text_plain}} part is Make's syntax for "the email body from module 1" — when you click into the body field in Make, you can pick that variable from a dropdown and Make will insert the right reference for you.

Notice what the prompt is doing. It's specific: two lines for the summary, one line for the deadline, with a fallback if there's no deadline. Vague prompts get vague output. This is the Level-1 thinking that makes Level-2 and Level-3 systems actually work.

Once you save this, run the scenario, and your phone should buzz.`,
  },
  {
    number: 19,
    segment: "Segment 3 — Project A: Email Summariser",
    title: "What you just built",
    onScreenText: [
      "You just built a Level-3 workflow",
      "Swap Gmail for WhatsApp → customer support bot",
      "Swap Gmail for Google Sheets → lead enrichment pipeline",
      "Swap Telegram for Slack → team notification bot",
      "The pattern is the product.",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">What you just built</h2>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">A Level-3 workflow.</p>
        <ul className="mt-10 flex flex-col gap-4 text-base sm:text-lg">
          <Bullet>
            Swap Gmail for WhatsApp → <span className="font-medium">customer support bot</span>
          </Bullet>
          <Bullet>
            Swap Gmail for Google Sheets →{" "}
            <span className="font-medium">lead enrichment pipeline</span>
          </Bullet>
          <Bullet>
            Swap Telegram for Slack → <span className="font-medium">team notification bot</span>
          </Bullet>
        </ul>
        <p className="mt-12 text-xl font-semibold sm:text-2xl">The pattern is the product.</p>
      </div>
    ),
    notes: `Take a breath. Look at your phone. That summary that arrived — your phone, your bot, your AI, your workflow. You built it.

Now I want you to look past the specific bot. What you actually learned is the pattern: trigger → AI step → action. Every workflow automation in the world is a variation on this. Swap the Gmail trigger for a WhatsApp message and you've got a customer support bot. Swap it for a new row in a Google Sheet and you've got a lead enrichment pipeline. Swap Telegram at the end for Slack and you've got a team notification bot.

The pattern is the product. The bot is just one expression of it.

This is also, very directly, the kind of work I do for clients at devsforfun. The deliverable might look different — better-looking, more steps, a database in the middle — but the skeleton is the same as what's running in your Make account right now. Hold onto that thought when we talk about careers later.

Quick break — 90 seconds. Stand up, stretch, then we go straight into Project B.`,
  },
  {
    number: 20,
    segment: "Segment 4 — Project B: Resume Scanner",
    title: "Project B: Resume scanner & candidate ranker",
    onScreenText: [
      "Project B: Resume scanner & candidate ranker",
      "The Stafflo D1 mini — built in 25 minutes",
      "A real US startup sells exactly this.",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Project B
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">
          Resume scanner &amp; candidate ranker
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
          The Stafflo D1 mini — built in 25 minutes.
        </p>
        <p className="mt-10 text-base text-muted-foreground sm:text-lg">
          A real US startup sells exactly this.
        </p>
      </div>
    ),
    notes: `Project B is more ambitious in what it does and simpler in how it's built. It's a resume scanner. You upload a job description and a stack of resumes, and the AI ranks the candidates with strengths, gaps, and a suggested interview question for each one.

Here's the framing I want you to hold: there's a startup called Stafflo, US-based, that builds AI workflows for IT staffing recruiters. Their flagship product is a resume scanner and candidate ranker. We're going to build a working version of that in the next 25 minutes. Not a polished version, not a database-backed version, but the actual core capability. By the end you'll have something you could clean up over a weekend and pitch to small recruiting firms in your city.`,
  },
  {
    number: 21,
    segment: "Segment 4 — Project B: Resume Scanner",
    title: "The architecture",
    onScreenText: [
      "Folder of resume PDFs + Job description → Gemini 2.5 Flash → JSON ranking output",
      "No backend. No database. No UI. Just AI Studio.",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">The architecture</h2>
        <div className="mt-12 flex flex-wrap items-center gap-4 text-base sm:text-xl">
          <Pill>Resumes + JD</Pill>
          <FlowArrow />
          <Pill>Gemini 2.5 Flash</Pill>
          <FlowArrow />
          <Pill>JSON ranking</Pill>
        </div>
        <p className="mt-12 text-lg text-muted-foreground sm:text-xl">
          No backend. No database. No UI. Just AI Studio.
        </p>
      </div>
    ),
    notes: `Architecturally this is much simpler than Project A. Just a folder of PDFs, a JD, and Gemini doing the work in the AI Studio playground. We don't need a workflow tool because there's no scheduling, no triggers — we're running this manually for now.

Good news: you already have the Gemini API key from Project A, so the setup time is almost zero.`,
  },
  {
    number: 22,
    segment: "Segment 4 — Project B: Resume Scanner",
    title: "Step 1 — Open AI Studio and start a new chat",
    onScreenText: [
      "URL: aistudio.google.com",
      "1. Click 'Create new chat'",
      "2. Model selector → choose Gemini 2.5 Flash",
      "3. Open the 'System instructions' panel (left sidebar)",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Step 1
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">Open AI Studio &amp; start a chat</h2>
        <p className="mt-4 font-mono text-base text-muted-foreground sm:text-lg">
          aistudio.google.com
        </p>
        <ol className="mt-10 flex flex-col gap-3 text-base sm:text-lg">
          <li>
            <span className="mr-3 font-mono text-muted-foreground">1.</span>Click &ldquo;Create new
            chat&rdquo;
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">2.</span>Model selector → choose{" "}
            <strong>Gemini 2.5 Flash</strong>
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">3.</span>Open the
            &ldquo;System instructions&rdquo; panel (left sidebar)
          </li>
        </ol>
      </div>
    ),
    notes: `Go to aistudio.google.com. You should already be signed in from Project A. Click "Create new chat." In the model dropdown on the right, pick Gemini 2.5 Flash — fast, free, and absolutely good enough for this. Don't pick Pro; the Pro models came off the free tier on April 1st this year and we don't need them anyway.

On the left sidebar, you'll see a "System instructions" field. That's where we put our prompt. The system prompt is what shapes the behaviour for every message in this chat — it's the difference between "here's a generic chatbot" and "here's a specialised tool."`,
  },
  {
    number: 23,
    segment: "Segment 4 — Project B: Resume Scanner",
    title: "Step 2 — The system prompt",
    onScreenText: ["A system prompt that gives Gemini a recruiter role and a strict JSON schema."],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Step 2
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">The system prompt</h2>
        <pre className="mt-8 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs sm:p-6 sm:text-sm">
          {`You are a senior technical recruiter for an IT staffing agency.
For every resume I attach, score the candidate 1–10 against this job description:

[PASTE JOB DESCRIPTION HERE]

Output strictly as JSON with no other text:
{
  "score": <number 1-10>,
  "strengths": [<3 short bullet points>],
  "gaps": [<3 short bullet points>],
  "interview_question": "<one specific question that probes their biggest gap>"
}`}
        </pre>
      </div>
    ),
    notes: `Paste this into the system instructions field. Then in place of [PASTE JOB DESCRIPTION HERE], paste in a real job description — I'll share a sample one in the workshop folder, or use any role from LinkedIn or Naukri.

Notice three things about this prompt:

First, it gives the model a role. "You are a senior technical recruiter" anchors it; without that, the output drifts toward generic resume feedback.

Second, it specifies the output format strictly as JSON. This is what makes it usable in a script later — JSON is parseable, free-form text isn't.

Third, the interview question demand pushes the model from "describing the candidate" to "actively probing their weakness." That's the kind of structured thinking that makes the output actually useful, not just impressive-looking.

This is the Level-1 thinking I mentioned at the start. Writing prompts like this is programming, just in English.`,
  },
  {
    number: 24,
    segment: "Segment 4 — Project B: Resume Scanner",
    title: "Step 3 — Upload resumes",
    onScreenText: [
      "1. Click the attachment icon in the chat input",
      "2. Pick a resume PDF from the workshop folder",
      "3. Type 'Score this candidate' and send",
      "4. Watch the JSON come back",
      "5. Repeat with 4 more resumes",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Step 3
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">Upload resumes</h2>
        <ol className="mt-10 flex flex-col gap-3 text-base sm:text-lg">
          <li>
            <span className="mr-3 font-mono text-muted-foreground">1.</span>Click the attachment
            icon in the chat input
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">2.</span>Pick a resume PDF from
            the workshop folder
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">3.</span>Type &ldquo;Score this
            candidate&rdquo; and send
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">4.</span>Watch the JSON come
            back
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">5.</span>Repeat with 4 more
            resumes
          </li>
        </ol>
      </div>
    ),
    notes: `I've shared a Google Drive folder with five sample resumes — the link is on the screen and in the workshop chat group. Download them or upload them directly from Drive.

In the AI Studio chat, click the attachment icon, pick a resume, and just type "Score this candidate." Hit send. Within 5–10 seconds you should get back a JSON block with the score, strengths, gaps, and interview question.

Do this for all five resumes. Note the scores. We're going to compare them in a moment.`,
  },
  {
    number: 25,
    segment: "Segment 4 — Project B: Resume Scanner",
    title: "Step 4 — The flip test",
    onScreenText: [
      "Now change the JD.",
      "Original: 'Senior backend engineer, 5+ years'",
      "New: 'Junior frontend intern, fresher okay'",
      "Watch the rankings flip.",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Step 4
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">The flip test</h2>
        <p className="mt-6 text-lg sm:text-xl">Now change the JD.</p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Original
            </p>
            <p className="mt-2 text-base sm:text-lg">Senior backend engineer, 5+ years</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              New
            </p>
            <p className="mt-2 text-base sm:text-lg">Junior frontend intern, fresher okay</p>
          </div>
        </div>
        <p className="mt-10 text-xl font-semibold sm:text-2xl">Watch the rankings flip.</p>
      </div>
    ),
    notes: `Here's the part that I want to land for you. Go back to your system prompt and replace the job description with a completely different one. Where it said "senior backend engineer with 5+ years experience," put "junior frontend intern, fresher candidates welcome." Save the system prompt.

Now upload the same five resumes again. Notice what happens. The candidate who scored a 9 against the senior backend role probably scores a 4 or 5 against the frontend intern role. The candidate who was a 3 before might be an 8 now.

This is the demonstration that what's happening here is not keyword matching. The model is reading both the JD and the resume and reasoning about fit. Change one input, the entire ranking changes coherently. That's why it's useful. That's why a startup can build a business on it.`,
  },
  {
    number: 26,
    segment: "Segment 4 — Project B: Resume Scanner",
    title: "Step 5 — The bridge to production",
    onScreenText: [
      "Click 'Get code' in AI Studio",
      "Pick Python",
      "Copy the snippet",
      "Loop it over a folder of 100 PDFs → CSV",
      "Playground → Script → SaaS. One small step at a time.",
    ],
    onScreen: (
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Step 5
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">The bridge to production</h2>
        <ol className="mt-10 flex flex-col gap-3 text-base sm:text-lg">
          <li>
            <span className="mr-3 font-mono text-muted-foreground">1.</span>Click &ldquo;Get
            code&rdquo; in AI Studio
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">2.</span>Pick Python
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">3.</span>Copy the snippet
          </li>
          <li>
            <span className="mr-3 font-mono text-muted-foreground">4.</span>Loop it over a folder of
            100 PDFs → CSV
          </li>
        </ol>
        <p className="mt-12 text-xl font-semibold sm:text-2xl">
          Playground → Script → SaaS.
        </p>
        <p className="text-base text-muted-foreground sm:text-lg">One small step at a time.</p>
      </div>
    ),
    notes: `Last thing for Project B. In AI Studio, find the "Get code" button — usually top right of the chat. Click it. Pick Python. Copy the snippet you see.

That snippet is the working code for what you just built. With about 20 more lines around it — a for loop over a folder of PDFs, a CSV writer at the end — you have a script that can score 100 resumes in two minutes and dump the rankings into a spreadsheet a recruiter can sort.

I'm not going to make you write that wrapper script in this session, but I want you to see how short the bridge is. You're one Cursor session away from a usable script. From a usable script, you're a weekend away from a basic web UI on Bolt.new or Lovable. From a web UI, you're a few weeks away from something you could charge ₹2,000/month for to a small recruiting firm.

The path from "playground demo" to "real product" is not as long as it looks.`,
  },
  {
    number: 27,
    segment: "Segment 5 — Real vs Hype + Careers",
    title: "What you actually learned",
    onScreenText: [
      "The four levels — you can place any AI product on this map now",
      "The trigger → AI → action pattern (Project A)",
      "Prompt-as-program: structured roles, formats, and constraints (Project B)",
      "That the bridge from playground to product is shorter than it looks",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">What you actually learned</h2>
        <ul className="mt-10 flex flex-col gap-4 text-base sm:text-lg">
          <Bullet>
            The four levels — you can place any AI product on this map now
          </Bullet>
          <Bullet>The trigger → AI → action pattern (Project A)</Bullet>
          <Bullet>
            Prompt-as-program: structured roles, formats, and constraints (Project B)
          </Bullet>
          <Bullet>
            The bridge from playground to product is shorter than it looks
          </Bullet>
        </ul>
      </div>
    ),
    notes: `Pause here for a second and look back at the last hour. You came in knowing ChatGPT. You're walking out with a working email automation, a working candidate ranker, and a mental model that lets you place any AI product on a map.

That mental model is the most valuable thing you'll take from today. The bots are useful, but the framework is what changes how you read the rest of the AI industry — every startup pitch, every job description, every Twitter post about "agents."`,
  },
  {
    number: 28,
    segment: "Segment 5 — Real vs Hype + Careers",
    title: "The wrapper test",
    onScreenText: [
      "Could I rebuild this in a weekend with Make.com, an API key, and a Notion page?",
      "If yes — it's a wrapper.",
      "Wrappers aren't bad. They're just not moats.",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">The wrapper test</h2>
        <blockquote className="mt-12 max-w-3xl border-l-4 border-foreground pl-6 text-2xl font-medium sm:text-3xl">
          &ldquo;Could I rebuild this in a weekend with Make.com, an API key, and a Notion
          page?&rdquo;
        </blockquote>
        <p className="mt-8 text-xl sm:text-2xl">
          If yes —{" "}
          <span className="rounded-md bg-muted px-2 py-1 font-medium">it&apos;s a wrapper</span>
          .
        </p>
        <p className="mt-8 text-base text-muted-foreground sm:text-lg">
          Wrappers aren&apos;t bad. They&apos;re just not moats.
        </p>
      </div>
    ),
    notes: `Here's the test I want you to apply to every "AI-powered" product you encounter from now on: could you rebuild it in a weekend with Make.com, an API key, and a Notion page?

If the answer is yes, it's a wrapper. Project A is technically a wrapper. Half the AI startups you see on Product Hunt are wrappers. Wrappers aren't bad — they can be useful, even profitable — but they're not defensible businesses on their own. Anyone with a weekend and a credit card can clone them.

The defensibility comes from somewhere else: deep workflow integration that took years to build, distribution to a niche audience, proprietary data, regulatory expertise, brand. When you evaluate any "AI startup" — including ones you might want to work at, or ones you might want to start — ask where the moat is. If the moat is just "we used GPT-5," there is no moat.`,
  },
  {
    number: 29,
    segment: "Segment 5 — Real vs Hype + Careers",
    title: "What these tools can't do (yet)",
    onScreenText: [
      "Hallucination — better, not solved",
      "Long context isn't free attention",
      "API costs scale fast (₹50k/day is real)",
      "Demo ≠ production (99% reliable ≠ ready to ship)",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">
          What these tools can&apos;t do (yet)
        </h2>
        <ul className="mt-10 flex flex-col gap-4 text-base sm:text-lg">
          <Bullet>
            <span className="font-medium">Hallucination</span> — better, not solved
          </Bullet>
          <Bullet>
            <span className="font-medium">Long context</span> isn&apos;t free attention
          </Bullet>
          <Bullet>
            <span className="font-medium">API costs</span> scale fast (₹50k/day is real)
          </Bullet>
          <Bullet>
            <span className="font-medium">Demo ≠ production</span> (99% reliable ≠ ready to ship)
          </Bullet>
        </ul>
      </div>
    ),
    notes: `Be honest about limits. These tools are powerful, but they're not magic. Four things to know before you over-trust them:

Hallucination is reduced, not solved. Gemini and GPT-5 will still confidently invent function names, dates, citations, even legal references. Anything you take from an AI — verify before you use it in production.

Long context isn't free attention. Yes, Gemini supports a million tokens of input. No, the model doesn't reason equally well across all of it. The "lost in the middle" problem is real — models are better at the start and end of long inputs than the middle.

Costs spiral fast. A viral launch can quietly burn ₹50,000 a day in API bills. Every founder I know who built an AI feature has had at least one panicked moment about runaway spend. Estimate token usage before you ship.

Demo and production are different planets. It's easy to make something work once. It's brutally hard to make it work 1,000 times a day with 99.5% reliability. Every honest agency owner has been burned by this gap. Plan for it.`,
  },
  {
    number: 30,
    segment: "Segment 5 — Real vs Hype + Careers",
    title: "Career paths — four lanes",
    onScreenText: [
      "Agency builder (devsforfun, freelance) — varies, sales is the bottleneck",
      "AI engineer at startup — ₹15–40 LPA, expects real depth",
      "Automation engineer at agency — ₹4–10 LPA junior, accessible",
      "RPA developer at TCS/Infosys/Wipro — ₹3.5–6 LPA, highest volume, UiPath cert is the cheat code",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">Career paths — four lanes</h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Lane 1
            </p>
            <p className="mt-2 text-lg font-semibold">Agency builder</p>
            <p className="mt-1 text-sm text-muted-foreground">
              ₹varies · sales is the bottleneck
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Lane 2
            </p>
            <p className="mt-2 text-lg font-semibold">AI engineer at startup</p>
            <p className="mt-1 text-sm text-muted-foreground">
              ₹15–40 LPA · expects real depth
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Lane 3
            </p>
            <p className="mt-2 text-lg font-semibold">Automation engineer at agency</p>
            <p className="mt-1 text-sm text-muted-foreground">
              ₹4–10 LPA junior · accessible
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Lane 4
            </p>
            <p className="mt-2 text-lg font-semibold">RPA at TCS / Infosys / Wipro</p>
            <p className="mt-1 text-sm text-muted-foreground">
              ₹3.5–6 LPA · UiPath cert = cheat code
            </p>
          </div>
        </div>
      </div>
    ),
    notes: `Four lanes. None of them is "better" — they suit different people.

Lane 1: Agency builder. This is what I do. You find local small businesses with a manual workflow they hate, charge them ₹30k–₹2L for an automation, then work on retainer. Tools: exactly what we used today. The thing nobody talks about: the bottleneck isn't tech, it's sales. If you can't talk to clients, this lane is hard.

Lane 2: AI engineer at startups. Better paid, more competitive. Expects real engineering depth — RAG with proper evaluation, vector databases, orchestration frameworks. Build one hard project (a RAG system with your own evaluations) before applying. Don't apply on the strength of having built workflow bots.

Lane 3: Automation engineer at AI agencies. Most accessible path for self-taught builders. Junior salaries ₹4–10 LPA. They'll hire you off a strong GitHub and three or four real workflows you've shipped. College tag matters less than portfolio.

Lane 4: RPA developer at Indian IT services. Lowest-glamour, highest-volume. ₹3.5–6 LPA fresher salaries at TCS, Infosys, Wipro, Cognizant. The cheat code: UiPath certification. It's free, it's online, you can finish it in two weekends. Recruiters at these companies actively look for it.

There's no shame in any of these. Pick the one that fits how you want to work.`,
  },
  {
    number: 31,
    segment: "Segment 5 — Real vs Hype + Careers",
    title: "Claim these tonight",
    onScreenText: [
      "GitHub Student Pack — education.github.com/pack",
      "Cursor for Students — cursor.com/students",
      "UiPath Academy — academy.uipath.com",
      "Gemini API key — you already have one",
      "n8n Community Edition — self-host on your laptop with Docker",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">Claim these tonight</h2>
        <ul className="mt-10 flex flex-col gap-3 text-base sm:text-lg">
          <li>
            <span className="font-semibold">GitHub Student Pack</span>
            <span className="text-muted-foreground"> · education.github.com/pack</span>
          </li>
          <li>
            <span className="font-semibold">Cursor for Students</span>
            <span className="text-muted-foreground"> · cursor.com/students (1 yr Pro free)</span>
          </li>
          <li>
            <span className="font-semibold">UiPath Academy</span>
            <span className="text-muted-foreground"> · academy.uipath.com (free RPA cert)</span>
          </li>
          <li>
            <span className="font-semibold">Gemini API key</span>
            <span className="text-muted-foreground"> · you already have one</span>
          </li>
          <li>
            <span className="font-semibold">n8n Community Edition</span>
            <span className="text-muted-foreground"> · self-host with Docker</span>
          </li>
        </ul>
      </div>
    ),
    notes: `Five things to claim tonight, all free, all genuinely valuable. Write these down or take a photo of this slide.

GitHub Student Pack — apply with your college email, takes a few days to verify. It bundles a lot more than just Copilot.

Cursor for Students — one full year of Cursor Pro free. This is the single best free deal in AI coding right now. Worth ₹20,000 across the year.

UiPath Academy — free certification track. Two weekends. Goes on your resume.

Gemini API key — you have it. Use it.

n8n Community Edition — open-source, self-hostable on your laptop with one Docker command. If you outgrow Make's free tier, this is what you graduate to.`,
  },
  {
    number: 32,
    segment: "Segment 5 — Real vs Hype + Careers",
    title: "What to build next",
    onScreenText: [
      "This week: a workflow that automates your repetitive task",
      "This month: a small product for a small audience (your hostel, your club, your branch)",
      "This year: ship one thing publicly that people you don't know use",
    ],
    onScreen: (
      <div>
        <h2 className="text-3xl font-bold sm:text-5xl">What to build next</h2>
        <ul className="mt-10 flex flex-col gap-5 text-base sm:text-xl">
          <Bullet>
            <span className="font-semibold">This week</span>
            <span className="text-muted-foreground">
              {" "}
              — a workflow that automates your repetitive task
            </span>
          </Bullet>
          <Bullet>
            <span className="font-semibold">This month</span>
            <span className="text-muted-foreground">
              {" "}
              — a small product for a small audience (hostel, club, branch)
            </span>
          </Bullet>
          <Bullet>
            <span className="font-semibold">This year</span>
            <span className="text-muted-foreground">
              {" "}
              — ship one thing publicly that strangers use
            </span>
          </Bullet>
        </ul>
      </div>
    ),
    notes: `I want to leave you with three time-scoped suggestions, ordered by ambition.

This week, automate one thing in your own life. Mess up to ten times. The point is to get reps on the build cycle.

This month, build a small product for a small audience — your hostel block, your club, your branch's WhatsApp group. Something used by 20 people who aren't your friends. The act of putting something in front of strangers and watching them use it (or fail to use it) teaches you more than any tutorial.

This year, ship one thing publicly. Could be a tiny SaaS, a Chrome extension, a WhatsApp bot, a script someone in another city downloads. The number of people doesn't matter. What matters is that you cross the line from "I built things in private" to "I shipped something into the world." That line is where everything you actually want lives.`,
  },
  {
    number: 33,
    segment: "Segment 6 — Q&A",
    title: "Questions + connect",
    onScreenText: [
      "QR code → workshop materials folder",
      "Instagram: @iam.charan.dev",
      "Build something this week. The gap between thinking and shipping is where everything you want lives.",
    ],
    onScreen: (
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">Questions + connect</h2>
        <div
          aria-hidden
          className="mx-auto mt-10 grid h-44 w-44 place-items-center rounded-lg border border-border bg-muted text-sm text-muted-foreground sm:h-56 sm:w-56"
        >
          QR code
        </div>
        <p className="mt-8 text-lg sm:text-xl">
          <span className="font-mono">@iam.charan.dev</span>
        </p>
        <p className="mt-12 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
          Build something this week. The gap between thinking and shipping is where everything you
          want lives.
        </p>
      </div>
    ),
    notes: `I'll take three or four questions. If nobody asks anything, I'll throw one back: what's one repetitive thing in your week you'd want to automate? Three or four answers from the room and I'll tell you which level it sits at and what stack would solve it.

Before you leave: scan that QR code. Inside is the Google Drive folder with the sample resumes, the exact prompts I used, my Make scenario as a template you can clone, and a list of project ideas you could build over the next month. It also has a link to my Instagram and to devsforfun.com if you want to follow along with what I'm building.

Last thing. The single biggest difference between people who do interesting things in tech and people who don't isn't intelligence, college, or even time. It's whether they ship. Build something this week. Even if it's small. Even if it's broken. Especially if it's broken — broken things teach you faster than working ones.

Thanks for spending the morning with me. Now go build.`,
  },
];
