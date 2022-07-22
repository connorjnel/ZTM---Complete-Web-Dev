import fs from "fs";

// My crappy solution

fs.readFile("./santa-directions.txt", (err, data) => {
	console.time("challenge");
	const instructions = data.toString();
	// console.log(instructions);
	let floor = 0;
	let count = 0;
	for (let i = 0; i < instructions.length; i++) {
		if (instructions === "(") {
			count = floor + 1;
		} else if (instructions === "(") {
			count = floor - 1;
		}
	}
	console.log(count);
	console.timeEnd("challenge");
});
