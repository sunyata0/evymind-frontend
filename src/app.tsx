import { Toaster } from "sonner";
import { Providers } from "@/providers/Providers";
import { useThemeStore } from "@/stores/theme";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { CoreBenefits } from "@/components/CoreBenefits";
// import { Videos } from "@/components/Videos";
import { Ownership } from "./components/Ownership";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function resolveTheme(theme: "light" | "dark" | "system") {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function App() {
  const theme = useThemeStore.use.theme();
  const resolvedTheme = resolveTheme(theme);

  return (
    <Providers>
      <div class="bg-bg text-text-primary relative isolate min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <CoreBenefits />
        {/* <Videos /> */}
        <Ownership />
        <Contact />
        <Footer />

        <Toaster theme={resolvedTheme} />
      </div>
    </Providers>
  );
}
