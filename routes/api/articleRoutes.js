var express = require('express');
var router = express.Router();
var nytController = require('../../controllers/nytController.js');

// get
router.get('/', nytController.list);

// get to display
router.get('/:id', nytController.show);

//something new
router.post('/', nytController.create);

//not something blue
router.put('/:id', nytController.update);

//delete something old
router.delete('/:id', nytController.remove);

module.exports = router;