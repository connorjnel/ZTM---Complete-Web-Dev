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
newFunction();

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
