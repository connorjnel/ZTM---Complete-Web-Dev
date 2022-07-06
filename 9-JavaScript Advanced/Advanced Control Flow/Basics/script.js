// Ternary Operator

// condition ? expression1 : expression2;

// function isUserValid(bool) {
// 	return bool;
// }

// var answer = isUserValid(true) ? "you may enter" : "Access denied";

// var automatedAnswer = "Your account number is " + (isUserValid(false) ? "1234" : "not available");

// Switch statement

function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
			whatHappens = "you encounter a goblin";
			break;
		case "back":
			whatHappens = "you bump into a troll";
			break;
		case "left":
			whatHappens = "archers shoot at you";
			break;
		case "right":
			whatHappens = "fall into a pit";
			break;
		case "nowhere":
			whatHappens = "brief period of introspection on why idiots shouldn't become adventurers";
			break;
		default:
			whatHappens = "please enter a valid direction";
	}
	return whatHappens;
}
