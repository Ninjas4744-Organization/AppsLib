module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended-type-checked"
  ],
  rules: {
    "indent": ["off", "tab",{"SwitchCase": 1}],
    "no-mixed-spaces-and-tabs": ["off"],
    "linebreak-style": ["off", "unix"],
    "quotes": ["off", "double"],
    "semi": ["error", "always"],
    "react/no-unescaped-entities": ["off"],
    "react/prop-types": ["off"],
    "brace-style": ["error", "allman"],
    "react/self-closing-comp": ["error", {"component": true,"html": true}],
    "no-console": ["warn", {"allow": ["warn", "error"]}],
    "no-var": ["error"],
    "no-empty": ["error", {"allowEmptyCatch": true}],
    "react-hooks/exhaustive-deps": ["off"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-irregular-whitespace": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-duplicate-type-constituents": "off"
  },
  ignorePatterns: ["build"]
};
