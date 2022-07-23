const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const database = {
	users: [
		{
			id: "123",
			name: "John",
			email: "john@gmail.com",
			password: "cookies",
			entries: 0,
			joined: new Date(),
		},
		{
			id: "124",
			name: "Sally",
			email: "saly@gmail.com",
			password: "bananas",
			entries: 0,
			joined: new Date(),
		},
	],
};

app.get("/", (req, res) => {
	res.send("This is working");
});

//Signin
app.post("/signin", (req, res) => {
	if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
		res.json("Success");
	} else {
		res.status(400).json("Error logging in");
	}
});

app.listen(3000, () => {
	console.log("App is running on port 3000");
});

/* API Plan
/ res --> this is working
/signin --> POST success/fail (using POST for security instead of GET)
/register --> POST user 
/profile/:userId --> GET = user
/image --> PUT (update user profile) user
*/
