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
- prefix usage of import with new declared const name
- node v12+ supports ES6 import and export,
- Just export directly with prefixing export
- For import use desctucturing with from source.js, can then use without prefixing as you extracted what you need
- NOTE - need to also create a package.json for import/export to work, can also use .mjs format instead of js
- NOTE - for package.json add "type": "module",
- NOTE - require is the better option actually, older versions of node are kinda prevalent (creating npm packages)
- TIP - npm init to create package.json
- TIP - npm -y = says yes to the options for init

- Module Self built, using import/require and export
- Module Built in, ie fs module, allows you to read files on file system and manipulate them. http module, let you build server
- Module npm - Packages from npm,
- npm install packagename --save-dev = a dev dependancy, doesnt get used on production, handy
- nodemon - a good one, just restarts node app whenever change is made, handy
- nodemon tip - need to tell it which file to listen for in package.json
- Web server = tried to use require for http but no dice, used import descructure instead and works fine
- Load http module using require or import desctructure
- Create server with arguments request and response
- Can set a response - load page, output text etc
- For request can get details about headers, method etc
- Need to set up server.listen to listen for request, can use port or hostname or callback as argument

- request.setHeader content type can be set to "application/json", can then send objects via JSON.stringify(obj)
- instead of using http express is a better option honestly
