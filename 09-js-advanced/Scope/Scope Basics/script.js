// Scope

// Global | Root Scope - Variables declared outside functions

var fun = 5;

function funny() {
	// Child scope
	var fun = "hello";
	console.log(1, fun);
}

function fun2() {
	// Child scope
	var fun = "Bye";
	console.log(2, fun);
}

function fun3() {
	// Child scope
	fun = "AHHHH";
	console.log(3, fun);
}

console.log("window", fun); // returns window 5, original value
funny(); // returns "hello"
fun2(); // returns "Bye"
fun3(); // returns "AHHHH"
console.log("window", fun); // returns window AHHHH
