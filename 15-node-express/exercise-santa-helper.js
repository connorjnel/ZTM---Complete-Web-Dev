import fs from "fs";

// My crappy solution

// fs.readFile("./santa-directions.txt", (err, data) => {
// 	console.time("challenge");
// 	const instructions = data.toString();
// 	const directionsArray = instructions.split("");
// 	let floor = 0;
// 	let count = 0;
// 	for (let i = 0; i < instructions.length; i++) {
// 		if (instructions === "(") {
// 			count = floor + 1;
// 		} else if (instructions === "(") {
// 			count = floor - 1;
// 		}
// 	}
// 	console.log(count);
// 	console.timeEnd("challenge");
// });

// Proper solution

// Question 1 - What floor does santa end up on
// ( = Up one floor
// ) = Down one floor

function question1() {
	fs.readFile("./santa-directions.txt", (err, data) => {
		console.time("challenge");
		const directions = data.toString();
		// console.log(directions); // Printed instruction correctly
		const directionsArray = directions.split("");
		const answer = directionsArray.reduce((acc, currentValue) => {
			if (currentValue === "(") {
				return (acc += 1);
			} else if (currentValue === ")") {
				return (acc -= 1);
			}
		}, 0);
		console.timeEnd("challenge");
		console.log("floor:", answer);
	});
}

// question1();

// Question 2 - When does Santa first enter the basement

function question2() {
	fs.readFile("./santa-directions.txt", (err, data) => {
		console.time("challenge");
		const directions = data.toString();
		const directionsArray = directions.split("");
		let accumulator = 0;
		let counter = 0;
		const answer = directionsArray.some((currentItem) => {
			if (currentItem === "(") {
				accumulator += 1;
			} else if (currentItem === ")") {
				accumulator -= 1;
			}
			counter++;
			return accumulator < 0;
		});
		console.timeEnd("challenge");
		console.log("Basement entered at:", counter);
	});
}

question2();

//testing
