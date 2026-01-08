import { useState } from "preact/hooks";
import { FiCheck } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

import StructuredAiVisual from "@/assets/images/structured-ai-visual.png";

type Tab = {
  id: string;
  tab: string;
  label: string;
  title: string;
  description: preact.ComponentChildren;
  bullets: string[];
};

const TABS: Tab[] = [
  {
    id: "structured",
    tab: "Structured AI",
    label: "Structured AI inside the Unity editor",
    title: "Structured AI inside the Unity editor",
    description: (
      <>
        Evymind is a structured{" "}
        <span class="text-text-primary font-medium">AI workflow for Unity</span> that lets you grow
        from simple prompts to refined roles and apply them as{" "}
        <span class="text-primary font-medium">safe, reviewable code changes.</span>
      </>
    ),
    bullets: [
      "Work entirely inside the Unity editor: no browser, no copy-paste",
      "Organize work as projects and nested task trees in the Task Graph window",
      "For each task, write a prompt, pick a role or chain step, select files and history depth",
      "Send requests, monitor status, and review replies and patch proposals in the Result window",
      "Apply approved patches in one click with automatic asset reimport",
    ],
  },
  {
    id: "roles",
    tab: "Roles & Prompts",
    label: "Roles, prompts and context that get better over time",
    title: "Roles, prompts and context",
    description:
      "Build reusable roles and prompts that evolve with your project and team over time.",
    bullets: [
      "Create reusable roles and prompt templates",
      "Iterate and refine prompts safely",
      "Share workflows across projects",
      "Accumulate project-specific knowledge",
    ],
  },
  {
    id: "control",
    tab: "Control",
    label: "Files, patches, and LLM under your control",
    title: "Files, patches, and LLM control",
    description: "You always stay in control of files, diffs, and the LLMs you use.",
    bullets: [
      "Review colored diffs before applying changes",
      "Select exact files and history depth",
      "Use your own API keys",
      "Extend to other LLM providers",
    ],
  },
];

const TOP_BENEFITS = [
  {
    title: "Ship features at LLM speed",
    items: ["Generate C# inside Unity", "Fix console errors quickly", "Apply patches in one click"],
  },
  {
    title: "Keep code under control",
    items: [
      "Review colored diffs first",
      "Attach exact context files",
      "Work alongside Git safely",
    ],
  },
  {
    title: "Own models and workflow",
    items: [
      "Reuse roles and prompts",
      "Chain tasks into workflows",
      "Use your own OpenAI key, extend to other LLMs",
    ],
  },
];

export const CoreBenefits = () => {
  return (
    <section id="benefits" class="relative">
      <div class="mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 class="mb-12 text-center text-3xl font-bold sm:text-4xl">Core benefits</h2>

        {/* Top cards */}
        <div class="grid gap-6 md:grid-cols-3">
          {TOP_BENEFITS.map((benefit) => (
            <div key={benefit.title} class="bg-surface/40 rounded-2xl p-6 shadow-sm backdrop-blur">
              <h3 class="text-primary mb-4 text-lg font-semibold">{benefit.title}</h3>

              <ul class="text-text-secondary space-y-2 text-sm">
                {benefit.items.map((item) => (
                  <li key={item} class="flex items-start gap-2">
                    <FiCheck class="text-primary mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Lower detailed section */}
        <CoreBenefitsTabs />

        {/* CTA */}
        <div class="mt-14 flex justify-center">
          <a
            href="#asset-store"
            class="bg-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(209,255,0,0.6),0_14px_40px_rgba(209,255,0,0.22)] transition hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(209,255,0,0.8),0_20px_55px_rgba(209,255,0,0.28)]"
          >
            Get from asset store
            <FiArrowRight class="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
};

export const CoreBenefitsTabs = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === activeTab)!;

  return (
    <div class="mt-16 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      {/* Text block */}
      <div class="border-primary/40 bg-surface/30 rounded-2xl border p-8 backdrop-blur">
        {/* Tabs */}
        {/* Tabs */}
        <div class="mb-6">
          <div class="flex items-center gap-6 text-sm font-medium whitespace-nowrap">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                class={[
                  "relative pb-1 transition-colors",
                  activeTab === t.id ? "text-primary" : "text-text-muted hover:text-text-primary",
                ].join(" ")}
              >
                {t.tab}

                {activeTab === t.id && (
                  <span class="bg-primary absolute inset-x-0 -bottom-px h-px" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <h3 class="text-primary mb-2 text-lg font-semibold">{tab.title}</h3>

        <p class="text-text-secondary mb-6 text-sm leading-relaxed">{tab.description}</p>

        <ul class="text-text-secondary space-y-3 text-sm">
          {tab.bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* Visual */}
      <div class="border-primary/40 bg-surface/40 relative overflow-hidden rounded-2xl border backdrop-blur">
        <img
          src={StructuredAiVisual}
          alt="Structured AI workflow visual"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
