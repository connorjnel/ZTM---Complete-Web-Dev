// Advanced Loops

const basket = ["bread", "eggs", "bacon"];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000,
};

// for loops - Very simple loop, set i value, i length and array, i increment or decrement, action
for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

// forEach loops - Array, name for array items, arrow function, action
basket.forEach((item) => {
	console.log(item);
});

//for of loop - Combo of for and foreach, is iterating through array, goes one by one
//Iterating - arrays, strings

//example 1 - iterating through a array
for (item of basket) {
	console.log(item);
}

//example 2 - iterating through a string
for (item of "basket") {
	console.log(item);
}

//example 3 - iiterating through object - Causes error, object not iterable
for (item of detailedBasket) {
	console.log(item);
}

// for in loop - works with objects, lets us see the object properties,
// Enumerating instead through the object, properties in object are enumerable, not iterating

// example 1 - Enumerating trough object, returns properties
for (item in detailedBasket) {
	console.log(item);
}

// example 2 - Enumerating trough array, returns array idx locations
for (item in basket) {
	console.log(item);
}
