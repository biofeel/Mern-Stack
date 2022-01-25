const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters"]  
    },
    price: { 
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be positive"],
        max: [100, "Price must not be higher than 100"]  
    },
    description: { 
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description must be at least 5 characters"] 
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product