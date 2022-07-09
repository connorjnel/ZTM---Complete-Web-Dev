// Padstart and Padend - Adds padding to strings before and after

// .padStart()
// .padEnd()

// Example
"turtle".padStart(10);
// returns "          turtle"

// Example
"turtle".padEnd(10);
// returns "turtle          "

// Trailing commas
const fun = (a, b, c, d) => {
	console.log(a);
};

fun(1, 2, 3, 4);

// Object values and entries

// Object.values
// Object.entries

let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Grinch",
};

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
});

Object.values(obj).forEach((value) => {
	console.log(value);
});

Object.entries(obj).forEach((entries) => {
	console.log(entries);
});

Object.entries(obj).map((value) => {
	return value[1] + value[0].replace("username", "");
});

// Async Await
