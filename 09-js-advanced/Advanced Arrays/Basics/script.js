// Advanced Arrays

const array = [1, 2, 3, 16];

const array2 = ["john", "sam", "bill"];

const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
});

// map, filter, reduce

// MAP - Execute function on each array item and creates a new array with results

const mapArray = array.map((num) => {
	return num * 2;
});

const modArray = array2.map((name) => {
	return `${name} is a douchebag`;
});

// FILTER - Filter array based on condition and returns filtered results in new array

const filterArray = array.filter((num) => {
	return num > 5;
});

const filterArray2 = array2.filter((name) => {
	return name.includes("oh");
});

// REDUCE

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 5);

const reduceArray2 = array.reduce((accumulator, num) => {
	return accumulator + num + num;
}, 5);
