const { body, param, validationResult } = require('express-validator');
const validate = require('../middleware/validation')
const Article = require('../model/article')

exports.createArticle = validate([
    body('title').notEmpty().withMessage('文章标题不能为空'),
    body('description').notEmpty().withMessage('文章摘要不能为空'),
    body('body').notEmpty().withMessage('文章内容不能为空')
])
exports.getArticle = validate([
    param('articleId').notEmpty().custom(async (value, { req }) => {
        if (!Number(value)) {
            return Promise.reject('文章id类型错误')
        }
    })
])
exports.updateArticle = [
    validate([
        validate.isValidObjectId(['params'], 'articleId', '文章id类型错误')
    ]),
    async (req, res, next) => {
        const articleId = req.params.articleId
        const article = await Article.findOne({
            where: {
                id: articleId
            }
        })
        req.article = JSON.stringify(article)
        // 查找文章作者是不是当前用户
        if (!article) {
            return res.status(404).end()
        }
        next()
    },
    async (req, res, next) => {
        const user = JSON.parse(JSON.stringify(req.user))
        if (user.id !== JSON.parse(req.article).userId) {
            return res.status(403).end()
        }
        next()
    }
]
exports.delete = exports.updateArticle 