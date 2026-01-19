import { useEffect, useState } from "react";
import EvyMindLogo from "@/assets/logos/evymind-logo.png";

const NAV_ITEMS = [
  { label: "Core benefits", href: "#benefits" },
  { label: "Explanation", href: "#ownership" },
  // { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at very top
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <header
      class={`fixed inset-x-0 top-0 z-50 transform transition-transform duration-300 ease-out ${visible ? "translate-y-0" : "-translate-y-full"} `}
    >
      {/* Top divider */}
      <div class="bg-border-subtle absolute inset-x-0 top-0 h-px opacity-60" />

      <div class="bg-background/80 backdrop-blur">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col items-center gap-4 py-6">
            {/* Logo */}
            <a href="#top" aria-label="Evymind home" class="rounded-xl px-2 py-1 outline-none">
              <img src={EvyMindLogo} alt="Evymind" class="h-9 w-auto" />
            </a>

            {/* Navigation */}
            <nav class="flex items-center gap-4 sm:gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  class="text-text-muted hover:text-text-primary text-center text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div class="bg-border-subtle absolute inset-x-0 bottom-0 h-px opacity-60" />
    </header>
  );
};
