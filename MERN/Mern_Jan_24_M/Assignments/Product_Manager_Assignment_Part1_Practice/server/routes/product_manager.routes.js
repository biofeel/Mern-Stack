const ProductController = require('../controllers/product_manager.controller');

module.exports = function(app){
    app.get('/api', ProductController.index); // default to say hello world
    app.post('/api/product/new', ProductController.createProduct); // add new
    app.get('/api/products', ProductController.findAllProducts); // find all products
    app.get('/api/product/:id', ProductController.findOneProduct); // find one product
    app.put('/api/product/update/:id', ProductController.updateProduct); // find one product and update
    app.delete('/api/product/delete/:id', ProductController.deleteProduct); // find one product and delete
}