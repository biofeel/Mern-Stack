const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.get('/', AuthorController.index);
    app.post('/addAuthor', AuthorController.createAuthor);
    app.get('/showAuthors', AuthorController.showAllAuthors);
    app.get('/showOneAuthor/:id', AuthorController.showOneAuthor);
    app.delete('/delete/:id', AuthorController.removeAuthor);
    app.put('/update/:id', AuthorController.updateAuthor);
}