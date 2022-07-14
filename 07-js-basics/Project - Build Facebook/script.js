var database = [
	{
		username: "connor",
		password: "password",
	},
	{
		username: "sally",
		password: "123",
	},
	{
		username: "ingrid",
		password: "777",
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

function isUserValid(user, pass) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === user && database[i].password === pass) {
			return true;
		}
	}
	return false;
}

/* If isUserValid is true then show newsfeed, if false use alert. 
However if is executing if isUserValid true, boolean matches with the for loop wihtout having to write out expression saying only if true? 
Added condition for true and still works just fine, interesting */
function signIn(user, pass) {
	if (isUserValid(user, pass) === true) {
		console.log(newsFeed);
	} else {
		alert("Wrong credentials entered");
	}
}

signIn(userNamePrompt, passwordPrompt); // Remember that functions need to be called, along with arguments
