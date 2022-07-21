# Node - Basically JS that can run outside a web browser

- node = opens up node in the console
- window = does not work, node does not have window object, node is not a browser, use global instead
- document = also does not exist, not a browser
- ctrl + d = closes node
- node (script-filename) = runs the script then exits
- will run common functions, has a call stack as well, so settimeout works
- `console.log(__dirname)` = prints directory
- globalThis = allows you to simulate window in node, have a unified codebase, ex use instead of window.
- import - not supported in node yet,
- module.exports for export - same syntax as object
- import use const declaration and require(./source.js)
