// Debugging - looking through code and trying to find why its not working, why errors are occuring

// example broken function

// const flattened = [[0,1]], [2,3], [4,5].reduce((a,b) => a.concat(b), []);

// debugging steps / tips

// Read through it and try to understand it
// change arguments so they make more sense
// add console logs to check function operation and troubleshoot
// debugger - chrome dev tools causes stop to operation and freeezes, opens up console and shows where it stopped, shows output before stop
// chrome dev tools sources, can use step over to check the operations and see what happens exactly

// fixed function
const flattened = [
	[0, 1],
	[2, 3],
	[4, 5],
].reduce((accumulator, array) => {
	debugger;
	return accumulator.concat(array);
}, []);
