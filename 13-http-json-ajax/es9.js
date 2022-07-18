// Object spread operator

const animals = {
	tiger: 23,
	lion: 5,
	monkey: 2,
	donkey: 99,
};

const { tiger, ...rest } = animals;

// can call rest using ...

const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
	return a + b + c + d + e;
}

// can call rest using ...

//Async . Finally

//Example

function newFunction() {
	const urls = ["http://swapi.dev/api/people/1", "http://swapi.dev/api/people/2", "http://swapi.dev/api/people/3", "http://swapi.dev/api/people/4"];

	Promise.all(urls.map((url) => fetch(url).then((people) => people.json())))
		.then((array) => {
			console.log("1", array[0]);
			console.log("2", array[1]);
			console.log("3", array[2]);
			console.log("4", array[3]);
		})
		.catch((err) => console.log("ughhhh fix it!", err));
	try {
	} finally {
	}
	() => console.log("extra");
}

newFunction();

// for await of

const urls2 = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/posts", "https://jsonplaceholder.typicode.com/albums"];

const getData = async function () {
	try {
		const [users, posts, albums] = await Promise.all(urls2.map((url) => fetch(url).then((resp) => resp.json())));
		console.log("users", users);
		console.log("Posts", posts);
		console.log("Albums", albums);
	} catch (err) {
		console.log(err);
	}
};

// Loops through urls
const loopThroughUrls = (url) => {
	for (url of urls2) {
		console.log(url);
	}
};

// new way to do it with await

const getData2 = async function () {
	const arrayOfPromises = urls2.map((url = fetch(url)));
	for await (let request of arrayOfPromises) {
		const data = await request.json();
	}
};
