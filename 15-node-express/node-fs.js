import fs from "fs";

// Async Readfile
fs.readFile("./hello.txt", (err, data) => {
	if (err) {
		console.log("ERROR!!");
	}
	console.log("Async", data.toString());
});

// Sync readfile
const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

// appendFile
// fs.appendFile("./hello.txt", "haha, text added!", (err) => {
// 	if (err) {
// 		console.log("ERROR!!");
// 	}
// });

//writeFile
fs.writeFile("./bye.txt", "This is goodbye", (err) => {
	if (err) {
		console.log(err);
	}
});

//Delete
fs.unlink("./bye.txt", (err) => {
	if (err) {
		console.log("boring error");
	}
});
