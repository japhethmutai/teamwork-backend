const express = require('express');
const router = express.Router();

const gifController = require('../controllers/gif');

router.post('/', gifController.createGif);
router.get('/:id', gifController.getOneGif);
router.delete('/:id', gifController.deleteGif);
router.post('/:id/comment', gifController.createComment);

module.exports = router;