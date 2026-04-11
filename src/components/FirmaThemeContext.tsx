import { createContext, useContext } from "react";

const FirmaThemeContext = createContext<boolean>(true); // true = dark
export default FirmaThemeContext;
export const useFirmaTheme = () => useContext(FirmaThemeContext);

/** Shared color helpers for light/dark mode */
export function fc(isDark: boolean) {
  return {
    cardBg:      isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)",
    cardBgAlt:   isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    cardBgActive:isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    cardBgTiny:  isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.025)",
    cardBgMin:   isDark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.02)",
    border:      isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
    borderMid:   isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
    borderFaint: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.07)",
    inputBg:     isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    inputBorder: isDark ? "rgba(255,255,255,0.2)"  : "rgba(0,0,0,0.18)",
    divider:     isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)",
    textMuted:   isDark ? "#94A3B8" : "#475569",
    textFaint:   isDark ? "#CBD5E1" : "#334155",
  };
}
