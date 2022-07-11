// ES2020!!

// typeof followed by value shows the value type, ex. typeof "john" = returns string

// BigInt - stands for big integer, new type in JS,
// JS has a max safe number over which it cant go, 9007199254740991, bigint fixes this by using setting a new large number integer type

// ex1 - Basically if you use n after large number
var biggy = 1n + 2n;
typeof biggy; // returns bigInt

// Optional chaining operator

let will_pokemon = {
	pikachu: {
		species: "Mouse Type",
		height: 0.4,
		weight: 6,
	},
};

// ex1 - Old method
let weight = will_pokemon.pikachu.weight;
console.log("Weight:", weight); //  returns 6

let nick_pokemon = {
	raiju: {
		species: "Mouse Type",
		height: 0.7,
		weight: 30,
		power: 0,
	},
};

// ex2 - Old method with different object - throws error unless if statements used
if (nick_pokemon.pikachu && nick_pokemon.pikachu.weight) {
	let weight2 = nick_pokemon.pikachu.weight;
	console.log(weight2);
} else {
	let weight2 = undefined;
	console.log(weight2);
}

// ex3 - Optional chaining method, checks for each object one by one, if not found returns undefined, not error
let weight3 = nick_pokemon?.raiju?.weight;

console.log(weight3); // returns undefined because pikachu not found, not a error

// Nullish coalescing operator

// ex1 - this works but or || operator checks for truthy, if string is empty will return no power even if property exists
let power = nick_pokemon?.raiju?.power || "no power";

console.log(power); // returns undefined because pikachu not found, not a error

// ex2 - We want power to show even if its a empty string, and not trigger truthy OR ||
// ?? - Checks if something is null or undefined
let power2 = nick_pokemon?.raiju?.power ?? "no power";

console.log(power2); // returns the 0, accurately checks the property value
