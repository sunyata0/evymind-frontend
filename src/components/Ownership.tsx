import GlobeIcon from "@/assets/icons/globe-icon.png";
import CodeIcon from "@/assets/icons/code-icon.png";
import BriefcaseIcon from "@/assets/icons/briefcase-icon.png";
import DiamondIcon from "@/assets/icons/diamond-icon.png";
import MessageIcon from "@/assets/icons/message-icon.png";
import InfinityIcon from "@/assets/icons/infinity-icon.png";

const FEATURES = [
  {
    icon: GlobeIcon,
    title: "Editor-Only, Win & Mac",
    description:
      "Unity editor extension, tested on Windows and macOS. Compatible with Unity 2022 LTS and Unity 6.",
  },
  {
    icon: CodeIcon,
    title: "Full Source Code",
    description:
      "Complete C# source included. Customize, extend, or plug in your own LLM integrations as needed.",
  },
  {
    icon: BriefcaseIcon,
    title: "Unity Asset Store License",
    description:
      "Licensed per Unity seat via the Asset Store. Use in both personal and commercial Unity projects.",
  },
  {
    icon: DiamondIcon,
    title: "No Extra Evymind Subscription",
    description:
      "Pay once for the Evymind package. LLM usage is billed separately through your own API key.",
  },
  {
    icon: MessageIcon,
    title: "Discord Community Support",
    description: "Get help and share feedback on our Discord. Chat directly with the developer.",
  },
  {
    icon: InfinityIcon,
    title: "Free Updates & Improvements",
    description:
      "Future fixes and feature updates included at no extra cost. Stay aligned with Unity and LLM evolution.",
  },
];

export const Ownership = () => {
  return (
    <div class="relative">
      <CyanMeshBackground />

      <section id="ownership" class="text-text-primary relative bg-transparent">
        <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          {/* Title */}
          <h2 class="mb-12 text-center text-3xl font-bold sm:mb-16 sm:text-4xl">
            Own It Forever. <span class="text-cyan-300">Pay Once.</span>
          </h2>

          {/* Grid */}
          <div class="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon, title, description }) => (
              <div
                key={title}
                class="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                {/* Icon with neon mesh */}
                <div class="relative mb-4 flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12">
                  {/* Neon mesh */}
                  <div class="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg sm:blur-[20px]" />
                  <div class="absolute inset-0 rounded-full bg-cyan-400/10 blur-[28px] sm:blur-[36px]" />

                  {/* Icon */}
                  <img
                    src={icon}
                    alt=""
                    aria-hidden
                    class="relative z-10 mx-auto my-auto h-5 w-5 object-contain sm:h-6 sm:w-6"
                  />
                </div>

                {/* Text */}
                <h3 class="mb-2 text-sm font-semibold text-cyan-300">{title}</h3>

                <p class="text-text-muted max-w-[36ch] text-sm leading-relaxed sm:max-w-none">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const CyanMeshBackground = () => {
  return (
    <div class="pointer-events-none absolute -top-[40%] right-0 -bottom-[40%] left-0 -z-10">
      {/* Core orb */}
      <div class="absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/18 blur-[100px] sm:h-55 sm:w-55 sm:blur-[120px]" />

      {/* Soft halo */}
      <div class="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[160px] sm:h-90 sm:w-90 sm:blur-[200px]" />
    </div>
  );
};
