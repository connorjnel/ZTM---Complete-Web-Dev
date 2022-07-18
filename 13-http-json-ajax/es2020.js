// Promise.allSettled

const promiseOne = new Promise((resolve, reject) => {
	setTimeout(resolve, 6000);
});

const promiseTwo = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000);
});

Promise.allSettled([promiseOne, promiseTwo])
	.then((data) => console.log(data))
	.catch((e) => console("something failed", e));
