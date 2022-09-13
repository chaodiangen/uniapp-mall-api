const express = require('express')
const router = express.Router()

// 用户相关路由
router.use(require('./user'))
// 用户资料
router.use('/profile',require('./profile'))
// 文章相关路由
router.use('/articles',require('./articles'))
// 获取标签
router.use('/tags',require('./tags'))

module.exports = router