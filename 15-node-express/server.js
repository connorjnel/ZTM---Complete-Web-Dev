import { createServer } from "http";

const server = createServer((request, response) => {
	console.log("Headers", request.headers);
	console.log("Method", request.method);
	console.log("Url", request.url);

	response.setHeader("Content-Type", "text/html");
	response.end("<h1>Hello :D</h1>");
});

server.listen(3000);
