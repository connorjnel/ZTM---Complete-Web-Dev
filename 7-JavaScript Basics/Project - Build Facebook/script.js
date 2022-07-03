var database = [
	{
		username: "connor",
		password: "password",
	},
];

var newsFeed = [
	{
		username: "Bob",
		timeline: "I am very generic aren't I?",
	},
	{
		username: "Sally",
		timeline: "My life is empty, I feel like im just a placeholder",
	},
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Intruder alert, wrong credentials entered!");
	}
}

signIn(userNamePrompt, passwordPrompt); // Remember that functions need to be called, along with arguments
