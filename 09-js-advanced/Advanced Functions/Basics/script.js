// Initial Function

function first() {
	var greet = "Hi";
	function second() {
		alert(greet);
	}
	return second;
}

var newFunc = first();
newFunc();

// Revised ES6 method, const and let are block scoped

const first = () => {
	const greet = "Hi";
	const second = () => {
		alert(greet);
	};
	return second;
};

var newFunc = first();
newFunc();

// Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);

// Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Avoiding side effects, functional purity
