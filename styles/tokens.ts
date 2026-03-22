// Lacrei Saúde – Marsha Design System Tokens
// Referência: https://www.figma.com/community/file/lacrei-marsha-design-system

export const colors = {
  // Primary brand
  primary: "#22C55E",       // Verde Lacrei principal
  primaryDark: "#16A34A",   // Verde Lacrei hover
  primaryLight: "#BBF7D0",  // Verde claro / backgrounds
  primaryXLight: "#F0FFF4", // Verde ultra-claro

  // Secondary / accent
  secondary: "#7C3AED",     // Roxo Lacrei (diversidade)
  secondaryLight: "#EDE9FE",

  // Neutrals
  white: "#FFFFFF",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",

  // Semantic
  error: "#DC2626",
  errorLight: "#FEE2E2",
  warning: "#F59E0B",
  warningLight: "#FEF3C7",
  success: "#22C55E",
  successLight: "#DCFCE7",
  info: "#3B82F6",
  infoLight: "#DBEAFE",

  // Background
  background: "#FFFFFF",
  backgroundAlt: "#F9FAFB",
  backgroundDark: "#1A1A2E",
};

export const typography = {
  // Lacrei usa Nunito como fonte principal
  fontPrimary: "'Nunito', 'Nunito Sans', sans-serif",
  fontMono: "'JetBrains Mono', 'Courier New', monospace",

  // Weights
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,

  // Sizes (mobile-first)
  xs: "0.75rem",     // 12px
  sm: "0.875rem",    // 14px
  base: "1rem",      // 16px
  lg: "1.125rem",    // 18px
  xl: "1.25rem",     // 20px
  "2xl": "1.5rem",   // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem",  // 36px
  "5xl": "3rem",     // 48px
  "6xl": "3.75rem",  // 60px

  // Line heights
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
};

export const spacing = {
  0: "0",
  1: "0.25rem",   // 4px
  2: "0.5rem",    // 8px
  3: "0.75rem",   // 12px
  4: "1rem",      // 16px
  5: "1.25rem",   // 20px
  6: "1.5rem",    // 24px
  8: "2rem",      // 32px
  10: "2.5rem",   // 40px
  12: "3rem",     // 48px
  16: "4rem",     // 64px
  20: "5rem",     // 80px
  24: "6rem",     // 96px
  32: "8rem",     // 128px
};

export const borderRadius = {
  none: "0",
  sm: "0.25rem",
  base: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  "2xl": "2rem",
  full: "9999px",
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  green: "0 4px 14px 0 rgba(34, 197, 94, 0.3)",
  card: "0 2px 16px 0 rgba(0, 0, 0, 0.08)",
};

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const transitions = {
  fast: "150ms ease",
  base: "250ms ease",
  slow: "400ms ease",
  spring: "350ms cubic-bezier(0.34, 1.56, 0.64, 1)",
};

const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  transitions,
};

export default tokens;
