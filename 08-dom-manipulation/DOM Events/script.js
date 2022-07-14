var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");

// Check the input length of input field
function inputLength() {
	return input.value.length;
}

// Create and add the list item with value from input
function addListItem() {
	var listItem = document.createElement("li");
	// Take text from input and place inside newly created li
	listItem.appendChild(document.createTextNode(input.value));
	// Add new li to ul
	list.appendChild(listItem);
	// Clear input so user doesnt need to and cant just create multiple items with same value
	input.value = "";
	// Focus on input after after clearing
	input.focus();
}

// Add list item after click
function addListAfterClick() {
	if (inputLength() > 0) {
		addListItem();
	}
}

// Add list item after enter key pressed
function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.code === "Enter") {
		addListItem();
	}
}

// Listen for enter button being clicked
button.addEventListener("click", addListAfterClick);

// Listen for a enter being pressed
input.addEventListener("keypress", addListAfterKeyPress);
