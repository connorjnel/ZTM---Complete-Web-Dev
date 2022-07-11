# Evolution of JS

## Inline JS

- Script tag with inline script.
- Led to slow sites
- Larger JS script meant lack of code reusability
- Pollution of namespace

## Script tags

- Load script externally
- Load JS libraries from CDN or from own custom file
- Adding more pages you have to add script tags again
- Lack of dependancy resolution - had to make sure scripts loaded in correct order
- Pollution of namespace

## IIFE - Immediately invoked function expression

- Function that runs as soon as its defined
- Scope was limited to function scope
- Reduced global namespace
- Lack of dependancy resolution - had to make sure scripts loaded in correct order

## Browserify

- Common JS based bundler
- Could add functions from other loaded js files
- Usually saved as bundle.js

## Webpack + ES6

- ES6 added import and export functions to load functions between js files
- Import uses destructuring to extract functions
- webpack - module bundler
- webpack bundles javascript files, traverses dependancy tree into a single/multiple file
- webpack - supports all browsers
