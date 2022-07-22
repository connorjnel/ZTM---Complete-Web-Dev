// import { createServer } from "http";

// const server = createServer((request, response) => {
// 	console.log("Method", request.method);
// 	console.log("Url", request.url);

// 	const user = {
// 		name: "john",
// 		hobby: "skating",
// 	};

// 	response.setHeader("Content-Type", "application/json");
// 	response.end(JSON.stringify(user));
// });

// server.listen(3000);

// app.get("/", (req, res) => {
// 	const user = {
// 		name: "steve",
// 		hobby: "blurb",
// 	};
// 	res.send(user);
// });

import express from "express";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get("/:id", (req, res) => {
// 	// console.log(req.query);
// 	// req.body
// 	// console.log(req.headers);
// 	// console.log(req.params);
// 	res.status(404).send("not found");
// });

app.use(express.static("public"));

app.listen(3000);
