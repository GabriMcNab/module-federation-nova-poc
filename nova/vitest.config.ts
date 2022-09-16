import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

export default defineConfig(() => ({
  plugins: [Vue(), svgLoader()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      lines: 75,
      functions: 75,
      branches: 75,
      statements: 75,
      exclude: ["**/*.test.ts"],
      reporter: ["text", "json", "html", "cobertura", "lcov"],
    },
    exclude: ["**/node_modules/**", "**/integration/**"],
    reporters: ["default", "junit"],
    outputFile: {
      junit: "unit.xml",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
}));
