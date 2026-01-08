import EvyMindLogo from "@/assets/logos/evymind-logo.png";

const NAV_ITEMS = [
  { label: "Core benefits", href: "#benefits" },
  { label: "Explanation", href: "#explanation" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <header class="relative z-10">
      {/* Top divider */}
      <div class="bg-border-subtle absolute inset-x-0 top-0 h-px opacity-60" />

      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center gap-4 py-6">
          {/* Logo (centered) */}
          <a
            href="#top"
            aria-label="Evymind home"
            class="rounded-xl px-2 py-1 outline-none focus:outline-none focus-visible:outline-none"
          >
            <img src={EvyMindLogo} alt="Evymind" class="h-9 w-auto" />
          </a>

          {/* Navigation (centered, subtle) */}
          <nav class="flex items-center gap-4 sm:gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                class="text-text-muted hover:text-text-primary text-sm font-medium transition-colors outline-none focus:outline-none focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
