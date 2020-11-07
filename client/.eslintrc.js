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
    "plugin:prettier/recommended",
    "@vue/airbnb"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: ["prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": 0,
    quotes: [2, "single", { avoidEscape: true }],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always"
      }
    ],
    "vue/max-attributes-per-line": [
      2,
      {
        multiline: {
          allowFirstLine: false
        }
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "never",
          normal: "never",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ]
    // "max-len": "off"
  }
};
