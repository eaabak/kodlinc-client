import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
  useMemo,
} from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  resolvedTheme: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const MEDIA = "(prefers-color-scheme: dark)";

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<string>(() => savedTheme || "system");
  const [resolvedTheme, setResolvedTheme] = useState(
    () => savedTheme ?? "system"
  );



  useEffect(() => {
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      const resolved = getSystemTheme(e);
      setResolvedTheme(resolved);

      if (theme === "system") {
        applyTheme(resolved);
      }
    };

    const applyTheme = (theme: string) => {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.add("light");
      }

      localStorage.setItem("theme", theme);
    };

    // Media Query Listeners
    const mediaQueryList: any = window.matchMedia(MEDIA);
    mediaQueryList.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQueryList);

    applyTheme(theme);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, [theme, resolvedTheme]);

  const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
    if (!e) e = window.matchMedia(MEDIA);
    const isDark = e.matches;
    const systemTheme = isDark ? "dark" : "light";
    return systemTheme;
  };

  const contextValue: ThemeContextType = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme: theme === "system" ? resolvedTheme : theme,
    }),
    [theme, setTheme, resolvedTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
