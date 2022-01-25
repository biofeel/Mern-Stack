// importing the User variable that we exported from the user.model.js file
const { Product } = require("../models/product_manager.model");

// User is a constructor function which can create new user objects and also has other methods that will talk to the database!
//  - the .then() will only execute upon successfully inserting data in the database
//  - the .catch() will execute only if there is an error.

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json({ product: oneProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createProduct = (request, response) => {
    const { productName, productPrice, productDescription } = request.body;
    Product.create({
        productName,
        productPrice,
        productDescription
    })
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};