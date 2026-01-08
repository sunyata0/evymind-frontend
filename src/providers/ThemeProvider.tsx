import { useEffect } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      // Only follow system if user hasn't overridden
      if (!("theme" in localStorage)) {
        applyTheme(getSystemTheme());
      }
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return <>{children}</>;
}

export function setTheme(theme: Theme) {
  localStorage.theme = theme;
  applyTheme(theme);
}

export function clearThemeOverride() {
  localStorage.removeItem("theme");
  applyTheme(getSystemTheme());
}
