const express = require('express')
const router = express.Router()
const articlesCtrl = require('../controller/articles')
const articleValidator = require('../validator/article')
const auth = require('../middleware/auth')

// List Articles  Returns most recent articles globally by default, provide tag, author or favorited query parameter to filter results
// Query Parameters:
router.post('/', articlesCtrl.getList)
// Feed Articles
// Can also take limit and offset query parameters like List Articles
// Authentication required, will return multiple articles created by followed users, ordered by most recent first.
router.get('/feed', auth, articlesCtrl.getFeed)

// Get Article No authentication required, will return single article
router.get('/:articleId', articleValidator.getArticle, articlesCtrl.getArticle)

// Create Article Authentication required, will return an Article
router.post('/', auth, articleValidator.createArticle, articlesCtrl.createArticle)

// Update Article
router.put('/:articleId', auth, articleValidator.updateArticle, articlesCtrl.updateArticle)

// Delete Article
router.delete('/:articleId', auth, articleValidator.delete, articlesCtrl.deleteArticle)

// Add Comments to an Article
router.post('/:articleId/comments', articlesCtrl.addComments)

// Get Comments from an Article
router.get('/:articleId/comments', auth, articlesCtrl.getComments)

// Delete Comment
router.delete('/:articleId/comments/:id', auth, articlesCtrl.deleteComments)

// Favorite Article
router.post('/:articleId/favorite', articlesCtrl.setFavorite)

// Unfavorite Article
router.delete('/:articleId/favorite', articlesCtrl.setUnFavorite)

module.exports = router