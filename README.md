# `@testing-library/react-hooks` and `webpack`

## Steps to reproduce

1. Clone this repository
1. `yarn`
1. `yarn build`
1. `yarn server`
1. Goto local server

## Expected behavior

Logged render result for v4 and v5.

## Actual behavior

```
pure.js:58 Uncaught Error: Could not auto-detect a React renderer. Are you sure you've installed one of the following
  - react-dom
  - react-test-renderer
    at getRenderer (pure.js:58)
    at eval (pure.js:68)
    at Object../node_modules/@testing-library/react-hooks-v5/lib/pure.js (main.js:200)
    at __webpack_require__ (main.js:20)
    at eval (index.js:1)
    at Object../node_modules/@testing-library/react-hooks-v5/pure/index.js (main.js:235)
    at __webpack_require__ (main.js:20)
    at eval (index.js:4)
    at Module../index.js (main.js:97)
    at __webpack_require__ (main.js:20)
```
