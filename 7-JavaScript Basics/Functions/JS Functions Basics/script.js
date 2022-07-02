// Default way to write functions

function sayHello() {
	console.log("Say Hello");
}

sayHello();

// Function expression method to write function - Anaonymous function, can be used as arguments in other functions

var sayBye = function () {
	console.log("Bye");
};

sayBye();

// Why arguments are useful, no argument used

function sing() {
	console.log("AHHHHH");
	console.log("TEEEEEE");
}

sing();

// Using argument to dynamically change string output

function sing2(song) {
	console.log(song);
}

sing2("la dee daa");
sing2("dee da dee");
sing2("lo li laa");

// Example 2 for arguments

function multiply(a, b) {
	return a * b;
}

// Example 3 for arguments and returning value

function multiply2(a, b) {
	if (a > 10 || b > 10) {
		return "Thats too hard";
	} else {
		return a * b;
	}
}

alert(multiply(5, 19));
