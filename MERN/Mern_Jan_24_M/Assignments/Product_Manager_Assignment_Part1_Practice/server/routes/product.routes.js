const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/', ProductController.index);
    app.post('/addProduct', ProductController.createProduct);
    app.get('/showProducts', ProductController.showAllProducts);
    app.get('/showOneProduct/:id', ProductController.showOneProduct);
    app.delete('/delete/:id', ProductController.removeProduct);
    app.put('/update/:id', ProductController.updateProduct);
}