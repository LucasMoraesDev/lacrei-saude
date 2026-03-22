"use client";

import { createGlobalStyle } from "styled-components";
import { colors, typography } from "./tokens";

export const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-primary: ${colors.primary};
    --color-primary-dark: ${colors.primaryDark};
    --color-primary-light: ${colors.primaryLight};
    --color-primary-xlight: ${colors.primaryXLight};
    --color-secondary: ${colors.secondary};
    --color-white: ${colors.white};
    --color-gray-50: ${colors.gray50};
    --color-gray-100: ${colors.gray100};
    --color-gray-200: ${colors.gray200};
    --color-gray-400: ${colors.gray400};
    --color-gray-500: ${colors.gray500};
    --color-gray-600: ${colors.gray600};
    --color-gray-700: ${colors.gray700};
    --color-gray-800: ${colors.gray800};
    --color-gray-900: ${colors.gray900};
    --color-error: ${colors.error};
    --color-background: ${colors.background};
    --font-primary: ${typography.fontPrimary};
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${typography.fontPrimary};
    font-size: ${typography.base};
    color: ${colors.gray900};
    background-color: ${colors.background};
    line-height: ${typography.normal};
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.fontPrimary};
    font-weight: ${typography.bold};
    line-height: ${typography.tight};
    color: ${colors.gray900};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  /* Focus visible for accessibility */
  :focus-visible {
    outline: 3px solid ${colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Skip to main content for screen readers */
  .skip-link {
    position: absolute;
    top: -100%;
    left: 0;
    background: ${colors.primary};
    color: white;
    padding: 0.75rem 1.5rem;
    font-size: ${typography.base};
    font-weight: ${typography.semiBold};
    border-radius: 0 0 8px 0;
    z-index: 9999;
    transition: top 200ms;
    text-decoration: none;
    
    &:focus {
      top: 0;
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.gray100};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.gray300};
    border-radius: 4px;
    
    &:hover {
      background: ${colors.gray400};
    }
  }

  /* Selection color */
  ::selection {
    background-color: ${colors.primaryLight};
    color: ${colors.gray900};
  }

  /* Sr-only utility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
