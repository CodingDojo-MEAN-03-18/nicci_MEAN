const { animalController } = require('../../controllers');
const router = require('express').Router();

router.get('/', animalController.index);
router.get('/new', animalController.new);
router.get('/:id', animalController.show);
router.get('/:id/edit', animalController.edit);
router.post('/', animalController.create);
router.post('/:id', animalController.update);
router.post('/:id/delete', animalController.destroy);

module.exports = router;