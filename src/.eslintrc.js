module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "react-app",
    "eslint:recommended"
  ],
  "rules": {
    "indent": ["error", 2],
    "semi": "error",
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single", { "avoidEscape": true }],
    "no-console": "off",
    "no-multiple-empty-lines": [1, { "max": 1 }]
  }
}