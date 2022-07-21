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

import express from "express";

const app = express();

app.listen(3000);
