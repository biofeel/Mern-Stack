// importing mongoose using the require statement at the top of the file.
const mongoose = require("mongoose");

// Create User collection using mongoose
const UserSchema = new mongoose.Schema({
	name: String,
	age: Number
});

const User = mongoose.model("User", UserSchema);

module.exports = User;