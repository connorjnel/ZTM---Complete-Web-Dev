var todos = ["clean room", "exercise", "study js", "eat healthy"];

// for - Add string to end of array item
for (var i = 0; i < todos.length; i++) {
	todos[i] = todos[i] + "!";
}

// for - Removes items from end of array, only runs until length equals i meaning two items left
for (var i = 0; i < todos.length; i++) {
	// todos.pop();
}

// for -  Removes all items in array one by one, saved array length is var before running pop so length is not changing
var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
	// todos.pop();
}

// while - Executes while true, overwrites original var value
var counterOne = 10;
while (counterOne > 0) {
	console.log(counterOne);
	counterOne--;
}

// do -  Will execute at least once as action executes before condition is checked
var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0);

// forEach - Simplified for function

//  Standard forEach
todos.forEach(function (todo, i) {
	console.log(todo, i);
});

// Function saved and run by forEach on array
function logTodos(todo, i) {
	console.log(todo, i);
}

todos.forEach(logTodos);

// Arrow function used
todos.forEach((i) => {
	console.log(i);
});
