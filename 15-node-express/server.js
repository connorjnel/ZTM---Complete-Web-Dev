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

app.get("/", (req, res) => {
	res.send("getting root");
});

app.get("/profile", (req, res) => {
	res.send("getting profile");
});

app.post("/profile", (req, res) => {
	console.log(req.body);
	const user = {
		name: "jake",
		hobby: "bullshit",
	};
	res.send(user);
});

app.listen(3000);
