const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productName: { type: String },
    productPrice: { type: Number },
    productDescription: { type: String}
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);



// const mongoose = require('mongoose');

// const PersonSchema = new mongoose.Schema({
//     firstName: {type: String},
//     lastName: {type: String}
// }, {timestamps: true});

// const Person = mongoose.model('Person', PersonSchema)

// module.exports = Person