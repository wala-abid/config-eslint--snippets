module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // Use the latest ecmascript standard
    sourceType: "module", // Allows using import/export statements
    allowImportExportEverywhere: false, // import and export declarations can only appear at a program's top level.
  },

  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },

  ignorePatterns: ["node_modules/*", ".next/*","_app.js", ".out/*", "!.prettierrc"], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:react-hooks/recommended",
  ],

  plugins: [
    "react", "prettier", "react-hooks"
  ],

  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    semi: "error",
    quotes: ["error", "double"],
    indent: ["error", 2, { SwitchCase: 1, MemberExpression: 1 }],

    "react/jsx-curly-spacing": [2, {"when": "always"}],
    "react/jsx-sort-default-props": ["error", {
      ignoreCase: true,
    }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-sort-props": ["error", {
      "callbacksLast": true,
      "shorthandFirst": true,
      "ignoreCase": true,
      "noSortAlphabetically": false,
    }],

    "import/order": ["error", { "newlines-between": "always" }],
    "import/no-duplicates": ["error", {"considerQueryString": true}],
    "no-empty-function": ["error", { "allow": ["asyncMethods"] }],
    
    "no-multiple-empty-lines": [2, {"max": 1}],
    "padding-line-between-statements": ["error",{ blankLine: "always", prev: "*", next: "return" }],
    "no-multi-spaces": ["error", { ignoreEOLComments: false,"exceptions": { "Property": false } }]
  },
};
