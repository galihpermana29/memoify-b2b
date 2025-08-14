import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": 1,
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-mixed-spaces-and-tabs": 1,
      "react/react-in-jsx-scope": 0,

      // cannot allow unsued variabled
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
];

export default eslintConfig;
