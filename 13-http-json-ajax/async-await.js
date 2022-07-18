// ASYNC AWAIT

// Promise method
movePlayer(100, "Left")
	.then(() => movePLayer(400, "Left"))
	.then(() => movePLayer(10, "Right"))
	.then(() => movePLayer(330, "Left"));

// Rewritten async
async function playerStart() {
	const firstMove = await movePlayer(100, "Left"); //Pause
	await movePLayer(400, "Left"); // Pause
	await movePLayer(10, "Right"); // Pause
	await movePLayer(330, "Left"); // Pause
}

// Plain fetch
fetch("https://jsonplaceholder.typicode.com/users")
	.then((resp) => resp.json())
	.then(console.log);

// Async fetch
async function fetchUsers() {
	await fetch("https://jsonplaceholder.typicode.com/users")
		.then((resp) => resp.json())
		.then(console.log);
}

// Clean async fetch
async function fetchUsers() {
	const resp = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await resp.json();
	console.log(data);
}

// Real world example
const urls = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/posts", "https://jsonplaceholder.typicode.com/albums"];

const getData = async function () {
	try {
		const [users, posts, albums] = await Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())));
		console.log("users", users);
		console.log("Posts", posts);
		console.log("Albums", albums);
	} catch (err) {
		console.log(err);
	}
};
