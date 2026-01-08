import { Toaster } from "react-hot-toast";
import { Providers } from "@/providers/Providers";
import { useThemeStore } from "@/stores/theme";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { CoreBenefits } from "@/components/CoreBenefits";
import { Videos } from "@/components/Videos";
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
      {/* ⬇️ THIS is the fix */}
      <div class="relative isolate min-h-screen bg-bg text-text-primary overflow-x-hidden">
        <Navbar />
        <Hero />
        <CoreBenefits />
        <Videos />
        <Ownership />
        <Contact />
        <Footer />

        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: resolvedTheme === "light" ? "#f8f9fc" : "#161618",
              color: resolvedTheme === "light" ? "#0f172a" : "#f4f4f5",
              fontFamily: "Inter",
              fontSize: 12,
            },
            duration: 3000,
          }}
        />
      </div>
    </Providers>
  );
}
