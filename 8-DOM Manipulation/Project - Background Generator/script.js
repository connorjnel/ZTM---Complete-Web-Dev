var mainTitle = document.querySelector("h1");
var subTitle = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".surprise");

backgroundColor();

function randomColor() {
	color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
	backgroundColor();
}

function backgroundColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	subTitle.textContent = body.style.background + ";";
}

color1.addEventListener("input", backgroundColor);

color2.addEventListener("input", backgroundColor);

randomButton.addEventListener("click", randomColor, backgroundColor);

// Look into adding a direction selector for gradient in degrees
// Random coolor solution from https://www.codegrepper.com/code-examples/javascript/generate+random+rgb+color+javascript
