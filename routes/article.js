const express = require('express');
const router = express.Router();

const articleController = require('../controllers/article');

router.post('/', articleController.createArticle);
router.get('/:id', articleController.getOneArticle);
router.patch('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);
router.post('/:id/comment', articleController.createComment);

module.exports = router;