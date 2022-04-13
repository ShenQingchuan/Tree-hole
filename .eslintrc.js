/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: __dirname,
  ignorePatterns: [
    'node_modules',
    'dist',
    '*.js',
  ],
  extends: ["taro/react"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
}
