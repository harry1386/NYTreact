var express = require('express');
var router = express.Router();
var articlesController = require('../../controllers/articlesController.js');

/*
 * GET
 */
router.get('/', articlesController.list);

/*
 * GET
 */
router.get('/:id', articlesController.show);

/*
 * POST
 */
router.post('/', articlesController.create);

/*
 * PUT
 */
router.put('/:id', articlesController.update);

/*
 * DELETE
 */
router.delete('/:id', articlesController.remove);

module.exports = router;