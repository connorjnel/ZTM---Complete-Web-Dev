// Declare initial array
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array);

// Remove banana
array.shift();
console.log(array);

// Sort array in order
array.sort();
console.log(array);

// Add kiwi to end of array
array.push("Kiwi");
console.log(array);

//Remove apples from array
array.shift();
console.log(array);

// Reverse the array order
array.reverse();
console.log(array);

// Declare second array
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);
