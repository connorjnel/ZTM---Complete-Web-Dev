// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
	var a = 5;
	if (a > 1) {
		a = 3;
	}
	alert(a);
}

// Answer 3 - Correct

//#2
var a = 0;
function q2() {
	a = 5;
}

function q22() {
	alert(a);
}

// Answer 5 - Correct

//#3
function q3() {
	window.a = "hello";
}

function q32() {
	alert(a);
}

// Answer "hello" - Correct

//#4
var a = 1;
function q4() {
	var a = "test";
	alert(a);
}

// Answer 1 - Incorrect, it changed to "test"

//#5
var a = 2;
if (true) {
	var a = 5;
	alert(a);
}
alert(a);

// Answer 2 - Incorrect, 5, with var keyword, if statements do not create a new scope, without var they do apprently based on q1?
