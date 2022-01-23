const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://biofeel030807:popo2prince@cluster0.akdh9.mongodb.net/test", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));