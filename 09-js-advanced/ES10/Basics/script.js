// //flat - flattens array, removes nesting from a array

// const array = [1, [2, [3]], [4, 5]];

// array.flat(2);

// const dinoArray = ["🐍", "🐘", "🦘", "🧸", "🐅", ["🐿️", ["🦑", ["🐒", ["🐉", ["🦖", ["🦕"]]]]]]];
// dinoArray.flat(Infinity - 1);

// const entries = ["bob", "sally", , , , , , , "cindy"];

// // Flatmap

// const dinoArrayChaos = dinoArray.flatMap((creature) => creature + "🦖");

// const dinoArrayChaos2 = dinoArray.flat(Infinity - 1).flatMap((creature) => creature + "🦖");

// // Trimming

// userEmail = "                         haha@test.com";
// userEmail2 = "haha@lol.com                  ";

// userEmail.trimStart();
// userEmail2.trimEnd();

// fromentries - change array into proper object

// userProfiles = [
// 	["commander tom", 23],
// 	["derkzlander", 40],
// 	["nooblet", 18],
// ];

// Object.fromEntries(userProfiles);

// Try catch block - used for testing
try {
	bob - "hi";
} catch (error) {
	console.log("you messed up " + error);
}
