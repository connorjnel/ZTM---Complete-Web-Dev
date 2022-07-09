// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons1 = ["Tim", "Johnathan", "Sandy", "Sarah"];

dragons1.includes("John"); // False

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ["Tim", "Johnathan", "Sandy", "Sarah"];

const newArray = dragons2.filter(dragons, "John"); // Incorrect, this would just look for john

// Correct solution

dragons.filter((name) => name.includes("John")); // ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power = (x) => x ** 100; // Correct

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

// Infinity returned, this is basically just a buffer as higher number could not be returned and stored as a number data type, numbers over 1.79e+308 or 2¹⁰²⁴ return infinity
