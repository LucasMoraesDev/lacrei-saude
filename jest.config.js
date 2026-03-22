module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^next/navigation$": "<rootDir>/__mocks__/next/navigation.ts",
    "^next/link$": "<rootDir>/__mocks__/next/link.tsx",
    "^next/font(.*)$": "<rootDir>/__mocks__/next/font.ts",
    "^next/image$": "<rootDir>/__mocks__/next/image.tsx",
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      {
        presets: [
          ["@babel/preset-env", { targets: { node: "current" } }],
          ["@babel/preset-react", { runtime: "automatic" }],
          "@babel/preset-typescript",
        ],
        plugins: [
          ["babel-plugin-styled-components", { ssr: true, displayName: true }],
        ],
      },
    ],
  },
  testMatch: ["**/__tests__/**/*.test.(ts|tsx|js)"],
  collectCoverageFrom: ["app/components/**/*.{ts,tsx}"],
};
