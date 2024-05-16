module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    // "plugin:jsx-a11y/recommended",
    // "plugin:import/warnings",
    // "plugin:prettier/recommended",
    // "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn", // Enable rule to check for unused variables
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off", // Disable prop-types rule (if using TypeScript for prop validation)
  },
};
