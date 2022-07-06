// // let & const

// const player = "bobby";
// let experience = 100;
// let playerLevel = false;

// // if (experience > 90) {
// // 	let playerLevel = true;
// // 	console.log("inside", playerLevel);
// // }

// console.log("outside", playerLevel);

// Destructuring

// const obj = {
// 	player: "bobby",
// 	experience: 100,
// 	playerLevel: false,
// };

// const player = obj.player;
// const experience = obj.experience;
// let playerLevel = obj.wizardlevel;

// const { player, experience } = obj;

// const a = "simon";

// const b = true;

// const c = {};

// template strings

// const names = "sally";
// const age = 34;
// const pet = "flamingo";

// const greetingBest = `Hello ${names} you seem to be ${Math.floor(age / 3)} years old and are currently eating your ${pet}.`;
// console.log(greetingBest);

// Default argument

// function greet(names = "", age = 30, pet = "cat") {
// 	return `Hello ${names} you seem to be ${Math.floor(age / 3)} years old and are currently eating your ${pet}.`;
// }

// //symbol - creates unique identifiers
// let sym1 = Symbol();
// let sym2 = Symbol("foo");
// let sym3 = Symbol("foo");

// arrow functions

// Old school
function add(a, b) {
	return a + b;
}

const add = (a, b) => a + b;
