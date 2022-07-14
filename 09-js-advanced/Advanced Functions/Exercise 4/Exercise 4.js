//Solve these problems:

//#1 Create a one line function that adds adds two parameters

// const sums = (a,b) => a + b; - CORRECT

//Closure: What does the last line return?
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3);

// 13 - CORRECT

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

// 31 - CORRECT

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);

// 17 - CORRECT

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

// 16 - CORRECT

// Felt that I could just read the integer values in arguements and add them up, maybe exercise too simple or im a an idiot.

//What are the two elements of a pure function?

// Avoid side effects and strive for functional purity.
