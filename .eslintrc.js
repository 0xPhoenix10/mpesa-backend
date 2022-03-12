module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    'airbnb-typescript/base',
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  "plugins": ["@typescript-eslint"],
  parserOptions: {
    project: './tsconfig.json',
    "ecmaVersion": 2020
  },
  rules: {
    "class-methods-use-this": 'off',
    "max-classes-per-file": ["error", 2],
    // "ForOfStatement": "off",
    // "no-restricted-syntax": "off",
    "no-restricted-syntax": ["error", "ForInStatement"],
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-underscore-dangle": "off",
    'padded-blocks': 'off',
    'max-len': ["error", { "code": 180 }]
  }
};
