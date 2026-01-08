import { create, type StoreApi, type UseBoundStore } from "zustand";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState = {
  theme: getInitialTheme(),
};

// Theme utils
function resolveSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") {
    localStorage.removeItem("theme");
    root.classList.toggle("dark", resolveSystemTheme() === "dark");
  } else {
    localStorage.setItem("theme", theme);
    root.classList.toggle("dark", theme === "dark");
  }
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme") as Theme | null;
  return stored === "light" || stored === "dark" ? stored : "system";
}

// Store
export const useThemeStoreBase = create<
  ThemeStore & {
    set: <K extends keyof ThemeStore>(key: K, value: SetStateFn<ThemeStore[K]>) => void;
    reset: () => void;
  }
>()((set) => ({
  ...initialState,
  // --- Theme ---
  setTheme: (theme) => {
    applyTheme(theme);
    set({ theme });
  },

  set: (key, value) =>
    set((state) => ({
      [key]: typeof value === "function" ? (value as (prev: any) => any)(state[key]) : value,
    })),

  reset: () => set(initialState),
}));

// Selectors
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }
  return store;
};

export const useThemeStore = createSelectors(useThemeStoreBase);
