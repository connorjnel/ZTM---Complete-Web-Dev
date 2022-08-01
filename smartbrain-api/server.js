const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const db = knex({
	client: "pg",
	connection: {
		host: "127.0.0.1",
		port: 5432,
		user: "postgres",
		password: "baka",
		database: "smartbrain",
	},
});

db.select("*")
	.from("users")
	.then((data) => {
		// console.log(data);
	});

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
			password: "cookies",
			entries: 0,
			joined: new Date(),
		},
	],
};

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Root
app.get("/", (req, res) => {
	res.send(database.users);
});

// Signin
app.post("/signin", (req, res) => {
	if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
		// res.json("Success");
		res.json(database.users[0]);
	} else {
		res.status(400).json("Error logging in");
	}
});

// Register
app.post("/register", (req, res) => {
	const { email, name, password } = req.body;
	db("users")
		.returning("*")
		.insert({
			email: email,
			name: name,
			joined: new Date(),
		})
		.then((user) => {
			res.json(user[0]);
		})
		.catch((err) => res.status(400).json("Unable to register"));
});

// Profile
app.get("/profile/:id", (req, res) => {
	const { id } = req.params;
	db.select("*")
		.from("users")
		.where({ id: id })
		.then((user) => {
			if (user.length > 0) {
				res.json(user[0]);
			} else {
				res.status(400).json("User not found");
			}
		})
		.catch((err) => res.status(400).json("Error getting user"));
});

// Image / Submission Count
app.put("/image", (req, res) => {
	const { id } = req.body;
	db("users")
		.where("id", "=", id)
		.increment("entries", 1)
		.returning("entries")
		.then((entries) => {
			res.json(entries[0].entries);
		})
		.catch((err) => res.status(400).json("Unable to get count"));
});

// Listener
app.listen(3000, () => {
	console.log("App is running on port 3000");
});

// Bcryipt examples

// bcrypt.hash("bacon", null, null, function (err, hash) {
// 	// Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function (err, res) {
// 	// res == true
// });
// bcrypt.compare("veggies", hash, function (err, res) {
// 	// res = false
// });

/* API Plan
/ res --> this is working
/signin --> POST success/fail (using POST for security instead of GET)
/register --> POST user 
/profile/:userId --> GET = user
/image --> PUT (update user profile) user (submission count)
*/
