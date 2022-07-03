// Create object, use colon to seperate key and value, comma to close pair
var user = {
	name: "John",
	age: 34,
	race: "Caucasian",
	occupation: "Bland",
	boring: true,
	spells: ["Fireball", "Slick", "Ice Bolt"],
	shout: function () {
		console.log("AHHHHHHH");
	},
};

// Calling array value using key
console.log(user.name); // using console log so it shows in vscode output

// Calling array item within value array
console.log(user.spells[0]); // using console log so it shows in vscode output

// Calling function within object - also called a method when it inside a object
console.log(user.shout()); // using console log so it shows in vscode output

// Adding key pair to object - adds in correct alphabetical location
user.favFood = "Pizza";

// Editing existing key value pair - can also change the data type
user.boring = false;
