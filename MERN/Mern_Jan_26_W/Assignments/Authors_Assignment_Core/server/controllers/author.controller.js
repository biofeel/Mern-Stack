// importing the User variable that we exported from the user.model.js file
const Author = require("../models/author.model");

// User is a constructor function which can create new user objects and also has other methods that will talk to the database!
//  - the .then() will only execute upon successfully inserting data in the database
//  - the .catch() will execute only if there is an error.

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.showAllAuthors = (request, response) => {
    Author.find()
        .then(authors => response.json(authors))
        .catch(err => response.json(err));
}

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(newAuthor => response.json(newAuthor))
        .catch(err => response.status(400).json(err));
}

module.exports.showOneAuthor = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.removeAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err));
}

module.exports.updateAuthor = (request, response) => {
    Author.updateOne({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updateAuthor => response.json(updateAuthor))
        .catch(err => response.status(400).json(err));
}