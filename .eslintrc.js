module.exports = {
  extends: "airbnb",

  env: {
    browser: true,
    node: true,
  },

  plugins: ["jest"],

  rules: {
    "no-mixed-operators": [2, { allowSamePrecedence: true }],
    "react/no-find-dom-node": 1,
    "react/no-string-refs": 1,
    "react/no-unused-prop-types": 1,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-plusplus": 1,
    quotes: "double",
    "linebreak-style": [
      "error",
      /^win/.test(process.platform) ? "windows" : "unix",
    ],
    indent: ["error", 2],
    "jsx-a11y/click-events-have-key-events": 0,
    "max-len": [1, 120, 2],
  },
}
