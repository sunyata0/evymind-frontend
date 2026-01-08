type StateUpdaterObject<T> = T | ((prev: T | null) => T | null);
type StateUpdaterArray<T> = T | ((prev: T) => T);
type Theme = "light" | "dark" | "system";
type Language = "en" | "fr";

// Utility type to add selectors
type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

type SetStateFn<T> = T | ((prev: T) => T);
