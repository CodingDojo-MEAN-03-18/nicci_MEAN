const animalController = require('../controllers/animals');

module.exports = function (app) {
    app.get('/animals', animalController.index);
    app.get('/animals/new', animalController.new);
    app.post('/animals', animalController.create);
    app.get('/animals/:id', animalController.show);
    app.get('/animals/:id/edit', animalController.edit);
    app.post('/animals/:id/update', animalController.update);
    app.get('/animals/:id/delete', animalController.destroy);
};