const Article = require('../model/Article')
const User = require('../model/user')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// 获取文章列表
exports.getList = async (req, res, next) => {
    try {
        console.log(req.body)
        const currentPage = parseInt(req.body.currentPage) || 1;
        const pageSize = parseInt(req.body.pageSize) || 10;
        const order = req.body.order || 'DESC'
        const where = {};
        // 模糊查询标题
        const title = req.body.title;
        if (title) {
            where.title = {
                [Op.like]: '%' + title + '%'
            }
        }
        const data = await Article.findAndCountAll({
            order: [['update_time', order]],
            where,
            offset: (currentPage - 1) * pageSize,
            limit: pageSize,
            include: [{
                model: User,
                as: 'user',
                // attributes: ['userName']
            }],
        })
        const result = JSON.parse(JSON.stringify(data))
        result.rows.forEach(element => {
            delete element.user.password
        });
        res.status(201).json({
            data: result.rows,
            pagination: {
                currentPage: currentPage,
                pageSize: pageSize,
                // 一共有多少条记录
                total: result.count
            }
        })
    } catch (error) {
        next(error)
    }
}
exports.getFeed = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}

exports.getArticle = async (req, res, next) => {
    try {
        const id = req.params.articleId
        const data = await Article.findOne({
            include: [{
                model: User,
                as: 'user',
                // attributes: ['userName']
            }],
            where: {
                id: id
            }
        })
        if (!data) {
            res.status(404).end()
        }
        const result = JSON.parse(JSON.stringify(data))
        delete result.user.password
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}
// 创建文章
exports.createArticle = async (req, res, next) => {
    try {
        const article = await Article.create({ ...req.body, userId: req.user.id })
        res.status(201).end()
    } catch (error) {
        next(error)
    }
}
exports.updateArticle = async (req, res, next) => {
    try {
        const bodyArticle = req.article
        const title = req.body.title || bodyArticle.title
        const description = req.body.description || bodyArticle.description
        const body = req.body.body || bodyArticle.body
        const params = {
            title, description, body
        }
        const result = await Article.update(params, {
            where: {
                id: req.params.articleId
            }
        })
        res.json(201).end()
    } catch (error) {
        next(error)
    }
}
exports.deleteArticle = async (req, res, next) => {
    try {
        await Article.destroy({
            where: {
                id: req.params.articleId
            }
        })
        res.status(204).end()
    } catch (error) {
        next(error)
    }
}

exports.addComments = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.getComments = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.deleteComments = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.setFavorite = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.setUnFavorite = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}