// Array with strings
var list = ["tiger", "cat", "bear", "moose"];

// Array with numbers
var number = [1, 2, 3, 4];

// Array with boolean
var boolean = [true, false, true];

// Mixed array with nested array = Bad performance, not recommended
var mixed = [1, "2", true, [5, "99", false]];

// Array with functions in them
var functionList = [
	function apple() {
		console.log("apple");
	},
	function orange() {
		console.log("orange");
	},
];

// Array Methods
var list = ["bear", "tiger", "monkey", "dragon"];
var list2 = ["elephant", "donkey", "cat", "dog", "dragon"];
var list3 = list.concat(list2);
console.log(list3);
