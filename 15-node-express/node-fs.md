## Node File system module

- Basically a file system with modification functions built into node
- Instead of require use import ie import fs from "fs.js"
- FS built into node, a default module
- can read file data, needs to decode it though, otherwise it outputs in RAW basically, use toString()
- `fs.readFile("hello.txt", (err, data) => {})`
  Function to read the file, need to set err and data function
- toString outputs to utf8, pretty standard for html encoding
- `fs.readFileSync("./hello.txt");`
  Does the same as readfile, just immediate output as its synchonous execution
- `fs.readFileSync`
  is dangerous to use with larger scripts, as its pauses rest of code execution, it blocks execution
- `fs.appendFile("./hello.txt", "haha, text added", (err) => {}`
  Appends text to indicated file, will create file if it doenst exist already, will do this over and over each time function is run
- `fs.writeFile("bye.txt", "This is goodbye", (err) => {}`
  Creates a new file and writes text to it provided.
- `fs.unlink("./bye.txt", (err) => {}`
  Deletes a file, unlinks it, weird naming
- fs functions allows you to use scripting with import from data files, like excel docs, you can read data that was generated and act on it, allows input parsing and output creation
