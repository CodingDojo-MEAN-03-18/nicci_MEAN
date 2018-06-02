const { authorController } = require('../../controllers');
const router = require('express').Router();

router.get('/', authorController.index);
router.get('/new', authorController.new);
router.get('/:id', authorController.show);
router.get('/:id/edit', authorController.edit);
router.post('/', authorController.create);
router.post('/:id', authorController.update);
router.post('/:id/delete', authorController.destroy);

module.exports = router;

// const authorController = require('../controllers/authors');
// const bookController = require('../controllers/books');

// module.exports = function(app) {
//     app.get('/authors', authorController.index);
//     app.get('/authors/new', authorController.new);
//     app.post('/authors', authorController.create);
//     app.get('/authors/:id', authorController.show);
//     app.get('/authors/:id/edit', authorController.edit);
//     app.post('/authors/:id/update', authorController.update);
//     app.get('/authors/:id/delete', authorController.destroy);

//     app.get('/books', bookController.index);
//     app.get('/books/new', bookController.new);
//     app.post('/books', bookController.create);
//     app.get('/books/:id/edit', bookController.edit);
//     app.post('/books/:id/update', bookController.update);
//     app.post('/book/:id/delete', bookController.destroy);
// };