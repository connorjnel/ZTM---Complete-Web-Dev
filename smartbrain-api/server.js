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

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Root
app.get("/", (req, res) => {
	res.send("Success");
});

// Signin
app.post("/signin", (req, res) => {
	db.select("email", "hash")
		.from("login")
		.where("email", "=", req.body.email)
		.then((data) => {
			const isValid = bcrypt.compareSync(req.body.password, data[0].hash); // true
			if (isValid) {
				return db
					.select("*")
					.from("users")
					.where("email", "=", req.body.email)
					.then((user) => {
						res.json(user[0]);
					})
					.catch((err) => res.status(400).json("Cannot find user"));
			} else {
				res.status(400).json("Wrong Credentials");
			}
		})
		.catch((err) => res.status(400).json("Incorrect login info"));
});

// Register
app.post("/register", (req, res) => {
	const { email, name, password } = req.body;
	const hash = bcrypt.hashSync(password);
	db.transaction((trx) => {
		trx
			.insert({
				hash: hash,
				email: email,
			})
			.into("login")
			.returning("email")
			.then((loginEmail) => {
				return trx("users")
					.returning("*")
					.insert({
						email: loginEmail[0].email,
						name: name,
						joined: new Date(),
					})
					.then((user) => {
						res.json(user[0]);
					})
					.then(trx.commit)
					.catch(trx.rollback);
			})
			.catch((err) => res.status(400).json("Unable to register"));
	});
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

/* API Plan
/ res --> this is working
/signin --> POST success/fail (using POST for security instead of GET)
/register --> POST user 
/profile/:userId --> GET = user
/image --> PUT (update user profile) user (submission count)
*/
