module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "prettier/vue",
    "@vue/airbnb"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: [],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": 0,
    quotes: [2, "single", { avoidEscape: true }],
  }
};
