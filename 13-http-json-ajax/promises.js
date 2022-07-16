const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve("Stuff Worked");
	} else {
		reject("It broke");
	}
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "Hiii");
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "Bungee");
});

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, "Hidy ho");
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
	console.log(values);
});

promise
	.then((result) => result + "!")
	.then((result2) => result2 + "?")
	.catch(() => console.log("ERROR!!"))
	.then((result3) => {
		console.log(result3 + "!");
	});

// Real world example

const urls = ["https://jsonplaceholder.typicoe.com/users", "https://jsonplaceholder.typicode.com/posts", "https://jsonplaceholder.typicode.com/albums"];

Promise.all(
	urls.map((url) => {
		return fetch(url).then((resp) => resp.json());
	})
)
	.then((results) => {
		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);
	})
	.catch(() => console.log("error"));
