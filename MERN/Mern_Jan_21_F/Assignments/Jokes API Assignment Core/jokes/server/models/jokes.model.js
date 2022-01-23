// importing mongoose using the require statement at the top of the file.
const mongoose = require("mongoose");

// Create User collection using mongoose
const JokeSchema = new mongoose.Schema(
	{
		setup: String,
		punchline: String
	},
	{ timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;