import fs from "fs";

fs.readFile("./santa-directions.txt", (err, data) => {
	console.time("challenge");
	let floor = 0;
	if (data) console.timeEnd("challenge");
});

console.log("Async", data.toString());
