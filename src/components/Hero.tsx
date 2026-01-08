import { FaDiscord } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";

import UnityIcon from "@/assets/logos/unity-logo.png";

export const Hero = () => {
  return (
    <section id="top" class="relative isolate">
      <HeroBackground />
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="pt-16 sm:pt-20">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
              Build Features at LLM Speed
            </h1>

            <p class="text-text-secondary mt-5 text-base leading-relaxed text-pretty sm:text-lg">
              Evymind turns your Unity editor into an{" "}
              <span class="text-primary font-semibold">LLM-powered workflow</span> (from quick
              prompts to multi-step chains),{" "}
              <span class="text-primary">
                with every AI change landing as a safe, reviewable patch.
              </span>
            </p>

            {/* CTAs */}
            <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#asset-store"
                class="bg-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(209,255,0,0.6),0_12px_30px_rgba(209,255,0,0.18)] transition hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(209,255,0,0.8),0_18px_45px_rgba(209,255,0,0.25)]"
              >
                <img src={UnityIcon} alt="Unity" class="h-4 w-4" />
                Get from asset store
                <FiArrowRight class="h-4 w-4" aria-hidden />
              </a>

              <a
                href="#discord"
                class="border-primary text-primary hover:bg-primary-soft inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition"
              >
                <FaDiscord class="h-4 w-4" aria-hidden />
                Join our discord
                <FiArrowRight class="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* Video */}
          <div class="mx-auto mt-10 max-w-5xl pb-20 sm:mt-12">
            <div class="border-primary/50 bg-surface-elevated/40 relative overflow-hidden rounded-2xl border shadow-[0_0_0_1px_rgba(209,255,0,0.22),0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur">
              <div class="aspect-video w-full" />

              <button
                type="button"
                aria-label="Play demo video"
                class="border-primary/70 absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-black/40 backdrop-blur transition hover:bg-black/50"
              >
                <FiPlay class="text-primary h-6 w-6 translate-x-px" />
              </button>
            </div>

            <p class="text-text-muted mt-4 text-center text-xs">
              Watch the workflow in action — prompts → changes → reviewable patch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroBackground = () => {
  return (
    <>
      <div class="pointer-events-none absolute -top-[40%] right-0 -bottom-[40%] left-0 -z-10">
        {/* Center orb */}
        <div class="bg-primary/14 absolute top-[20%] left-1/2 h-175 w-175 -translate-x-1/2 rounded-full blur-[160px]" />

        {/* Bottom-right orb — cut in half by screen edge */}
        <div class="bg-primary/10 absolute bottom-[25%] left-full h-175 w-175 -translate-x-1/2 rounded-full blur-[160px]" />
      </div>

      <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          class="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(70% 55% at 50% 28%, black 55%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(70% 55% at 50% 28%, black 55%, transparent 100%)",
          }}
        />
      </div>
    </>
  );
};
